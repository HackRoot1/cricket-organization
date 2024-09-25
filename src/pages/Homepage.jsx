import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

// Lazy load the components
const Hero = lazy(() => import("../components/Hero/Hero"));
const About = lazy(() => import("../components/About/About"));
const Gallery = lazy(() => import("../components/Gallery/Gallery"));
const Matches = lazy(() => import("../components/Matches/Matches"));
const Players = lazy(() => import("../components/Players/Players"));
const Testimonials = lazy(() =>
    import("../components/Testimonials/Testimonials")
);

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Your Website Title</title>
                <meta
                    name="description"
                    content="A brief description of your homepage for SEO purposes."
                />
            </Helmet>

            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Hero />
                <About />
                <Gallery />
                <Matches />
                <Players />
                <Testimonials />
            </Suspense>
            <Footer />
        </>
    );
};

export default Homepage;
