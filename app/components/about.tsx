

export default function About() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <div className="bg-[#1a1a1a] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl font-[var(--font-display)]">About the Bimalun Factory</h2>
                        <p className="mt-6 text-lg/8 text-gray-300 font-[var(--font-body)]">We're revolutionizing the construction industry through advanced pre-engineered manufacturing, sustainable practices, and innovative design. Our state-of-the-art facility produces high-quality prefabricated housing components that assemble into beautiful, efficient homes.</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings size-6 text-[#1a1a1a]" aria-hidden="true">
                                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 
                                            2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                                            </path>
                                            <circle cx="12" cy="12" r="3">
                                            </circle>
                                        </svg>
                                    </div>
                                    Advanced Manufacturing
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">Precision-engineered components built with cutting-edge automation and quality control systems</p>
                                    {/*<p className="mt-6">
                                        <a href="#" className="text-sm/6 font-semibold text-[#00ff88] hover:text-[#00ff88]/80 font-[var(--font-display)]">
                                        Learn more 
                                        <span aria-hidden="true">→</span>
                                        </a>
                                    </p>*/}
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf size-6 text-[#1a1a1a]" aria-hidden="true">
                                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                                        </svg>
                                    </div>
                                    Sustainable Innovation
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">Every process designed for minimal environmental impact and maximum resource efficiency</p>
                                    {/*<p className="mt-6">
                                        <a href="#" className="text-sm/6 font-semibold text-[#00ff88] hover:text-[#00ff88]/80 font-[var(--font-display)]">
                                            Learn more 
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </p>*/}
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes size-6 text-[#1a1a1a]" aria-hidden="true">
                                            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z">
                                            </path>
                                            <path d="m7 16.5-4.74-2.85">
                                            </path>
                                            <path d="m7 16.5 5-3">
                                            </path>
                                            <path d="M7 16.5v5.17">
                                            </path>
                                            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z">
                                            </path>
                                            <path d="m17 16.5-5-3">
                                            </path>
                                            <path d="m17 16.5 4.74-2.85">
                                            </path>
                                            <path d="M17 16.5v5.17">
                                            </path>
                                            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z">
                                            </path>
                                            <path d="M12 8 7.26 5.15">
                                            </path>
                                            <path d="m12 8 4.74-2.85">
                                            </path>
                                            <path d="M12 13.5V8">
                                            </path>
                                        </svg>
                                    </div>Pre-Engineered Excellence
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">Flexible, scalable designs that adapt to any vision while maintaining structural integrity</p>
                                    {/*<p className="mt-6">
                                        <a href="#" className="text-sm/6 font-semibold text-[#00ff88] hover:text-[#00ff88]/80 font-[var(--font-display)]">
                                            Learn more 
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </p>*/}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}