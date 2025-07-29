import Nav_bar from "../components/nav_bar";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Workflow from "./components/Workflow";
import Partner from "./components/Partner";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a]">
            <Nav_bar/>
            <Hero />
            <Location />
            <Workflow />
            <Partner />
            <Footer />
        </div>
    );
}