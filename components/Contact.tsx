import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Linkedin, Youtube, X, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center z-10 relative px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Info */}
        <div className="space-y-12 text-center md:text-left">
          {/* Logo Area */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12">
             <div className="w-20 h-20 bg-yellow-400 border-2 border-black rounded-xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                 <span className="text-4xl">🍇</span>
             </div>
             <div>
                <h2 className="font-serif text-5xl font-bold leading-none text-black">Fruit</h2>
                <h2 className="font-serif text-5xl font-bold leading-none text-black">Fusion</h2>
             </div>
          </div>

          <div>
            <h3 className="text-4xl font-medium mb-8">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4 text-2xl md:text-3xl font-light">
                <Phone className="shrink-0" />
                <span>Call : {CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 text-2xl md:text-3xl font-light break-all">
                <Mail className="shrink-0" />
                <span>Email : {CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4">
             {[Facebook, X, Instagram, Linkedin, Youtube].map((Icon, i) => (
               <a key={i} href="#" className="bg-white p-3 rounded-lg text-black hover:text-white hover:bg-black transition-all shadow-md border border-black">
                 <Icon size={28} />
               </a>
             ))}
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="relative h-[400px] md:h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902932287528!2d79.85890831477275!3d6.902210995012775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a5287f258!2sIndependence%20Square%2C%20Colombo%2000700!5e0!3m2!1sen!2slk!4v1679222443321!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0, opacity: 0.8 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Fruit Fusion Location"
            className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Map Pin Overlay simulation if needed, but iframe covers it */}
        </div>

      </motion.div>
    </div>
  );
};
