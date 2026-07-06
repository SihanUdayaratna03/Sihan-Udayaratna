import { motion } from 'framer-motion';
import { Code2, Globe, Database, PenTool, Lightbulb } from 'lucide-react';
import LogoLoop from './ui/LogoLoop';
import Folder from './ui/Folder';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6 pt-16 pb-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-end min-h-[220px] group"
            >
              <div className="relative mb-6 transform scale-110 hover:z-50 z-10 transition-transform duration-300">
                {/* Premium ambient glow behind the folder */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: category.accent }}
                />
                <Folder
                  size={1.5}
                  color={category.accent}
                  items={category.skills.map((skill, sIdx) => {
                    const logo = techLogos.find(l => l.title === skill || skill.includes(l.title));
                    const Icon = logo ? logo.node : <Code2 size={20} />;
                    return (
                      <div key={sIdx} className="w-full h-full flex flex-col items-center justify-center p-1 text-slate-800">
                        <div className="mb-1 opacity-90 scale-90 origin-bottom flex items-center justify-center text-xl">
                          {Icon}
                        </div>
                        <span className="text-[9px] font-bold text-center leading-tight">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div style={{ color: category.accent }}>{category.icon}</div>
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
