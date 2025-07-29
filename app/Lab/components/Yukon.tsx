
export default function Yukon() {
    return (
        <div style={{opacity: 1}}>
            <section className="relative min-h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video 
                        src="/videos/Yukon_Environment.mp4" 
                        className="h-full w-full object-cover" autoPlay loop muted playsInline>
                    </video>
                </div>

                {/* Shade Effect */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                </div>
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                <div className="relative z-40 flex min-h-screen items-center justify-center px-6 py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        
                        <h1 className="font-[var(--font-display)] mb-8 text-5xl font-bold text-white md:text-7xl lg:text-8xl" 
                            style={{opacity: 1, transform: 'none'}}>
                            Located in the
                            <span className="bg-gradient-to-r from-[#00ff88] to-[#00ff88]/80 bg-clip-text text-transparent">
                            Yukon
                            </span>
                        </h1>
                        <p className="font-[var(--font-body)] mb-12 text-xl text-[#cad0db] md:text-2xl leading-relaxed 
                            max-w-3xl mx-auto" style={{opacity: 1, transform: 'none'}}>
                            Set against the dramatic backdrop of Whitehorse, our laboratory is more than a research center
                            —it’s a beacon for innovation in cold-climate housing. By pushing the boundaries of building 
                            science, we are ensuring that Daylun homes are 
                            <span className="font-bold ml-2 text-[#00ff88]">faster</span>, 
                            <span className="font-bold ml-2 text-[#00ff88]">smarter</span>, and 
                            <span className="font-bold ml-2 text-[#00ff88]">more sustainable</span> than ever 
                            before.
                        </p>
                        
                        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2" style={{opacity: 1}}>
                            <div className="relative">
                                <div className="h-2 w-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                                <div className="absolute top-0 left-0 h-2 w-2 bg-[#00ff88] rounded-full animate-ping"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
    );
}