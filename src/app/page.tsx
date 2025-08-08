import Image from "next/image";
import HeroSection from '../components/HeroSection';
import ServicesCarousel from '../components/ServicesTree';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesCarousel />
      <About />
      <Testimonials />
      <ContactUs />
      {/* Additional sections can be added here in the future */}
    </div>
  );
}
