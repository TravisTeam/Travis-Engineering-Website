import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import LogoSlider from '@/components/LogoSlider';
import Services from '@/components/home/Services';
import ServiceAreasMap from '@/components/home/ServiceAreasMap';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <LogoSlider />
            <div style={{ position: 'relative' }}>
                <ParticleBackground />
                <Services />
                <ServiceAreasMap />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
