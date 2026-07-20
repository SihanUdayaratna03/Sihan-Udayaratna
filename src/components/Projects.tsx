import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Network,
  GitBranch,
  GitFork,
  ChevronDown,
  ExternalLink,
  Zap,
  Shield,
  Mic,
  FileText,
  Trophy,
  Code2,
  Database,
  Layers,
  Activity,
  Package,
  HeartPulse,
  Cpu,
  Bot,
  ScrollText,
  BarChart3,
  Lock,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Project Data
───────────────────────────────────────────── */
const featuredProject = {
  id: 'astro-ai',
  category: 'Agentic AI · RAG · Knowledge Graphs',
  title: 'Astro AI',
  tagline: 'A multimodal, agent-driven document assistant that maps relationships, reasons across them, and visualizes knowledge through an interactive Knowledge Graph.',
  github: 'https://github.com/SihanUdayaratna03/Astro-AI',
  accentColor: '#7b2cbf',
  glowColor: 'rgba(123, 44, 191, 0.15)',
  features: [
    {
      icon: <Brain size={18} />,
      title: 'Agentic RAG with LangGraph',
      desc: 'A stateful LangGraph agent that dynamically selects reasoning paths — semantic Qdrant search, recursive MySQL graph traversal (WITH RECURSIVE SQL), or mathematical computation — rather than following a fixed pipeline.',
    },
    {
      icon: <Network size={18} />,
      title: 'Automated Knowledge Graph + PageRank',
      desc: 'Google Gemini extracts entities and relationships during async document ingestion. NetworkX computes PageRank centrality so the React visualization auto-scales nodes by conceptual importance.',
    },
    {
      icon: <Zap size={18} />,
      title: 'Ghost Drag — UI-to-AI Bridging',
      desc: 'Users drag nodes directly from the Knowledge Graph into the chat. Dropping two concepts auto-constructs a multi-hop reasoning query, enabling relationship inference beyond pure semantic similarity.',
    },
    {
      icon: <Shield size={18} />,
      title: 'Production-Grade Reliability',
      desc: 'Local sentence-transformers for zero embedding API cost, LangChain multi-tier Gemini fallback, automatic exponential backoff on rate limits, and Qdrant-powered fast semantic retrieval.',
    },
    {
      icon: <Mic size={18} />,
      title: 'Multimodal by Design',
      desc: 'Supports PDFs, images, OCR via Gemini Vision, and browser-native speech recognition — enabling natural interaction through both text and voice.',
    },
  ],
  techStack: [
    'React', 'react-force-graph-2d', 'Web Speech API',
    'FastAPI', 'Async Background Tasks',
    'LangChain', 'LangGraph', 'Google Gemini API',
    'Qdrant', 'MySQL',
    'NetworkX', 'sentence-transformers',
  ],
};

