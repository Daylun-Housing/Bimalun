
export default function PdfPreview() {
    return (
        <div className="w-full flex flex-col items-center">
            <div style={{opacity: 1, transform: 'none'}}>
                <div className="flex items-center gap-1 rounded-md font-bold border border-[#00ff88] bg-[#00ff88]/10 px-8 py-4 text-center text-xl md:text-3xl lg:text-5xl text-[#00ff88] backdrop-blur-sm">
                    <span>Pitch Deck</span>
                </div>
            </div>
            <div className="w-2/3 h-screen p-4">
                <iframe src="/pdf/Daylun_Micro_factory_Pitch_Deck.pdf"
                        className="w-full h-full border rounded-lg shadow" style={{border:'none', height:'80%'}}/>
            </div>

        </div>
    );
}