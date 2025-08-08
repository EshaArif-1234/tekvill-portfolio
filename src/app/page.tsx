import Image from "next/image";
import HeroSection from '../components/HeroSection';
import ServicesTree from '../components/ServicesTree'; // Assuming the component is located in this file

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesTree />
      {/* Additional sections can be added here in the future */}
    </div>
  );
}
