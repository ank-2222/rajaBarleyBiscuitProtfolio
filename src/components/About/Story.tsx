import React from "react";

const Story: React.FC = () => (
  <div className=" wavePattern2 py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        {/* Story Content */}
        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="font-[clash] text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
           Raja Barley Biscuit Company was founded in 1926 by Thiru Sangupillai, a humble man who built his business not with financial backing or outside help, but with faith, discipline, honesty, and true friendship. With the support of his wife Chellamal, he began by making Soospori biscuits, also known as ghee biscuits, which he carried on his head and sold from shop to shop. His first store in Madurai was unsuccessful, leading him to Rajapalayam before returning once again to Madurai, where his biscuits finally found success. Inspired by his popularity in Rajapalayam, the company was named Raja Barley Biscuit Company. The journey was far from easy, with growth coming only after immense hardship and perseverance, but with the guidance and encouragement of his friend and guru, Guruvaraja, Sangupillai continued with determination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
         Thiru Maarimuthu, born in 1939, carried forward this legacy with equal dedication. In 1966, he introduced modern bakery practices by bringing the first bread-slicing machine to Madurai and later expanded the company with new equipment and over 20 varieties of biscuits and cakes, including the now-famous Paal Roti. He traveled widely across Europe, America, and Asia, studying global bakery practices and introducing international standards to his hometown. Known for his artistry in cake decoration as much as for his entrepreneurial spirit, he turned Raja Barley into a household name across Tamil Nadu.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="font-[clash] text-3xl sm:text-4xl font-bold text-primary mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
         The philosophy of Raja Barley Biscuit Company has always been rooted in the values instilled by its founder and carried forward by his successors. Faith, honesty, and discipline form the foundation of our journey, guiding us to build not just a business but a legacy. We believe in honoring tradition while embracing innovation, blending age-old recipes with modern baking practices to deliver excellence in quality. Our approach to growth has always been marked by humility and service, ensuring that success is shared with the community through social responsibility, education support, and spiritual devotion. At the heart of our philosophy is a deep respect for people—our customers, our employees, and our society. Employees are treated like family, trained personally, and encouraged to grow, while customers are offered products crafted with care and innovation. For us, biscuits are not merely a product, but a symbol of trust, tradition, and togetherness, and we remain committed to carrying this philosophy forward with every generation.
            </p>
          </div>
        </div>

        {/* Story Image */}
        {/* <div className="relative">
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
        </div> */}
      </div>
    </div>
  </div>
);

export default Story;
