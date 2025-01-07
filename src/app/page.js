import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Products from "../components/Products";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Enquiry from "../components/Enquiry";
import Members from "../components/Members";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
      <Services />
      {/* <Members /> */}
      <Enquiry />
      <Footer />
    </>
  );
}
