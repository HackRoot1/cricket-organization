import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <section className="mx-0 py-16 flex flex-col gap-5 items-center justify-center border-b-2 border-b-slate-600">
                <div className="text-3xl font-semibold">
                    <h1>SPORTS CUP</h1>
                </div>
                <div className="flex gap-5">
                    {[
                        { Icon: FaFacebookF, label: "Facebook" },
                        { Icon: FaXTwitter, label: "Twitter" },
                        { Icon: FaGooglePlusG, label: "Google Plus" },
                        { Icon: FaYoutube, label: "YouTube" },
                    ].map(({ Icon, label }, index) => (
                        <a
                            key={index}
                            href="#"
                            className="bg-slate-900 hover:bg-slate-700 transition-all duration-700 h-[40px] w-[40px] rounded-full flex justify-center items-center text-xl"
                            aria-label={label}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </section>

            <section className="mx-8 lg:mx-28 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 md:gap-8 border-b-2 border-b-slate-600 text-slate-400">
                {[
                    {
                        title: "About",
                        links: [
                            "Matches",
                            "Videos",
                            "Stats",
                            "News",
                            "Teams",
                            "Shop",
                            "Standings",
                        ],
                    },
                    {
                        title: "Team",
                        links: [
                            "India",
                            "Belligerents",
                            "England",
                            "New Zealand",
                            "South Africa",
                            "Sri Lanka",
                        ],
                    },
                    {
                        title: "Notification",
                        links: ["Latest", "Press Release"],
                    },
                    { title: "Player", links: ["Men", "Women"] },
                    {
                        title: "Guideline",
                        links: [
                            "Brand And Protection Guidelines",
                            "Match Playing Conditions",
                            "Suspect Action Policy",
                            "Governing Policy",
                        ],
                    },
                    {
                        title: "Support",
                        links: ["Help Center", "Privacy & Policy"],
                    },
                ].map(({ title, links }, index) => (
                    <div key={index}>
                        <h2 className="text-slate-200 font-bold text-xl pb-4">
                            {title}
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        className="hover:text-slate-500"
                                        href="#"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="mx-20 py-5">
                <div className="text-center">
                    Copyright 2024 XYZ. All rights reserved.
                </div>
            </section>
        </footer>
    );
};

export default Footer;
