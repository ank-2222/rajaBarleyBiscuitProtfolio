import React from "react";

const CallToAction: React.FC = () => (
  <div className="py-16 bg-gradient-to-br from-primary/90 via-primary to-primary/90 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="bakery-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bakery-pattern)" />
      </svg>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-8">
        <svg className="w-16 h-16 text-yellow-400 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5L12,2Z" />
        </svg>

        <h3 className="font-[britney] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-yellow-400">
          Ready to Taste Tradition?
        </h3>
        <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
          Visit our bakery today and discover why Raja Barley Biscuit Company has been Madurai's favorite for generations
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 
        <a
          href="tel:+91 4522536161"
          className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-[britney] text-lg tracking-wide min-w-[200px]"
        >
          Call Now
        </a>
      </div>

    
    </div>
  </div>
);

export default CallToAction;
