import image1 from "../../assets/India-Cricket-WCup-68_1699809986420_1699810043017.avif";
import image2 from "../../assets/owuigawygwwzwtpydh6f.avif";
import image3 from "../../assets/hero-image3.jpg";
import image4 from "../../assets/hero-image1.jpg";
import image5 from "../../assets/hero-image2.webp";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
    image1,
    image2,
    image3,
    image4,
    image5, 
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const Hero = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <>
            <div className="relative overflow-hidden bg-neutral-950 py-8">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex cursor-grab items-center active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>

                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </div>
        </>
    );
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-full sm:h-[300px] md:h-[450px] lg:h-[600px] shrink-0 rounded-xl bg-neutral-800 object-cover"
                    />
                );
            })}
        </>
    );
};

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 py-4">
            {/* <div className="flex gap-2"> */}
                {imgs.map((_, idx) => {
                    return (
                        
                        <button
                            key={idx}
                            onClick={() => setImgIndex(idx)}
                            className={`h-3 w-3 rounded-full transition-colors ${
                                idx === imgIndex
                                    ? "bg-neutral-50"
                                    : "bg-neutral-500"
                            }`}
                        />
                    );
                    
                })}
            {/* </div> */}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        </>
    );
};
export default Hero;
