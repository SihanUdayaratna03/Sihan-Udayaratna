import { motion } from 'framer-motion';
import LogoLoop from './ui/LogoLoop';
import LightRays from './ui/LightRays';
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
  SiWordpress,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiSupabase,
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3, FaBrain, FaRobot, FaLayerGroup, FaDatabase } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbBrandVscode } from 'react-icons/tb';
import { MdPsychology } from 'react-icons/md';

/* ── Animated logo strip (kept exactly as before) ── */
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
  { node: <SiWordpress />, title: "WordPress" },
  { node: <span style={{ fontSize: 10, fontWeight: 800, color: '#00C4CC', letterSpacing: '-0.5px' }}>Cv</span>, title: "Canva" }
];

/* ── Icon map for skill pill badges ── */
const iconMap: Record<string, React.ReactNode> = {
  "Python":        <SiPython />,
  "Java":          <FaJava />,
  "JavaScript":    <SiJavascript />,
  "C":             <SiC />,
  "HTML":          <FaHtml5 />,
  "CSS":           <FaCss3 />,
  "React":         <SiReact />,
  "Tailwind CSS":  <SiTailwindcss />,
  "TypeScript":    <SiTypescript />,
  "Next.js":       <SiNextdotjs />,
  "MySQL":         <SiMysql />,
  "PostgreSQL":    <SiPostgresql />,
  "Supabase":      <SiSupabase />,
  "Figma":         <SiFigma />,
  "WordPress":     <SiWordpress />,
  "Canva":         <span style={{ fontSize: 10, fontWeight: 800, color: '#00C4CC' }}>Cv</span>,
  "Git":           <SiGit />,
  "GitHub":        <SiGithub />,
  "Linux":         <SiLinux />,
  "Docker":        <SiDocker />,
  "LangChain":     <SiLangchain />,
  "TensorFlow":    <SiTensorflow />,
  "PyTorch":       <SiPytorch />,
  "Pandas":        <SiPandas />,
  "NumPy":         <SiNumpy />,
  "FastAPI":       <SiFastapi />,
  "LlamaIndex":    <FaBrain />,
  "Qdrant":        <FaDatabase />,
  "ChromaDB":      <FaLayerGroup />,
  "Generative AI": <GiArtificialIntelligence />,
  "Deep Learning": <MdPsychology />,
  "LLMs":          <FaRobot />,
  "RAG":           <TbBrandVscode />,
  "AI Agents":     <FaRobot />,
  "Learning New Trends": <FaBrain />,
  "Teamwork":      <FaBrain />,
  "Problem-Solving": <MdPsychology />,
  "Critical Thinking": <MdPsychology />,
};

interface SkillCategory {
  title: string;
  number: string;
  accent: string;
  secondaryAccent?: string;  // optional second color for gradient accents
  cardBg?: string;           // optional custom card background
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Web",
    number: "01",
    accent: "#4cc9f0",   // cyan
    skills: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "React", "Tailwind CSS", "TypeScript", "Next.js"],
  },
  {
    title: "Cloud & DevOps",
    number: "02",
    accent: "#60a5fa",   // electric blue
    skills: ["Git", "GitHub", "Linux", "Docker"],
  },
  {
    title: "Backend & Database",
    number: "03",
    accent: "#a78bfa",   // violet
    skills: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Design & Tools",
    number: "04",
    accent: "#f472b6",   // rose-pink
    skills: ["Figma", "WordPress", "Canva"],
  },
  {
    title: "AI / ML Tools",
    number: "05",
    accent: "#34d399",   // emerald
    skills: [
      "LangChain", "LlamaIndex", "TensorFlow", "PyTorch",
      "Pandas", "NumPy", "FastAPI", "Qdrant",
      "ChromaDB", "Generative AI", "Deep Learning",
      "LLMs", "RAG", "AI Agents",
    ],
  },
  {
    title: "Soft Skills",
    number: "06",
    accent: "#fb923c",   // amber
    skills: ["Learning New Trends", "Teamwork", "Problem-Solving", "Critical Thinking"],
  },
];

