import React from "react";
import image from "../../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";

const About = () => {
    return (
        <>
            <section>
                <div class="h-auto mx-28 my-5 flex flex-col items-center justify-center gap-3">
                    <h2 class="text-4xl font-bold">About Us</h2>
                    <span class="font-bold">XYZ Organization</span>
                </div>

                <div class="flex flex-col-reverse lg:flex-row gap-2 lg:gap-24 mx-8 lg:mx-28 my-10">
                    <div class="lg:w-1/2 w-full px-3 pt-8 flex flex-col gap-2">
                        <h2 class="text-3xl font-bold">
                            United by Passion, Winning Together
                        </h2>
                        <p class="text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iusto cum hic consequuntur, et in earum
                            consequatur ipsam ab dignissimos. Recusandae
                            accusamus amet temporibus, incidunt dignissimos, id
                            illum velit aperiam labore in ratione quam
                            quibusdam. Nulla qui culpa tempora deleniti quas
                            neque eum, eius atque itaque labore nam mollitia,
                            pariatur nostrum! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Molestias amet
                            corporis quis nisi voluptatem, aut officia excepturi
                            dignissimos laboriosam mollitia tempora corporis
                        </p>
                        <button class="border-2 border-green-300 px-3 py-1 rounded-md self-end">
                            Read More...
                        </button>
                    </div>
                    <div class="lg:w-1/2 w-full">
                        <img
                            class="w-full rounded-md"
                            src={image}
                            alt="Image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
