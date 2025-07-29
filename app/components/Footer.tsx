
export default function Footer() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <div className="border-t border-neutral-800 px-8 py-20 bg-[#1a1a1a] w-full relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-sm text-neutral-400 justify-between items-start md:px-8">
                    <div className="flex flex-col items-center justify-center w-full relative">
                        <div className="mr-0 md:mr-4 md:flex mb-4">
                            <a className="font-normal flex space-x-3 items-center text-sm mr-4 text-white px-2 py-1 relative z-20" 
                                href="/">
                                <div className="relative">
                                    <div className="w-8 h-8 relative">
                                        <div className="absolute inset-0 bg-[#00ff88] rounded-md transform rotate-45">
                                        </div>
                                        <div className="absolute inset-1 bg-[#1a1a1a] rounded-sm transform rotate-45">
                                        </div>
                                        <div className="absolute top-1 left-1 w-2 h-2 bg-[#00ff88] rounded-sm">
                                        </div>
                                    </div>
                                </div>
                                <span className="font-[var(--font-display)] font-bold text-white text-lg">Bimalun</span>
                            </a>
                        </div>
                        <p className="text-neutral-300 text-center mb-6 font-[var(--font-body)]">Transforming the Future of Pre-Engineered Housing</p>
                        <ul className="transition-colors flex sm:flex-row flex-col text-neutral-400 list-none gap-6 mb-8">
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="/">Home</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="/Order">Order</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="https://daylun.myshopify.com/">Store</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="#">Labratory</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="/D2M">D2M</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="#">Factory</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="/Investors">Investors</a>
                            </li>
                            <li className="list-none">
                                <a className="transition-colors hover:text-[#00ff88] font-[var(--font-body)]" href="/Contact">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col items-center gap-2 mb-8">
                            <a className="text-[#00ff88] hover:text-[#00ff88]/80 transition-colors font-[var(--font-body)]" 
                                href="mailto:info@daylun.ca">info@daylun.ca
                            </a>
                            <p className="text-neutral-400 font-[var(--font-body)]">Building Tomorrow, Today</p>
                        </div>
                        <div
                    style={{
                        '--background': '#1a1a1a',
                        '--color': 'rgba(255, 255, 255, 0.1)',
                        '--height': '1px',
                        '--width': '5px',
                        '--fade-stop': '90%',
                        '--offset': '200px',
                        '--color-dark': 'rgba(53, 29, 29, 0.1)',
                        maskComposite: 'exclude',
                    } as React.CSSProperties as any}
                    className="
                        w-[calc(100%+var(--offset))] 
                        h-[var(--height)] 
                        bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] 
                        [background-size:var(--width)_var(--height)] 
                        [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] 
                        [mask-composite:exclude] 
                        z-30 max-w-7xl mx-auto mt-8
                    "
                    >
                    </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center mt-8 items-center w-full">
                        <p className="text-neutral-500 mb-8 sm:mb-0 font-[var(--font-body)]">© 2024 Bimalun. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}