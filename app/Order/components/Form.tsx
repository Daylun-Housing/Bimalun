"use client";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
    const [status, setStatus] = useState<string>();
    const [width, setWidth] = useState<number>(0);
    const [length, setLength] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('Loading');

        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                company: formData.get("company"),
                width: formData.get("width"),
                length: formData.get("length"),
                height: formData.get("height"),
                description: formData.get("description")
            })
        });

        if(res.ok) {
            setStatus("Message sent! Check your inbox for the order information.");
            form.reset();
        } else {
            setStatus("Failed to send.");
        }
    }

    return (
        <div className="flex">
            <div className="w-1/2 bg-[#1a1a1a] py-12 px-4 font-sans">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Submit an Order</h1>
                        <p className="text-gray-400">Tell us about your robotics needs</p>
                    </div>
                    <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm bg-[#262626] border-gray-600 p-6">
                        <form action="#" method="POST" className="space-y-6" onSubmit={handleOnSubmit}>
                            <div className="space-y-2">
                                <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium" htmlFor="name">
                                    Name *
                                </label>
                                <input data-slot="input" 
                                        className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 
                                                    flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] 
                                                    outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                                    disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring 
                                                    focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                                                    aria-invalid:border-destructive bg-[#333333] border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] 
                                                    focus:border-[#00ff88]" id="name" required placeholder="Your full name" type="text" name="name"/>
                            </div>
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                                            text-white font-medium" htmlFor="email">
                                Email *
                            </label>
                            <input data-slot="input" className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 
                                                            flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] 
                                                            outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                                            disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring 
                                                            focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                                                            aria-invalid:border-destructive bg-[#333333] border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] 
                                                            focus:border-[#00ff88]" id="email" required placeholder="your.email@company.com" type="email" name="email"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                                            text-white font-medium" htmlFor="company">
                                Company
                            </label>
                            <input data-slot="input" className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 
                                                            flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] 
                                                            outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                                            disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring 
                                                            focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                                                            aria-invalid:border-destructive bg-[#333333] border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] 
                                                            focus:border-[#00ff88]" id="company" placeholder="Your company name (optional)" type="text" name="company"/>
                        </div>
                        {/*<div className="space-y-2">
                            <label htmlFor="product" className="text-sm text-white font-medium">
                                Product *
                            </label>
                            <br />
                            <select
                            id="product"
                            name="product"
                            required
                            className="border rounded p-2 text-sm bg-[#333333] text-white border-gray-600 focus:border-[#00ff88] focus:ring-[#00ff88] focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring transition-[color,box-shadow]"
                            >
                                <option value="">Select a product</option>
                                <option value="amr-robot">AMR Robot</option>
                                <option value="robotic-arm">Robotic Arm</option>
                                <option value="custom-solution">Custom Solution</option>
                            </select>
                        </div>*/}
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium" htmlFor="width">
                                Width *
                            </label>
                            <input data-slot="input" onChange={(e) => setWidth(Number(e.target.value))} className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 
                                                                rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 
                                                                file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed 
                                                                disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                                                                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#333333] 
                                                                border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] focus:border-[#00ff88]" id="width" min="1" 
                                                                required placeholder="1" type="number" name="width"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium" htmlFor="length">
                                Length *
                            </label>
                            <input data-slot="input" onChange={(e) => setLength(Number(e.target.value))} className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 
                                                                rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 
                                                                file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed 
                                                                disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                                                                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#333333] 
                                                                border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] focus:border-[#00ff88]" id="length" min="1" 
                                                                required placeholder="1" type="number" name="length"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium" htmlFor="height">
                                Height *
                            </label>
                            <input data-slot="input" onChange={(e) => setHeight(Number(e.target.value))} className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 
                                                                rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 
                                                                file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed 
                                                                disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                                                                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#333333] 
                                                                border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] focus:border-[#00ff88]" id="height" min="1" 
                                                                required placeholder="1" type="number" name="height"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium" htmlFor="description">
                                Order Description
                            </label>
                            <textarea data-slot="textarea" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                                                                    aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base 
                                                                    shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm 
                                                                    bg-[#333333] border-gray-600 text-white placeholder:text-gray-400 focus:ring-[#00ff88] focus:border-[#00ff88] resize-none" id="description" 
                                                                    name="description" rows={4} placeholder="Please describe your requirements, timeline, and any specific features needed...">
                            </textarea>
                        </div>
                        <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 
                                                            [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring 
                                                            focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 
                                                            shadow-xs h-9 px-4 has-[&gt;svg]:px-3 w-full bg-[#00ff88] text-[#1a1a1a] font-semibold hover:bg-[#00cc6a] transition-colors py-3" type="submit">
                            Submit Order Request
                        </button>
                        {status && <p className="text-white">{status}</p>}
                    </form>
                </div>
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-sm">We'll review your request and contact you within 72 hours</p>
                </div>
            </div>
        </div>
        
        <div className="w-1/2 bg-[#1a1a1a] py-12 px-4 font-sans flex flex-col items-center">
            <div className="w-1/2 h-3/5">
                <div className="relative scale-75 w-full h-full">
                    <Image
                    src="/House.gif"
                    alt="House Coming Together"
                    fill
                    className="object-contain"
                    />
                </div>

            </div>
            <div className="w-1/2 h-2/5 flex justify-center">
                <ul className="text-center gap-y-4 flex flex-col text-md dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font-medium">
                    <li>Width: {width} ft</li>
                    <li>Length: {length} ft</li>
                    <li>Height: {height} ft</li>
                    <li>Square Footage: {width * length * (height / 8)} ft</li>
                    <li>Cost: ${width * length * (height / 8) * 60}</li>
                </ul>
                
            </div>
        </div>
    </div>
    );
}