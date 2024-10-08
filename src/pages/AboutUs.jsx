import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import image from "./../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="About Us"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, amet ipsum illo quisquam magni incidunt ullam!
                        Nihil, repellendus. Ea aliquam quis nostrum. Autem,
                        mollitia nihil."
            />

            <section>
                <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-24 mx-8 lg:mx-28 my-10">
                    <div className="lg:w-1/2 w-full px-3 pt-8 flex flex-col gap-2">
                        <h2 className="text-3xl font-bold">
                            United by Passion, Winning Together
                        </h2>
                        <p className="text-justify">
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
                        <button className="bg-red-300 px-3 py-1 rounded-full self-end hover:bg-red-400 transition-colors duration-300">
                            Read More...
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <img
                            className="w-full rounded-md object-cover"
                            src={image}
                            alt="United by Passion, Winning Together"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutUs;
