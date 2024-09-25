import React from "react";
import image1 from "../../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";
import image2 from "../../assets/owuigawygwwzwtpydh6f.avif";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <section className="m-8 lg:m-28">
            <div className="h-auto my-5 flex items-center justify-between">
                <div className="w-3/4 flex items-center justify-start gap-5">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Our Latest Gallery
                    </h2>
                </div>
                <div>
                    <Link
                        to="/gallery"
                        className="border-2 border-green-300 px-3 py-1 rounded-md"
                    >
                        View All
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-3 gap-4">
                <div className="lg:row-span-2 w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image2}
                        alt="Cricket Team Celebration"
                    />
                </div>
                <div className="w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image1}
                        alt="Cricket World Cup Match"
                    />
                </div>
                <div className="lg:row-span-2 w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image2}
                        alt="Cricket Team Celebration"
                    />
                </div>
                <div className="lg:row-span-2 w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image1}
                        alt="Cricket World Cup Match"
                    />
                </div>
                <div className="w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image2}
                        alt="Cricket Team Celebration"
                    />
                </div>
                <div className="w-auto">
                    <img
                        className="w-full h-full rounded-2xl"
                        src={image1}
                        alt="Cricket World Cup Match"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
