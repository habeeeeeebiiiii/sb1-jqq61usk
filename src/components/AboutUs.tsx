import React from 'react';
import { Heart, Sun, Star, Sparkles, Rocket, Music, Palette } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, color, delay, className }) => (
  <div 
    className={`absolute ${color} ${className} animate-float`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon size={24} />
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingIcon icon={Star} color="text-yellow-400" delay={0} className="top-20 left-[10%]" />
      <FloatingIcon icon={Music} color="text-blue-400" delay={1} className="top-40 right-[15%]" />
      <FloatingIcon icon={Palette} color="text-purple-400" delay={2} className="bottom-20 left-[20%]" />
      <FloatingIcon icon={Rocket} color="text-red-400" delay={3} className="bottom-40 right-[25%]" />
      <FloatingIcon icon={Sparkles} color="text-green-400" delay={4} className="top-1/2 left-[30%]" />

      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full -mr-20 -mt-20 opacity-70 animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full -ml-32 -mb-32 opacity-70 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent-100 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-purple-100 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img 
                src="https://i.ibb.co/JWctzTv2/Whats-App-Image-2025-07-05-at-15-00-43-259b5c77.jpg" 
                alt="Alani School of Excellence - Children learning together" 
                className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-300 rounded-full animate-bounce-slow delay-100"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-300 rounded-full animate-bounce-slow delay-200"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="inline-block bg-primary-100 rounded-full px-4 py-1 mb-4 animate-pulse">
              <span className="text-primary-600 font-medium text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
              Nurturing Curious Minds and Kind Hearts
              <span className="absolute -right-8 top-0 animate-twinkle">
                <Sparkles size={24} className="text-yellow-400" />
              </span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-slideUp">
              At Alani School of Excellence, we believe that every child is born with an innate curiosity and 
              desire to learn. Our nurturing environment encourages children to explore, question, and discover 
              the world around them through play-based and experiential learning.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
              We focus on developing the whole child – intellectually, socially, emotionally, and physically – 
              providing a strong foundation for lifelong learning and growth. Our dedicated educators create a 
              warm, supportive community where children feel safe to take risks, make mistakes, and celebrate 
              successes.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center group transform hover:scale-105 transition-transform">
                <div className="bg-primary-100 p-3 rounded-full mr-3 group-hover:animate-beat">
                  <Heart size={24} className="text-primary-600" />
                </div>
                <span className="font-medium text-gray-800">Loving Environment</span>
              </div>
              <div className="flex items-center group transform hover:scale-105 transition-transform">
                <div className="bg-secondary-100 p-3 rounded-full mr-3 group-hover:animate-spin-slow">
                  <Sun size={24} className="text-secondary-600" />
                </div>
                <span className="font-medium text-gray-800">Creative Exploration</span>
              </div>
              <div className="flex items-center group transform hover:scale-105 transition-transform">
                <div className="bg-accent-100 p-3 rounded-full mr-3 group-hover:animate-twinkle">
                  <Star size={24} className="text-accent-600" />
                </div>
                <span className="font-medium text-gray-800">Excellence in Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;