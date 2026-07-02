import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-light mb-6 tracking-widest uppercase">WHO I AM</h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
            I am a BSc (Hons) Computer Science student at SLIIT with a strong background in Full Stack development and WordPress customization. 
            Deeply interested in Generative AI, LLMs, and UI/UX, I focus on building intuitive, user-centered digital solutions that prioritize operational efficiency.
            A collaborative problem solver, I aim to leverage my technical expertise to deliver scalable and innovative outcomes.
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
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 hover:border-[#2a2a2a] transition-colors"
            >
              <h3 className="text-xl font-display font-semibold mb-2 text-gray-200">{item.institution}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">{item.degree}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
