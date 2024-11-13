import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Feature />
        <Faq />
        <Pricing/>
        <Cta/>
        <Footer/>
      </div>
    </>
  );
}
