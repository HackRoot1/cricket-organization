import React from "react";
import image1 from "../../assets/carousel-1.svg";

const Matches = () => {
    return (
        <section>
            <div class="flex gap-10 my-10 mx-8 lg:mx-28">
                <div class="h-[250px] flex justify-center items-center">
                    <img class="h-[250px] w-full" src={image1} alt="image" />
                </div>

                <div>
                    <div class="inline-block bg-green-600 px-2 py-1 text-white">
                        Sept 29 - Oct 5
                    </div>
                    <div class="my-3">
                        <h2 class="text-xl lg:text-4xl font-bold">
                            ICC Champions Trophy 2017, Australia
                        </h2>
                        <p>
                            The indoor sports mania is back again offering all
                            sorts of indoor sports in the summer.
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <button class="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                            Register Now
                        </button>
                        <button class="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                            Ticket Booking
                        </button>
                        <button class="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Matches;
