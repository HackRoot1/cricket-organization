import React from "react";
import image1 from "../../assets/carousel-1.svg";
import image2 from "../../assets/carousel-2.svg";
import image3 from "../../assets/carousel-3.svg";
import Slider from "react-slick";

const TestimonialsData = [
    {
        id: 1,
        name: "Samuel",
        role: "ENVATO CLIENT",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: image1,
    },
    {
        id: 2,
        name: "John",
        role: "ENVATO CLIENT",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: image2,
    },
    {
        id: 3,
        name: "Charlie",
        role: "ENVATO CLIENT",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: image3,
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true, // fix spelling of infinity to infinite
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <>
            <section className="bg-green-300">
                <div className="h-auto mx-28 py-5 flex flex-col items-center justify-center gap-3">
                    <h2 className="text-4xl font-bold">Testimonials</h2>
                    <span className="font-bold">What Our Members Say</span>
                </div>

                <div className="flex items-center justify-center px-8 py-5">
                    <div className="h-auto mx-8 lg:mx-28 py-5 w-full lg:w-1/2">
                        <Slider {...settings}>
                            {TestimonialsData.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white flex flex-col rounded-2xl p-10 shadow-lg"
                                >
                                    <div className="my-4">
                                        <h2 className="inline-block border-2 rounded-full px-3 py-1 text-green-400">
                                            DESIGN QUALITY
                                        </h2>
                                    </div>
                                    <div className="my-4">
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="my-4 flex justify-between items-center">
                                        <div className="flex justify-center items-center gap-3">
                                            <img
                                                className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full"
                                                src={item.img}
                                                alt={`${item.name}'s testimonial image`}
                                            />
                                            <div>
                                                <h2 className="text-2xl font-bold">
                                                    {item.name}
                                                </h2>
                                                <span className="text-xl font-bold text-black/45">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="100"
                                                height="80"
                                                viewBox="0 0 256.721 208.227"
                                                className="qout-svg"
                                            >
                                                <title>Quote Icon</title>{" "}
                                                {/* Accessible title */}
                                                <path
                                                    data-name="Path"
                                                    d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                                                    transform="translate(121.55 640.568)"
                                                    fill="green"
                                                    stroke="#0f0"
                                                    strokeWidth="1"
                                                    opacity="0.322"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
