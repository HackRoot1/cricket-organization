import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Matches from "../components/Matches/Matches";
import Players from "../components/Players/Players";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";


const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Matches />
        <Players />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Homepage;