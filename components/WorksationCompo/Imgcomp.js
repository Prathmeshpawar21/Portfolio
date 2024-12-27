import React from 'react';

const Imgcomp = ({ src, alt = "Image", className = "" }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src} // Dynamic src
        alt={alt} // Dynamic alt text
        className={`rounded-2xl w-full max-w-screen-lg h-auto object-cover shadow-2xl shadow-white-500/50 ${className}`} // Rounded corners and dynamic classes
        style={{ boxShadow: '0 0 25px 20px rgb(255, 255, 255)' }} // Larger spread
      />



      
    </div>
  );
};

export default Imgcomp;

