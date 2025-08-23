

const TrendingProduct = [
  {
    id: 1,
    name: "Brownie",
    image: "/images/brownie.jpg",
  },
    {
        id: 2,
        name: "Cookies",
        image: "/images/cookie.jpg",
    },
    {
        id: 3,
        name: "Cakes",
        image: "/images/cake.jpg",
    },
    {
        id: 4,
        name: "Pizza",
        image: "/images/pizza.jpg",
    },
    {
        id: 5,
        name: "tiramisu",
        image: "/images/tiramisu.jpg",
    }
  

];


function TrendingProducts() {
  return (
    <div>
      <div className="magicpattern flex flex-col lg:flex-row items-center justify-center py-5 pt-8 px-4 sm:px-6 lg:px-8  ">
        <div className="w-fit  flex flex-col items-center  justify-center py-16 px-4 sm:px-6 lg:px-8  ">
          <h2 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-0 text-center">
           Sweet
          </h2>
          <h3 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-6 text-center">
            Treats
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
      
          </div>
        </div>
        <section>
        <div className="flex flex-1 flex-wrap justify-center gap-8  w-full px-4 sm:px-6 lg:px-8 pb-8">
          {TrendingProduct.map((product) => (
          <div>
            <img loading="lazy" className="
         w-[300px] h-[300px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300
            "  src={product.image} />
            
            </div>
          ))}
        </div>
        </section>
      </div>
      <div className="magicpatternReverse flex flex-col lg:flex-row-reverse items-center justify-center py-5 pt-8 px-4 sm:px-6 lg:px-8  ">
        <div className="w-fit  flex flex-col items-center  justify-center py-16 px-4 sm:px-6 lg:px-8  ">
          <h2 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-0 text-center">
           Savoury 
          </h2>
          <h3 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-6 text-center">
            bites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
      
          </div>
        </div>
        <section>
        <div className="flex flex-1 flex-wrap justify-center gap-8  w-full px-4 sm:px-6 lg:px-8 pb-8">
          {TrendingProduct.map((product) => (
          <div>
            <img loading="lazy" className="
         w-[300px] h-[300px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300
            "  src={product.image} />
            
            </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}

export default TrendingProducts;
