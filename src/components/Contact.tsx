import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'd like to discuss a project with you.");
    window.open(`https://wa.me/6287772018559?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through WhatsApp or directly via email.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-gray-200">jayakartaproduction@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                    <p className="text-gray-800 dark:text-gray-200">+62 877-7201-8559</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {['Dribbble', 'Behance', 'LinkedIn', 'GitHub'].map((platform) => (
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
            </div>
          </div>
          
          {/* WhatsApp CTA */}
          <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Click the button below to start a WhatsApp conversation. I'll get back to you as soon as possible!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <MessageSquare size={18} className="mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;