import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a]">
            <Hero />
            <Socials />
            <Footer />
        </div>
    );
}