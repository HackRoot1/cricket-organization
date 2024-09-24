import React, { useState } from "react";

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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white p-8 shadow-lg rounded-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Multi-stage Registration
                </h2>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div>
                            <h3 className="text-lg font-medium mb-4">
                                Step 1: Personal Details
                            </h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="text-lg font-medium mb-4">
                                Step 2: Contact Information
                            </h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
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
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h3 className="text-lg font-medium mb-4">
                                Step 3: Password Setup
                            </h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
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
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
