import  { useState, useEffect } from 'react';
import { Menu, X, Phone,  Instagram, Facebook,  Map } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Certificate', href: '/certificate' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rajabarleybiscuts', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/rajabarleybiscuitcompany?utm_source=ig_web_button_share_sheet&igsh=MTdramN4Y3NmMjg0bA==', label: 'Instagram' },
    { icon: Map, href: 'https://maps.app.goo.gl/cHGet9njgRAE41ML6', label: 'Map' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-accent backdrop-blur-sm shadow-lg' 
        : 'bg-accent shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
           <img src={"/images/logo.jpg"} className=' rounded-4xl '/>
            </div>
            <div >
              <h1 className="text-xl lg:text-2xl font-bold text-primary font-[clash] leading-none">
                Raja Barley Biscuit Co.
              </h1>
              <p className="text-xs text-primary font-medium ">Since 1926</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-foreground  hover:text-primary font-semibold text-lg transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full "></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info & Social - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-primary font-semibold">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 45225 36161</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@rajabarley.com</span>
              </div> */}
            </div>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="text-primary hover:text-primary/70 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-sm">+91 45225 36161</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">info@rajabarley.com</span>
                </div> */}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target='_blank'
                      className="text-primary hover:text-primary/70 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;