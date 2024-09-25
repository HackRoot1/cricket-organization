import React from "react";
import image1 from "../../assets/owuigawygwwzwtpydh6f.avif";
import { Link } from "react-router-dom";

// Reusable Match Component
const Match = ({ dateRange, title, description, imgSrc }) => (
    <div className="flex md:flex-row flex-col gap-10 my-10 mx-8 lg:mx-28 pb-5 border-b-2 border-blue-300">
        <div className="h-[250px] flex justify-center items-center">
            <img
                className="h-[250px] w-full md:w-[250px]"
                src={imgSrc}
                alt="match"
            />
        </div>
        <div>
            <div className="inline-block bg-green-600 px-2 py-1 text-white">
                {dateRange}
            </div>
            <div className="my-3">
                <h2 className="text-xl lg:text-4xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex gap-1 sm:gap-5">
                <button className="border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                    Register Now
                </button>
                <button className="border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                    Ticket Booking
                </button>
                <button className="border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                    Read More
                </button>
            </div>
        </div>
    </div>
);

const Matches = () => {
    const matches = [
        {
            dateRange: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            imgSrc: image1,
        },
        {
            dateRange: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            imgSrc: image1,
        },
        {
            dateRange: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            imgSrc: image1,
        },
    ];

    return (
        <section>
            <div className="flex items-center justify-center h-auto mx-8 lg:mx-28">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        UPCOMING{" "}
                        <span className="text-yellow-500">CRICKET </span>
                        SPOTLIGHT IN THIS MONTH
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Feel the thrill of seeing a global sporting event in one
                        of the world's most incredible cities. Headlining the
                        calendar is the Dubai World Cup.
                    </p>
                </div>
            </div>

            <div className="mx-8 lg:mx-28 flex justify-start gap-1 sm:gap-3 items-center my-5">
                <div className="cursor-pointer border-2 px-2 sm:px-3 py-1 border-green-700 bg-green-700 text-white duration-200 transition-all">
                    Upcoming
                </div>
                <div className="cursor-pointer border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                    Live
                </div>
                <div className="cursor-pointer border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                    Completed
                </div>
                <Link
                    to="/tournaments"
                    className="border-2 border-green-300 px-2 sm:px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all"
                >
                    View All
                </Link>
            </div>

            {/* Mapping over matches array to render each match */}
            {matches.map((match, idx) => (
                <Match
                    key={idx}
                    dateRange={match.dateRange}
                    title={match.title}
                    description={match.description}
                    imgSrc={match.imgSrc}
                />
            ))}
        </section>
    );
};

export default Matches;
