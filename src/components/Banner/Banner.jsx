import React, { useState } from "react";
import image from "../../assets/Cricket-rafiki.png";

const Banner = ({ title, content }) => {
    return (
        <>
            <section className="px-8 lg:px-28 flex items-center justify-center h-[300px] md:h-[400px] bg-green-300">
                <div className="md:w-1/2 flex flex-col gap-5">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p>{content}</p>
                </div>
                <div className="hidden h-full w-1/2 md:flex items-center justify-center">
                    <img src={image} className="h-full" alt="" />
                </div>
            </section>
        </>
    );
};

export default Banner;
