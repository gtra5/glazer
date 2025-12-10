"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/posche.png";
import img2 from "../assets/Firefly_i want you to give me a side view of a Mercedes AMG GT (2000x1000) and it should be b 555172.png";
import img3 from "../assets/audi4.png";
import img4 from "../assets/escalade.avif";
import img13 from "../assets/Remove background project (4).png";
import img6 from "../assets/porsche-logo-2014-wordmark-download (1).png";
import img8 from "../assets/lamborghini-urus-logo-download.png";
import img9 from "../assets/bmwi8 2.png";
import img7 from "../assets/Remove background project (8).png";
import img10 from "../assets/download (6).png";
import img11 from "../assets/Aston Martin.png";
import img12 from "../assets/Remove background project (1).png";
import img14 from "../assets/Remove background project (5).png";
import img15 from "../assets/Remove background project (7).png";
import img16 from "../assets/6409f42fe38d5e0023b8214e-ferrari-roma-spider-logo-header.avif";
import img17  from "../assets/audi-logo-2016-download.png";
import img18 from "../assets/Logo-Mercedes-Benz-500x281.png";
import img19 from "../assets/bmw-logo-1997-download.png";
import img20 from "../assets/tesla-logo-2007-wordmark-download.png";
import img21 from "../assets/McLaren_Logo_PNG(4).png";
import img22 from "../assets/Aston_Martin_(10).png";
import img23 from "../assets/Bugatti_Logo_PNG(16).png";
import img24 from "../assets/cadillac-logo-2021-full-download.png";
import img25 from "../assets/GT_R_logo_PNG_(10).png";
const images = 
[
    {
    "id": 1,
    "name": "Lamborghini urus",
    "logo": img8,
    "image": img15,
    "description": "A V12-powered supercar that combines extreme performance with bold Italian design."
  },
  {
    "id": 2,
    "name": "Porsche  911 ",
    "logo": img6,
    "image": img1,
    "description": "A timeless sports car known for its precision handling, rear-engine design, and thrilling performance."
  },

  {
    "id": 3,
    "name": "Roma spider", 
    "logo": img16,
    "image": img3,
    "description": "A plug-in hybrid supercar from Ferrari with futuristic speed and advanced aerodynamic engineering."
  },
  {
    "id": 4,
    "name": "Audi R8 V10",
    "logo": img17,
    "image": img12,
    "description": "A mid-engine V10 supercar offering exotic performance with daily comfort and Audi luxury."
  },
  {
    "id": 5,
    "name": "Mercedes AMG GT",
    "logo": img18,
    "image":img2,
    "description": "A high-performance grand tourer with powerful engineering and a sleek fastback design."
  },
  {
    "id": 6,
    "name": "BMW i8",
    "logo": img19,
    "image": img9,
    "description": "A futuristic plug-in hybrid sports car with butterfly doors and innovative lightweight materials."
  },
  {
    "id": 7,
    "name": "Tesla Model   ",
    "logo": img20,
    "image": img7,
    "description": "An all-electric luxury sedan with record-breaking acceleration and advanced autopilot features."
  },
  {
    "id": 8,
    "name": "McLaren 720S",
    "logo": img21,
    "image": img10,
    "description": "An ultra-light supercar with twin-turbo V8 power and exceptional track performance."
  },
  {
    "id": 9,
    "name": "Aston Martin ",
    "logo": img22,
    "image": img11,
    "description": "A luxurious grand tourer blending British elegance with powerful V12 performance."
  },
  {
    "id": 10,
    "name": "Bugatti Chiron",
    "logo": img23,
    "image": img13,
    "description": "A hypercar with a quad-turbo W16 engine delivering unmatched engineering and speed."
  },
  {
    "id": 11,
    "name": "Cadillac Escalade",
    "logo": img24,
    "image": img4,
    "description": "A legendary American muscle car with supercharged V8 power and an aggressive stance."
  },
  {
    "id": 12,
    "name": "Nissan GT-R ",
    "logo": img25,
    "image": img14,
    "description": "Known as Godzilla, this Japanese supercar features all-wheel drive and incredible performance technology."
  }
];

function Carslides({ onSlideChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);

    if (onSlideChange) {
      onSlideChange({
        name: images[newIndex].name,
        description: images[newIndex].description,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="relative group w-full">

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          onSlideChange={handleSlideChange}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            480: { slidesPerView: 1.1, spaceBetween: 25 },
            640: { slidesPerView: 1.2, spaceBetween: 30 },
            768: { slidesPerView: 1.5, spaceBetween: 35 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
            1440: { slidesPerView: 3.2, spaceBetween: 45 },
          }}
          className="overflow-hidden w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative w-full
                  h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] 
                  flex flex-col items-center justify-center 
                  transition-all duration-500 
                  ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}
                `}
                >
                  {/* Logo */}
                  <img
                    src={image.logo}
                    alt={`${image.name} Logo`}
                    className="absolute top-4 left-1/2 -translate-x-1/2 
                    w-20 sm:w-32 md:w-40 lg:w-48 object-contain z-20"
                  />

                  {/* Car */}
                  <img
                    src={image.image}
                    alt={image.name}
                    className="
                      w-[100%] sm:w-[110%] md:w-[120%] 
                      h-auto object-contain
                    "
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <button
          className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/70 hover:bg-white text-slate-900 
          p-2 sm:p-3 md:p-4 
          rounded-full shadow-md transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/70 hover:bg-white text-slate-900 
          p-2 sm:p-3 md:p-4 
          rounded-full shadow-md transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>
    </div>
  );
}

export default Carslides;
