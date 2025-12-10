import React, { useState, useEffect, useRef } from "react";
import img2 from "../assets/Macan (2).png";
import img3 from "../assets/Macan (3).png";
import { MoveRight, Plus, Facebook, Twitter, Instagram } from "lucide-react";
import Layout from "../components/result";
import Carslides from "../components/carslides";
import img4 from "../assets/escalade.avif";
import ThreeScene from "../components/cardisplay";
import img5 from "../assets/audi-logo-2016-download.png";
import img6 from "../assets/bmw-logo-1997-download.png";
import img7 from "../assets/cadillac-logo-2021-full-download.png";
import img8 from "../assets/Logo-Mercedes-Benz-500x281.png";
import img9 from "../assets/lamborghini-urus-logo-download.png";
import img10 from "../assets/porsche-logo-2014-wordmark-download (1).png";
import img11 from "../assets/i3 electric car by BMW.jpeg";
import img12 from "../assets/Elektro-Porsche_ Spezielle Absicherung für Batterie und Ladestation.jpeg";
import img13 from "../assets/NIO.jpeg";
import img14 from "../assets/Tesla, the innovative electric car company led by….jpeg";
import partnershipImage from "../assets/partnership.jpg";
import ppp from "../assets/zieben-vh-GYSYkkvwb5w-unsplash.jpg";
function Home() {
  const [activeCarData, setActiveCarData] = useState({
    name: "Porsche",
    description:
      "A timeless sports car known for its precision handling, rear-engine design, and thrilling performance.",
  });
  const [isVisible, setIsVisible] = useState(false);
  const modelsRef = useRef(null);
  const brands = [
    { name: "Audi", logo: img5 },
    { name: "BMW", logo: img6 },
    { name: "Ford", logo: img7 },
    { name: "Mercedes Benz", logo: img8 },
    { name: "Peugeot", logo: img9 },
    { name: "Volkswagen", logo: img10 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (modelsRef.current) {
      observer.observe(modelsRef.current);
    }

    return () => {
      if (modelsRef.current) {
        observer.unobserve(modelsRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="relative w-full flex flex-col">
        {/* ✅ Hero Section */}
        <section className="relative top-0 w-full h-screen overflow-visible">
          <div className="relative w-full">
            <section className="relative w-full">
              <ThreeScene />
            </section>
          </div>
        </section>
      </div>

      <section className="relative w-full min-h-screen bg-gray-300 pt-8 md:pt-12 flex flex-col border-t-gray-500 pb-10 lg:min-h-[500px] xl:min-h-[500px]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start px-4 sm:px-8 md:px-12 lg:px-16 gap-6 md:gap-8">
          {/* Left heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] w-full leading-tight uppercase open-sans-font font-bold text-gray-800 md:max-w-[45%]">
            cars Recharge
          </h1>

          {/* Right content */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:max-w-[45%] open-sans-font text-gray-700">
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quasi eligendi, similique impedit, labore esse omnis illum, rerum
              nesciunt dicta ipsum. Eligendi, suscipit. Eaque sit ipsam, aliquam
              consequuntur porro maiores?
            </p>

            <button className="w-full sm:w-48 bg-black p-3 md:p-4 text-white rounded-xl border font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition">
              Discover more
            </button>
          </div>
        </div>

        {/* Center text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 px-4 sm:px-6 md:px-10">
          <div className="rounded-xl h-72 sm:h-80 bg-gray-400 relative overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${img11})`,
              }}
              className="bg-cover  bg-center h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3 sm:p-4 justify-end">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                Charging Information
              </h1>
              <ul className="text-white text-xs sm:text-sm">
                <li>Home charging</li>
                <li>Fast charging / Supercharging</li>
                <li>Charging networks</li>
                <li>Charging cost comparison vs petrol</li>
                <li>Map of charging stations</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl h-72 sm:h-80 bg-gray-400 relative overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${img12})`,
              }}
              className="bg-cover bg-center h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3 sm:p-4 justify-end">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold open-sans-font">
                Performance Highlights
              </h1>
              <ul className="text-white font-custom text-xs sm:text-sm">
                <li>Acceleration (0–100 km/h speeds)</li>
                <li>Battery size & range</li>
                <li>Motor power</li>
                <li>Driving modes</li>
                <li>Regenerative braking</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl h-72 sm:h-80 bg-gray-400 relative overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${img13})`,
              }}
              className="bg-cover bg-center h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-3 sm:p-4">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                Cost Savings
              </h1>
              <ul className="text-white text-xs sm:text-sm">
                <li>Fuel vs electricity cost</li>
                <li>Maintenance savings</li>
                <li>Long-term ownership cost</li>
                <li>Warranty information</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl h-72 sm:h-80 bg-gray-400 relative overflow-hidden lg:hidden xl:block">
            <div
              style={{
                backgroundImage: `url(${img14})`,
              }}
              className="bg-cover bg-center h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col p-3 sm:p-4 justify-end">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                Future of Electric Cars
              </h1>
              <ul className="text-white text-xs sm:text-sm">
                <li>Battery innovations</li>
                <li>Wireless charging</li>
                <li>Solar EVs</li>
                <li>Autonomous fleets</li>
                <li>Government EV mandate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={modelsRef}
        className="relative w-full bg-gray-800 flex flex-col justify-center 
  py-12 sm:py-16 lg:py-20 
  min-h-[500px] md:min-h-[750px] lg:min-h-[800px] 2xl:h-screen"
      >
        {/* Header Row */}
        <div
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between 
    gap-4 sm:gap-0 border-b border-neutral-300 pb-4 
    px-4 sm:px-8 md:px-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 uppercase tracking-tight">
            Models
          </h1>

          <a
            href="#"
            className="text-base sm:text-lg font-semibold text-gray-200 flex items-center gap-2 group"
          >
            Discover all Models
            <MoveRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Carousel Section */}
        <div className="w-full mt-10 sm:mt-12 md:mt-16 relative px-4 sm:px-8">
          {/* Watermark */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 pointer-events-none">
            <div
              className={`
       text-center font-bold uppercase text-white/40 text-[clamp(2rem,20vw,10rem)] leading-none select-none
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
            >
              {activeCarData.name}
            </div>
          </div>

          {/* Description */}
          <div
            className={`
        absolute left-1/2 -translate-x-1/2 
        top-[72%] sm:top-[75%] md:top-[78%]
        w-full max-w-md sm:max-w-xl md:max-w-2xl 
        text-center px-4 sm:px-8 z-10 
        transition-all duration-700 delay-200
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
          >
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/90 font-light leading-relaxed">
              {activeCarData.description}
            </p>
          </div>

          {/* Car Slides */}
          <div className="w-full">
            <Carslides onSlideChange={setActiveCarData} />
          </div>
        </div>
      </section>

      <section className="sticky w-full bg-gray-300 flex flex-col pb-12 md:pb-16 pt-8 md:pt-12 md:min-h-screen">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 md:px-16 gap-6 lg:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight uppercase open-sans-font text-gray-800 w-full lg:max-w-[45%]">
            Amazing range performance, efficiency, and space
          </h1>

          {/* Right-side text */}
          <div className="flex flex-col gap-4 w-full lg:max-w-[45%] open-sans-font">
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quasi eligendi, similique impedit, labore esse omnis illum, rerum
              nesciunt dicta ipsum. Eligendi, suscipit. Eaque sit ipsam, aliquam
              consequuntur porro maiores?
            </p>
            <button className="w-full sm:w-48 bg-black p-3 md:p-4 text-white rounded-xl border font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition">
              Discover more
            </button>
          </div>
        </div>

        <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 w-full px-4 pointer-events-none md:top-[60%]">
          <div className="text-center font-bold uppercase text-white/40 text-[clamp(4rem,20vw,18rem)] leading-none select-none">
            Cadillac escalade
          </div>
        </div>

        <img
          src={img4}
          alt="Porsche car"
          className="drop-shadow w-full sm:w-4/5 md:w-3/4 mx-auto mt-4 md:mt-6 px-4"
        />
      </section>
      <section className="bg-white w-full min-h-screen p-2 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col px-6 lg:px-8 py-10 lg:py-0 space-y-10 lg:space-y-20 justify-center open-sans-font">
          <div>
            <p className="text-md font-reg text-gray-500 open-sans-font">
              Best work our partner
            </p>
            <h1 className="text-2xl sm:text-3xl">
              Our partnership with top equipment manufacturers provide us access
              to a large selection of hardware
            </h1>
          </div>

          <div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              officia, id labore quasi voluptates quae, illum exercitationem
              possimus sit voluptate, accusamus dolore. Esse voluptatum at
              veritatis, distinctio earum ratione quidem!
            </p>
          </div>
        </div>

        <div className="w-full p-2 lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <img
            src={partnershipImage}
            alt=""
            className="rounded-xl w-full  h-auto object-cover"
          />
        </div>
      </section>

 <section className="relative w-full min-h-screen bg-gray-300 flex items-center overflow-hidden">
      {/* Background Image (Blurred Layer) */}
      <div
        style={{
          backgroundImage: `url(${ppp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 blur-[2px]"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Left Side — Car Title */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] leading-tight font-medium text-white drop-shadow-lg text-center md:text-left">
            Get the best driving experience with glazer auto and electric cars
          </h1>
        </div>

        {/* Right Side — Email Input + Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-lg text-gray-900 bg-white/90 border border-white/40 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition"
            />

            {/* Subscribe Button */}
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base bg-gray-900 text-white shadow-md hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}

export default Home;
