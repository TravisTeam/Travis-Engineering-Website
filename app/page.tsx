import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import LogoSlider from '@/components/LogoSlider';
import Services from '@/components/home/Services';
import ServiceAreasMap from '@/components/home/ServiceAreasMap';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <LogoSlider />
            <Services />
            <ServiceAreasMap />
            <Contact />
            <Footer />
        </main>
    );
}
