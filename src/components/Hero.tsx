import { motion } from 'framer-motion';
import SideRays from './ui/SideRays';
import Lanyard from './ui/Lanyard';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      


      {/* SideRays Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1.0}
        />
      </div>

      {/* Floating Lanyard Badge */}
      <div className="absolute top-0 right-0 lg:right-20 w-[400px] h-[100vh] z-30">
        <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} frontImage="/profile.jpg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left z-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light mb-4 tracking-widest text-white uppercase">
            SIHAN <br /> UDAYARATNA
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mb-8 font-light leading-relaxed">
            BSc (Hons) in Computer Science | Full-Stack Developer | AI/ML Enthusiast
          </p>
          
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center"
        >
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
            <img 
              src="/profile.jpg" 
              alt="Sihan Udayaratna" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
