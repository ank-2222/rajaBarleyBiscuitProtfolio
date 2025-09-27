import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden mt-12 md:mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8 sm:py-12">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 mt-4 sm:mt-6 lg:mt-10 order-2 lg:order-1"
          >
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-primary font-[clash] leading-none">
                Freshly Baked
                <br /> 
                <span>Delights</span>
              </h1>
              <p className="text-base sm:text-lg text-accent italic font-medium">
                தினமும் புதிய சுவை • Every Day
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 max-w-xl">
              <p className="text-lg sm:text-xl text-primary font-semibold tracking-wide leading-[125%]">
                Discover the magic of freshly baked goodness, handcrafted with 
                love and the finest ingredients. Delight in every bite, every day.
              </p>
              <p className="text-amber-700 font-medium text-sm sm:text-base">
                பாரம்பரிய சுவையுடன் • Traditional flavors with modern love
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                to="/products"
                className="bg-amber-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:bg-amber-900 transition-colors text-base sm:text-lg text-center"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="border-2 border-amber-800 text-amber-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-800 hover:text-white transition-colors text-base sm:text-lg text-center"
              >
                Explore Our Story
              </Link>
            </div>

            {/* Quality badges */}
            <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
              <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xs sm:text-sm font-semibold text-amber-800">100% சுத்தம்</span>
                <p className="text-xs text-amber-600">Pure & Fresh</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xs sm:text-sm font-semibold text-amber-800">கைவினை</span>
                <p className="text-xs text-amber-600">Handcrafted</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main product image */}
              <div className="relative z-10">
                <img 
                  src="/images/hero-Photoroom.png" 
                  alt="Fresh Baked Goods - Raja Barley Biscuits"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-xl h-auto object-contain filter drop-shadow-2xl rounded-lg"
                />
              </div>

              {/* Floating quality badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0 }}
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-amber-800 to-orange-700 rounded-full flex items-center justify-center text-white z-20 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-xs font-bold">சிறப்பு</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold">97+</div>
                  <div className="text-xs">Years</div>
                </div>
              </motion.div>

              {/* Tamil text overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"
              >
                <p className="text-amber-800 font-medium text-xs sm:text-sm">
                  நம்மூர் சுவை
                </p>
                <p className="text-amber-600 text-xs">
                  Hometown Taste
                </p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-16 sm:top-20 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full opacity-70"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -8, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2 
                }}
                className="absolute bottom-24 sm:bottom-32 -left-8 sm:-left-12 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-800 via-orange-600 to-amber-800 opacity-60"></div>
    </section>
  );
};

export default Hero;