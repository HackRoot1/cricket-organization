import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <>
            <footer class="bg-black text-white">
                <section class="mx-0 py-16 flex flex-col gap-5 items-center justify-center border-b-2 border-b-slate-600">
                    <div class="text-3xl text-semibold">
                        <h1>SPORTS CUP</h1>
                    </div>
                    <div class="flex gap-5">
                        <a
                            href="#"
                            class="bg-slate-900 hover:bg-slate-700 transition-all duration-700 h-[40px] w-[40px] rounded-full flex justify-center items-center text-xl"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            class="bg-slate-900 hover:bg-slate-700 transition-all duration-700 h-[40px] w-[40px] rounded-full flex justify-center items-center text-xl"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="#"
                            class="bg-slate-900 hover:bg-slate-700 transition-all duration-700 h-[40px] w-[40px] rounded-full flex justify-center items-center text-xl"
                        >
                            <FaGooglePlusG />
                        </a>
                        <a
                            href="#"
                            class="bg-slate-900 hover:bg-slate-700 transition-all duration-700 h-[40px] w-[40px] rounded-full flex justify-center items-center text-xl"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </section>

                <section class="mx-8 lg:mx-28 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 md:gap-8 border-b-2 border-b-slate-600 text-slate-400">
                    <div>
                        <h2 class="text-slate-200 text-bold text-xl pb-4">About</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Matches
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Stats
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    News
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Teams
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Standings
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-xl text-bold pb-4">Team</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    India
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Belligerents
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    England
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    New Zealand
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    South Africa
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Sri Lanka
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-xl text-bold pb-4">
                            Notification
                        </h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Latest
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Press Release
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-xl text-bold pb-4">Player</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Men
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Women
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-xl text-bold pb-4">Guidline</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Brand And Protection Guidelines
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Match Playing Conditions
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Suspect Action Policy
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Governing Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-xl text-bold pb-4">Support</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Privacy & Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="mx-20 py-5">
                    <div class="text-center">
                        Copyright 2024 XYZ. All rights reserved.
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;
