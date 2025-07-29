import Nav_bar from "../components/nav_bar";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a]">
            <Nav_bar />
            <Hero />
            <Socials />
            <Footer />
        </div>
    );
}