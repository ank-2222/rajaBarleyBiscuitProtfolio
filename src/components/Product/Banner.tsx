
function Banner() {
  return (
    <div>
 <div className=" inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl w-full">
          {/* Main Banner Card */}
          <div className="relative bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>

            <div className="relative px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 text-center">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-20"></div>
                  <div className="mx-4">
                    <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,0 14,8H16A1,1 0 0,0 17,7V5.73C16.4,5.39 16,4.74 16,4A2,2 0 0,1 18,2A2,2 0 0,1 20,4C20,4.74 19.6,5.39 19,5.73V7A3,3 0 0,1 16,10H14A3,3 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                    </svg>
                  </div>
                  <div className="h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent w-20"></div>
                </div>
                <h3 className="text-sm sm:text-base text-yellow-300 font-semibold tracking-widest uppercase mb-2">
                  Artisan Bakery
                </h3>
              </div>

              {/* Main Title */}
              <h1 className="font-[britney] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 leading-tight mb-6">
                Handcrafted Delights for
                <br className="hidden sm:block" />
                <span className="text-white"> Every Celebration</span>
              </h1>

              {/* Description */}
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-medium">
                  Raja Barley Biscuit Company's exquisite collection of traditional biscuits, cakes, and confectioneries 
                  are perfect for festivals, special occasions, or everyday indulgence. Each item is crafted with premium 
                  ingredients and time-honored recipes.
                </p>
              </div>


              {/* Bottom Decorative Element */}
              <div className="flex items-center justify-center mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-32"></div>
                <div className="mx-4">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
                <div className="h-px bg-gradient-to-l from-transparent via-white/30 to-transparent w-32"></div>
              </div>
            </div>
          </div>

     

      
        </div>
      </div>
</div>
  )
}

export default Banner