import { GiConcreteBag } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { PiSplitHorizontal } from "react-icons/pi";

export default function Goals() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <div className="bg-[#1a1a1a] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl font-[var(--font-display)]">Features of the Bimalun Labratory</h2>
                        <p className="mt-6 text-lg/8 text-gray-300 font-[var(--font-body)]">
                            Equipped with cutting-edge AI-driven machinery, robotics, and specialized material testing equipment, the lab will ensure that every 
                            product we produce meets the highest standards of performance and sustainability. By utilising a variety of methods, our facility is 
                            designed to rigorously evaluate and refine the materials and methods that power our homes.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                    <div className="mb-6 flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <GiConcreteBag className="text-black size-15"/>
                                    </div>
                                    MPA Testing
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">MPA testing evaluates the pressure that concrete and its alternatives can handle before cracking</p>
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
                                    <div className="mb-6 flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <MdEnergySavingsLeaf className="text-black size-15"/>
                                    </div>
                                    Passive Envelope Testing
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">Intensive testing to examine the insulation and air tightness of our technology</p>
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
                                    <div className="mb-6 flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                        <PiSplitHorizontal  className="text-black size-15"/>
                                    </div>Shear Testing
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 font-[var(--font-body)]">
                                    <p className="flex-auto">By subjecting our products to opposing forces, we can test their shear strength.</p>
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