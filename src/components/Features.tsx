import React from 'react';
import { PlayCircle, Lightbulb, Heart, BookOpen, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <PlayCircle size={48} className="text-primary-600 animate-spin-slow" />,
      title: "Learn Through Play",
      description: "Children learn best when they're having fun! Our play-based curriculum encourages exploration and discovery.",
      color: "bg-gradient-to-br from-primary-100 to-primary-200",
      borderColor: "border-primary-300",
      iconBg: "bg-gradient-to-br from-primary-50 to-primary-100",
      animation: "hover:rotate-6",
    },
    {
      icon: <BookOpen size={48} className="text-secondary-600 animate-bounce-slow" />,
      title: "Hands-On Activities",
      description: "Tactile experiences and practical activities help children develop fine motor skills and understand concepts better.",
      color: "bg-gradient-to-br from-secondary-100 to-secondary-200",
      borderColor: "border-secondary-300",
      iconBg: "bg-gradient-to-br from-secondary-50 to-secondary-100",
      animation: "hover:-rotate-6",
    },
    {
      icon: <Lightbulb size={48} className="text-accent-600 animate-pulse" />,
      title: "Smart Little Thinkers",
      description: "We nurture critical thinking skills, problem-solving abilities, and a growth mindset from an early age.",
      color: "bg-gradient-to-br from-accent-100 to-accent-200",
      borderColor: "border-accent-300",
      iconBg: "bg-gradient-to-br from-accent-50 to-accent-100",
      animation: "hover:scale-105",
    },
    {
      icon: <Heart size={48} className="text-red-500 animate-beat" />,
      title: "Warm & Caring Environment",
      description: "Our supportive atmosphere helps children feel safe, valued, and ready to learn and grow.",
      color: "bg-gradient-to-br from-red-100 to-red-200",
      borderColor: "border-red-300",
      iconBg: "bg-gradient-to-br from-red-50 to-red-100",
      animation: "hover:rotate-12",
    },
    {
      icon: <Sparkles size={48} className="text-purple-600 animate-twinkle" />,
      title: "Confident Learners",
      description: "We build self-esteem and independence, preparing children for future academic success and life challenges.",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-300",
      iconBg: "bg-gradient-to-br from-purple-50 to-purple-100",
      animation: "hover:-rotate-12",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary-100 rounded-full px-4 py-1 mb-4">
            <span className="text-primary-600 font-medium text-sm">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Makes Us Special
          </h2>
          <p className="text-gray-600 text-lg">
            At Alani School of Excellence, we create a unique learning environment that helps your child thrive.
            Here's how we make learning fun, effective, and meaningful:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.color} rounded-2xl shadow-lg p-8 transition-all duration-500 transform 
                hover:-translate-y-2 hover:shadow-xl ${feature.animation} group border-2 ${feature.borderColor}
                hover:scale-105 cursor-pointer backdrop-blur-sm`}
            >
              <div className={`${feature.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6 
                group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 ${feature.borderColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className={`w-2 h-2 rounded-full ${feature.borderColor} animate-pulse`}></div>
                <div className={`w-2 h-2 rounded-full ${feature.borderColor} animate-pulse delay-100`}></div>
                <div className={`w-2 h-2 rounded-full ${feature.borderColor} animate-pulse delay-200`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#admissions"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            Learn more about our curriculum
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;