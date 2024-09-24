import React from "react";
import image1 from "../../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";
import image2 from "../../assets/owuigawygwwzwtpydh6f.avif";


const Gallery = () => {
    return (
        <>
            <section class="m-8 lg:m-28">
                <div class="h-auto my-5 flex items-center justify-between">
                    <div class="w-3/4 flex items-center justify-start gap-5">
                        <h2 class="text-2xl lg:text-4xl font-bold">Our Latest Gallery</h2>
                    </div>
                    <div>
                        <button class="border-2 border-green-300 px-3 py-1 rounded-md">
                            View All
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-3 gap-4">
                    <div class="lg:row-span-2 w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image2}
                            alt=""
                        />
                    </div>
                    <div class="w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image1}
                            alt=""
                        />
                    </div>
                    <div class="lg:row-span-2 w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image2}
                            alt=""
                        />
                    </div>
                    <div class="lg:row-span-2 w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image1}
                            alt=""
                        />
                    </div>
                    <div class="w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image2}
                            alt=""
                        />
                    </div>
                    <div class="w-auto">
                        <img
                            class="w-full h-full rounded-2xl"
                            src={image1}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
