import { motion } from 'framer-motion';
import { Code2, Globe, Database, PenTool, Lightbulb } from 'lucide-react';
import LogoLoop from './ui/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiJavascript, 
  SiC,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiWordpress
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiPython />, title: "Python" },
  { node: <FaJava />, title: "Java" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiC />, title: "C" },
  { node: <FaHtml5 />, title: "HTML5" },
  { node: <FaCss3 />, title: "CSS3" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiWordpress />, title: "WordPress" }
];

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 size={24} />,
      accent: '#a78bfa',
      gradientFrom: 'rgba(167,139,250,0.15)',
      gradientTo: 'rgba(123,44,191,0.05)',
      skills: ["Python", "Java", "JavaScript", "C"]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      accent: '#4cc9f0',
      gradientFrom: 'rgba(76,201,240,0.15)',
      gradientTo: 'rgba(76,201,240,0.03)',
      skills: ["HTML", "CSS", "React", "Tailwind CSS"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      accent: '#a78bfa',
      gradientFrom: 'rgba(167,139,250,0.15)',
      gradientTo: 'rgba(123,44,191,0.05)',
      skills: ["MySQL", "PostgreSQL", "Supabase"]
    },
    {
      title: "Design Tools",
      icon: <PenTool size={24} />,
      accent: '#4cc9f0',
      gradientFrom: 'rgba(76,201,240,0.15)',
      gradientTo: 'rgba(76,201,240,0.03)',
      skills: ["Figma", "WordPress"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb size={24} />,
      accent: '#f0abfc',
      gradientFrom: 'rgba(240,171,252,0.12)',
      gradientTo: 'rgba(168,85,247,0.04)',
      skills: ["Learning New Trends", "Teamwork", "Problem-Solving", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            A comprehensive toolkit that enables me to build robust, user-centric, and scalable digital solutions.
          </p>

          <div className="relative mb-20">
            {/* Ambient glow for the logo loop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={45}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0f0f13" // Matches surface/50 bg
              ariaLabel="Technology Stack"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.25rem',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
                transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.3s ease',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 56px rgba(0,0,0,0.5), 0 0 0 1px ${category.accent}33, 0 1px 0 rgba(255,255,255,0.08) inset`,
              }}
            >
              {/* Ambient top-left gradient blob */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '160px',
                  height: '160px',
                  background: `radial-gradient(circle at top left, ${category.gradientFrom}, ${category.gradientTo}, transparent 70%)`,
                  pointerEvents: 'none',
                  borderRadius: '1.25rem 0 0 0',
                }}
              />

              {/* Icon ring */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '0.875rem',
                  background: `linear-gradient(135deg, ${category.accent}22, ${category.accent}08)`,
                  border: `1px solid ${category.accent}30`,
                  boxShadow: `0 4px 16px ${category.accent}20`,
                  marginBottom: '1.25rem',
                  color: category.accent,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="group-hover:scale-110"
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-4 text-white"
                style={{ letterSpacing: '0.03em' }}
              >
                {category.title}
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: `${category.accent}12`,
                      border: `1px solid ${category.accent}28`,
                      color: 'rgba(255,255,255,0.72)',
                      borderRadius: '9999px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
