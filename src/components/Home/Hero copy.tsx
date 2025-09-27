import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="m-0 p-4 sm:p-6 lg:p-8 w-full  h-[90vh] md:h-screen flex items-center justify-center relative overflow-hidden">
        <div className="flex items-center justify-center relative w-full h-full max-w-7xl mx-auto">
          {/* Left text - slides in from left */}
          <motion.p 
            className="font-[britney] text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] absolute top-[130px] sm:top-8 md:top-12 lg:top-16 xl:top-20  left-0 text-primary font-extrabold text-shadow-accent-foreground text-shadow-2xs leading-none"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 0.3 
            }}
          >
            <span className="block sm:inline">Timeless</span>
            <span className="block sm:inline sm:ml-4 xl:block">Taste</span>
          </motion.p>
          
          {/* Right text - slides in from right */}
          <motion.p 
            className="font-[britney] text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] absolute bottom-[110px] sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 right-0 font-extrabold text-primary text-shadow-accent-foreground text-shadow-2xs leading-none text-right"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 0.5 
            }}
          >
            <span className="block">Homemade</span>
            <span className="block">Bite</span>
          </motion.p>

          {/* Circular company tag */}
          <motion.div 
            className="absolute top-[150px] sm:top-6 lg:top-16 right-4 sm:right-6 lg:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-center border-2 sm:border-3 lg:border-4 border-accent shadow-lg z-10"
            // initial={{ scale: 0, rotate: -180 }}
            // animate={{ scale: 1, rotate: 0 }}
            // transition={{ 
            //   duration: 1, 
            //   ease: "easeOut",
            //   delay: 1 
            // }}
          >
            <div className="text-xs sm:text-sm font-[clash]">
              <div>EST.</div>
              <div className="text-lg sm:text-xl lg:text-2xl font-medium font-[clash]">1926</div>
            </div>
          </motion.div>

          {/* Center image with fade in */}
          <motion.div className="relative flex items-center justify-center z-0">
            <motion.img 
              src={"/images/hero-Photoroom.png"} 
              alt="Raja Barley Biscuit Company"
              className="max-w-full h-auto max-h-[50vh] sm:max-h-[55vh] lg:max-h-[60vh] object-contain"
            //   initial={{ opacity: 0, scale: 0.8 }}
            //   animate={{ opacity: 1, scale: 1 }}
            //   transition={{ 
            //     duration: 1, 
            //     ease: "easeOut",
            //     delay: 0.8 
            //   }}
            />
          </motion.div>
        </div>
        
        {/* Company description */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 max-w-lg sm:max-w-md lg:max-w-xl xl:max-w-2xl"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          <p className="text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed font-[satoshi] font-semibold">
            Crafting premium biscuits with traditional recipes and finest ingredients for nearly a century. 
            A legacy of taste, quality, and trust.
          </p>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-4 sm:left-8 lg:left-16 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2 
          }}
        />
        
        {/* Floating elements - subtle small vertical float, reduced size and opacity */}
           <motion.div
             className="absolute top-1/4 left-10 w-3 h-3 bg-accent rounded-full opacity-40 pointer-events-none"
             animate={{
               y: [0, -12, 0],
             }}
             transition={{
               duration: 5,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
     
           <motion.div
             className="absolute bottom-1/4 right-16 w-2 h-2 bg-primary rounded-full opacity-30 pointer-events-none"
             animate={{
               y: [0, 10, 0],
               x: [0, 6, 0],
             }}
             transition={{
               duration: 6,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1,
             }}
           />
      </div>
    </section>
  );
};

export default Hero;