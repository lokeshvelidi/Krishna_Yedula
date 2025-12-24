import React from "react";
import d1 from "../assets/Donation/d1.jpeg";
import d2 from "../assets/Donation/d2.jpeg";
import d3 from "../assets/Donation/d3.jpeg";
import d4 from "../assets/Donation/d4.jpeg";

export default function CovidReliefImpact() {
  return (
    <section className="w-full py-20 bg-gradient-to-t from-blue-500 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl text-black text-[48px] leading-[85px] font-serif font-semibold tracking-tight text-center mb-6 -mt-12 bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent">
            COVID Relief — Logistics Support Initiative
          </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Coordinated dispatch of <strong>30 truck loads</strong> of medical
          equipment to <strong>30 district hospitals</strong> in Telangana
          during COVID response — in collaboration with SCSC & Cyberabad Police
          under leadership of Sajjanar Garu. Supported by donors and volunteers
          who made this impact possible.
        </p>

        {/* tags */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="px-4 py-2 bg-white rounded-xl shadow border text-sm font-medium">Beds & Equipment</span>
          <span className="px-4 py-2 bg-white rounded-xl shadow border text-sm font-medium">PPE Kits / N95</span>
          <span className="px-4 py-2 bg-white rounded-xl shadow border text-sm font-medium">Sanitizers & Medical Consumables</span>
          <span className="px-4 py-2 bg-white rounded-xl shadow border text-sm font-medium">Wheel Chairs & Stretchers</span>
        </div>

        {/* 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <div className="group overflow-hidden rounded-2xl shadow-2xl border border-gray-300">
            <img
              src={d1}
              className="w-full h-72 object-cover group-hover:scale-110 duration-700"
              alt="covid impact 1"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-300 scale-110 md:scale-125">
            <img
              src={d2}
              className="w-full h-72 object-cover group-hover:scale-110 duration-700"
              alt="covid impact 2"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-300">
            <img
              src={d4}
              className="w-full h-72 object-cover group-hover:scale-110 duration-700"
              alt="covid impact 3"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
