import Hero from './components/Hero';
import Requirements from './components/Requirements';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Requirements />
      <CTA />
      <Footer />
    </div>
  );
}
