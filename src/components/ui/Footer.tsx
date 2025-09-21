import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white wavePattern text-primary relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <img src={"/images/logo.jpg"} className=' rounded-4xl '/>
              </div>
              <div>
                <h3 className="font-[satoshi] text-2xl sm:text-3xl font-bold text-primary">
                  Raja Barley Biscuit Co.
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  ராஜா பார்லி பிஸ்கட் கம்பனி
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">4.0 (187 reviews)</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-md">
              Traditional bakery specializing in authentic biscuits and confectioneries. 
              Serving quality baked goods with heritage recipes since establishment.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-[clash] text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Contact Info
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-primary mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">
                 115, Nethaji road<br/>
                    Tamil Nadu 625001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a href="tel:0452253661" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    0452 253 6161
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">Open • Closes 9:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Links */}
          <div className="space-y-6">
            <h4 className="font-[clash] text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Services
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Takeaway Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Delivery Available</span>
              </div>
         
            </div>

            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <a target="_blank" href="https://maps.app.goo.gl/cHGet9njgRAE41ML6" className="text-sm font-medium">View on Map</a>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full max-w-xs"></div>
          <div className="mx-6">
            <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent w-full max-w-xs"></div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium text-gray-700">Follow Us:</span>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/rajabarleybiscuitcompany?utm_source=ig_web_button_share_sheet&igsh=MTdramN4Y3NmMjg0bA==" 
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
                target="_blank"

              >
              <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/rajabarleybiscuts" 
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Facebook"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Raja Barley Biscuit Company
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Bakery and Cake Shop • Madurai, Tamil Nadu
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
    </footer>
  );
}

export default Footer;