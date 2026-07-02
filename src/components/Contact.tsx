import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-light mb-4 uppercase tracking-widest text-gray-400">
            READY TO COLLABORATE?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto bg-[#080808] border border-[#1a1a1a] rounded-3xl p-10 shadow-2xl"
        >
          <h3 className="text-xl font-display font-medium text-white mb-8 text-center uppercase tracking-widest">Contact Me</h3>
          
          <form className="space-y-6">
            <div>
              <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-[#050505] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-[#050505] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-[#050505] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="button"
                className="px-10 py-3 bg-white text-black font-semibold tracking-widest text-xs uppercase rounded-full hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
