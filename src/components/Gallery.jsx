import React, { useState } from "react";

import img from "../assets/book.jpg";
import img1 from "../assets/new1.jpg";
import img2 from "../assets/news1.jpg";
import img3 from "../assets/news2.jpg";
import img4 from "../assets/news3.jpg";
import img5 from "../assets/news4.jpg";
import img6 from "../assets/news5.jpg";
import img7 from "../assets/news6.jpg";
import img8 from "../assets/news7.jpg";
import img9 from "../assets/new2.jpg";
import img10 from "../assets/neww3.jpg";
import img11 from "../assets/new4.jpg";
import img12 from "../assets/new5.jpg";
import img13 from "../assets/new6.jpg";
import img14 from "../assets/new7.jpg";
import img15 from "../assets/new8.jpg";
import img16 from "../assets/new9.jpg";
import img17 from "../assets/new10.jpg";
import img18 from "../assets/new11.jpg";
import { px } from "framer-motion";

const images = [
  img, img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18
];

const GalleryKrishna = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div className="w-full text-start xl:px-32 lg:px-12 xl:mt-10 bg-gradient-to-br from-white via-[#E8F9FF]">
        <h1 className="text-4xl md:text-7xl sm:px-8 font-bold lg:text-6xl font-serif text-gray-800 mb-4">THE EXTRA MILE 
          <span className="text-3xl sm:px-8N md:text-4xl"><br/>BOOK LAUNCH</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-left text-gray-600 mx-auto" >
          Explore our collection of memorable moments and achievements.<br/> Click on any image to view it in detail.
        </p>
      </div>
    <div className="w-full min-h-screen flex flex-col xl:-mt-48 lg:-mt-48 lg:flex-row px-5 md:px-10 py-10 gap-10 bg-gradient-to-br from-white via-[#E8F9FF] to-[#C4E1EC]">
      {/* HEADING AND TEXT */}
      

      {/* LEFT SECTION — Mobile + Tablet + Desktop */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center">

        {/* ---------------- MOBILE VIEW ---------------- */}
        <div className="flex flex-col md:hidden w-full items-center">
      
          {/* Main image */}
          <div className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-xl bg-white border-4 border-white">
            <img
              src={images[selectedIndex]}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails BELOW main image */}
          <div className="grid grid-cols-5 gap-4 mt-5 w-full max-w-[350px]">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-[50px] h-[50px] rounded-lg overflow-hidden border-4
                  ${selectedIndex === index ? "border-blue-500" : "border-white"}`}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>


        {/* ---------------- TABLET VIEW ---------------- */}
        <div className="hidden md:flex lg:hidden relative w-full max-w-[650px] h-[600px] items-center justify-center">

          {/* Main Image */}
          <div className="w-[350px] h-[350px] rounded-xl overflow-hidden shadow-2xl border-8 border-white z-20 bg-white">
            <img
              src={images[selectedIndex]}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Circular thumbnails (scaled) */}
          {images.map((src, index) => {
            const angle = (index / images.length) * 360;
            const radius = 260; // smaller radius for tablet

            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`absolute rounded-xl overflow-hidden shadow-xl border-4
                  ${selectedIndex === index ? "border-blue-400 scale-110" : "border-white"}
                  transition-transform hover:scale-110`}
                style={{
                  width: "70px",
                  height: "70px",
                  top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px - 35px)`,
                  left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px - 35px)`,
                }}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>


        {/* ---------------- DESKTOP VIEW (UNCHANGED) ---------------- */}
        <div className="hidden lg:flex relative w-full max-w-[900px] h-[800px] items-center justify-center">

          {/* Center Image */}
          <div
            className="w-[500px] h-[500px] rounded-xl overflow-hidden shadow-2xl border-8 border-white z-20 bg-white"
          >
            <img
              src={images[selectedIndex]}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Circle thumbnails (original desktop design) */}
          {images.map((src, index) => {
            const angle = (index / images.length) * 360;
            const radius = 380;

            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`absolute rounded-xl overflow-hidden shadow-xl border-4
                  ${selectedIndex === index ? "border-blue-400 scale-110" : "border-white"}
                  transition-transform hover:scale-110`}
                style={{
                  width: "90px",
                  height: "90px",
                  top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px - 45px)`,
                  left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px - 45px)`,
                }}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="lg:w-[25%] w-full flex items-center justify-center">
        <h1 className="text-[120px] xl:text-[150px] m:text-[80px] lg:text-[140px] 
                       leading-[120px] md:leading-[150px] lg:leading-[160px]
                       font-extrabold tracking-widest text-gray-800 
                       whitespace-pre-line font-serif font-sans-serif text-center ">
          {"K\nR\nI\nS\nH\nN\nA\n"}
          <span className="text-3xl md:text-4xl">GARU</span>
        </h1>
        
      </div>
    </div>
    </div>
  );
};

export default GalleryKrishna;
