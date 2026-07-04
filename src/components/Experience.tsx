import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer, UI/UX Designer & WordPress Developer",
      company: "Shield Technologies Private Limited - Nugegoda",
      type: "Part Time",
      icon: <Briefcase className="text-primary" size={24} />,
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
      type: "2026 - present",
      icon: <Users className="text-accent" size={24} />,
      details: []
    },
    {
      title: "Committee Member",
      company: "MS Club of SLIIT",
      type: "2026 - present",
      icon: <Users className="text-primary" size={24} />,
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

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <div className="flex-shrink-0">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  {exp.icon}
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-gray-300">
                    {exp.type}
                  </span>
                </div>
                
                {exp.details.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx}>
                        <h4 className="text-white font-semibold mb-1 text-sm">{detail.heading}:</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{detail.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