const otherProjects = [
  {
    id: 'autooracle-ai',
    category: 'Machine Learning · Full-Stack',
    title: 'AutoOracle AI',
    tagline: 'A premium, full-stack Machine Learning pipeline and web application for predicting used car prices, specifically calibrated for the Sri Lankan automotive market.',
    github: 'https://github.com/SihanUdayaratna03/AutoOracle-AI',
    accentColor: '#14b8a6',
    glowColor: 'rgba(20, 184, 166, 0.12)',
    achievement: null,
    features: [
      { icon: <Brain size={16} />, title: 'LLM Training & AI Depreciation', desc: 'Trained and fine-tuned underlying LLMs within Jupyter Notebook environments, alongside Random Forest algorithms acting as complex depreciation engines.' },
      { icon: <BarChart3 size={16} />, title: 'Sri Lankan Market Adaptation', desc: 'Calibrated historical vehicle data scaled to account for local economic factors, including high import vehicle taxes (3x-4x base value) and LKR conversion rates.' },
      { icon: <Database size={16} />, title: 'FastAPI Backend', desc: 'A high-performance REST API that serves the trained machine learning model for real-time price predictions.' },
      { icon: <Layers size={16} />, title: 'Cinematic Frontend UI', desc: 'A premium, responsive web application built with React and Vite to provide users with an intuitive pricing interface.' },
    ],
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'React', 'Vite', 'Jupyter Notebook', 'LLMs'],
  },
  {
    id: 'bookmatch-ai',
    category: 'NLP · Semantic Search · AI',
    title: 'BookMatch-AI',
    tagline: 'An AI-powered semantic book recommendation system that discovers relevant literature by understanding content and metadata using NLP, LangChain, and Vector Databases.',
    github: 'https://github.com/SihanUdayaratna03/BookMatch-AI',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.12)',
    achievement: null,
    features: [
      { icon: <Brain size={16} />, title: 'Manually Trained LLM Pipeline', desc: 'Features a manually trained LLM integrated with a robust text preparation pipeline that engineers raw metadata into optimized context for the model.' },
      { icon: <Network size={16} />, title: 'Semantic Search Engine', desc: 'Uses advanced NLP and vector embeddings to search and recommend books based on concepts, themes, and contextual meaning rather than simple keyword matching.' },
      { icon: <Layers size={16} />, title: 'LangChain AI Retrieval', desc: 'Orchestrates scalable document processing and AI-powered retrieval workflows utilizing LangChain alongside Vector Databases like Qdrant and FAISS.' },
      { icon: <Database size={16} />, title: 'Automated Data Cleaning', desc: 'A comprehensive Pandas and NumPy pipeline that handles missing descriptions, removes unnecessary metadata, and extracts precise insights for high-accuracy recommendations.' },
    ],
    techStack: ['Python', 'LangChain', 'NLP', 'Qdrant / FAISS', 'Pandas', 'Jupyter Notebook', 'LLMs'],
  },
  {
    id: 'tasklang',
    category: 'Compiler Design · DSL',
    title: 'TaskLang++',
    tagline: 'A custom-built Domain Specific Language for human-readable task scheduling and workflow automation, with a complete compiler pipeline.',
    github: 'https://github.com/SihanUdayaratna03/_TaskLang_',
    accentColor: '#4cc9f0',
    glowColor: 'rgba(76, 201, 240, 0.12)',
    achievement: null,
    features: [
      { icon: <ScrollText size={16} />, title: 'Formal Language Grammar', desc: 'Language grammar designed from scratch using BNF/EBNF notation, covering scheduling syntax, dependency declarations, and conditional execution rules.' },
      { icon: <Code2 size={16} />, title: 'Full Compiler Pipeline', desc: 'Complete implementation of lexical analysis (Flex/Lex) and syntax parsing (Bison/Yacc), producing a working parse tree and execution simulation.' },
      { icon: <Activity size={16} />, title: 'Rich Scheduling Features', desc: 'Supports daily/weekly/time-specific scheduling, task dependencies, conditional execution, workflow automation, and comprehensive error detection.' },
      { icon: <GitBranch size={16} />, title: 'Build Automation', desc: 'Makefile-driven build system with WSL + VS Code development environment and full Git version control.' },
    ],
    techStack: ['C', 'Flex / Lex', 'Bison / Yacc', 'Makefile', 'WSL', 'Git & GitHub'],
  },
  {
    id: 'onyx',
    category: 'FinTech · AI · Governance',
    title: 'OnYx',
    tagline: 'Smart Accounting & Governance — an AI-powered financial platform solving the manual cheque processing and ledger pain points faced by Sri Lankan SMEs.',
    github: 'https://github.com/rishindu973/OnYx-smart-accounting',
    demo: 'https://lnkd.in/gx3TupgE',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    achievement: { label: '🏆 Devthon 3.0 Semi-Finalist', sub: 'University of Moratuwa · Top 150 Teams' },
    features: [
      { icon: <FileText size={16} />, title: 'AI Document Processing', desc: 'Smart data extraction from physical cheques and financial documents, eliminating manual data entry for SME owners.' },
      { icon: <Shield size={16} />, title: 'Real-Time Governance Controls', desc: 'Configurable spending rules and approval workflows enforce financial governance policies automatically.' },
      { icon: <BarChart3 size={16} />, title: 'Intelligent Review & Anomaly Detection', desc: 'Automated bank reconciliation with an anomaly detection interface that flags discrepancies before they become issues.' },
      { icon: <Lock size={16} />, title: 'Audit-Ready Traceability', desc: 'Secure, immutable financial trails with full audit logging — designed for regulatory confidence from day one.' },
    ],
    techStack: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    id: 'medistore',
    category: 'Healthcare · Full-Stack · OOAD',
    title: 'MediStore',
    tagline: 'A full-stack pharmacy inventory and operations platform — the group project for the Object Oriented Analysis & Design module (Y2S1, SLIIT).',
    github: null,
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    achievement: null,
    features: [
      { icon: <Layers size={16} />, title: 'Role-Based Access Control', desc: 'Three-tier RBAC system (Admin / Pharmacist / Staff) with granular permission management and secure JWT + BCrypt authentication.' },
      { icon: <Package size={16} />, title: 'Inventory & Batch Management', desc: 'Full lifecycle tracking across categories, cost/pricing, stock in/out, minimum stock levels, expiry dates, and reorder support with vendor tracking.' },
      { icon: <Database size={16} />, title: 'Sales, Receipts & Refunds', desc: 'Itemized order management with discounts, receipt generation, line-item refund/return flows, and prescription RX entry with dispense tracking.' },
      { icon: <Activity size={16} />, title: 'Alerts, Reports & CI/CD', desc: 'Scheduled email alerts for low stock and near-expiry. On-demand PDF/CSV reports. GitHub Actions CI, Docker Compose, Swagger/OpenAPI documentation.' },
    ],
    techStack: ['React', 'Java Spring Boot', 'MySQL', 'JWT', 'Docker', 'GitHub Actions', 'Swagger/OpenAPI'],
  },
  {
    id: 'pill-dispenser',
    category: 'IoT · Healthcare · Embedded',
    title: 'Smart Pill Dispenser',
    tagline: 'An intelligent automated medication management system integrating smart dispensing mechanisms, real-time tracking, and automated reminders to ensure timely and accurate medication intake.',
    github: null,
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.12)',
    achievement: null,
    features: [
      { icon: <HeartPulse size={16} />, title: 'Smart Dispensing Mechanism', desc: 'Automated dispensing hardware designed to release the correct medication at the correct time, reducing human error in medication management.' },
      { icon: <Activity size={16} />, title: 'Real-Time Tracking', desc: 'Live monitoring of dispensing events and medication adherence, providing patients and caregivers with up-to-date intake records.' },
      { icon: <Cpu size={16} />, title: 'Automated Reminders', desc: 'Proactive notification system ensuring patients never miss a dose, with customizable alert schedules tied to prescription timing.' },
      { icon: <Bot size={16} />, title: 'Real-World Healthcare Impact', desc: 'Applied technical skills to solve a genuine healthcare challenge, bridging embedded systems with software to create a patient-first solution.' },
    ],
    techStack: ['Embedded Systems', 'IoT', 'Real-Time Monitoring', 'Automated Notifications'],
  },
  {
    id: 'mindup',
    category: 'EdTech · Gamification · Full-Stack',
    title: 'MindUp',
    tagline: 'A gamified self-learning platform — "Level Up Your Mind." Built as the Software Engineering module group project, MindUp combines AI-powered learning paths, competitive leaderboards, and a reward system to make personal growth addictive.',
    github: 'https://github.com/Maheesh09/SE-Project-Demo-Frontend',
    demo: 'https://www.mindup.lk/',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.12)',
    achievement: null,
    features: [
      { icon: <Brain size={16} />, title: 'AI-Powered Learning Paths', desc: 'Adaptive content delivery powered by AI tailors each user\'s learning journey based on performance, interests, and progress velocity.' },
      { icon: <Trophy size={16} />, title: 'Gamified Leaderboards & Rewards', desc: 'Competitive XP-based leaderboards and a reward system keep users motivated — turning self-improvement into an engaging, game-like experience.' },
      { icon: <Layers size={16} />, title: 'Full-Stack Architecture', desc: 'React frontend with a Spring Boot backend, RESTful APIs, and a relational database — built with a full SDLC process as part of the SE module.' },
      { icon: <BarChart3 size={16} />, title: 'Progress Analytics', desc: 'Detailed dashboards showing learning streaks, skill growth, and completion rates, giving users clear visibility into their development trajectory.' },
    ],
    techStack: ['React', 'Spring Boot', 'REST API', 'MySQL', 'Gamification', 'AI Learning'],
  },
  {
    id: 'hivechat',
    category: 'Distributed Systems · Python · gRPC',
    title: 'HiveChat',
    tagline: 'A fault-tolerant distributed messaging system that demonstrates four core distributed computing principles in a single cluster: Fault Tolerance, Data Replication, Raft Consensus, and Time Synchronization — any node can fail, and the system keeps running without losing a single message.',
    github: 'https://github.com/ShageeshanT/hivechat-demo',
    accentColor: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.12)',
    achievement: null,
    features: [
      { icon: <Shield size={16} />, title: 'Fault Tolerance', desc: 'SQLite-backed persistence ensures every message survives node restarts. A pending queue drains automatically via the heartbeat recovery path when offline peers rejoin.' },
      { icon: <Database size={16} />, title: 'Data Replication & Vector Clocks', desc: 'Each message is replicated to all live peers via gRPC. Vector clocks track causal ordering across nodes — the MessageReorderer guarantees causally consistent delivery.' },
      { icon: <Cpu size={16} />, title: 'Raft Consensus', desc: 'A full Raft implementation (consensus.py) handles leader election and log replication, keeping all nodes in agreement even during network partitions and leader failures.' },
      { icon: <Activity size={16} />, title: 'Time Synchronization', desc: 'Lamport logical clocks, NTP-style synchronisation, and causal message reordering work in concert so events are globally ordered across a heterogeneous, asynchronous cluster.' },
    ],
    techStack: ['Python 3.10+', 'gRPC', 'Protocol Buffers', 'SQLite', 'Raft Consensus', 'Vector Clocks', 'Lamport Clocks'],
  },
];

