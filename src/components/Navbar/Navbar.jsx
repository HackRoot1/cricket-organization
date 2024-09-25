import React, { useState } from "react";
import logo from "../../assets/icc-white-logo.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const LinkTab = ({ linkItem, active, srcLink }) => {
    return (
        <li>
            <Link
                to={srcLink}
                className={
                    "text-white " +
                    (active ? "bg-white/40" : " ") +
                    " rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                }
            >
                {linkItem}
            </Link>
        </li>
    );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <Link
                to={href}
                className={
                    "text-white rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                }
            >
                {children}
            </Link>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black z-20 rounded-3xl"
                    >
                        <FlyoutContent href={href} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TournamentsDropdownContent = ({href}) => {
    return (
        <div className="z-20 w-64 bg-white p-6 rounded-3xl shadow-xl">
            <div className="mb-1 space-y-2">
                <a href={href} className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Upcoming
                </a>
                <a href={href} className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Live
                </a>
                <a href={href} className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Completed
                </a>
            </div>
        </div>
    );
};

const AnnouncementsDropdownContent = () => {
    return (
        <div className="z-20 w-64 bg-white p-6 rounded-3xl shadow-xl">
            <div className="mb-1 space-y-2">
                <a href="#" className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Link 1
                </a>
                <a href="#" className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Link 2
                </a>
                <a href="#" className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300">
                    Link 3
                </a>
            </div>
        </div>
    );
};

const Navbar = () => {
    return (
        <header className="h-[70px] bg-blue-500">
            <nav className="flex justify-between h-full items-center px-4">
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex gap-3">
                        <LinkTab linkItem={"Home"} srcLink="/" />
                        <LinkTab linkItem={"About"} srcLink="/about-us" />
                        <LinkTab linkItem={"Archive"} srcLink="/archive" />
                        <FlyoutLink
                            href="/tournaments"
                            FlyoutContent={TournamentsDropdownContent}
                        >
                            Tournaments
                        </FlyoutLink>
                        <FlyoutLink
                            href="/announcements"
                            FlyoutContent={AnnouncementsDropdownContent}
                        >
                            Announcements
                        </FlyoutLink>
                        <LinkTab linkItem={"Gallery"} srcLink="/gallery" />
                        <LinkTab linkItem={"Contact"} srcLink="/contact" />
                    </ul>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="/login"
                        className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
