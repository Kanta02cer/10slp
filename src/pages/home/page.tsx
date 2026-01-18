import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
