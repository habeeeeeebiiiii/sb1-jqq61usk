import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      url: "https://i.ibb.co/cKJz8zb7/A4.jpg",
      caption: ""
    },
    {
      url: "https://i.ibb.co/qLG4nn46/A2.jpg",
      caption: ""
    },
    {
      url: "https://i.ibb.co/Sw15XWws/A3.jpg",
      caption: ""
    },
    {
      url: "https://i.ibb.co/W8GTZZQ/A7.jpg",
      caption: ""
    },
    {
      url: "https://i.ibb.co/3ysNxqDL/A6.jpg",
      caption: ""
    },
    {
      url: "https://i.ibb.co/tTwtJvYQ/A5.jpg",
      caption: ""
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Changed to 3 seconds for faster rotation
    
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary-100 rounded-full opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-100 rounded-full opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary-100 rounded-full px-4 py-1 mb-4">
            <span className="text-secondary-600 font-medium text-sm">School Life</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Moments of Joy & Discovery
          </h2>
          <p className="text-gray-600 text-lg">
            Take a peek into the daily activities and special moments at Alani School, where learning comes alive 
            through play, exploration, and meaningful interactions.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[16/9]">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={photo.url} 
                  alt="School moments" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {photos.map((photo, index) => (
            <div 
              key={`thumbnail-${index}`} 
              className={`overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-primary-500' : 'hover:opacity-80'
              }`}
            >
              <img 
                src={photo.url} 
                alt="School moments" 
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;