/* ─────────────────────────────────────────────
   Tech Badge
───────────────────────────────────────────── */
const TechBadge = ({ label, accent }: { label: string; accent: string }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-[11px] font-medium border tracking-wide"
    style={{ borderColor: `${accent}40`, color: accent, backgroundColor: `${accent}10` }}
  >
    {label}
  </span>
);

/* ─────────────────────────────────────────────
   Featured Project Card (Astro AI)
───────────────────────────────────────────── */
const FeaturedCard = ({ project }: { project: typeof featuredProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden border border-white/8 bg-[#080808] mb-10 group"
      style={{ boxShadow: `0 0 60px ${project.glowColor}` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />

      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: project.glowColor, transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 p-10 md:p-14">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="flex-1">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 px-3 py-1 rounded-full border"
              style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, backgroundColor: `${project.accentColor}10` }}>
              Featured Project · {project.category}
            </span>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3 tracking-wide">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-xs uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <GitFork size={14} /> Source Code
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {project.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.03] border border-white/6 rounded-2xl p-5 hover:border-white/12 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: project.accentColor }}>
                {f.icon}
                <span className="text-xs font-semibold uppercase tracking-wider text-white">{f.title}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 mb-3 font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <TechBadge key={t} label={t} accent={project.accentColor} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Standard Project Card
───────────────────────────────────────────── */
const ProjectCard = ({ project, index }: { project: typeof otherProjects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden border border-white/6 bg-[#080808] group hover:border-white/12 transition-all duration-500"
      style={{ boxShadow: expanded ? `0 0 40px ${project.glowColor}` : 'none' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`, opacity: expanded ? 1 : 0.5 }} />

      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: project.glowColor, transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 p-8">
        {/* Achievement Badge */}
        {project.achievement && (
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide"
            style={{ backgroundColor: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b' }}>
            <Trophy size={12} />
            <span>{project.achievement.label}</span>
            <span className="text-[10px] opacity-70">— {project.achievement.sub}</span>
          </div>
        )}

        {/* Category */}
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-3 px-2.5 py-1 rounded-full border"
          style={{ color: project.accentColor, borderColor: `${project.accentColor}35`, backgroundColor: `${project.accentColor}08` }}>
          {project.category}
        </span>

        {/* Title & Tagline */}
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-wide">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light mb-6">
          {project.tagline}
        </p>

        {/* Feature list - always visible (first 2), rest expand */}
        <div className="space-y-3 mb-6">
          {project.features.slice(0, 2).map((f, i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-0.5 flex-shrink-0" style={{ color: project.accentColor }}>{f.icon}</div>
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">{f.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{f.desc}</p>
              </div>
            </div>
          ))}

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-3 overflow-hidden"
              >
                {project.features.slice(2).map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0" style={{ color: project.accentColor }}>{f.icon}</div>
                    <div>
                      <p className="text-white text-xs font-semibold mb-0.5">{f.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-2 font-semibold">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <TechBadge key={t} label={t} accent={project.accentColor} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors duration-200"
            style={{ color: project.accentColor }}
          >
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.div>
            {expanded ? 'Show Less' : 'View Details'}
          </button>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white text-[11px] uppercase tracking-wider hover:border-white/25 hover:bg-white/5 transition-all duration-300"
              >
                <GitFork size={12} /> Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-white/[0.02] backdrop-blur-3xl border-t border-white/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-10"
          style={{ background: 'radial-gradient(circle, #7b2cbf 0%, #4cc9f0 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-semibold text-gray-500 mb-4">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light mb-4 tracking-widest uppercase text-white">
            Projects & Achievements
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-5" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-light leading-relaxed">
            A selection of projects spanning Agentic AI, compiler design, financial technology, healthcare systems,
            and full-stack engineering — each built to solve a real problem at a professional standard.
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedCard project={featuredProject} />

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

