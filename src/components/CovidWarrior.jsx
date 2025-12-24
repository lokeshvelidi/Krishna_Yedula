// import React from "react";
// import { motion } from "framer-motion";
// import img1 from "../assets/CovidWarrior/c1.jpeg";
// import img2 from "../assets/CovidWarrior/c2.jpeg";

// export default function CovidWarrior() {
//   return (
//     <section className="w-full bg-white py-12 flex flex-col items-center px-4">
//       <h2 className="text-3xl md:text-5xl text-black text-[82px] leading-[85px] px-40 font-serif font-semibold bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent text-center mb-10">
//         Covid warriors recognised by Telangana Government
//       </h2>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Image */}
//         <motion.img
//           src={img1}
//           initial={{ x: -200, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="w-full rounded-xl shadow-lg"
//         />

//         {/* Right Image */}
//         <motion.img
//           src={img2}
//           initial={{ x: 200, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="w-full rounded-xl shadow-lg"
//         />
//       </div>

//       <motion.p
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mt-12 text-lg leading-relaxed text-gray-700"
//       >
//         IT Minister, K T Rama Rao, who gave away the special awards, congratulated the winners and appreciated their efforts during the time of an unprecedented pandemic.<br/><br/>
//         Hyderabad: Individuals, voluntary organisations and corporates from Hyderabad and across Telangana who had extended much-needed help to desperate patients during the time of the successive Covid waves were recognised and felicitated by the Telangana Social Impact Group (TSIG), the CSR wing of the State government, here on Monday.<br/><br/>
//         SCSC was honoured for its humongous contributions during Covid pandemic, this morning in an event by Hon'ble Minister for IT, MAUD Sri KT Rama Rao garu in presence of Mr Sonu Sood and Jayesh Ranjan Garu, IAS, Prl Secy, IT&C. We thank all our members who generously donated for this and we are pleased to dedicate this recognition to all those 500+ strong selfless Volunteers who worked day & night to save lives. It was a great Team work.
//       </motion.p>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/CovidWarrior/c1.jpeg";
import img2 from "../assets/CovidWarrior/c2.jpeg";

export default function CovidWarrior() {
  return (
    <section className="w-full overflow-x-hidden bg-white py-12 flex flex-col items-center px-4 sm:px-6 md:px-10">

      {/* -------- HEADING -------- */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          font-serif 
          font-semibold 
          bg-gradient-to-r from-[#101e46] to-[#3f71d1]
          bg-clip-text text-transparent 
          text-center 
          leading-snug
          max-w-3xl 
          mb-10
        "
      >
        Covid warriors recognised by Telangana Government
      </h2>

      {/* -------- IMAGE GRID -------- */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">

        {/* Left Image */}
        <motion.img
          src={img1}
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl shadow-xl object-cover"
        />

        {/* Right Image */}
        <motion.img
          src={img2}
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl shadow-xl object-cover"
        />
      </div>

      {/* -------- PARAGRAPH -------- */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          max-w-4xl 
          mt-10 
          text-gray-700 
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          text-justify
          px-1 sm:px-2
        "
      >
        IT Minister, K T Rama Rao, who gave away the special awards,
        congratulated the winners and appreciated their efforts during the time
        of an unprecedented pandemic.
        <br /><br />
        Hyderabad: Individuals, voluntary organisations and corporates from
        Hyderabad and across Telangana who had extended much-needed help to
        desperate patients during the time of the successive Covid waves were
        recognised and felicitated by the Telangana Social Impact Group (TSIG),
        the CSR wing of the State government.
        <br /><br />
        SCSC was honoured for its humongous contributions during the Covid
        pandemic, this morning in an event by Hon'ble Minister for IT, MAUD Sri
        KT Rama Rao garu in presence of Mr Sonu Sood and Jayesh Ranjan Garu,
        IAS, Prl Secy, IT&C. We thank all our members who generously donated for
        this and we dedicate this recognition to all those 500+ strong selfless
        Volunteers who worked day & night to save lives. It was a great team
        effort.
      </motion.p>

    </section>
  );
}

