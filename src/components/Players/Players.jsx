import React from "react";
import image1 from "../../assets/player1.jpeg";
import image2 from "../../assets/rohit.jpeg";
import image3 from "../../assets/sachin.jpeg";
import image4 from "../../assets/shikhar.jpeg";

// Reusable PlayerCard Component
const PlayerCard = ({ image, name, role }) => {
    return (
        <div>
            <div className="relative bg-blue-300 shadow-lg">
                <img
                    className="h-[350px] w-full"
                    src={image}
                    alt={`${name} image`}
                />
                <div className="absolute bottom-0 bg-green-300 w-full flex flex-col items-center justify-center py-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <h4 className="text-lg font-bold text-blue-600">{role}</h4>
                </div>
            </div>
        </div>
    );
};

const Players = () => {
    const players = [
        { image: image1, name: "Player 1", role: "Batsman" },
        { image: image2, name: "Rohit Sharma", role: "Captain" },
        { image: image3, name: "Sachin Tendulkar", role: "Legend" },
        { image: image4, name: "Shikhar Dhawan", role: "Batsman" },
    ];

    return (
        <>
            <section className="my-5">
                <div className="h-auto mx-8 lg:mx-28 my-5 flex items-center justify-between">
                    <div className="w-3/4 flex flex-col gap-1 lg:gap-2">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Our Players
                        </h2>
                        <span className="font-semibold lg:font-bold">
                            Champions Club
                        </span>
                    </div>
                    <div>
                        <button className="border-2 border-green-300 px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 duration-500 transition-all">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
                <div className="mx-8 lg:mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {players.map((player, index) => (
                        <PlayerCard
                            key={index}
                            image={player.image}
                            name={player.name}
                            role={player.role}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Players;
