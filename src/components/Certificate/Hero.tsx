
function Hero() {
  return (
    <section className="relative flex items-center justify-center py-20 pt-50 bg-gradient-to-b from-amber-50 to-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          Certificates & Recognitions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A legacy of trust, quality, and excellence carried across generations.
        </p>
        <div className="mt-6 flex justify-center">
          <span className="inline-block w-16 h-1 bg-amber-400 rounded-full"></span>
        </div>
      </div>

      {/* Decorative badge / certificate style */}
      <div className="absolute bottom-8 right-8 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-amber-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path d="M12 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L12 13.77l-4.77 2.52.91-5.32-3.87-3.77 5.34-.78L12 1z" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
