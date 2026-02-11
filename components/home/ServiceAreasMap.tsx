"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './ServiceAreasMap.module.css';

export default function ServiceAreasMap() {
  useEffect(() => {
    const waitForLibs = (cb: () => void) => {
      const start = Date.now();
      const timer = setInterval(() => {
        // @ts-ignore
        const d3 = (window as any).d3;
        // @ts-ignore
        const topojson = (window as any).topojson;
        if (d3 && topojson) {
          clearInterval(timer);
          cb();
        }
        if (Date.now() - start > 10000) {
          clearInterval(timer);
          const loading = document.getElementById('loading');
          if (loading)
            loading.innerHTML = 'Failed to load map libraries. Please refresh.';
        }
      }, 200);
    };

    const run = async () => {
      // @ts-ignore
      const d3 = (window as any).d3;
      // @ts-ignore
      const topojson = (window as any).topojson;
      if (!d3 || !topojson) return;

      const container = document.getElementById('map-container');
      const svgEl = document.getElementById('map');
      if (!container || !svgEl) return;

      // reset if rerendered
      svgEl.innerHTML = '';

      const cities = [
        { name: 'Victoria, BC', lat: 48.4284, lon: -123.3656 },
        { name: 'Vancouver, BC', lat: 49.2827, lon: -123.1207 },
        { name: 'Calgary, AB', lat: 51.0447, lon: -114.0719 },
        { name: 'Edmonton, AB', lat: 53.5461, lon: -113.4938 },
        { name: 'Winnipeg, MB', lat: 49.8951, lon: -97.1384 },
        { name: 'Toronto, ON', lat: 43.6532, lon: -79.3832 },
        { name: 'Ottawa, ON', lat: 45.4215, lon: -75.6972 },
        { name: 'Montreal, QC', lat: 45.5017, lon: -73.5673 },
        { name: 'Halifax, NS', lat: 44.6488, lon: -63.5752 },
      ];

      const svg = d3.select('#map');
      const width = container.clientWidth;
      const height = container.clientHeight;

      svg.attr('viewBox', `0 0 ${width} ${height}`);

      const projection = d3
        .geoConicConformal()
        .parallels([49, 77])
        .rotate([95, 0])
        .center([0, 62])
        .fitExtent(
          [
            [20, 20],
            [width - 20, height - 20],
          ],
          { type: 'Sphere' }
        );

      const path = d3.geoPath().projection(projection);

      let worldData;
      try {
        const resp = await fetch(
          'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
        );
        worldData = await resp.json();
      } catch (e) {
        try {
          const resp = await fetch(
            'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
          );
          worldData = await resp.json();
        } catch (e2) {
          const loading = document.getElementById('loading');
          if (loading)
            loading.innerHTML =
              'Failed to load map data. Please check your internet connection.';
          return;
        }
      }

      const countries = topojson.feature(worldData, worldData.objects.countries);
      const canada = countries.features.find((f: any) => f.id === '124');

      if (!canada) {
        const loading = document.getElementById('loading');
        if (loading) loading.innerHTML = 'Could not find Canada in dataset.';
        return;
      }

      projection.fitExtent(
        [
          [40, 20],
          [width - 40, height - 30],
        ],
        canada
      );

      svg
        .append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#ffffff');

      const usa = countries.features.find((f: any) => f.id === '840');
      const greenland = countries.features.find((f: any) => f.id === '304');

      [usa, greenland]
        .filter(Boolean)
        .forEach((country: any) => {
          svg
            .append('path')
            .datum(country)
            .attr('d', path)
            .attr('fill', '#f1f5f9')
            .attr('stroke', '#e2e8f0')
            .attr('stroke-width', 0.3)
            .style('pointer-events', 'none');
        });

      svg
        .append('path')
        .datum(canada)
        .attr('class', styles.province)
        .attr('d', path as any);

      const tooltip = document.getElementById('tooltip');
      const pinGroup = svg.append('g').attr('class', 'pins');

      cities.forEach((city, i) => {
        const projected = projection([city.lon, city.lat]);
        if (!projected) return;
        const [x, y] = projected;

        const g = pinGroup
          .append('g')
          .attr('class', styles.cityPin)
          .attr('transform', `translate(${x}, ${y})`)
          .style('opacity', 0);

        g.append('circle')
          .attr('class', styles.pulse)
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 4)
          .style('animation-delay', `${i * 300}ms`);

        g.append('circle')
          .attr('class', styles.pinOuter)
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5);

        g.append('circle')
          .attr('class', styles.pinInner)
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 2);

        g.on('mouseenter', () => {
          g.select(`.${styles.pinOuter}`)
            .transition()
            .duration(150)
            .attr('r', 7);
          g.select(`.${styles.pinInner}`)
            .transition()
            .duration(150)
            .attr('r', 3);

          if (!tooltip) return;
          tooltip.querySelector('.name')!.textContent = city.name;
          tooltip.querySelector('.coords')!.textContent =
            `${Math.abs(city.lat).toFixed(2)}°${
              city.lat >= 0 ? 'N' : 'S'
            }, ${Math.abs(city.lon).toFixed(2)}°${
              city.lon >= 0 ? 'E' : 'W'
            }`;

          const tipW = 160;
          let left = x - tipW / 2;
          let top = y - 46;
          if (left < 8) left = 8;
          if (left + tipW > width - 8) left = width - tipW - 8;
          if (top < 8) top = y + 18;

          (tooltip as HTMLElement).style.left = left + 'px';
          (tooltip as HTMLElement).style.top = top + 'px';
          tooltip.classList.add(styles.tooltipVisible);
        });

        g.on('mouseleave', () => {
          g.select(`.${styles.pinOuter}`)
            .transition()
            .duration(150)
            .attr('r', 5);
          g.select(`.${styles.pinInner}`)
            .transition()
            .duration(150)
            .attr('r', 2);
          tooltip?.classList.remove(styles.tooltipVisible);
        });

        setTimeout(() => {
          g.transition()
            .duration(400)
            .ease(d3.easeBackOut.overshoot(1.5))
            .style('opacity', 1);
        }, 300 + i * 100);
      });

      document.getElementById('loading')?.classList.add(styles.loadingHide);
    };

    waitForLibs(run);
  }, []);

  return (
    <section className={styles.section}>
      <Script src="https://d3js.org/d3.v7.min.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.jsdelivr.net/npm/topojson-client@3"
        strategy="afterInteractive"
      />
      <h1 className={styles.heading}>Our Service Areas</h1>
      <div id="map-container" className={styles.mapContainer}>
        <div id="loading" className={styles.loading}>
          <div className={styles.spinner}></div>
          Loading map data...
        </div>
        <svg id="map" className={styles.map}></svg>
        <div className={styles.tooltip} id="tooltip">
          <div className="name"></div>
          <div className="coords"></div>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendDot}></div>
          Service Locations
        </div>
      </div>
      <div className={styles.credit}>
        Data: Natural Earth via world-atlas • Projection: Lambert Conformal Conic
      </div>
    </section>
  );
}
