import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import image from "./../assets/Cricket-rafiki.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="h-screen w-screen bg-slate-200">
                <div className="h-full w-full px-5 sm:px-20 py-5 sm:py-10">
                    <div className="flex h-full w-full">
                        <div className="w-full md:w-1/2 bg-white rounded-2xl md:rounded-s-2xl p-5 sm:p-10">
                            <div className="flex flex-col md:px-15 lg:px-20 gap-5 md:gap-10">
                                <div className="flex flex-col gap-1 sm:gap-3">
                                    <h2 className="text-2xl sm:text-3xl font-bold">
                                        Log in to your Account
                                    </h2>
                                    <p>
                                        Welcome back! Select method to log in:
                                    </p>
                                </div>
                                <div className="flex justify-evenly gap-2 sm:gap-3">
                                    <div className="cursor-pointer flex items-center justify-center gap-3 border-2 border-slate-300 py-1 px-5 rounded-lg">
                                        <span className="text-xl md:text-2xl">
                                            <FcGoogle />
                                        </span>
                                        <span className="text-black font-bold text-xl md:text-2xl">
                                            Google
                                        </span>
                                    </div>
                                    <div className="cursor-pointer flex items-center justify-center gap-3 border-2 border-slate-300 py-1 px-5 rounded-lg">
                                        <span className="text-xl md:text-2xl">
                                            <FaFacebook className="text-blue-600" />
                                        </span>
                                        <span className="text-black font-bold text-xl md:text-2xl">
                                            Facebook
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    or continue with email
                                </div>
                                <form
                                    action=""
                                    className="w-full flex flex-col gap-5"
                                >
                                    <div>
                                        <input
                                            type="text"
                                            className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="checkBtn"
                                                className="bg-slate-200 rounded-md px-3 py-1"
                                            />
                                            <label
                                                htmlFor="checkBtn"
                                                className="text-slate-400"
                                            >
                                                Remember Me
                                            </label>
                                        </div>
                                        <div className="text-blue-700 font-semibold">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="submit"
                                            className="h-[40px] w-full bg-blue-600 text-white rounded-md px-3 py-1"
                                            value={"Log In"}
                                        />
                                    </div>
                                </form>
                                <div className="flex items-center justify-center gap-3">
                                    <span>Don't have an account?</span>

                                    <Link
                                        to="/register"
                                        className="text-blue-700 font-bold"
                                    >
                                        Create an account
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:inline-block w-1/2 bg-blue-600 rounded-e-2xl">
                            <div className="flex items-center justify-center">
                                <img src={image} alt="" className="w-11/12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
