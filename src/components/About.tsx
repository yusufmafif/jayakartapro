import React from 'react';
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Design', icon: <Palette size={24} />, color: 'text-amber-500', description: 'UI/UX Design, Wireframing, Prototyping' },
    { name: 'Development', icon: <Code size={24} />, color: 'text-indigo-500', description: 'HTML, CSS, JavaScript, React, Tailwind' },
    { name: 'Creativity', icon: <Lightbulb size={24} />, color: 'text-teal-500', description: 'Innovative solutions, Creative direction' },
    { name: 'Strategy', icon: <Rocket size={24} />, color: 'text-rose-500', description: 'User research, Design systems, Project management' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We passionate designers and developers with a focus on creating beautiful, functional digital experiences that engage users and deliver results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400">
              With over 5 years of experience in digital design, We had the opportunity to work with a diverse range of clients. Our approach combines aesthetic sensibility with technical expertise to create experiences that not only look beautiful but also function flawlessly.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in user-centered design principles and we constantly learning and adapting to new technologies and design trends. My goal is to create digital products that are intuitive, accessible, and deliver real value to users and businesses alike.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`${skill.color} mb-4`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '25+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;