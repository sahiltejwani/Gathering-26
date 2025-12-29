import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Local images
import img1 from "../images/pexels-ash-craig-122861-376464.jpg";
import img2 from "../images/pexels-chanwalrus-958545.jpg";
import img3 from "../images/pexels-ella-olsson-572949-1640772.jpg";
import img4 from "../images/pexels-fotios-photos-1279330.jpg";
import img5 from "../images/pexels-janetrangdoan-1099680.jpg";
import img6 from "../images/pexels-valeriya-842571.jpg";

const Sports = () => {
  const swiperRef = useRef(null);

  const slides = [
    { img: img1, price: 20, name: "Special Pizza" },
    { img: img2, price: 20, name: "Meat Ball" },
    { img: img3, price: 40, name: "Burger" },
    { img: img4, price: 15, name: "Fish Curry" },
    { img: img5, price: 15, name: "Pancake" },
    { img: img6, price: 20, name: "Vanilla Cake" },
  ];

  // Handle prev/next with safety checks
  const handlePrev = useCallback(() => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <div className="py-16 min-h-screen flex flex-col items-center">
      <h3 className="text-center text-gray-600 text-xl">- COEP GATHERING -</h3>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #FF6B00 0%, #FFD700 50%, #FFA500 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "4px",
          marginBottom: "-50px",
          fontFamily: "'Pacifico', 'Dancing Script', 'Great Vibes', 'Allura', cursive",
          textShadow: "0 0 30px rgba(255, 165, 0, 0.5)",
          marginBottom: "20px"
        }}
      >
        SPORTS
      </h1>

      <div className="w-full max-w-7xl px-6 flex flex-col items-center">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          onSwiper={(swiper) => {
            // Small delay to ensure swiper is fully ready
            setTimeout(() => {
              swiperRef.current = swiper;
            }, 100);
          }}
          onInit={(swiper) => {
            // Also set on init as backup
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
              style={{ height: "380px" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                ${item.price}
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg">
                {item.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - NOW WORKING */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-gray-800 text-xl font-bold z-10"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-gray-800 text-xl font-bold z-10"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sports;
