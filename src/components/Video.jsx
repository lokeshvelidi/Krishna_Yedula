import React from "react";

function Video() {
  return (
    <section className=" py-10 sm:py-16 md:py-20 flex flex-col items-center text-center px-4 sm:px-6">
      {/* Section Heading */}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10">
        Virtusa Leader
      </h2>
      <p className="text-gray-100 max-w-2xl mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">
        A glimpse into the journey of compassion, dedication, and community
        service. Watch how we make a difference through our social and
        humanitarian efforts.
      </p>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidd en shadow-2xl group">
        {/* Facebook Video Embed */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D191150637391233&show_text=0&width=560"
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
            title="Virtusa Leader Video"
          ></iframe>
        </div>

        {/* Blue overlay on hover */}
        {/* <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"></div> */}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
          <h3 className="text-white text-xl sm:text-2xl font-semibold">Together We Care</h3>
          <p className="text-gray-200 text-sm sm:text-base mt-2">
            Empowering communities with empathy and action.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Video;
