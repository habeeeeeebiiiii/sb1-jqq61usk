import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquireClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpUCx8ggC3xV_gP8a-Up-qACvLdPWPIwty53Orz0b1vkKHjQ/viewform?usp=header', '_blank');
  };
  
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={handleEnquireClick}
        className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 transition-all transform hover:scale-105"
      >
        <Calendar size={20} />
        <span>Book a School Tour</span>
      </button>
    </div>
  );
};

export default FloatingCTA;