import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    // Add animation classes after component mounts
    setTimeout(() => {
      text.classList.remove('opacity-0');
      text.classList.add('opacity-100', 'translate-y-0');
    }, 100);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/dki-jakarta/jakarta/9fe4c537ae976df197ea11dfbd43e42e8a886816-cd2d9.jpg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="block">Creative Designer & <span className="text-indigo-600 dark:text-indigo-400">Developer</span></span>
         
        </h1>
        
        <p className="max-w-2xl mx-auto text-sm md:text-xl text-gray-700 dark:text-gray-300 mb-10 animate-fadeIn">
          Crafting beautiful, functional digital experiences that engage users and deliver results.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn">
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-gray-400 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#portfolio" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 animate-bounce shadow-md"
        aria-label="Scroll down"
      >
        <ChevronDown className="text-indigo-600 dark:text-indigo-400" size={24} />
      </a>
    </section>
  );
};

export default Hero;