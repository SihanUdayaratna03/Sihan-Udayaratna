import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Cinematic Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-[center_top_15%] bg-no-repeat"
          style={{ backgroundImage: "url('/profile.jpg')" }}
        ></div>
        
        {/* Professional Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]"></div>
      </motion.div>

      {/* Typography Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center pointer-events-none pt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Glowing Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 pointer-events-auto shadow-2xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-[0.2em] uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight m-0 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-[1.1]">
            SIHAN <br className="md:hidden" />UDAYARATNA
          </h1>
          
          {/* Subtitle */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8 opacity-50"></div>
          
          <p className="font-sans text-sm sm:text-base md:text-xl font-bold text-cyan-400 tracking-[0.5em] md:tracking-[0.8em] drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] uppercase">
            AI & Machine Learning Engineer
          </p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 mt-16 w-full sm:w-auto pointer-events-auto"
          >
            <a 
              href="#projects" 
              className="group px-8 py-4 rounded-full bg-white text-black font-bold tracking-widest hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase text-sm shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Explore Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold tracking-widest hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center uppercase text-sm"
            >
              Contact Me
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
