

const PopularProducts = [
  {
    id: 1,
    name: "Brownie",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
        id: 2,
        name: "Cookies",
        image: "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Cakes",
        image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Pizza",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "Sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  

];
// const PopularProducts = [
//   {
//     id: 1,
//     name: "Brownie",
//     image: "/images/brownie.webp",
//   },
//     {
//         id: 2,
//         name: "Cookies",
//         image: "/images/cookie.webp",
//     },
//     {
//         id: 3,
//         name: "Cakes",
//         image: "/images/cake.webp",
//     },
//     {
//         id: 4,
//         name: "Pizza",
//         image: "/images/pizza.webp",
//     },
//     {
//         id: 5,
//         name: "Tiramisu",
//         image: "/images/tiramisu.webp",
//     }
  

// ];


function PopularProduct() {
  return (
    <div>
      <div className="magicpattern flex flex-col lg:flex-row items-center justify-center py-5 pt-8 px-4 sm:px-6 lg:px-8  ">
        <div className="w-fit  flex flex-col items-center  justify-center py-16 px-4 sm:px-6 lg:px-8  ">
          <h2 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-0 text-center">
            Our Popular
          </h2>
          <h3 className="font-[clash] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none tracking-tighter mb-6 text-center">
            Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
      
          </div>
        </div>
        <section>
        <div className="flex flex-1 flex-wrap justify-center gap-8  w-full px-4 sm:px-6 lg:px-8 pb-8">
          {PopularProducts.map((product) => (
          <div>
            <img className="
         w-[300px] h-[300px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300
            "  src={product.image} />
            <p className="text-left font-[clash]  text-2xl pt-2 font-bold   text-primary ">{product.name} </p>
            </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}

export default PopularProduct;
