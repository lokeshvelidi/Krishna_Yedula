import React from "react";
import { motion } from "framer-motion";
import d1 from "../assets/Donation/d1.jpeg";
import d2 from "../assets/Donation/d2.jpeg";
import d3 from "../assets/Donation/d3.jpeg";
import d4 from "../assets/Donation/d4.jpeg";

export default function Lorry() {

  const staggerCards = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: .8, ease: "easeOut" } }
  }

  return (
    <section className="relative w-full py-28 bg-gradient-to-tr from-[#f7f9ff] via-white to-[#eef3ff] text-gray-900 overflow-hidden">

      {/* floating blurred glows */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-400/10 blur-[180px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{opacity:0,y:40}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}} 
        transition={{duration:0.9}}
        className="max-w-7xl mx-auto px-6"
      >

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent">
            COVID Relief — Logistics Support Initiative
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Coordinated and mobilized <span className="font-semibold text-gray-900">30 major medical equipment truck dispatches</span>
            to <span className="font-semibold text-gray-900">district hospitals across Telangana</span> — strengthening critical pandemic response in collaboration with
            SCSC, Cyberabad Police, Volunteers, NGOs and Public Sector Donors.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          {["Ventilators & ICU Support","PPE / N95 Kits","Sanitization Drives","Mobility & Wheel Chairs"].map((t,i)=>(
            <motion.span
              initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
              transition={{delay: i * 0.15, duration:.6}}
              key={i} 
              className="px-4 py-1.5 bg-white backdrop-blur-lg rounded-full border border-gray-300 text-sm font-medium shadow-sm hover:bg-gray-50"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* CARDS */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20"
        >
          {[d1,d2,d3,d4].map((img,i)=>(
            <motion.div 
              key={i}
              variants={staggerCards}
              whileHover={{ scale:1.04, rotate:0.5, y:-8 }}
              transition={{ type:"spring", stiffness:120 }}
              className={`group relative overflow-hidden rounded-3xl shadow-xl border border-gray-200 ${
                i === 1 ? "md:mt-14" : i===2? "md:-mt-10" : ""
              }`}
            >
              <img src={img} className="w-full h-[380px] object-cover group-hover:scale-110 duration-700" />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
