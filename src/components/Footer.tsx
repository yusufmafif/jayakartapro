import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <a href="#home" className="text-xl font-bold">
                <span className="text-indigo-600 dark:text-indigo-400">Port</span>
                <span className="text-gray-900 dark:text-gray-100">folio</span>
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Creating beautiful, functional digital experiences that engage users and deliver results. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'Dribbble', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Development',
                'UI/UX Design',
                'Brand Identity',
                'Frontend Development',
                'Design Systems',
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;