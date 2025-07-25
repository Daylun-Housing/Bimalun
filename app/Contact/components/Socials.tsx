

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaShopify,
  FaEnvelope,
} from "react-icons/fa6";

export default function Socials() {
    return (
        <div style={{opacity: 1, transform: 'none'}}>
            <div className="bg-[#1a1a1a] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl font-[var(--font-display)] text-center">Socials</h2>
                    </div>
                    <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24">
                        <dl className="grid w-full grid-cols-3 gap-x-4 gap-y-4 lg:grid-cols-3 place-items-center">
                            <div className="flex flex-col">
                                <a href="https://www.instagram.com/daylun_build/">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaInstagram className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            Instagram
                                        </div>
                                    </dt>
                                </a>
                            </div>
                           
                            <div className="flex flex-col">
                                <a href="https://www.facebook.com/profile.php?id=100077522941552">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaFacebookF className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            Facebook
                                        </div>
                                    </dt>
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="https://www.youtube.com/@Daylun_Build">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaYoutube className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            Youtube
                                        </div>
                                    </dt>
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="https://daylun.myshopify.com/">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaShopify className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            Shopify
                                        </div>
                                    </dt>
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="mailto:info@daylun.ca">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaEnvelope className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            Email
                                        </div>
                                    </dt>
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="https://www.linkedin.com/company/daylun/?originalSubdomain=ca">
                                    <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                                        <div className=" flex size-20 items-center justify-center rounded-lg bg-[#00ff88]">
                                            <FaLinkedinIn className="text-black" size={50}/>
                                        </div>
                                        <div className="mb-6 flex size-20 items-center justify-center">
                                            LinkedIn
                                        </div>
                                    </dt>
                                </a>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}