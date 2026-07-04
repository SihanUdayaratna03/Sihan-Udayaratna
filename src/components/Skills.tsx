import { motion } from 'framer-motion';
import { Code2, Globe, Database, PenTool, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      skills: ["Python", "Java", "JavaScript", "C"]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-accent mb-4" size={32} />,
      skills: ["HTML", "CSS", "React (Current)", "Tailwind (Current)"]
    },
    {
      title: "Database",
      icon: <Database className="text-primary mb-4" size={32} />,
      skills: ["MySQL", "PostgreSQL", "Supabase"]
    },
    {
      title: "Design Tools",
      icon: <PenTool className="text-accent mb-4" size={32} />,
      skills: ["Figma", "WordPress"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="text-primary mb-4" size={32} />,
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build robust, user-centric, and scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2"
            >
              <div className="bg-white/5 inline-block p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/5"
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

// feat(skills): add ambient glow to LogoLoop

// feat(skills): setup premium gradient properties
