import Banner from "./Banner";
import { ImageGallery } from "react-image-grid-gallery";
const namkeenImages = [
  {
    id: 1,
      alt: "mixture",
    caption: "Mixture",
    src: "/images/namkeen1.jpg",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 2,
      alt: "Biscuits",
    caption: "Biscuits",
    src: "/images/namkeen2.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 3,
      alt: "crunch karasev",
    caption: "crunch karasev",
    src: "/images/namkeen3.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 4,
      alt: "oma podi",
    caption: "oma podi",
    src: "/images/namkeen4.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 5,
      alt: "Spice mixture",
    caption: "Spice mixture",
    src: "/images/namkeen5.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 6,
      alt: "Namkeen",
    caption: "Namkeen",
    src: "/images/namkeen6.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
 
];
const sweetImages = [
  {
    id: 1,
      alt: "Dry jamunn",
    caption: "Dry jamun",
    src: "/images/sweet1.jpg",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 2,
      alt: "Pista Roll",
    caption: "Pista Roll",
    src: "/images/sweet2.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 3,
      alt: "Milk Peda",
    caption: "Milk Peda",
    src: "/images/sweet3.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 4,
      alt: "jangiri",
    caption: "jangiri",
    src: "/images/sweet4.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 5,
      alt: "Halwa",
    caption: "Halwa",
    src: "/images/sweet5.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 6,
      alt: "laddu",
    caption: "laddu",
    src: "/images/sweet6.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
 
];
const bakeryImages = [
  {
    id: 1,
      alt: "Tiramisu",
    caption: "Tiramisu",
    src: "/images/bakery1.jpg",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 2,
      alt: "Red valvet Cake",
    caption: "Red valvet Cake",
    src: "/images/bakery2.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 3,
      alt: "Banana Pudding",
    caption: "Banana Pudding",
    src: "/images/bakery3.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
  {
    id: 4,
      alt: "cake",
    caption: "cake",
    src: "/images/bakery4.jpg",
     mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  }
 
];

function ProductDisplay() {
  return (
    <div className="relative mb-10 ">
      <div className="w-full h-1 bg-primary" />
      <img
        className="w-full h-[300px] lg:h-[600px] object-cover  "
        src={"/images/namkeen.png"}
      />
      <div className="w-full h-1 bg-primary" />

<div className="relative  m-auto top-[-100px]  lg:top-[-200px] max-w-[1440px]">

      <Banner  />
</div>

<div className=" m-auto max-w-[1440px]">

    <p className=" text-3xl lg:text-7xl mb-5 font-[clash] text-center font-semibold   ">Namkeen Bites</p>
      <ImageGallery
        imagesInfoArray={namkeenImages}
        columnCount={3}
        columnWidth={230}
        gapSize={24}
      />
</div>
<div className=" m-auto max-w-[1440px]">

    <p className=" text-3xl lg:text-7xl mb-5 font-[clash] text-center font-semibold   ">Sweet Taste</p>
      <ImageGallery
        imagesInfoArray={sweetImages}
        columnCount={3}
        columnWidth={230}
        gapSize={24}
      />
</div>
<div className=" m-auto max-w-[1440px]">

    <p className=" text-3xl lg:text-7xl mb-5 font-[clash] text-center font-semibold   ">Bakery Bites</p>
      <ImageGallery
        imagesInfoArray={bakeryImages}
        columnCount={2}
        columnWidth={230}
        gapSize={24}
      />
</div>
    </div>
  );
}

export default ProductDisplay;
