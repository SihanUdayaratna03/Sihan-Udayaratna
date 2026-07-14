import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top_20%] bg-no-repeat"
        style={{ backgroundImage: "url('/profile.jpg')" }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center pointer-events-none pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 pointer-events-auto shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase">Available for new opportunities</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[0.1em] m-0 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-tight">
            SIHAN <br className="sm:hidden" />UDAYARATNA
          </h1>
          
          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg font-bold text-cyan-400 tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] mt-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] uppercase">
            AI & Machine Learning Engineer
          </p>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-8 max-w-2xl font-light leading-relaxed drop-shadow-md">
            Dedicated to crafting intelligent solutions and building the future through scalable architecture and innovative algorithms.
          </p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto pointer-events-auto"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-white text-black font-bold tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 uppercase text-sm"
            >
              Explore Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-black/30 border border-white/30 text-white font-bold tracking-wider hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center uppercase text-sm"
            >
              Contact Me
            </a>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
