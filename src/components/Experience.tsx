import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '1.25rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(255,255,255,0.06) inset',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
};

const cardHoverStyle: React.CSSProperties = {
  boxShadow: '0 12px 48px rgba(123, 44, 191, 0.18), 0 1px 0 rgba(255,255,255,0.09) inset',
  borderColor: 'rgba(123, 44, 191, 0.3)',
};

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

const HoverCard = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{ ...cardStyle, ...(hovered ? cardHoverStyle : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">EXPERIENCE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <HoverCard>
                <div className="p-7 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                  {/* Subtle corner accent */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${exp.accentColor}12, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div style={iconWrapperStyle}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug"
                          style={{ letterSpacing: '0.01em' }}
                        >
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
                          {exp.company}
                        </p>
                      </div>
                      <span style={badgeStyle} className="self-start mt-1 md:mt-0 shrink-0">
                        {exp.type}
                      </span>
                    </div>

                    {exp.details.length > 0 && (
                      <div className="mt-5 space-y-4 border-t border-white/5 pt-5">
                        {exp.details.map((detail, dIdx) => (
                          <div key={dIdx}>
                            <h4 className="text-white/90 font-semibold mb-1 text-xs tracking-wider uppercase">
                              {detail.heading}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{detail.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
