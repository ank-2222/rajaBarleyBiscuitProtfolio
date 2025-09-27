import Hero from "@/components/Product/Hero";
import ProductDisplay from "@/components/Product/ProductDisplay";
import ProductsOverview from "@/components/Product/ProductOverview";
// import TrendingProducts from "@/components/Product/TrendingProduct";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

function Product() {
  return (
    <div>
      <Header />

      <Hero />
      {/* <TrendingProducts/> */}
      <ProductsOverview/>
<ProductDisplay/>
      <Footer />
    </div>
  );
}

export default Product;
