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
  github: 'https://lnkd.in/e2mWUkrY',
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
    id: 'tasklang',
    category: 'Compiler Design · DSL',
    title: 'TaskLang++',
    tagline: 'A custom-built Domain Specific Language for human-readable task scheduling and workflow automation, with a complete compiler pipeline.',
    github: 'https://lnkd.in/gFTR2iqJ',
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
    github: 'https://lnkd.in/gXyGBmPb',
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
  <span
    className="inline-block px-3 py-1 rounded-full text-[11px] font-medium border tracking-wide"
    style={{ borderColor: `${accent}40`, color: accent, backgroundColor: `${accent}10` }}

const Projects = () => { return <div>Projects</div>; };
export default Projects;
