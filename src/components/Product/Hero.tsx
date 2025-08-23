import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://images.unsplash.com/photo-1543773495-2cd9248a5bda?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: "https://images.unsplash.com/photo-1543773495-2cd9248a5bda?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original: "https://images.unsplash.com/photo-1584847801423-852691e41bc7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: "https://images.unsplash.com/photo-1584847801423-852691e41bc7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    original: "https://images.unsplash.com/photo-1724734333243-17c38ef0cdfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: "https://images.unsplash.com/photo-1724734333243-17c38ef0cdfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];
function Hero() {
  return (
   <div className="w-full relative ">
      <ImageGallery
        additionalClass="w-full"
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        infinite={true}
        autoPlay={true}
        slideInterval={3000}
        showIndex={false}
        showBullets={false}
        showNav={false}
        showThumbnails={false}
        items={images}
        renderItem={(item) => (
          <div className="image-gallery-image-wrapper w-full flex justify-center">
            <img
              src={item.original}
              alt={item.originalAlt}
              style={{
                width: "100%",
                height: "60vh", // full viewport height
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="lazy"
            />
          </div>
        )}
      />



    </div>
  )
}

export default Hero