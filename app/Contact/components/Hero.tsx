import Nav_bar from "@/app/components/nav_bar";

export default function Hero() {
    return (
        <div className="relative h-full min-h-screen w-full bg-[#1a1a1a]">
            <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-4">
                <Nav_bar />
            </div>
        </div>
    );
}