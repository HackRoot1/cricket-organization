import React from "react";
import image1 from "../../assets/carousel-1.svg";
import image2 from "../../assets/carousel-2.svg";
import image3 from "../../assets/carousel-3.svg";


const Testimonials = () => {
    return (
        <>
            <section class="bg-green-100">
                <div class="h-auto mx-28 py-5 flex flex-col items-center justify-center gap-3">
                    <h2 class="text-4xl font-bold">Testimonials</h2>
                    <span class="font-bold">What Our Members Say</span>
                </div>

                <div class="h-auto mx-8 lg:mx-28 py-5 flex gap-6 flex-col lg:flex-row">
                    <div class="bg-white rounded-2xl flex flex-col gap-10 p-10 shadow-lg">
                        <div>
                            <h2 class="inline-block border-2 rounded-full px-3 py-1 text-green-400">
                                DESIGN QUALITY
                            </h2>
                        </div>
                        <div>
                            <p>
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex justify-center items-center gap-3">
                                <img
                                    class="h-[100px] w-[100px] rounded-full"
                                    src={image1}
                                    alt="image"
                                />
                                <div>
                                    <h2 class="text-2xl font-bold">
                                        charlie4283
                                    </h2>
                                    <span class="text-xl font-bold text-black/45">
                                        ENVATO CLIENT
                                    </span>
                                </div>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="80"
                                    viewBox="0 0 256.721 208.227"
                                    class="qout-svg"
                                >
                                    <path
                                        data-name="Path"
                                        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                                        transform="translate(121.55 640.568)"
                                        fill="none"
                                        stroke="#000"
                                        stroke-width="1"
                                        opacity="0.322"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl flex flex-col gap-10 p-10 shadow-lg">
                        <div>
                            <h2 class="inline-block border-2 rounded-full px-3 py-1 text-green-400">
                                DESIGN QUALITY
                            </h2>
                        </div>
                        <div>
                            <p>
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex justify-center items-center gap-3">
                                <img
                                    class="h-[100px] w-[100px] rounded-full"
                                    src={image2}
                                    alt="image"
                                />
                                <div>
                                    <h2 class="text-2xl font-bold">
                                        charlie4283
                                    </h2>
                                    <span class="text-xl font-bold text-black/45">
                                        ENVATO CLIENT
                                    </span>
                                </div>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="80"
                                    viewBox="0 0 256.721 208.227"
                                    class="qout-svg"
                                >
                                    <path
                                        data-name="Path"
                                        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                                        transform="translate(121.55 640.568)"
                                        fill="none"
                                        stroke="#000"
                                        stroke-width="1"
                                        opacity="0.322"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
