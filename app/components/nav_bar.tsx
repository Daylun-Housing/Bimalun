export default function Nav_bar() {
    
    return (
        <header className="flex items-center justify-between sticky top-0 z-50 bg-[#1a1a1a] w-full pt-10 p-8 border-b border-[#00ff88]" style={{opacity: 1, transform: 'none', }}>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00cc6e] shadow-lg">
                        <div className="grid grid-cols-2 gap-0.5">
                            <div className="h-2 w-2 rounded-sm bg-[#1a1a1a] opacity-80">
                            </div>
                            <div className="h-2 w-2 rounded-sm bg-[#1a1a1a] opacity-60">
                            </div>
                            <div className="h-2 w-2 rounded-sm bg-[#1a1a1a] opacity-90">
                            </div>
                            <div className="h-2 w-2 rounded-sm bg-[#1a1a1a] opacity-70">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-[var(--font-display)] text-lg font-bold text-white">Bimalun</span>
                    <span className="font-[var(--font-body)] text-xs text-[#00ff88]">Factory</span>
                </div>
            </div>
            <div className="hidden items-center gap-8 rounded-full border border-[#333333] bg-[#262626] px-8 py-4 lg:flex min-w-[600px] justify-center">
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/">
                    Home
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/Order">
                    Order
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="https://daylun.myshopify.com/">
                    Store
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/Lab">
                    Labratory
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/D2M">
                    D2M
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/Factory">
                    Factory
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/Investors">
                    Investors
                </a>
                <a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88] hover:scale-105" href="/Contact">
                    Contact
                </a>
            </div>
            {/*<a className="font-[var(--font-body)] text-sm font-medium text-[#6b7280] transition duration-200 hover:text-[#00ff88]" href="#">
                Login
            </a>*/}
        </header>

    );
}