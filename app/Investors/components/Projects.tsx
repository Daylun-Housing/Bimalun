import { FaGear } from "react-icons/fa6";
import Image from "next/image";

export default function Projects() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <section className="min-h-screen bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 lg:py-24 h-full">
                    <div className="flex flex-col gap-12 justify-center h-full">
                        <div className="space-y-8 h-full" style={{opacity: 1}}>
                            <div className="space-y-6 h-[25%]">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white" 
                                    style={{fontFamily: 'var(--font-display)', opacity: 1, transform: 'none'}}>
                                    Upcoming
                                    <span className="text-[#00ff88] ml-4">
                                    Projects
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed" 
                                    style={{fontFamily: 'var(--font-body)', opacity: 1, transform: 'none'}}>
                                    We are looking for investment to fund these future projects.
                                </p>
                            </div>
                            
                           
                            <div className="flex flex-col gap-6 w-full h-[75%] justify-center" 
                                style={{opacity: 1}}>
                                <a href="mailto:info@daylun.ca">
                                    <div className="w-full min-h-[150px] bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group flex items-center" 
                                        style={{opacity: 1, transform: 'none'}}>
                                        <div className="flex space-x-4 items-center w-[90%]">
                                            <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                                <FaGear className="size-10"/>
                                            </div>
                                            <h3 className="text-lg font-bold text-white" style={{fontFamily:'var(--font-display)'}}>
                                                Gantry Crane
                                            </h3>
                                            <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                Daylun’s lightweight Gantry Crane offers a modular, mobile lifting solution that streamlines setup and teardown 
                                                on any job site. Built from durable, corrosion-resistant materials, it’s ideal
                                                for moving heavy loads quickly and safely - indoors or out. Whether you're 
                                                working in construction, warehousing, or fabrication, our crane is designed 
                                                to reduce manual labor and improve overall site efficiency.

                                            </p>
                                        </div>
                                        <div className="relative md:h-[120px] aspect-square group-hover:scale-110 transition-transform duration-300">
                                            <Image src="/gantrycraneicon.png" alt="gantry crane" fill className="object-contain"/>
                                        </div>
                                    </div>
                                </a>
                                <a href="mailto:info@daylun.ca">
                                    <div className="w-full min-h-[150px] bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group flex items-center" 
                                        style={{opacity: 1, transform: 'none'}}>
                                        <div className="flex space-x-4 items-center w-[90%]">
                                            <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                                <FaGear className="size-10"/>
                                            </div>
                                            <h3 className="text-lg font-bold text-white" style={{fontFamily:'var(--font-display)'}}>
                                                Electric Generator
                                            </h3>
                                            <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                Daylun’s all-new 3600W Electric Generator offers silent, sustainable energy 
                                                wherever you need it. With a peak output of 7200W and a 3600Wh battery 
                                                (expandable for longer use), this generator is built for modern off-grid 
                                                living and emergency preparedness.

                                            </p>
                                        </div>
                                        <div className="relative md:h-[120px] aspect-square group-hover:scale-110 transition-transform duration-300">
                                            <Image src="/power.png" alt="gantry crane" fill className="object-contain"/>
                                        </div>
                                    </div>

                                </a>
                                {/*<div className="w-full min-h-[150px] bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group flex items-center" 
                                    style={{opacity: 1, transform: 'none'}}>
                                    <div className="flex space-x-4 items-center w-[90%]">
                                        <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                            <FaGear className="size-10"/>
                                        </div>
                                        <h3 className="text-lg font-bold text-white" style={{fontFamily:'var(--font-display)'}}>
                                            Research Tax Credits
                                        </h3>
                                        <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                            Daylun’s all-new 3600W Electric Generator offers silent, sustainable energy 
                                            wherever you need it. With a peak output of 7200W and a 3600Wh battery 
                                            (expandable for longer use), this generator is built for modern off-grid 
                                            living and emergency preparedness.

                                        </p>
                                    </div>
                                    <div className="relative md:h-[120px] aspect-square group-hover:scale-110 transition-transform duration-300">
                                        <Image src="/power.png" alt="gantry crane" fill className="object-contain"/>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff88]/5 rounded-full blur-3xl" 
                        style={{transform: 'scale(1.1125)'}}>
                    </div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00ff88]/5 rounded-full blur-3xl" 
                        style={{transform: 'scale(1.0875)'}}>
                    </div>
                </div>
            </section>
        </div>
    );
}