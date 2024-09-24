import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import image from "./../assets/Cricket-rafiki.png";
import { Link } from "react-router-dom";

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Move to next step
    const nextStep = () => {
        setStep(step + 1);
    };

    // Move to previous step
    const prevStep = () => {
        setStep(step - 1);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <>
            <section className="h-screen w-screen bg-slate-200">
                <div className="h-full w-full px-5 sm:px-20 py-10">
                    <div className="flex h-full w-full">
                        <div className="w-full md:w-1/2 bg-white rounded-2xl md:rounded-s-2xl p-5 sm:p-10">
                            <div className="h-full flex flex-col justify-between sm:py-20 md:py-0 md:px-15 lg:px-20 gap-10">
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
                                    onSubmit={handleSubmit}
                                    className="w-full flex flex-col gap-5"
                                >
                                    {step === 1 && (
                                        <>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="h-[40px] w-full bg-blue-600 text-white rounded-md px-3 py-1"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {step === 2 && (
                                        <>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="Phone"
                                                    required
                                                />
                                            </div>
                                            <div className="flex justify-between">
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {step === 3 && (
                                        <>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={
                                                        formData.confirmPassword
                                                    }
                                                    onChange={handleChange}
                                                    className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                    placeholder="Confirm Password"
                                                    required
                                                />
                                            </div>
                                            <div className="flex justify-between">
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </form>
                                <div className="flex items-center justify-center gap-3">
                                    <span>Already have an account?</span>

                                    <Link
                                        to="/login"
                                        className="text-blue-700 font-bold"
                                    >
                                        Log In
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

export default Register;
