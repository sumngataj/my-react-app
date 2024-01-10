import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <Carousel />

      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
