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

                <section class="mx-8 lg:mx-28 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 border-b-2 border-b-slate-600 text-slate-400">
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">
                            ORGANIZATION
                        </h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                {/* <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a> */}
                                <motion.a
                                    href="#"
                                    initial={{ color: "#2162b8" }}
                                    whileHover={{ color: "#fff" }}
                                >
                                    Link 1
                                </motion.a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">GROUPS</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">GROUPS</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">
                            INTEREST LINKS
                        </h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">
                            ORGANIZATION
                        </h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-slate-200 text-bold pb-4">GROUPS</h2>
                        <ul class="flex flex-col gap-3">
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a class="hover:text-slate-500" href="#">
                                    Link 1
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
