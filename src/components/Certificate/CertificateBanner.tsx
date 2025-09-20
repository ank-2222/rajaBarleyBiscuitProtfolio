import { Link } from "react-router-dom";

function CertificateBanner() {
  return (
    <div className="relative bg-amber-50 py-12 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-6 px-6">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Certificates & Recognitions
          </h2>
          <p className="mt-2 text-gray-600">
            A journey of trust, quality, and excellence recognized across
            generations.
          </p>
          <Link
            to="/certificate"
            className="inline-block mt-4 px-6 py-2 bg-amber-400 text-white font-medium rounded-lg shadow hover:bg-amber-500 transition"
          >
            View Certificates
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <Link to="/certificate">
            <img
              src="/images/certificate.jpg"
              alt="Certificate Preview"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CertificateBanner;
