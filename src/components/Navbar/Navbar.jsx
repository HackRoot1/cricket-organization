import React from "react";

const Navbar = () => {
    return (
        <>
            <header class="h-[70px] bg-blue-600">
                <nav class="flex justify-between h-full items-center px-4">
                    <div class="flex justify-center items-center gap-3">
                        <div>
                            <img src="./images/icc-white-logo.svg" alt="Logo" />
                        </div>
                        <ul class="flex gap-3">
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:after:w-full duration-200 transition-all"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    Archive
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    Tournaments
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    Anouncements
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-white hover:text-white/80 px-1 py-1 hover:border-b-2 duration-200 transition-all"
                                    href="#"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex gap-3">
                        <a
                            class="bg-red-200 px-3 py-1 rounded-md text-black font-semibold hover:bg-red-300 duration-200 transition-all"
                            href="#"
                        >
                            Sign In
                        </a>
                        <a
                            class="bg-red-200 px-3 py-1 rounded-md text-black font-semibold hover:bg-red-300 duration-200 transition-all"
                            href="#"
                        >
                            Sign Up
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
