export default function Location() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <section className="min-h-screen bg-[#1a1a1a] relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 flex justify-center" style={{opacity: 1}}>
                            <div className="space-y-6 w-[90%]">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white" 
                                    style={{fontFamily: 'var(--font-display)', opacity: 1, transform: 'none'}}>
                                    Why the  
                                    <span className="text-[#00ff88] ml-4">
                                    Yukon
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl" 
                                    style={{fontFamily: 'var(--font-body)', opacity: 1, transform: 'none'}}>
                                        The rising demand for more housing in Yukon provides a large market to whom we can
                                         immediately begin selling houses and construction materials to. Moreover, Yukon 
                                         is rich in natural resources, which allows us to source materials from the 
                                         province directly. Moreover, Yukon's climate will allow us to refine our homes 
                                         to be maximally efficient; we can test our homes there to maximize the insulation
                                          and energy efficiency of our homes.
                                </p>
                            </div>
                            
                        </div>
                        <div className="relative" style={{opacity: 1, transform: 'none'}}>
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="relative">
                                    <video className="h-full w-full object-cover rounded-3xl" src="/videos/Whitehorse.mp4" autoPlay loop muted playsInline>
                                    </video>
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