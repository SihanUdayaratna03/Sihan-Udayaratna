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

const Projects = () => { return <div>Projects</div>; };
export default Projects;
