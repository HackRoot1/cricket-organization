import React, { useState } from "react";
import image from "../../assets/Cricket-rafiki.png";
import image1 from "../../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";
import image2 from "../../assets/owuigawygwwzwtpydh6f.avif";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const images = [
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
];

const itemsPerPage = 6;

const Banner = () => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <section className="px-8 lg:px-28 flex items-center justify-center h-[300px] md:h-[400px] bg-green-300">
                <div className="md:w-1/2 flex flex-col gap-5">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, amet ipsum illo quisquam magni incidunt ullam!
                        Nihil, repellendus. Ea aliquam quis nostrum. Autem,
                        mollitia nihil.
                    </p>
                </div>
                <div className="hidden h-full w-1/2 md:flex items-center justify-center">
                    <img src={image} className="h-full" alt="" />
                </div>
            </section>

            <section className="m-8 lg:mx-28">
                <div className="h-auto my-5 flex items-center justify-between">
                    <div className="w-3/4 flex items-center justify-start gap-5">
                        <h2 className="text-2xl lg:text-4xl font-bold">
                            Our Latest Gallery
                        </h2>
                    </div>
                </div>

                {/* Display the images based on the current page */}
                <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 gap-4">
                    {currentImages.map((img, index) => (
                        <div
                            key={index}
                            className="w-auto"
                        >
                            <img className="w-full h-full rounded-2xl" src={img} alt="" />
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-4">
                    <button
                        className={`px-3 py-2 rounded text-xl custom-shadow ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"}`}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <GrFormPrevious />
                    </button>
                    <span className="mx-4">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className={`px-3 py-2 rounded text-xl custom-shadow ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <GrFormNext />
                    </button>
                </div>
            </section>
        </>
    );
};

export default Banner;
