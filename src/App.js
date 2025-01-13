import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import bgImage from './images/hero-bg.jpg';
import Contact from './Contact';
import Home from './Home';

// Define the Hero Section component to be used in each route
const HeroSection = ({ title, subtitle, bgImage, height }) => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: height || "auto",
      }}
    >
      <h1>{title}</h1>
      <p className="mx-auto w-50">{subtitle}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Hero Section */}
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection
                    title="We are Global Manufacturing Leader"
                    subtitle="As a leading global manufacturing company, we pride ourselves in setting industry standards through our commitment to producing high-quality products and providing innovative solutions to cater to the diverse needs of our customers."
                    bgImage={bgImage}
                    height="105vh"
                  />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <HeroSection
                    title="Products"
                    subtitle="Our manufacturing company offers a wide range of services, including product design, prototyping, fabrication, and assembly. We have a team of skilled professionals who ensure top-quality manufacturing solutions for our clients."
                    bgImage={bgImage}
                    height="50vh"
                  />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <HeroSection
                    title="Contact Us"
                    subtitle="Our team of experts is ready to provide top-notch manufacturing solutions tailored to your needs. Contact us today for a consultation and let us take your production processes to the next level."
                    bgImage={bgImage}
                    height="50vh"
                  />
                </>
              }
            />
          </Routes>
        </div>

        {/* Content outside the bg-image-container */}
        <div className="outside-content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
