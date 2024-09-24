import React from "react";
import logo from "../../assets/icc-white-logo.svg";
import { Link } from "react-router-dom";

const LinkTab = ({ linkItem, active }) => {
    return (
        <li>
            <a
                className={"text-white " +  (active ? "bg-white/40" : " ") + " rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"}
                href="#"
            >
                {linkItem}
            </a>
        </li>
    );
};

const Navbar = () => {
    return (
        <>
            <header className="h-[70px] bg-blue-500">
                <nav className="flex justify-between h-full items-center px-4">
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                        <ul className="hidden lg:flex gap-3">
                            <LinkTab linkItem={"Home"} active={true} />
                            <LinkTab linkItem={"About"} />
                            <LinkTab linkItem={"Archive"} />
                            <LinkTab linkItem={"Tournaments"} />
                            <LinkTab linkItem={"Anouncements"} />
                            <LinkTab linkItem={"Gallery"} />
                            <LinkTab linkItem={"Contact"} />
                        </ul>
                    </div>

                    <div className="flex gap-3">
                        <Link to="/login"
                            className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                        >
                            Log In
                        </Link>
                        <Link to="/register"
                            className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                        >
                            Sign Up
                        </Link>
                        {/* <a
                            className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                            href="#"
                        >
                            Sign In
                        </a>
                        <a
                            className="text-white bg-white/40 rounded-lg hover:bg-white/20 px-3 py-1  hover:after:w-full duration-200 transition-all"
                            href="#"
                        >
                            Sign Up
                        </a> */}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
