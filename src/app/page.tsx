import Benefits from "@/components/home/Benefits";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout";
import HowItWorks from "@/components/home/HowItWorks";
import ExcelForms from "@/components/home/ExcelForms";
import UsersSay from "@/components/home/UsersSay";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <Header type="home"/>
      <div className="min-w-screen bg-transparent mt-16">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <UsersSay />
        <ExcelForms />
        <Footer />
      </div>
    </>
  );
}
