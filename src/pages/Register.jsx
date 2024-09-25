import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import image from "../assets/Cricket-rafiki.png";
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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Move to next step
    const nextStep = () => setStep((prevStep) => prevStep + 1);

    // Move to previous step
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Success:", data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <section className="h-screen w-screen bg-slate-200">
            <div className="h-full w-full px-5 sm:px-20 py-10">
                <div className="flex h-full w-full">
                    {/* Registration Form */}
                    <div className="w-full md:w-1/2 bg-white rounded-2xl md:rounded-s-2xl p-5 sm:p-10">
                        <div className="h-full flex flex-col justify-center sm:py-20 md:py-0 px-10 md:px-15 lg:px-20 gap-10">
                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Create New Account
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-5"
                            >
                                {step === 1 && (
                                    <>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="firstName"
                                                className="font-semibold"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="lastName"
                                                className="font-semibold"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="h-[40px] w-full bg-blue-600 text-white rounded-md px-3 py-1"
                                        >
                                            Next
                                        </button>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="email"
                                                className="font-semibold"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="phone"
                                                className="font-semibold"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
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
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="password"
                                                className="font-semibold"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="h-[40px] w-full bg-slate-200 rounded-md px-3 py-1"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="confirmPassword"
                                                className="font-semibold"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                value={formData.confirmPassword}
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

                            {/* Social Login Section */}
                            <div className="text-center">OR</div>
                            <div className="flex justify-evenly gap-2 sm:gap-3">
                                <SocialLoginButton
                                    icon={<FcGoogle />}
                                    label="Google"
                                />
                                <SocialLoginButton
                                    icon={
                                        <FaFacebook className="text-blue-600" />
                                    }
                                    label="Facebook"
                                />
                            </div>

                            {/* Already Registered */}
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

                    {/* Right Image Section */}
                    <div className="hidden md:inline-block w-1/2 bg-blue-600 rounded-e-2xl">
                        <div className="flex items-center justify-center">
                            <img
                                src={image}
                                alt="Cricket Illustration"
                                className="w-11/12"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Social Login Button Component
const SocialLoginButton = ({ icon, label }) => (
    <div className="cursor-pointer flex items-center justify-center gap-3 border-2 border-slate-300 py-1 px-2 sm:px-3 lg:px-5 rounded-full sm:rounded-lg h-[40px] w-[40px] sm:h-auto sm:w-full md:hover:-translate-y-2 duration-200 transition-all">
        <span className="text-xl md:text-2xl">{icon}</span>
        <span className="hidden sm:inline-block text-black font-bold text-xl">
            {label}
        </span>
    </div>
);

export default Register;
