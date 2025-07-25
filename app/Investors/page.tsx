import Hero from "./components/Hero";
import PdfPreview from "./components/Pitch_Preview";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a]">
            <Hero />
            <PdfPreview />
            <Footer />
        </div>
    );
}