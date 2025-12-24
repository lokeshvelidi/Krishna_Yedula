import React, { useState } from "react";
import main1 from "../assets/Csr/img7.jpeg";
import main2 from "../assets/Csr/img2.jpeg";
import main3 from "../assets/Csr/img3.jpeg";
import main4 from "../assets/Csr/img4.jpeg";
import main5 from "../assets/Csr/img5.jpeg";
import main6 from "../assets/Csr/img1.jpeg";
import main7 from "../assets/Csr/img8.jpeg";
// import main8 from "../assets/Csr/img9.jpeg";

export default function Csr() {
  const images = [main1, main2, main3, main4, main5, main6, main7];
  const [currentImg, setCurrentImg] = useState(images[0]);

  return (
    <section className="w-full bg-white py-0 px-6 mb-12 overflow-x-hidden">

        <h2 className="text-3xl md:text-5xl text-[82px] leading-[85px] font-serif font-semibold bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent text-center py-10 mb-10 text-gray-900">
            CSR & Sustainability Conference
          </h2>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-[37%_63%] gap-12 items-start">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          

          <p className="text-lg leading-relaxed text-gray-700">
            ASSOCHAM’s Southern Regional Council CSR & Sustainability Conference
            themed <b>“ESG Leadership - Building a Sustainable World Together”</b> was
            held at Bangalore on 28th June.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            The conference brought together industry leaders, corporate
            representatives, government officials, CSR practitioners and young
            professionals to share impactful initiatives that are driving change
            for the better future.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Discussions focused on responsible business practices, human impact,
            environmental safeguarding and how sustainability is shaping future
            policies and growth of our nation.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE + THUMBNAILS */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <img
            src={currentImg}
            alt="Main"
            className="w-full h-[480px] object-cover rounded-2xl shadow-xl mb-6"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 flex-wrap justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setCurrentImg(img)}
                className={`w-24 h-20 object-cover cursor-pointer rounded-xl border-4 transition-all
                ${currentImg === img ? "border-blue-600" : "border-transparent"}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
