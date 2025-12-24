import React from 'react'
import HeroSlider from './HeroSlider';
import Achievement from "./Achievements";
// import CrossBorderSection from "./CrossBorderSection";
import Corona from './Corona';
import Animals from './Animals';
// import Blog2 from './Blog2';

function Blog() {
  return (
    <div>
      <div className='text-5xl w-full h-36 font-extrabold font-serif italic mb-6 justify-center items-center bg-gradient-to-r from-white to-blue-400 text-black rounded-3xl flex shadow-lg'>Blog Page</div>
        
        <Achievement />
        <HeroSlider />
        <Corona />
        <Animals />
        {/* <Blog2 /> */}
        
    </div>
  )
}

export default Blog