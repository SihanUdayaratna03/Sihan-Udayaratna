import { motion, useScroll, useTransform } from 'framer-motion';
import BlurText from './ui/BlurText';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Three-Photo Cinematic Background — unified row, same height, no cropping */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Single row: all three images share the same h-full, each at its natural width */}
        <div className="flex flex-row items-center justify-center w-full h-full">

          {/* Left Photo */}
          <div className="relative h-full flex-1 hidden md:flex items-center justify-center overflow-hidden">
            <img
              src="/side-left.jpg"
              alt=""
              className="h-full w-auto max-w-none object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none" />
          </div>

          {/* Center Photo */}
          <div className="relative h-full flex-1 flex items-center justify-center overflow-hidden">
            <img
              src="/side-right.jpg"
              alt="Sihan Udayaratna"
              className="h-full w-auto max-w-none object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none" />
          </div>

          {/* Right Photo */}
          <div className="relative h-full flex-1 hidden md:flex items-center justify-center overflow-hidden">
            <img
              src="/profile2.jpg"
              alt=""
              className="h-full w-auto max-w-none object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none" />
          </div>

        </div>
      </motion.div>

      {/* Typography Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center pointer-events-none pt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Main Title — BlurText */}
          <h1 className="flex flex-col items-center justify-center m-0 p-0">
            <BlurText
              text="SIHAN"
              delay={150}
              animateBy="words"
              direction="top"
              stepDuration={0.35}
              className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight m-0 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-[1.1] justify-center"
            />
            <BlurText
              text="UDAYARATNA"
              delay={150}
              animateBy="words"
              direction="top"
              stepDuration={0.35}
              className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight m-0 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-[1.1] justify-center"
            />
          </h1>

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
