import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';
import CardSwap, { Card } from './ui/CardSwap';
import LightRays from './ui/LightRays';

const iconWrapperStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1rem',
  padding: '1rem',
  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
};

const badgeStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.07)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '9999px',
  padding: '0.2rem 0.85rem',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.55)',
  letterSpacing: '0.04em',
  whiteSpace: 'nowrap' as const,
};

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer, UI/UX Designer & WordPress Developer",
      company: "Shield Technologies Private Limited · Nugegoda",
      type: "Part Time",
      accentColor: '#7b2cbf',
      icon: <Briefcase size={22} color="#a78bfa" />,
      details: [
        {
          heading: "UI/UX Design",
          desc: "Spearheaded the end-to-end design process, creating high fidelity wireframes and interactive prototypes to enhance user engagement and streamline navigation."
        },
        {
          heading: "Full Stack Development",
          desc: "Developed and maintained robust web applications, ensuring seamless integration between front-end interfaces and back-end server logic."
        },
        {
          heading: "WordPress Development",
          desc: "Customized and optimized WordPress themes and plugins to improve site performance, SEO rankings, and ease of content management."
        }
      ]
    },
    {
      title: "Developer",
      company: "Computer Science Student Committee",
      type: "2026 – present",
      accentColor: '#4cc9f0',
      icon: <Users size={22} color="#4cc9f0" />,
      details: []
    },
    {
      title: "Committee Member",
      company: "MS Club of SLIIT",
      type: "2026 – present",
      accentColor: '#7b2cbf',
      icon: <Users size={22} color="#a78bfa" />,
      details: []
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden min-h-[700px] flex flex-col justify-center">
      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={0.7}
          lightSpread={0.65}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.07}
          noiseAmount={0.04}
          distortion={0.02}
          fadeDistance={1.1}
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

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Side: Title & Description */}
        <div className="w-full md:w-1/3 mb-16 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">EXPERIENCE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            <p className="text-gray-400 text-lg">
              Here is a timeline of my professional journey, highlighting the roles where I've grown and contributed.
            </p>
          </motion.div>
        </div>

        {/* Right Side: CardSwap */}
        <div className="w-full md:w-2/3 h-[500px] relative">
          <CardSwap
            width={500}
            height={320}
            cardDistance={40}
            verticalDistance={40}
            delay={4000}
            pauseOnHover={true}
          >
            {experiences.map((exp, idx) => (
              <Card key={idx} className="flex flex-col gap-4 overflow-hidden shadow-2xl">
                {/* Subtle corner accent */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${exp.accentColor}20, transparent 70%)` }}
                />

                <div className="flex flex-col md:flex-row gap-4 items-start relative z-10">
                  <div className="flex-shrink-0 hidden sm:block">
                    <div style={iconWrapperStyle}>
                      {exp.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1" style={{ letterSpacing: '0.01em' }}>
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
                      {exp.company}
                    </p>
                    <div className="mt-2 inline-block" style={badgeStyle}>
                      {exp.type}
                    </div>
                  </div>
                </div>

                {exp.details.length > 0 && (
                  <div className="mt-2 space-y-3 border-t border-white/5 pt-3 relative z-10 overflow-auto pr-2 custom-scrollbar">
                    {exp.details.slice(0, 2).map((detail, dIdx) => (
                      <div key={dIdx}>
                        <h4 className="text-white/90 font-semibold mb-1 text-xs tracking-wider uppercase">
                          {detail.heading}
                        </h4>
                        <p className="text-gray-400 text-[0.8rem] leading-relaxed line-clamp-2">{detail.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Experience;
