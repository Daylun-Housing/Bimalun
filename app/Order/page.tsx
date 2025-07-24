import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "../components/Footer";

export default function Page() {
    return (

        <div className="min-h-screen bg-[#1a1a1a] ">
            <Hero />
            <Form />
            <Footer />
        </div>
    );
}