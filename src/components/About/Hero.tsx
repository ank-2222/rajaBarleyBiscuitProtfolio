import React from "react";

const Hero: React.FC = () => (
  <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden  bg-[url('/images/heroteam.jpg')] bg-center  bg-cover bg-no-repeat py-20  ">
    <div className="absolute top-0 left-0 w-full h-full bg-black/20 " />
    <div className="relative py-20 lg:py-32">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100,20 Q180,20 180,100 Q180,180 100,180 Q20,180 20,100 Q20,20 100,20 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <div className="mx-4">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,0 14,8H16A1,1 0 0,0 17,7V5.73C16.4,5.39 16,4.74 16,4A2,2 0 0,1 18,2A2,2 0 0,1 20,4C20,4.74 19.6,5.39 19,5.73V7A3,3 0 0,1 16,10H14A3,3 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
              </svg>
            </div>
            <div className="h-px bg-gradient-to-l from-transparent via-primary to-transparent w-32"></div>
          </div>

          <h1 className="font-[clash] text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-2 drop-shadow-sm">
            About Our
          </h1>
          <h2 className="font-[clash] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-sm">
            Heritage
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-white  font-medium">
              A legacy of traditional baking excellence that has been sweetening lives in Madurai for nearly three decades
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
