import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import image1 from "./../assets/owuigawygwwzwtpydh6f.avif";

// Reusable TournamentCard component
const TournamentCard = ({ date, title, description, image }) => {
    return (
        <div className="flex md:flex-row flex-col gap-10 my-10 mx-8 lg:mx-28 pb-5 border-b-2 border-blue-300">
            <div className="h-[250px] flex justify-center items-center">
                <img
                    className="h-[250px] w-full md:w-[250px]"
                    src={image}
                    alt="tournament"
                />
            </div>
            <div>
                <div className="inline-block bg-green-600 px-2 py-1 text-white">
                    {date}
                </div>
                <div className="my-3">
                    <h2 className="text-xl lg:text-4xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex gap-5">
                    <button className="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                        Register Now
                    </button>
                    <button className="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                        Ticket Booking
                    </button>
                    <button className="border-2 border-green-300 px-3 py-1 hover:border-green-700 hover:bg-green-700 hover:text-white duration-200 transition-all">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

const Tournaments = () => {
    const tournamentData = [
        {
            date: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            image: image1,
        },
        {
            date: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            image: image1,
        },
        {
            date: "Sept 29 - Oct 5",
            title: "ICC Champions Trophy 2017, Australia",
            description:
                "The indoor sports mania is back again offering all sorts of indoor sports in the summer.",
            image: image1,
        },
        // Add more tournaments as needed
    ];

    return (
        <>
            <Navbar />
            <Banner
                title="Tournaments"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, amet ipsum illo quisquam magni incidunt ullam! Nihil, repellendus. Ea aliquam quis nostrum. Autem, mollitia nihil."
            />

            <section className="flex flex-col">
                <div className="mt-10 mx-8 lg:mx-28 text-3xl font-bold">
                    Live
                </div>
                {tournamentData.map((tournament, index) => (
                    <TournamentCard key={index} {...tournament} />
                ))}
            </section>

            <section className="flex flex-col">
                <div className="mt-10 mx-8 lg:mx-28 text-3xl font-bold">
                    Upcoming
                </div>
                {tournamentData.map((tournament, index) => (
                    <TournamentCard key={index} {...tournament} />
                ))}
            </section>

            <Footer />
        </>
    );
};

export default Tournaments;
