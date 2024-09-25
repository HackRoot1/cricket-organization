import React, { act, useState } from "react";
import logo from "../../assets/icc-white-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const LinkTab = ({ linkItem, active, srcLink }) => {
    return (
        <li>
            <Link
                to={srcLink}
                className={`text-white ${
                    active ? "bg-white/40" : ""
                } rounded-lg hover:bg-white/20 px-3 py-1 duration-200 transition-all`}
            >
                {linkItem}
            </Link>
        </li>
    );
};

const FlyoutLink = ({ active, children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <Link
                to={href}
                className={`text-white ${
                    active ? "bg-white/40" : ""
                } rounded-lg hover:bg-white/20 px-3 py-1 duration-200 transition-all`}
                aria-haspopup="true"
                aria-expanded={open ? "true" : "false"}
            >
                {children}
            </Link>
            <AnimatePresence>
                {open && (
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

// Reusable Dropdown Content Component
const DropdownContent = ({ links }) => {
    return (
        <div className="z-20 w-64 bg-white p-6 rounded-3xl shadow-xl">
            <div className="mb-1 space-y-2">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        className="block py-1 px-2 rounded-md text-sm hover:bg-slate-300"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

const TournamentsDropdownContent = () => {
    const links = [
        { label: "Upcoming", href: "/tournaments/upcoming" },
        { label: "Live", href: "/tournaments/live" },
        { label: "Completed", href: "/tournaments/completed" },
    ];
    return <DropdownContent links={links} />;
};

const AnnouncementsDropdownContent = () => {
    const links = [
        { label: "Link 1", href: "#" },
        { label: "Link 2", href: "#" },
        { label: "Link 3", href: "#" },
    ];
    return <DropdownContent links={links} />;
};

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="h-[70px] bg-blue-500">
            <nav className="flex justify-between h-full items-center px-4">
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex gap-3">
                        <LinkTab
                            linkItem="Home"
                            srcLink="/"
                            active={location.pathname === "/"}
                        />
                        <LinkTab
                            linkItem="About"
                            srcLink="/about-us"
                            active={location.pathname === "/about-us"}
                        />
                        <LinkTab
                            linkItem="Archive"
                            srcLink="/archive"
                            active={location.pathname === "/archive"}
                        />
                        <FlyoutLink
                            href="/tournaments"
                            FlyoutContent={TournamentsDropdownContent}
                            active={location.pathname === "/tournaments"}
                        >
                            Tournaments
                        </FlyoutLink>
                        <FlyoutLink
                            href="/announcements"
                            FlyoutContent={AnnouncementsDropdownContent}
                            active={location.pathname === "/announcements"}
                        >
                            Announcements
                        </FlyoutLink>
                        <LinkTab
                            linkItem="Gallery"
                            srcLink="/gallery"
                            active={location.pathname === "/gallery"}
                        />
                        <LinkTab
                            linkItem="Contact"
                            srcLink="/contact"
                            active={location.pathname === "/contact"}
                        />
                    </ul>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="/login"
                        className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1 duration-200 transition-all"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1 duration-200 transition-all"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
