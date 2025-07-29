import Image from "next/image";
import Nav_bar from "./components/nav_bar";
import Hero from "./components/hero";
import About from "./components/about";
import Inside from "./components/inside";
import Partner from "./components/partner";
import Innovation from "./components/Innovation";
import How from "./components/howwedoit";
import Lab from "./components/lab";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Nav_bar/>
      <Hero />
      <About />
      <Inside />
      <Partner />
      <Innovation />
      <How />
      <Lab />
      <Ready />
      <Footer />
    </div>
  );
}
