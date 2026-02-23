/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Film, 
  Camera, 
  Play, 
  Lightbulb,
  Zap,
  Cpu,
  Globe,
  Users,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight,
  Target,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Search,
  Code,
  Terminal,
  ExternalLink
} from 'lucide-react';

// --- Branding Constants ---
const COLORS = {
  blue: "#003366",
  red: "#CC3333",
  orange: "#FF9933",
  bg: "#050505",
  card: "rgba(255, 255, 255, 0.03)"
};

// --- Components ---

const CircuitBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M0 100H200V300H400V100H600V500H1000"
        stroke="url(#grad1)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M1000 900H800V700H600V900H400V500H0"
        stroke="url(#grad2)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.blue} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={COLORS.red} />
          <stop offset="100%" stopColor={COLORS.orange} />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { container: "w-12 h-12", text: "text-xl", sub: "text-[8px]" },
    md: { container: "w-24 h-24", text: "text-4xl", sub: "text-[10px]" },
    lg: { container: "w-32 h-32", text: "text-6xl", sub: "text-lg" }
  };
  const s = sizes[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${s.container}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M20 20 L80 50 L20 80 Q15 80 15 75 L15 25 Q15 20 20 20" fill={COLORS.blue} />
          <path d="M40 40 L90 65 L40 90 Q35 90 35 85 L35 45 Q35 40 40 40" fill={COLORS.red} />
          <path d="M45 35 C40 45 40 65 50 75 C60 65 60 45 55 35" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="50" cy="30" r="4" fill="white" />
          <path d="M75 15 Q85 20 90 30" stroke={COLORS.orange} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M82 10 Q95 15 100 30" stroke={COLORS.orange} strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${s.text} font-black tracking-tighter uppercase flex`}>
          <span className="text-white">Gatk</span>
          <span className="text-[#CC3333]">outh</span>
        </h1>
        <p className={`${s.sub} font-bold tracking-[0.5em] text-gray-500 uppercase -mt-1`}>
          Media Network
        </p>
      </div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4"
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-black tracking-tighter uppercase ${light ? 'text-white' : 'text-white'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, items, color, delay }: { icon: any, title: string, description: string, items: string[], color: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-${color}-500/20 transition-all`} />
    <div className="relative z-10">
      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:border-[#CC3333]/30 transition-all`}>
        <Icon className={`w-7 h-7 text-white group-hover:text-[#CC3333] transition-colors`} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#CC3333] transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CC3333]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const InteractiveAIHub = () => {
  const [activeTab, setActiveTab] = useState('automation');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the Gatkouth AI Assistant. How can I help automate your business today?' }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: chatInput }];
    setMessages(newMessages);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `That sounds like a great project! At Gatkouth Media Network, we specialize in ${activeTab === 'automation' ? 'workflow automation' : activeTab === 'chatbots' ? 'conversational AI' : 'intelligent media'}. Would you like to schedule a consultation?` 
      }]);
    }, 1000);
  };

  return (
    <section id="ai-hub" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(204,51,51,0.05)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Interactive AI Hub" subtitle="Experience the Future" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Sidebar Controls */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { id: 'automation', title: 'Workflow Automation', icon: Cpu, desc: 'Streamline your operations with smart triggers.' },
              { id: 'chatbots', title: 'Conversational AI', icon: MessageSquare, desc: 'Engage customers 24/7 on WhatsApp & Telegram.' },
              { id: 'media', title: 'Intelligent Media', icon: Film, desc: 'AI-powered content creation and distribution.' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-6 rounded-2xl border transition-all text-left flex gap-4 ${
                  activeTab === tab.id 
                    ? 'bg-[#CC3333]/10 border-[#CC3333]/30 text-white' 
                    : 'bg-white/5 border-white/5 text-gray-500 hover:bg-white/10'
                }`}
              >
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'text-[#CC3333]' : 'text-gray-600'}`} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{tab.title}</h4>
                  <p className="text-xs opacity-60 leading-tight">{tab.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Preview Area (Qwen-inspired) */}
          <div className="lg:col-span-8 bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col h-[600px] shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">Gatkouth AI Terminal v2.5</span>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] uppercase font-bold text-gray-400">
                  Status: Online
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#CC3333] text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-white/[0.02]">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Gatkouth AI about your business..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:border-[#CC3333] outline-none transition-all pr-16"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-[#CC3333] text-white hover:scale-105 transition-transform"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 flex gap-4 text-[9px] uppercase tracking-widest text-gray-600 font-bold">
                <span>Suggested:</span>
                <button type="button" onClick={() => setChatInput("How can I automate my CRM?")} className="hover:text-white transition-colors">Automate CRM</button>
                <button type="button" onClick={() => setChatInput("Tell me about WhatsApp bots.")} className="hover:text-white transition-colors">WhatsApp Bots</button>
                <button type="button" onClick={() => setChatInput("AI for content creation?")} className="hover:text-white transition-colors">Content AI</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApproachStep = ({ number, title, description, delay }: { number: string, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-6 items-start"
  >
    <div className="text-5xl font-black text-white/5 select-none">{number}</div>
    <div className="pt-2">
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC3333]/30 overflow-x-hidden">
      <CircuitBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#ai-hub" className="hover:text-white transition-colors">AI Hub</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="px-6 py-2 rounded-full bg-white text-black hover:bg-[#CC3333] hover:text-white transition-all">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,51,102,0.15)_0%,transparent_70%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center max-w-4xl"
        >
          <Logo size="lg" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
          />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
            Transforming Businesses Through <span className="text-[#CC3333]">Intelligent Automation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            We don’t just build tools — we build automated business infrastructure. AI-driven systems for startups and SMEs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-full bg-[#CC3333] text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Vision
            </button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-12 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 px-6"
        >
          {[
            { label: "Efficiency", value: "+85%" },
            { label: "Cost Reduction", value: "40%" },
            { label: "Uptime", value: "24/7" },
            { label: "Accuracy", value: "99.9%" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-l border-white/10 pl-6">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What We Do" subtitle="Our Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Cpu}
              title="Business Automation"
              description="Design custom systems that eliminate manual work and increase operational efficiency."
              items={["CRM Automation", "Lead Gen Pipelines", "Sales Funnels", "API Integrations"]}
              color="blue"
              delay={0.1}
            />
            <ServiceCard 
              icon={MessageSquare}
              title="AI Chatbots"
              description="Intelligent chatbot systems for WhatsApp & Telegram to automate customer sales."
              items={["Automated Replies", "Order Processing", "Lead Qualification", "24/7 Support"]}
              color="green"
              delay={0.2}
            />
            <ServiceCard 
              icon={Bot}
              title="Custom AI Agents"
              description="Task-specific AI assistants to enhance productivity and decision-making."
              items={["Research Bots", "Content Systems", "Internal Workflow AI", "Support AI"]}
              color="orange"
              delay={0.3}
            />
            <ServiceCard 
              icon={Film}
              title="Digital Media"
              description="Professional digital content to strengthen your brand presence and engagement."
              items={["Promo Videos", "Social Content", "YouTube Editing", "Brand Graphics"]}
              color="red"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* AI Interactive Hub */}
      <InteractiveAIHub />

      {/* Who We Serve */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading title="Who We Serve" subtitle="Target Markets" />
              <div className="grid grid-cols-2 gap-4">
                {["Startups", "SMEs", "E-commerce", "Coaches", "Creators", "Agencies"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#CC3333]" />
                    <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://picsum.photos/seed/tech/800/800" 
                  alt="Technology" 
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-[#CC3333] text-white max-w-xs shadow-2xl">
                <TrendingUp className="w-10 h-10 mb-4" />
                <h4 className="text-xl font-black uppercase mb-2">Scalable Growth</h4>
                <p className="text-sm opacity-80">Empowering businesses with intelligent systems that drive sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Our Approach" subtitle="The Process" />
          <div className="space-y-12">
            <ApproachStep 
              number="01" 
              title="Understand Challenge" 
              description="We dive deep into your business processes to identify bottlenecks and manual hurdles." 
              delay={0.1} 
            />
            <ApproachStep 
              number="02" 
              title="Strategic Design" 
              description="We architect a custom automation solution tailored specifically to your unique workflow." 
              delay={0.2} 
            />
            <ApproachStep 
              number="03" 
              title="Build & Test" 
              description="Our engineers develop and rigorously test the systems to ensure seamless integration." 
              delay={0.3} 
            />
            <ApproachStep 
              number="04" 
              title="Deploy & Optimize" 
              description="We launch the system and continuously monitor performance for maximum efficiency." 
              delay={0.4} 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Why Choose Us?" subtitle="Our Edge" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "AI-First Infrastructure", desc: "Built on the latest intelligent systems." },
              { icon: ShieldCheck, title: "Custom-Built", desc: "No generic templates. Pure custom engineering." },
              { icon: Globe, title: "Scalable Architecture", desc: "Systems that grow as your business grows." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <item.icon className="w-10 h-10 text-[#CC3333] mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
                <img 
                  src="https://picsum.photos/seed/founder/600/800" 
                  alt="Butrose Machan" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-2xl font-black uppercase">Butrose Machan</h4>
                  <p className="text-xs uppercase tracking-widest text-[#CC3333] font-bold">Founder & AI Specialist</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <SectionHeading title="The Visionary" subtitle="Our Founder" />
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Gatkouth Media Network was founded by Butrose Machan to bridge the gap between complex AI technology and practical business needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Workflow Architecture",
                  "AI Integrations",
                  "Conversational AI",
                  "Process Optimization",
                  "Intelligent Media",
                  "Strategic Deployment"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <Zap className="w-4 h-4 text-[#CC3333]" />
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="pt-32 pb-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <Logo size="md" />
              <p className="mt-8 text-gray-500 max-w-sm leading-relaxed">
                Empowering businesses across Africa and emerging markets with intelligent systems that drive sustainable growth.
              </p>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-gray-400">
                  <Mail className="w-5 h-5 text-[#CC3333]" />
                  <span>butrosmachan44@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <Globe className="w-5 h-5 text-[#CC3333]" />
                  <span>Global Operations</span>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-[8px] uppercase font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Deployed to Google Cloud
                </div>
              </div>
            </div>
            <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/5">
              <h4 className="text-3xl font-black uppercase mb-6">Let’s automate your growth</h4>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <input required type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#CC3333] outline-none transition-all" />
                <input required type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#CC3333] outline-none transition-all" />
                <textarea required placeholder="How can we help?" rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#CC3333] outline-none transition-all resize-none"></textarea>
                <button type="submit" className="w-full py-4 rounded-2xl bg-[#CC3333] text-white font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
            <p>© 2026 Gatkouth Media Network. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => document.getElementById('ai-hub')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#CC3333] text-white shadow-2xl z-50 flex items-center justify-center hover:bg-[#CC3333]/90 transition-all"
      >
        <Sparkles className="w-8 h-8" />
      </motion.button>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-40" />
    </div>
  );
}
