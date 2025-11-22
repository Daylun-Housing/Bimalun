'use client';

import { useEffect } from 'react';

interface PitchDeckModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PitchDeckModal({ isOpen, onClose }: PitchDeckModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="relative w-full h-full max-w-6xl max-h-[90vh] m-4 flex flex-col bg-[#1a1a1a] rounded-3xl border border-[#00ff88]/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#00ff88]/20">
                    <div className="flex items-center gap-1 rounded-md font-bold border border-[#00ff88] bg-[#00ff88]/10 px-4 py-2 text-center text-lg md:text-xl text-[#00ff88] backdrop-blur-sm">
                        <span>Pitch Deck</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-white hover:bg-[#333333] transition-colors"
                        aria-label="Close modal"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                {/* PDF Viewer */}
                <div className="flex-1 p-4 overflow-hidden">
                    <iframe 
                        src="/DaylunConstruction%26Materials.pdf"
                        className="w-full h-full border-none rounded-lg"
                        title="Pitch Deck"
                    />
                </div>
            </div>
        </div>
    );
}

