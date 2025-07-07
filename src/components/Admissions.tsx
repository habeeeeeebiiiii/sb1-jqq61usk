import React from 'react';
import { CalendarDays, ClipboardList } from 'lucide-react';

const Admissions = () => {
  const handleEnquireClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpUCx8ggC3xV_gP8a-Up-qACvLdPWPIwty53Orz0b1vkKHjQ/viewform?usp=header', '_blank');
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="white"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="white"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
            <span className="text-white font-medium text-sm">Admissions Open</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our School Family
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We're now accepting applications for the upcoming academic year. Take the first step towards providing your 
            child with a joyful and enriching educational experience at Alani School of Excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleEnquireClick}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Enquire Now
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CalendarDays size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Admission Timeline</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Applications Open: June 1, 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>School Tours: June - August 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Application Deadline: August 31, 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Admission Results: September 15, 2025</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ClipboardList size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Required Documents</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Completed application form</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Birth certificate</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Previous school records (if applicable)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-300 mr-2">•</span>
                <span>Parent identification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;