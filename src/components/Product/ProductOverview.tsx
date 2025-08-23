function ProductsOverview() {
  const productCategories = [
    {
      title: "Traditional Biscuits & Cookies",
      items: [
        "Raja Barley Biscuits - Our signature specialty",
        "Butter Cookies - Rich and crumbly delights",
        "Coconut Cookies - Tropical flavored treats",
        "Jeera Biscuits - Savory cumin-spiced classics",
        "Chocolate Chip Cookies - Western favorites with traditional touch",
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,0 14,8H16A1,1 0 0,0 17,7V5.73C16.4,5.39 16,4.74 16,4A2,2 0 0,1 18,2A2,2 0 0,1 20,4C20,4.74 19.6,5.39 19,5.73V7A3,3 0 0,1 16,10H14A3,3 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
        </svg>
      ),
    },
    {
      title: "Artisan Cakes & Pastries",
      items: [
        "Birthday & Celebration Cakes - Custom designs available",
        "Plum Cakes - Festival special rich fruit cakes",
        "Sponge Cakes - Light and fluffy vanilla classics",
        "Chocolate Cakes - Decadent cocoa creations",
        "Eggless Varieties - Accommodating all preferences",
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,6A3,3 0 0,1 15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
        </svg>
      ),
    },
    {
      title: "Sweet Confectioneries",
      items: [
        "Traditional Indian Sweets - Authentic regional flavors",
        "Brownies - Fudgy chocolate squares",
        "Tiramisu - Italian-inspired coffee delicacy",
        "Seasonal Specialties - Festival and occasion treats",
        "Custom Gift Boxes - Beautifully packaged assortments",
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className=" wavePattern relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100,20 Q180,20 180,100 Q180,180 100,180 Q20,180 20,100 Q20,20 100,20 Z" fill="currentColor" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M50,10 L60,35 L85,35 L67,52 L73,77 L50,65 L27,77 L33,52 L15,35 L40,35 Z" fill="currentColor" />
        </svg>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <div className="mx-4">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,0 14,8H16A1,1 0 0,0 17,7V5.73C16.4,5.39 16,4.74 16,4A2,2 0 0,1 18,2A2,2 0 0,1 20,4C20,4.74 19.6,5.39 19,5.73V7A3,3 0 0,1 16,10H14A3,3 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
              </svg>
            </div>
            <div className="h-px bg-gradient-to-l from-transparent via-primary to-transparent w-32"></div>
          </div>

          <h2 className="font-[britney] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight mb-6 drop-shadow-sm">
            Our Product
          </h2>
          <h3 className="font-[britney] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent leading-tight mb-8 drop-shadow-sm">
            Collection
          </h3>

          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="h-px bg-gradient-to-l from-transparent via-primary to-transparent w-24"></div>
          </div>
        </div>

        {/* Paragraph Section - paragraphs only, no card */}
        <div className="mx-auto space-y-10 text-center text-gray-700 px-2 sm:px-0">
          <p className="text-base sm:text-lg leading-relaxed">
            At Raja Barley Biscuit Company, we take immense pride in our diverse range of handcrafted baked goods that have been delighting customers for generations. Our signature barley biscuits, made from the finest quality ingredients, represent the perfect blend of traditional recipes and modern baking techniques.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Our extensive product portfolio includes everything from crispy traditional biscuits and rich butter cookies to elaborate celebration cakes and artisanal confectioneries, catering to all tastes and preferences.
          </p>
        </div>

        {/* Product Categories Section */}
        <div className=" flex justify-center items-center flex-wrap gap-4 space-y-10 mt-16">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h4 className="font-[clash] text-xl sm:text-2xl font-semibold text-primary">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/20 max-w-4xl mx-auto mt-16">
        <h5 className="font-[britney] text-2xl sm:text-3xl font-bold text-primary mb-4">
          Experience the Difference
        </h5>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto px-2 sm:px-0">
          Visit our bakery in Madurai to explore our complete range of fresh, handcrafted products. Custom orders and bulk quantities available for all occasions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-[britney] text-lg tracking-wide min-w-[200px]">
            View Full Menu
          </button>
          <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-[britney] text-lg tracking-wide min-w-[200px]">
            Place Order
          </button>
        </div>
      </div> */}

      {/* Bottom Decorative Element */}
      <div className="flex items-center justify-center mt-16 px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-64"></div>
        <div className="mx-6">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5L12,2Z" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent w-64"></div>
      </div>
    </div>
  );
}

export default ProductsOverview;
