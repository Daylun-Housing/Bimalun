
export default function Partner() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <section className="w-full py-20 bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" style={{opacity: 1, transform: 'none'}}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" 
                            style={{fontFamily:'var(--font-display)'}}>
                            Our Partners
                        </h2>
                            
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto" 
                                style={{fontFamily:'var(--font-body)'}}>
                                    Trusted by industry leaders who share our vision for the future of pre-engineered housing
                            </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div style={{opacity: 1, transform: 'none'}}>
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 
                                                            shadow-sm bg-[#262626] border-[#333333] hover:border-[#00ff88] 
                                                            transition-all duration-300 group">
                                <div data-slot="card-content" className="p-8 text-center">
                                    <div className="relative mb-6" style={{transform: 'none'}}>
                                        <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg 
                                            overflow-hidden mb-4">
                                            <img src="/Bathurst_Development.png" alt="Bathurst Development logo" className="max-w-full max-h-full object-contain"/>
                                        </div>
                                        <div className="absolute inset-0 bg-[#00ff88] opacity-0 
                                                        group-hover:opacity-10 transition-opacity duration-300 rounded-lg" 
                                            style={{opacity: 0}}>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-display)'}}>
                                        Bathurst Development
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-body)'}}>
                                            Leading sustainable development projects
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{opacity: 1, transform: 'none'}}>
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 
                                                            shadow-sm bg-[#262626] border-[#333333] hover:border-[#00ff88] 
                                                            transition-all duration-300 group">
                                <div data-slot="card-content" className="p-8 text-center">
                                    <div className="relative mb-6" style={{transform: 'none'}}>
                                        <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg 
                                                        overflow-hidden mb-4">
                                            <img src="/NGEN.jpg" alt="Next Generation Manufacturing Canada logo" className="max-w-full max-h-full object-contain"/>
                                        </div>
                                        <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" 
                                            style={{opacity: 0}}>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-display)'}}>
                                        Next Generation Manufacturing Canada
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-body)'}}>
                                        Advancing Canadian manufacturing innovation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{opacity: 1, transform: 'none'}}>
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
                                                            bg-[#262626] border-[#333333] hover:border-[#00ff88] transition-all duration-300 
                                                            group">
                                <div data-slot="card-content" className="p-8 text-center">
                                    <div className="relative mb-6" style={{transform: 'none'}}>
                                        <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg overflow-hidden mb-4">
                                            <img src="MaRS.png" alt="MaRS Discovery District logo" className="max-w-full max-h-full object-contain"/>
                                        </div>
                                        <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-10 transition-opacity duration-300 
                                                    rounded-lg" 
                                            style={{opacity: 0}}>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-display)'}}>
                                        MaRS Discovery District
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" 
                                        style={{fontFamily:'var(--font-body)'}}>
                                            Driving technology commercialization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="text-center mt-12" style={{opacity: 1, transform: 'none'}}>
                    <div className="inline-block px-6 py-2 border border-[#00ff88] rounded-full">
                        <span className="text-[#00ff88] font-medium" style={{fontFamily:'var(--font-body)'}}>
                            Building the future together
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}