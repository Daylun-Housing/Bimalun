
export default function How() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <div className="bg-[#1a1a1a] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-base/7 font-semibold text-[#00ff88] font-[var(--font-display)]">
                            How it Works
                        </h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl 
                                        font-[var(--font-display)]">
                            Our streamlined process transforms raw materials into precision-engineered housing solutions
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-400 
                                    sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 
                                                bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">1</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-pen-tool absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 
                                                1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z">
                                        </path>
                                        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 
                                                1 0 0 0 .776.746L13 18">
                                        </path>
                                        <path d="m2.3 2.3 7.286 7.286"></path>
                                        <circle cx="11" cy="11" r="2"></circle>
                                </svg>
                                <p className="px-2">Design &amp; Planning</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)]">
                                Custom architectural plans optimized for pre-engineered construction
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">2</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-package absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 
                                            8v8a2 2 0 0 0 1 1.73z">
                                    </path>
                                    <path d="M12 22V12">
                                    </path>
                                    <polyline points="3.29 7 12 12 20.71 7">
                                    </polyline>
                                    <path d="m7.5 4.27 9 5.15">
                                    </path>
                                </svg>
                                <p className="px-2">Material Processing</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)]">
                                Sustainable materials prepared with precision cutting and shaping
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">3</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-cog absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 22v-2"></path>
                                    <path d="m17 20.66-1-1.73"></path>
                                    <path d="M11 10.27 7 3.34"></path>
                                    <path d="m20.66 17-1.73-1"></path>
                                    <path d="m3.34 7 1.73 1"></path>
                                    <path d="M14 12h8"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="m20.66 7-1.73 1"></path>
                                    <path d="m3.34 17 1.73-1"></path>
                                    <path d="m17 3.34-1 1.73"></path>
                                    <path d="m11 13.73-4 6.93"></path>
                                </svg>
                                <p className="px-2">Component Assembly</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)]">
                                Automated systems build each component to exact specifications
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">4</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-circle-check-big absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                <p className="px-2">Quality Control</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)]">
                                Rigorous testing ensures every element meets our high standards
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">5</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-truck absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                <p className="px-2">Packaging &amp; Transport</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)]">
                                Efficient logistics system delivers components to construction sites
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="inline font-semibold text-white font-[var(--font-display)]">
                                <div className="absolute top-1 left-1 flex items-center justify-center w-10 h-10 bg-[#00ff88] rounded-full">
                                    <span className="text-[#1a1a1a] font-bold text-sm">6</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                    className="lucide lucide-house absolute top-1 left-12 size-5 text-[#00ff88]" aria-hidden="true">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <p className="px-2">Final Assembly</p>
                            </dt> 
                            <dd className="inline text-white font-[var(--font-body)] ">
                                On-site installation completes your pre-engineered housing solution
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}