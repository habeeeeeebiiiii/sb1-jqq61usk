import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Sparkles, PartyPopper } from 'lucide-react';

const FloatingElement = ({ children, delay }) => {
  return (
    <div 
      className="absolute text-white/20 text-4xl font-bold animate-float"
      style={{
        animation: `float 20s infinite ${delay}s ease-in-out`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {children}
    </div>
  );
};

const Confetti = ({ color }) => {
  const style = {
    position: 'absolute',
    left: `${Math.random() * 100}%`,
    top: '-20px',
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%',
    animationDelay: `${Math.random() * 2}s`,
  };

  return <div style={style} className="animate-confetti" />;
};

const Firework = ({ color, delay }) => {
  const style = {
    position: 'absolute',
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 50}%`,
    width: '20px',
    height: '20px',
    backgroundColor: color,
    borderRadius: '50%',
    animationDelay: `${delay}s`,
  };

  return <div style={style} className="animate-firework" />;
};

const AdmissionsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const confettiColors = ['#FFD700', '#FF69B4', '#4169E1', '#32CD32', '#FF4500'];
  const fireworkColors = ['#FFD700', '#FF1493', '#4169E1', '#32CD32', '#FF4500'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] animate-fadeIn">
      {/* Celebration Effects */}
      {confettiColors.map((color, i) => (
        Array.from({ length: 10 }).map((_, j) => (
          <Confetti key={`confetti-${i}-${j}`} color={color} />
        ))
      ))}
      {fireworkColors.map((color, i) => (
        <Firework key={`firework-${i}`} color={color} delay={i * 0.2} />
      ))}

      <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 max-w-lg mx-4 relative animate-slideUp shadow-2xl border-4 border-primary-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transform hover:rotate-90 transition-all"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <PartyPopper size={48} className="text-primary-600 animate-bounce" />
          </div>
          <h3 className="text-3xl font-bold text-primary-600 mb-2 animate-beat">
            Admissions Open 2025-26
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star size={20} className="text-accent-500 animate-spin-slow" />
            <p className="text-xl text-gray-700">From Nursery to Class 7th</p>
            <Star size={20} className="text-accent-500 animate-spin-slow" />
          </div>
          
          <div className="bg-gradient-to-r from-accent-100 to-secondary-100 p-6 rounded-xl mb-6 transform hover:scale-105 transition-all">
            <Sparkles size={24} className="text-accent-500 mx-auto mb-2 animate-twinkle" />
            <p className="text-gray-700 text-lg">
              Join our vibrant learning community where every child's potential is nurtured and celebrated!
            </p>
          </div>
          
          <button 
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full 
              hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all shadow-lg
              animate-pulse"
            onClick={onClose}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleEnquireClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpUCx8ggC3xV_gP8a-Up-qACvLdPWPIwty53Orz0b1vkKHjQ/viewform?usp=header', '_blank');
  };

  const floatingElements = [
    'A', 'B', 'C', '1', '2', '3', '✏️', '📚', '🎨', '🔢', '✨', '🌟'
  ];

  return (
    <header className="relative">
      <AdmissionsPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <nav className="bg-white shadow-md py-2 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="https://i.ibb.co/Z1HJyv3R/Untitled-design-21.png" 
              alt="Alani School Logo" 
              className="h-28 w-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="text-primary-600 font-bold text-3xl md:text-4xl transition-all duration-300 hover:text-accent-500">
              Alani School of Excellence
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#features">Our Approach</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#admissions">Admissions</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button 
              onClick={handleEnquireClick}
              className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-110 hover:rotate-2 shadow-lg"
            >
              Enquire Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary-600" />
            ) : (
              <Menu size={24} className="text-primary-600" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Our Approach</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="#admissions" onClick={() => setIsMenuOpen(false)}>Admissions</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <button 
              onClick={handleEnquireClick}
              className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-full transition-all w-full hover:scale-105"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 bg-gradient-to-b from-primary-500 to-primary-600 overflow-hidden">
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <FloatingElement key={index} delay={index * 2}>
            {element}
          </FloatingElement>
        ))}
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-blue-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-red-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-purple-300 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
              Big Dreams Start with{' '}
              <span className="text-accent-500 animate-wiggle inline-block">Little Steps!</span>
            </h1>
            <p className="text-white text-xl mb-8 max-w-lg animate-slideUp">
              Where every child's curiosity is nurtured, creativity is encouraged, and confidence is built through joyful learning experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={handleEnquireClick}
                className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-110 hover:rotate-2 shadow-lg animate-bounce"
              >
                Enquire Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-110 hover:-rotate-2 shadow-lg animate-pulse">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent-500 rounded-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary-500 rounded-3xl animate-bounce"></div>
              <img 
                src="https://i.ibb.co/Q32Gs9nW/Whats-App-Image-2025-07-05-at-14-55-11-a8740dc6.jpg" 
                alt="Alani School of Excellence - Happy children learning" 
                className="w-full h-auto object-cover rounded-3xl shadow-xl relative z-10 animate-fadeIn"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ children, href }) => (
  <a 
    href={href} 
    className="text-primary-600 hover:text-accent-500 font-medium transition-colors duration-300 transform hover:scale-110 inline-block"
  >
    {children}
  </a>
);

const MobileNavLink = ({ children, href, onClick }) => (
  <a 
    href={href} 
    className="text-primary-600 hover:text-accent-500 font-medium py-2 block transition-colors transform hover:translate-x-2"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;