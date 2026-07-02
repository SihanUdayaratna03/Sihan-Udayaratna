import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SMART ACCOUNTING',
      desc: '"OnYx" AI-Powered Financial Governance and Accounting Platform.',
      bgGradient: 'from-blue-900/20'
    },
    {
      title: 'PHARMACY SYSTEM',
      desc: '"Medistore" Full-Stack Pharmacy Inventory & Operations Management System.',
      bgGradient: 'from-purple-900/20'
    },
    {
      title: 'PILL DISPENSER',
      desc: 'Online Medicine Pill Dispenser for Automated Medication Management.',
      bgGradient: 'from-blue-900/20'
    },
    {
      title: 'GAMIFIED LEARNING',
      desc: '"MindUp" Gamified Learning Platform - mindup.lk.',
      bgGradient: 'from-purple-900/20'
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-light mb-4 tracking-widest uppercase text-white">PROJECTS & ACHIEVEMENTS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Explore my specialized projects driving innovation in software engineering and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl p-8 h-80 flex flex-col justify-end relative overflow-hidden group hover:border-[#2a2a2a] transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-display font-medium text-white mb-3 uppercase tracking-wider">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{project.desc}</p>
                <button className="px-6 py-2 border border-white/20 rounded-full text-xs text-white uppercase tracking-wider hover:bg-white/10 transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