/* ── Skill pill badge ── */
const SkillBadge = ({ skill, accent }: { skill: string; accent: string }) => {
  const icon = iconMap[skill];
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 11px',
        borderRadius: '5px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        fontSize: '12px',
        fontWeight: 500,
        color: '#9ca3af',
        letterSpacing: '0.02em',
        transition: 'all 0.2s ease',
        cursor: 'default',
        whiteSpace: 'nowrap' as const,
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        // parse accent hex to use as rgba — works for any 6-digit hex
        const r = parseInt(accent.slice(1, 3), 16);
        const g = parseInt(accent.slice(3, 5), 16);
        const b = parseInt(accent.slice(5, 7), 16);
        el.style.background = `rgba(${r},${g},${b},0.10)`;
        el.style.borderColor = `rgba(${r},${g},${b},0.38)`;
        el.style.color = '#e2e8f0';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = 'rgba(255,255,255,0.04)';
        el.style.borderColor = 'rgba(255,255,255,0.07)';
        el.style.color = '#9ca3af';
      }}
    >
      {icon && (
        <span style={{ fontSize: '14px', color: accent, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      <span>{skill}</span>
    </div>
  );
};

/* ── Category card ── */
const CategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const { accent } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        position: 'relative',
        background: category.cardBg ?? 'rgba(8, 15, 22, 0.82)',
        border: `1px solid ${accent}1e`,
        borderRadius: '6px',
        padding: '28px 28px 32px',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'border-color 0.3s ease',
      }}
      whileHover={{
        borderColor: `${accent}48`,
        transition: { duration: 0.2 },
      }}
    >
      {/* Top-left accent corner lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '60px',
          height: '2px',
          background: `linear-gradient(to right, ${accent}b3, transparent)`,
          borderRadius: '6px 0 0 0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '2px',
          height: '60px',
          background: `linear-gradient(to bottom, ${accent}b3, transparent)`,
          borderRadius: '6px 0 0 0',
        }}
      />
      {/* CAT_XX label — top left */}
      <div
        style={{
          fontSize: '10px',
          fontWeight: 700,
          color: `${accent}a8`,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: '14px',
        }}
      >
        CAT_{category.number}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#f1f5f9',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: '20px',
          lineHeight: 1.2,
        }}
      >
        {category.title}
      </h3>

      {/* Thin accent divider */}
      <div
        style={{
          height: '1px',
          background: `linear-gradient(to right, ${accent}40, transparent)`,
          marginBottom: '18px',
        }}
      />

      {/* Skill pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {category.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} accent={accent} />
        ))}
      </div>

      {/* Large watermark number — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '18px',
          fontSize: '88px',
          fontWeight: 900,
          color: `${accent}0d`,
          lineHeight: 1,
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: '-4px',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {category.number}
      </div>
    </motion.div>
  );
};

/* ── Main Skills section ── */
const Skills = () => {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section
      id="skills"
      className="py-20 relative"
      style={{ background: '#060b10', isolation: 'isolate' }}
    >
      {/* ── LightRays WebGL background ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#4cc9f0"
          raysSpeed={0.6}
          lightSpread={0.9}
          rayLength={1.6}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
          pulsating={true}
          fadeDistance={1.2}
          saturation={0.85}
        />
      </div>

      {/* Darkening overlay so content stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(6,11,16,0.55) 0%, rgba(6,11,16,0.40) 40%, rgba(6,11,16,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(76,201,240,0.75)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontFamily: "'Rajdhani', sans-serif",
              marginBottom: '12px',
            }}
          >
            // PORTFOLIO.SKILLS
          </div>

          {/* Main title */}
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: 1,
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              SKILLS
            </span>
            <span
              style={{
                fontWeight: 300,
                color: 'rgba(255,255,255,0.30)',
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              &amp; LEARNINGS
            </span>
          </h2>

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <div style={{ height: '1px', width: '40px', background: 'rgba(76,201,240,0.25)' }} />
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.38)',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.06em',
              }}
            >
              Technologies and tools I work with
            </p>
            <div style={{ height: '1px', width: '40px', background: 'rgba(76,201,240,0.25)' }} />
          </div>

          {/* ── Animated logo loop (kept exactly as before) ── */}
          <div className="relative mt-12 mb-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={45}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#060b10"
              ariaLabel="Technology Stack"
            />
          </div>
        </motion.div>

        {/* ── Skills grid ── */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '18px',
          }}
        >
          {skillCategories.map((category, idx) => (
            <CategoryCard key={category.number} category={category} index={idx} />
          ))}
        </div>

        {/* ── Footer stat bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            paddingTop: '18px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.18em',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            #{skillCategories.length} CATEGORIZED &nbsp;&nbsp; #{totalSkills} TECHNOLOGIES
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                title={cat.title}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: cat.accent,
                  opacity: 0.55,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.18em',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            ALWAYS LEARNING
          </div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
