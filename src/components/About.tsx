import { motion } from 'framer-motion';
import BlurText from './ui/BlurText';
import GlareHover from './ui/GlareHover';
import LightRays from './ui/LightRays';

const About = () => {
  const education = [
    {
      institution: "SLIIT",
      degree: "BSc(Hons) Computer Science",
      desc: "Currently pursuing a degree with a strong focus on Full-Stack development and modern software engineering practices."
    },
    {
      institution: "CIMA",
      degree: "Certificate Level",
      desc: "Gaining fundamental business and financial knowledge to complement technical skills for comprehensive problem solving."
    },
    {
      institution: "St. Sebastian's College",
      degree: "GCE Advanced Level",
      desc: "Completed advanced level studies in 2022, building a strong analytical and mathematical foundation."
    }
  ];

  return (
    <section id="profile" className="py-32 relative">
      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.02}
          fadeDistance={1.2}
        />
      </div>
      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'rgba(8, 8, 12, 0.55)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <BlurText
            text="WHO I AM"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl font-display font-light mb-6 tracking-widest uppercase justify-center"
          />
          <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light text-justify">
            I am a BSc (Hons) Computer Science student at SLIIT, specializing in Full Stack Development and Artificial Intelligence. Passionate about Generative AI, LLMs, Machine Learning, and RAG systems, I focus on building intelligent, scalable solutions that solve real-world problems. By combining robust software engineering with emerging AI technologies, I aim to deliver impactful applications that drive automation, efficiency, and continuous innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <GlareHover
                width="100%"
                height="100%"
                background="#0a0a0a"
                borderRadius="1rem"
                borderColor="#1a1a1a"
                glareColor="#ffffff"
                glareOpacity={0.15}
                glareAngle={-45}
                glareSize={200}
                transitionDuration={600}
              >
                <div className="p-8 h-full w-full flex flex-col justify-start text-left items-start">
                  <h3 className="text-xl font-display font-semibold mb-2 text-gray-200">{item.institution}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">{item.degree}</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
