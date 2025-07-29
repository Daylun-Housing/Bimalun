import Nav_bar from "../components/nav_bar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Yukon from "./components/Yukon";
import Highlight from "./components/Highlight";
import Institutions from "./components/Institutions";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a]">
            <Nav_bar />
            <Hero />
            <Goals />
            <Yukon />
            <Highlight />
            <Institutions />
            <Footer />
        </div>
    );
}