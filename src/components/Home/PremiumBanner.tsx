import { Link } from "react-router-dom";

function PremiumBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100,20 Q180,20 180,100 Q180,180 100,180 Q20,180 20,100 Q20,20 100,20 Z" fill="currentColor"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M50,10 L60,35 L85,35 L67,52 L73,77 L50,65 L27,77 L33,52 L15,35 L40,35 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Decorative Header */}
            <div className="flex items-center mb-6">
              <div className="h-px bg-gradient-to-r from-primary to-transparent w-16"></div>
              <div className="mx-4">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,0 14,8H16A1,1 0 0,0 17,7V5.73C16.4,5.39 16,4.74 16,4A2,2 0 0,1 18,2A2,2 0 0,1 20,4C20,4.74 19.6,5.39 19,5.73V7A3,3 0 0,1 16,10H14A3,3 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                </svg>
              </div>
              <div className="h-px bg-gradient-to-l from-primary to-transparent w-16"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-[clash] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight drop-shadow-sm">
                Crafted with
              </h1>
              <h2 className="font-[clash] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight drop-shadow-sm">
                Tradition & Love
              </h2>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center py-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="h-px bg-gradient-to-l from-transparent via-primary to-transparent w-24"></div>
            </div>

            {/* Description Paragraph */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium tracking-wide">
                Experience the perfect blend of time-honored recipes and contemporary culinary artistry. Each of our handcrafted delicacies tells a story of passion, quality, and unwavering dedication to excellence.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From our signature brownies baked to perfection, to our artisanal cakes that celebrate life's sweetest moments – every creation is a testament to our commitment to bringing you the finest flavors that have been cherished for generations.
              </p>
            </div>

            {/* Traditional Quote */}
            <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary">
              <div className="absolute top-2 left-6 text-primary/30">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                </svg>
              </div>
              <p className="text-primary font-semibold italic text-lg ml-6 font-[satoshi]">
                "Every bite is a celebration of heritage and flavor"
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex items-center space-x-4 pt-4">
              <Link  to={"/products"} className="bg-accent hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-[satoshi] text-lg tracking-wide">
                Explore Our Menu
              </Link>
              <Link to="/about" className="flex items-center text-primary hover:text-primary/80 cursor-pointer transition-colors duration-300">
                <span className="font-semibold mr-2">About Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Traditional Frame Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl transform rotate-2"></div>
            <div className="absolute -inset-2 bg-white rounded-2xl shadow-xl transform -rotate-1"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/40"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/40"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/40"></div>

              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Artisan bakery with traditional baking"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-primary font-bold text-sm font-[britney]">Est. Tradition</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5L12,2Z"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  );
}

export default PremiumBanner;