import React from "react";

const Story: React.FC = () => (
  <div className=" wavePattern2 py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Story Content */}
        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="font-[clash] text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Raja Barley Biscuit Company began as a small family bakery in the heart of Madurai, Tamil Nadu, with a simple yet profound mission: to create exceptional baked goods using traditional recipes passed down through generations. What started as a humble neighborhood bakery has grown into one of Madurai's most trusted names in artisanal baking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our founder's vision was to preserve the authentic taste of traditional South Indian biscuits and sweets while adapting to modern palates and preferences. Today, we continue this legacy with the same passion, dedication, and commitment to quality that has defined us since our inception.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="font-[clash] text-3xl sm:text-4xl font-bold text-primary mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that great baking is an art form that requires patience, skill, and the finest ingredients. Every product that leaves our bakery is a testament to our unwavering commitment to excellence. From sourcing premium ingredients to the final packaging, every step is carefully monitored to ensure that our customers receive nothing but the best.
            </p>
          </div>
        </div>

        {/* Story Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl transform rotate-2"></div>
          <div className="absolute -inset-2 bg-white rounded-2xl shadow-xl transform -rotate-1"></div>

          <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/40"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/40"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/40"></div>

            <img
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop&crop=center"
              alt="Traditional bakery interior with vintage equipment"
              className="w-full h-80 lg:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary font-bold text-sm font-[britney]">Since 1926</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Story;
