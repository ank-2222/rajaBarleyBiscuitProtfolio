import React from "react";

const Contact: React.FC = () => {
  const locations = [
   
    {
      type: "Manufacturing Unit",
      address: "37/3, Aruppukottai Main Road, Avaniyapuram",
      city: "Madurai - 625012",
      isMain: false
    },
     {
      type: "Branch",
      address: "115, Nethaji road",
      city: "Madurai, Tamil Nadu - 625001",
      isMain: true
    },
    {
      type: "Branch",
      address: "79/2, Bypass Road",
      city: "Madurai - 625010",
      isMain: false
    },
    {
      type: "Branch",
      address: "81, P.T. Rajan Road, B.B Kulam",
      city: "Madurai - 625002",
      isMain: false
    }
  ];

  return (
    <div className="wavePattern py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-[clash] text-4xl sm:text-5xl font-bold text-primary mb-6">Visit Us Today</h3>
          <p className="text-xl text-gray-700">Experience our heritage, taste our tradition</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Contact Information */}
          <div className="flex justify-center items-start flex-wrap gap-12 mb-16">
            <div className="bg-white/80 min-w-[400px] md:min-w-[500px] backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h4 className="font-[satoshi] text-2xl font-bold text-primary mb-6">Get in Touch</h4>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Phone</h5>
                    <a href="tel:0452253661" className="text-gray-700 hover:text-primary transition-colors">
                      0452 253 6161
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Hours</h5>
                    <p className="text-gray-700">Open Daily<br />Closes at 9:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Services</h5>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Takeaway Available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Home Delivery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Custom Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl transform rotate-1"></div>

              <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/40"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary/40"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/40"></div>

                <img
                  src="/images/namkeen.png"
                  alt="Bakery storefront in Madurai"
                  className="w-full max-w-[450px] h-80 lg:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>

                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-primary font-bold text-sm font-[britney]">Madurai, TN</span>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-primary">4.0 (187)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Locations Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h4 className="font-[clash] text-3xl font-bold text-primary mb-4">Our Locations</h4>
              <p className="text-lg text-gray-600">Find us across Madurai</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    location.isMain 
                      ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-white ring-2 ring-primary/20' 
                      : 'border-white/30'
                  }`}
                >
                  {location.isMain && (
                    <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      MAIN
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      location.isMain ? 'bg-primary/15' : 'bg-primary/10'
                    }`}>
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className={`inline-block px-2 py-1 rounded-md text-xs font-semibold mb-2 ${
                        location.type === 'Manufacturing Unit' 
                          ? 'bg-blue-100 text-blue-800' 
                          : location.isMain 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-700'
                      }`}>
                        {location.type}
                      </div>
                      <p className="text-gray-800 font-medium text-sm leading-snug mb-1">
                        {location.address}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {location.city}
                      </p>
                    </div>
                  </div>

                  {location.isMain && (
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <div className="flex items-center space-x-2 text-xs text-primary">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>0452 253 6161</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;