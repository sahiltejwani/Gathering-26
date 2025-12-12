import React from "react";
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

const Events = () => {
  const slides = [
    { img: img1, price: 20, name: "Special Pizza" },
    { img: img2, price: 20, name: "Meat Ball" },
    { img: img3, price: 40, name: "Burger" },
    { img: img4, price: 15, name: "Fish Curry" },
    { img: img5, price: 15, name: "Pancake" },
    { img: img6, price: 20, name: "Vanilla Cake" },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen flex flex-col items-center">

      <h3 className="text-center text-gray-600">- Popular Delivery -</h3>
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-10">
        Trending Food
      </h1>

      <div className="w-full max-w-7xl px-6 flex flex-col items-center">

        <Swiper
          effect={"coverflow"}
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
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="w-full"
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl bg-white"
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

        {/* CUSTOM ARROWS UNDER SLIDER */}
        <div className="flex items-center gap-6 mt-6">
          <button className="prev-btn w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition">
            ←
          </button>

          <button className="next-btn w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
