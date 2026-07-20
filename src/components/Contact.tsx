import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import LightRays from './ui/LightRays';
import BlurText from './ui/BlurText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const text = `Hello!%0A%0A*Name:* ${formData.name || 'Not provided'}%0A*Email:* ${formData.email || 'Not provided'}%0A*Message:* ${formData.message || 'No message'}`;
    window.open(`https://wa.me/94776765582?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-32 relative bg-white/[0.02] backdrop-blur-3xl border-t border-white/[0.05] min-h-screen flex items-center justify-center overflow-hidden">
      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4cc9f0"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={1.2}
          pulsating={true}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BlurText
            text="READY TO COLLABORATE?"
            delay={120}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-5xl font-display font-light mb-4 uppercase tracking-widest text-gray-400 justify-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-[#080808] border border-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px]">
            <img 
              src="/contact-image.jpg" 
              alt="Ready to collaborate" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center relative bg-[#050505]">
            <h3 className="text-xl font-display font-medium text-white mb-8 text-center uppercase tracking-widest">
              Contact Me
            </h3>

            <form className="space-y-6">
              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#080808] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#080808] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#080808] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full px-10 py-3.5 bg-white text-black font-semibold tracking-widest text-xs uppercase rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
