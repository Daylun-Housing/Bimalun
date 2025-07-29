
export default function Ready() {
    return (
        <div style={{opacity: 1}}>
            <div className="relative isolate overflow-hidden bg-[#1a1a1a]">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl font-[var(--font-display)]">
                            Ready to Innovate Together?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[#6b7280] font-[var(--font-body)]">
                            Daylun is currently interested in partnering with forward-thinking construction industry 
                            experts and financial investors to work together in developing the Yukon Factory as well 
                            as in future projects. We are looking to collaborate to revolutionize the construction 
                            industry by ensuring that projects are both sustainable and affordable.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="mailto:info@daylun.ca" className="rounded-md bg-[#00ff88] px-3.5 py-2.5 text-sm font-semibold text-[#1a1a1a] 
                                                    hover:bg-[#00ff88]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff88]">
                                Connected With Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute inset-0 opacity-5" 
                        style={{
                        backgroundImage:'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize : '40px 40px',}}>
                    </div>
                    <div className="absolute top-20 left-20 w-16 h-16 border border-white/10 rotate-45">
                    </div>
                    <div className="absolute top-32 right-32 w-12 h-12 border border-white/10">
                    </div>
                    <div className="absolute bottom-32 left-32 w-20 h-20 border border-white/10 rotate-12">
                    </div>
                    <div className="absolute bottom-20 right-20 w-14 h-14 border border-white/10 rotate-45">
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88]/20 rounded-full">
                    </div>
                    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#00ff88]/20 rounded-full">
                    </div>
                    <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-[#00ff88]/20 rounded-full">
                    </div>
                </div>
            </div>
        </div>
    );
}