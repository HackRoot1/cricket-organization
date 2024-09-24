import React from "react";
import image1 from "../../assets/player1.jpeg";
import image2 from "../../assets/rohit.jpeg";
import image3 from "../../assets/sachin.jpeg";
import image4 from "../../assets/shikhar.jpeg";

const Players = () => {
    return (
        <>
            <section class="my-5">
                <div class="h-auto mx-8 lg:mx-28 my-5 flex items-center justify-between">
                    <div class="w-3/4 flex flex-col gap-1 lg:gap-2">
                        <h2 class="text-3xl lg:text-4xl font-bold">Our Players</h2>
                        <span class="font-semibold lg:font-bold">Champions Club</span>
                    </div>
                    <div>
                        <button class="border-2 border-green-300 px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 duration-500 transition-all">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
                <div class="mx-8 lg:mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                        <div class="relative bg-blue-300">
                            <img class="h-[350px] w-full" src={image1} alt="" />
                            <div class="absolute bottom-0 bg-green-300 w-full flex flex-col items-center justify-center py-2">
                                <h3 class="text-xl font-bold">Player Name</h3>
                                <h4 class="textlg font-bold text-blue-600">
                                    Player Role
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative bg-blue-300">
                            <img class="h-[350px] w-full" src={image2} alt="" />
                            <div class="absolute bottom-0 bg-green-300 w-full flex flex-col items-center justify-center py-2">
                                <h3 class="text-xl font-bold">Player Name</h3>
                                <h4 class="textlg font-bold text-blue-600">
                                    Player Role
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative bg-blue-300">
                            <img class="h-[350px] w-full" src={image3} alt="" />
                            <div class="absolute bottom-0 bg-green-300 w-full flex flex-col items-center justify-center py-2">
                                <h3 class="text-xl font-bold">Player Name</h3>
                                <h4 class="textlg font-bold text-blue-600">
                                    Player Role
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative bg-blue-300">
                            <img class="h-[350px] w-full" src={image4} alt="" />
                            <div class="absolute bottom-0 bg-green-300 w-full flex flex-col items-center justify-center py-2">
                                <h3 class="text-xl font-bold">Player Name</h3>
                                <h4 class="textlg font-bold text-blue-600">
                                    Player Role
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Players;
