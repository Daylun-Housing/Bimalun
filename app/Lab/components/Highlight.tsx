import { GiAbstract089 } from "react-icons/gi";
import { WiSmoke } from "react-icons/wi";
import { PiPlantFill } from "react-icons/pi";
import { GiSwissArmyKnife } from "react-icons/gi";

export default function Highlight() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <section className="min-h-screen bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8" style={{opacity: 1}}>
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#00ff88]" 
                                    style={{fontFamily: 'var(--font-display)', opacity: 1, transform: 'none'}}>
                                    Vegetable  
                                    <span className="text-white ml-4">
                                    Glue
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-bold" 
                                    style={{fontFamily: 'var(--font-body)', opacity: 1, transform: 'none'}}>
                                    Innovation Highlight
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl" 
                                    style={{fontFamily: 'var(--font-body)', opacity: 1, transform: 'none'}}>
                                        A focal point of our R&D is our vegetable-based adhesive—a groundbreaking 
                                        innovation already recognized for its strength, sustainability, and versatility. 
                                        Our lab will continue to advance this product, developing new formulations that 
                                        expand its capabilities, including unique “melty” applications for improved 
                                        bonding and energy efficiency.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" 
                                style={{opacity: 1}}>
                                <div className="bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group" 
                                    style={{opacity: 1, transform: 'none'}}>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                            <WiSmoke className="size-8"/>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2" style={{fontFamily:'var(--font-display)'}}>
                                                20% Less Carbon Emissions
                                            </h3>
                                            <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                When used as alternative to concrete or asphalt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] 
                                            transition-all duration-300 group" style={{opacity: 1, transform: 'none'}}>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                            <GiAbstract089 className="size-8"/>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2" style={{fontFamily:'var(--font-display)'}}>
                                                Powerful Adhesive
                                            </h3>
                                            <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                As strong as conventional glues
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group" 
                                    style={{opacity: 1, transform: 'none'}}>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                            <PiPlantFill  className="size-8"/>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2" style={{fontFamily:'var(--font-display)'}}>
                                                100% Organic
                                            </h3>
                                            <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                Vegetable Glue is made from vegetables
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#262626] rounded-lg p-6 border border-[#333333] hover:border-[#00ff88] transition-all duration-300 group" 
                                    style={{opacity: 1, transform: 'none'}}>
                                        <div className="flex items-start space-x-4">
                                            <div className="text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                                                <GiSwissArmyKnife className="size-8"/>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2" style={{fontFamily:'var(--font-display)'}}>
                                                    Highly Versatile
                                                </h3>
                                                <p className="text-gray-400 text-sm" style={{fontFamily:'var(--font-body)'}}>
                                                    Applications in foundation and driveways
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative" style={{opacity: 1, transform: 'none'}}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div className="relative">
                                        <img src="/VegetableGlue.png" alt="Materials Innovation Laboratory" className="w-full h-[500px] md:h-[600px] object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
                                        <div className="absolute inset-0 rounded-2xl border-2 border-[#00ff88]/20"></div>
                                    </div>
                                    {/*<div className="absolute bottom-6 left-6 right-6 bg-[#262626]/90 backdrop-blur-sm rounded-lg p-4 border border-[#333333]" 
                                        style={{opacity: 1, transform: 'none'}}>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="text-center">
                                                <div className="text-[#00ff88] font-bold text-lg">50+</div>
                                                <div className="text-gray-400">Active Projects</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[#00ff88] font-bold text-lg">15</div>
                                                <div className="text-gray-400">Patents Filed</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[#00ff88] font-bold text-lg">24/7</div>
                                                <div className="text-gray-400">Research Hours</div>
                                            </div>
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