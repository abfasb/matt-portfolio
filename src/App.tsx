import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Calendar,
  Award,
  Code2,
  Sparkles,
  ChevronRight,
  Download,
  ArrowUp,
  MapPin,
  Briefcase,
  GraduationCap,
  Zap,
  Target,
  Users,
  TrendingUp,
  Rocket,
  Star,
  Brain,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Hexagon,
  CircuitBoard,
  Cpu,
  Binary,
  Network,
  Cloud,
  Database,
  Terminal,
  Workflow
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 200]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false);
  };

  // Color variables for light/dark mode
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-800/80" : "bg-white/90";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";
  const navBg = isDarkMode ? "bg-gray-900/95" : "bg-white/95";
  const inputBg = isDarkMode ? "bg-gray-800" : "bg-gray-50";
  const hoverBg = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100";
  
  // Section-specific backgrounds
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const accentText = isDarkMode ? "text-gray-300" : "text-gray-700";

  // Innovative Navigation Data
  const navSections = [
    { id: 'home', label: 'Home', icon: <Cpu className="w-5 h-5" />, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'about', label: 'About', icon: <CircuitBoard className="w-5 h-5" />, gradient: 'from-purple-500 to-pink-500' },
    { id: 'projects', label: 'Projects', icon: <Binary className="w-5 h-5" />, gradient: 'from-green-500 to-emerald-500' },
    { id: 'experience', label: 'Journey', icon: <Workflow className="w-5 h-5" />, gradient: 'from-orange-500 to-red-500' },
    { id: 'contact', label: 'Connect', icon: <Network className="w-5 h-5" />, gradient: 'from-yellow-500 to-amber-500' }
  ];

  const projects = [
    {
      title: "DILG Calapan City",
      description: "Enterprise-grade document management system with advanced AI capabilities, automated classification, intelligent search algorithms, and comprehensive real-time analytics dashboard for efficient government operations.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "AI/ML"],
      github: "https://github.com/abfasb/dilg-calapan-capstone-backend",
      live: "https://dilg-calapan.vercel.app",
      category: "Government",
      gradient: "from-blue-500 to-indigo-600",
      icon: <Globe className="w-6 h-6" />,
      status: "Live"
    },
    {
      title: "KioskPharmaPOS",
      description: "Revolutionary pharmacy POS with cutting-edge prescription AI featuring computer vision and deep learning for handwritten prescription recognition, inventory management, and patient safety checks.",
      tech: ["React", "TypeScript", "Node.js", "Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/abfasb/KioskPharmaPOS-frontend",
      live: "#",
      category: "Healthcare",
      gradient: "from-emerald-500 to-teal-600",
      icon: <Brain className="w-6 h-6" />,
      status: "In Development"
    },
    {
      title: "Brightcares AutoParts",
      description: "Advanced e-commerce platform with predictive analytics, machine learning-powered inventory optimization, customer behavior analysis, and automated intelligent restocking system.",
      tech: ["React", "Firebase", "ML", "Tailwind", "Node.js", "Analytics"],
      github: "#",
      live: "https://brightcares-autoparts.firebaseapp.com/",
      category: "E-commerce",
      gradient: "from-orange-500 to-red-600",
      icon: <Rocket className="w-6 h-6" />,
      status: "Live"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive educational platform with advanced course management, real-time collaboration tools, student performance tracking, and interactive learning modules for modern institutions.",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "Docker", "Redis"],
      github: "https://github.com/abfasb/web2-system",
      live: "#",
      category: "Education",
      gradient: "from-violet-500 to-purple-600",
      icon: <Star className="w-6 h-6" />,
      status: "Completed"
    }
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelance & Side Projects",
      period: "2023 - Present",
      description: "Architecting and developing enterprise-grade full-stack applications with modern tech stacks. Specializing in React, TypeScript, Node.js ecosystems, and seamless AI/ML integration for scalable, production-ready solutions.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "AI/ML"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      achievements: ["Built 15+ production applications", "Integrated AI/ML in 8 projects", "100% client satisfaction rate"]
    },
    {
      role: "BSIT Student",
      company: "Information Technology",
      period: "2022 - 2026",
      description: "Pursuing Bachelor of Science in Information Technology with intensive focus on advanced software architecture, AI/ML integration, cloud computing, and cutting-edge web technologies.",
      tech: ["Academic Research", "Open Source", "Innovation"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      achievements: ["Maintained 3.8+ GPA", "Published 2 research papers", "Led 5 team projects"]
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "15+", icon: <Target className="w-5 h-5" />, color: "from-blue-500 to-cyan-600", suffix: "" },
    { label: "Tech Stack", value: "20+", icon: <Zap className="w-5 h-5" />, color: "from-purple-500 to-pink-600", suffix: "Technologies" },
    { label: "Experience", value: "3", icon: <TrendingUp className="w-5 h-5" />, color: "from-emerald-500 to-teal-600", suffix: "Years" },
    { label: "Satisfied Clients", value: "10+", icon: <Users className="w-5 h-5" />, color: "from-orange-500 to-red-600", suffix: "Clients" }
  ];

  const skills = [
    { 
      category: "Frontend Excellence", 
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Bootstrap"], 
      color: "from-blue-500 to-cyan-600",
      icon: <Code2 className="w-5 h-5" />,
      level: 95
    },
    { 
      category: "Backend Mastery", 
      items: ["Node.js", "Express", "Laravel", "Django", "Python", "C#"], 
      color: "from-purple-500 to-pink-600",
      icon: <Database className="w-5 h-5" />,
      level: 90
    },
    { 
      category: "Database & Storage", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma", "Redis", "Supabase"], 
      color: "from-emerald-500 to-teal-600",
      icon: <Cloud className="w-5 h-5" />,
      level: 88
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "GitHub Actions"], 
      color: "from-orange-500 to-red-600",
      icon: <Terminal className="w-5 h-5" />,
      level: 85
    }
  ];

  const achievements = [
    {
      title: "Hack4Gov Mimaropa Placer",
      year: "2024-2025",
      description: "Secured placement in prestigious regional government hackathon",
      icon: <Award className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Open Source Contributor",
      year: "2023",
      description: "Active contributor to major open source projects and communities",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Computer Literacy Excellence",
      year: "2012-2016",
      description: "Multiple-time recipient of computer literacy awards",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} overflow-x-hidden transition-colors duration-300`}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50"
        }`}></div>
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${
            isDarkMode ? "bg-blue-500/10" : "bg-blue-500/20"
          } rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute top-3/4 right-1/4 w-96 h-96 ${
            isDarkMode ? "bg-purple-500/10" : "bg-purple-500/20"
          } rounded-full blur-3xl animate-pulse delay-1000`}></div>
          <div className={`absolute bottom-1/4 left-1/2 w-64 h-64 ${
            isDarkMode ? "bg-cyan-500/10" : "bg-cyan-500/20"
          } rounded-full blur-3xl animate-pulse delay-500`}></div>
        </div>
        {/* Grid Pattern */}
        <div className={`absolute inset-0 opacity-10 ${
          isDarkMode 
            ? "bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" 
            : "bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]"
        } bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`}></div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? `${navBg} backdrop-blur-2xl border-b ${borderColor} shadow-2xl` 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className={`relative flex items-center space-x-3 ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } rounded-2xl px-6 py-3`}>
                <div className="relative">
                  <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/8gRDWFTf/Matt-ID-1-1.jpg" alt='Matt Logo' />
                  <div className="absolute inset-0 "></div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MB
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation - Hexagon Grid */}
            <div className="hidden lg:flex items-center space-x-1">
              {navSections.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative group p-2 transition-all duration-300 ${
                    activeSection === item.id ? 'scale-110' : 'scale-100'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {/* Hexagon Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl transform rotate-45 scale-75 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100 scale-100' : ''
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2 px-4 py-3">
                    <div className={`transition-colors duration-300 ${
                      activeSection === item.id ? 'text-white' : isDarkMode ? 'text-gray-400' : 'text-gray-600 group-hover:text-white'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${
                      activeSection === item.id ? 'text-white' : isDarkMode ? 'text-gray-400' : 'text-gray-600 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle with Advanced Animation */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-3 rounded-2xl transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-cyan-400' 
                    : 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-amber-600'
                } border ${isDarkMode ? 'border-cyan-500/30' : 'border-amber-500/30'}`}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                  isDarkMode ? 'from-cyan-500 to-blue-500' : 'from-amber-500 to-orange-500'
                } opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
              </motion.button>

              {/* Resume Button */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-6 py-3 rounded-2xl shadow-2xl"
                  onClick={() => window.open('https://storage.googleapis.com/pharma-kiosk-ad218.appspot.com/uploads/DILG-251023-5723/Mat%20Resume%20%281%29.pdf?GoogleAccessId=firebase-adminsdk-cqbiu%40pharma-kiosk-ad218.iam.gserviceaccount.com&Expires=1898553600&Signature=i1d6c903wVhnKgFuQvvNppvuUvM4fHaq8gefLa7Zc4hNqw3BN9sx2vrj7nGgiZBXiigw55WmoDl5ZxlRjdP6cxivfI%2Fzbx0qIUxljOD%2FZIE%2FaQtrTZHZQI4GTVShzqWFCuyt1lWH74D4dnYlQdgu0n%2FFv31uHu5D7niI9o%2BgXqIjy3Xs467NtfjPS6KTqEBEGRH3FHCyXWDQ3Crz4WpHD361vgbxgj292DNi0WGn4kkOmzohu8npZWnx309T%2FTnIP%2BxERGMZM%2BZTxO5n9MYuBYkd9S9yF6FIhJUm1tUIRADJkxTieEiFkg8HLyhngaGmGj5fjQMiUdaMM7Tc7GvUyQ%3D%3D', '_blank')}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center font-semibold">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </span>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleNav}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`lg:hidden p-3 rounded-2xl ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400"
                    : "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-amber-500/30 text-amber-600"
                }`}
              >
                {isNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${
              isDarkMode ? "bg-black/80" : "bg-white/95"
            } backdrop-blur-2xl z-30 lg:hidden`}
            onClick={() => setIsNavOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center justify-center min-h-screen p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-6 max-w-md">
                {navSections.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group p-6 rounded-3xl bg-gradient-to-br ${item.gradient} border-2 border-white/20 backdrop-blur-xl transition-all duration-300 ${
                      activeSection === item.id ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                    }`}
                  >
                    <div className="text-center space-y-3">
                      <div className="flex justify-center">
                        <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm ${
                          activeSection === item.id ? 'scale-110' : ''
                        } transition-transform duration-300`}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-white font-semibold text-lg">{item.label}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute top-1/4 left-1/4 w-96 h-96 ${
              isDarkMode ? "bg-blue-500/5" : "bg-blue-500/10"
            } rounded-full blur-3xl`}
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${
              isDarkMode ? "bg-purple-500/5" : "bg-purple-500/10"
            } rounded-full blur-3xl`}
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative z-10"
        >
          <div className="text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="inline-block mb-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  <Badge className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Available for Opportunities
                  </Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Main Heading with Advanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  Matthew
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-2">
                  Balinton
                </span>
              </h1>
              
              <motion.p 
                className={`text-3xl md:text-4xl ${mutedText} mb-6 font-light`}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer & 
                <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-semibold"> AI Innovator</span>
              </motion.p>
              
              <motion.p 
                className={`text-xl ${mutedText} max-w-4xl mx-auto mb-12 leading-relaxed`}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                Crafting <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">next-generation digital experiences</span> with 
                cutting-edge technologies and seamless 
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> AI integration</span>
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 transition duration-500 group-hover:opacity-100"></div>
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 text-lg border-0 rounded-2xl shadow-2xl"
                  onClick={() => scrollToSection('projects')}
                >
                  <span className="relative z-10 flex items-center font-semibold">
                    View My Work
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`px-12 py-6 text-lg border-2 border-cyan-500/50 hover:border-cyan-400 ${
                    isDarkMode ? "bg-transparent hover:bg-cyan-500/10 text-cyan-400" : "bg-transparent hover:bg-cyan-500/10 text-cyan-600"
                  } rounded-2xl backdrop-blur-sm transition-all duration-300`}
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="flex justify-center gap-8 mb-16"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", label: "GitHub", gradient: "from-gray-600 to-gray-800", color: isDarkMode ? "text-gray-400" : "text-gray-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", label: "LinkedIn", gradient: "from-blue-600 to-blue-800", color: isDarkMode ? "text-blue-400" : "text-blue-600" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", label: "Email", gradient: "from-red-500 to-pink-600", color: isDarkMode ? "text-red-400" : "text-red-600" }
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className={`relative p-5 rounded-2xl ${
                    isDarkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-300"
                  } group-hover:border-opacity-50 transition-all duration-300 backdrop-blur-sm ${social.color} group-hover:text-white`}>
                    <social.icon className="w-7 h-7" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500`}></div>
                  <div className={`relative ${
                    isDarkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-300"
                  } rounded-3xl p-8 backdrop-blur-sm`}>
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } font-medium`}>
                      {stat.label}
                      {stat.suffix && <span className={`block text-xs ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      } mt-1`}>{stat.suffix}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className={`py-32 relative ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-8 py-4 text-base font-semibold">
                <CircuitBoard className="w-5 h-5 mr-2" />
                About Me
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Innovation Through Code
              </span>
            </h2>
            <p className={`text-xl ${mutedText} max-w-3xl mx-auto`}>
              Transforming visionary ideas into remarkable digital realities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Enhanced Journey Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <Card className={`relative ${cardBg} border ${cardBorder} backdrop-blur-xl overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-3xl flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      My Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 leading-relaxed text-lg">
                    <p className={mutedText}>
                      From writing my first "Hello World" in 2022 to architecting sophisticated enterprise applications, 
                      my journey has been fueled by relentless curiosity and passion for technological innovation.
                    </p>
                    <p className={mutedText}>
                      I specialize in crafting seamless digital experiences that bridge complex technical architecture 
                      with intuitive user interfaces. Every project represents an opportunity to innovate, evolve, and 
                      redefine possibilities.
                    </p>
                    <div className={`pt-6 border-t ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    }`}>
                      <h4 className={`font-bold text-xl mb-6 flex items-center ${
                        isDarkMode ? "text-cyan-400" : "text-cyan-600"
                      }`}>
                        <Award className="w-6 h-6 mr-3" />
                        Professional Certifications
                      </h4>
                      <ul className="space-y-4">
                        {["Fortinet Certified Associate in Cybersecurity", "Fortinet Certified Fundamentals in Cybersecurity"].map((cert, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className={`${mutedText} group-hover/item:${
                              isDarkMode ? "text-white" : "text-gray-900"
                            } transition-colors`}>{cert}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Achievements Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <Card className={`relative ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-500/20" 
                    : "bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-500/30"
                } backdrop-blur-xl overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                  <CardHeader>
                    <CardTitle className={`text-3xl flex items-center ${
                      isDarkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}>
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.15 }}
                          whileHover={{ scale: 1.03, x: 5 }}
                          className="relative group/achievement"
                        >
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-0 group-hover/achievement:opacity-50 transition duration-300`}></div>
                          <div className={`relative flex items-start p-5 rounded-2xl ${
                            isDarkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-300"
                          } group-hover/achievement:border-opacity-30 transition-all duration-300`}>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white flex-shrink-0 mr-5 shadow-lg`}>
                              {achievement.icon}
                            </div>
                            <div>
                              <h5 className={`font-bold text-lg mb-1 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                              }`}>{achievement.title}</h5>
                              <p className={`text-sm ${mutedText} mb-2`}>{achievement.description}</p>
                              <p className={`text-xs ${
                                isDarkMode ? "text-cyan-400" : "text-cyan-600"
                              } font-medium`}>{achievement.year}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className={`text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400`}>
                Technical Arsenal
              </h3>
              
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${skillSet.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500`}></div>
                  <Card className={`relative ${cardBg} border ${cardBorder} backdrop-blur-xl overflow-hidden`}>
                    <div className={`h-1 bg-gradient-to-r ${skillSet.color}`} />
                    <CardHeader className="pb-4">
                      <CardTitle className={`text-xl flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {skillSet.icon}
                        <span className="ml-3">{skillSet.category}</span>
                        <div className="ml-auto flex items-center space-x-2">
                          <span className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}>{skillSet.level}%</span>
                          <div className={`w-20 h-2 ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-300"
                          } rounded-full`}>
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${skillSet.color}`}
                              style={{ width: `${skillSet.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {skillSet.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="relative group/skill"
                          >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillSet.color} rounded-lg blur opacity-0 group-hover/skill:opacity-75 transition duration-300`}></div>
                            <Badge 
                              className={`relative px-4 py-2 text-sm ${
                                isDarkMode 
                                  ? "bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-600/50" 
                                  : "bg-gray-200/80 border border-gray-300 text-gray-700 hover:bg-gray-300/80"
                              } border transition-colors backdrop-blur-sm`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className={`py-32 relative ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-8 py-4 text-base font-semibold">
                <Binary className="w-5 h-5 mr-2" />
                Portfolio Showcase
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl ${mutedText} max-w-3xl mx-auto`}>
              Innovation meets execution in every line of code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500`}></div>
                <Card
                  className={`relative h-full ${
                    isDarkMode 
                      ? "bg-gray-800 border border-gray-700" 
                      : "bg-white border border-gray-300"
                  } backdrop-blur-xl overflow-hidden transition-all duration-500`}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-4 py-2 font-semibold`}>
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className={`${
                          isDarkMode 
                            ? "border-cyan-500/50 text-cyan-400" 
                            : "border-cyan-600/50 text-cyan-600"
                        }`}>
                          {project.status}
                        </Badge>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                    
                    <CardTitle className={`text-2xl ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`leading-relaxed mt-3 text-base ${mutedText}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className={`text-xs ${
                            isDarkMode 
                              ? "bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-600/50" 
                              : "bg-gray-200/80 border border-gray-300 text-gray-700 hover:bg-gray-300/80"
                          } border transition-colors backdrop-blur-sm`}>
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className={`flex gap-4 border-t ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  } pt-6`}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        variant="outline"
                        className={`w-full border-2 ${
                          isDarkMode 
                            ? "border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-700/50 text-gray-400 hover:text-white" 
                            : "border-gray-400 hover:border-gray-500 bg-transparent hover:bg-gray-200/50 text-gray-600 hover:text-gray-900"
                        } transition-all duration-300 rounded-xl`}
                        onClick={() => window.open(project.github, '_blank')}
                        disabled={project.github === '#'}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-xl border-0 transition-all duration-300 rounded-xl`}
                        onClick={() => window.open(project.live, '_blank')}
                        disabled={project.live === '#'}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className={`py-32 relative ${sectionBg}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-8 py-4 text-base font-semibold">
                <Workflow className="w-5 h-5 mr-2" />
                Career Journey
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Professional Path
              </span>
            </h2>
            <p className={`text-xl ${mutedText} max-w-3xl mx-auto`}>
              From passion to profession - building the future one line at a time
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline */}
            <div className="absolute left-16 top-0 bottom-0 flex flex-col items-center">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={experienceInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full origin-top shadow-2xl"
                style={{ height: 'calc(100% - 4rem)' }}
              />
              
              {experiences.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={experienceInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.3 }}
                  className={`absolute w-8 h-8 rounded-full border-4 ${
                    isDarkMode ? "border-gray-900" : "border-white"
                  } bg-gradient-to-r from-blue-500 to-purple-500 z-10 shadow-2xl`}
                  style={{ 
                    top: `${(index * 100) + 12}%`,
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1.5"></div>
                </motion.div>
              ))}
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-8 mb-16 last:mb-0 relative group"
              >
                {/* Timeline Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-20 flex-shrink-0"
                >
                  <div className={`absolute -inset-3 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white border-4 ${
                    isDarkMode ? "border-gray-900" : "border-white"
                  } shadow-2xl`}>
                    {exp.icon}
                  </div>
                  
                  {/* Year Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      isDarkMode ? "bg-gray-800 text-cyan-400 border border-cyan-500/30" : "bg-white text-cyan-600 border border-cyan-600/30"
                    }`}
                  >
                    {exp.period.split(' - ')[0]}
                  </motion.div>
                </motion.div>
                
                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex-1 relative group"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-r ${exp.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                  
                  <Card className={`relative ${cardBg} border ${cardBorder} backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:${
                    isDarkMode ? "border-gray-600" : "border-gray-400"
                  }`}>
                    {/* Accent Bar */}
                    <div className={`h-1 bg-gradient-to-r ${exp.color} transition-all duration-500 group-hover:h-2`} />
                    
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                        <div className="space-y-3">
                          <CardTitle className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className={`text-lg font-semibold ${
                            isDarkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}>
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge className={`self-start flex items-center gap-2 px-4 py-2 ${
                          isDarkMode 
                            ? "bg-gray-700/50 border border-gray-600 text-gray-300" 
                            : "bg-gray-200/80 border border-gray-300 text-gray-700"
                        }`}>
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className={`leading-relaxed text-lg ${mutedText} border-l-4 ${
                        isDarkMode ? "border-cyan-500/50" : "border-cyan-600/50"
                      } pl-4 italic`}>
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      {exp.achievements && (
                        <div className="space-y-3">
                          <h4 className={`font-semibold text-sm uppercase tracking-wide ${
                            isDarkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 1 + idx * 0.1 }}
                                className={`flex items-center ${mutedText}`}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <h4 className={`font-semibold text-sm uppercase tracking-wide ${
                          isDarkMode ? "text-cyan-400" : "text-cyan-600"
                        }`}>
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 1 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge className={`text-sm ${
                                isDarkMode 
                                  ? "bg-blue-900/30 border border-blue-500/30 text-blue-300" 
                                  : "bg-blue-100 border border-blue-500/30 text-blue-700"
                              } px-3 py-1.5 transition-colors hover:border-opacity-50`}>
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating elements for visual interest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="text-center mt-16"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
              isDarkMode 
                ? "bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30" 
                : "bg-white/80 backdrop-blur-sm border border-cyan-600/30"
            }`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className={`text-sm ${
                isDarkMode ? "text-cyan-400" : "text-cyan-600"
              }`}>
                Always learning, always building
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`py-32 relative ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 px-8 py-4 text-base font-semibold">
                <Network className="w-5 h-5 mr-2" />
                Let's Connect
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Start Your Project
              </span>
            </h2>
            <p className={`text-xl ${mutedText} max-w-3xl mx-auto`}>
              Ready to bring your vision to life? Let's create something extraordinary together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Card className={`relative ${cardBg} border ${cardBorder} backdrop-blur-xl overflow-hidden`}>
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardHeader>
                  <CardTitle className={`text-3xl ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>Send a Message</CardTitle>
                  <CardDescription className={`text-base ${mutedText}`}>
                    I'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className={`text-sm font-semibold flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className={`border-2 ${
                        isDarkMode ? "border-gray-600 focus:border-cyan-500 bg-gray-700/50" : "border-gray-300 focus:border-cyan-500 bg-gray-50"
                      } text-white placeholder:text-gray-500 transition-all duration-300 h-14 text-base rounded-xl`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className={`text-sm font-semibold flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className={`border-2 ${
                        isDarkMode ? "border-gray-600 focus:border-cyan-500 bg-gray-700/50" : "border-gray-300 focus:border-cyan-500 bg-gray-50"
                      } text-white placeholder:text-gray-500 transition-all duration-300 h-14 text-base rounded-xl`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className={`text-sm font-semibold flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or idea..." 
                      rows={7}
                      className={`border-2 ${
                        isDarkMode ? "border-gray-600 focus:border-cyan-500 bg-gray-700/50" : "border-gray-300 focus:border-cyan-500 bg-gray-50"
                      } text-white placeholder:text-gray-500 transition-all duration-300 resize-none text-base rounded-xl`}
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 text-base font-semibold rounded-xl shadow-2xl">
                      Send Message
                      <Mail className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <Card className={`relative ${cardBg} border ${cardBorder} backdrop-blur-xl overflow-hidden`}>
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
                  <CardHeader>
                    <CardTitle className={`text-3xl ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>Contact Info</CardTitle>
                    <CardDescription className={`text-base ${mutedText}`}>Reach out through any channel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="relative group/contact"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover/contact:opacity-50 transition duration-300"></div>
                      <div className={`relative flex items-center gap-5 p-6 rounded-2xl ${
                        isDarkMode 
                          ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20" 
                          : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-500/30"
                      }`}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                          <Mail className="w-8 h-8" />
                        </div>
                        <div>
                          <p className={`font-bold text-lg mb-1 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}>Email</p>
                          <p className={`text-sm ${mutedText}`}>matthew.balinton@example.com</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="relative group/contact"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover/contact:opacity-50 transition duration-300"></div>
                      <div className={`relative flex items-center gap-5 p-6 rounded-2xl ${
                        isDarkMode 
                          ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20" 
                          : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-500/30"
                      }`}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                          <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                          <p className={`font-bold text-lg mb-1 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}>Location</p>
                          <p className={`text-sm ${mutedText}`}>Philippines</p>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <Card className={`relative ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" 
                    : "bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300"
                } backdrop-blur-xl overflow-hidden`}>
                  <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-800" />
                  <CardHeader>
                    <CardTitle className={`text-3xl ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>Social Links</CardTitle>
                    <CardDescription className={`text-base ${mutedText}`}>Connect on your preferred platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {[
                        { 
                          icon: Github, 
                          href: "https://github.com/abfasb", 
                          label: "GitHub",
                          gradient: "from-gray-600 to-gray-800",
                          description: "View my repositories"
                        },
                        { 
                          icon: Linkedin, 
                          href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", 
                          label: "LinkedIn",
                          gradient: "from-blue-600 to-blue-800",
                          description: "Professional network"
                        },
                        { 
                          icon: Mail, 
                          href: "mailto:matthew.balinton@example.com", 
                          label: "Email",
                          gradient: "from-red-500 to-pink-600",
                          description: "Direct contact"
                        }
                      ].map((social, idx) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={contactInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          whileHover={{ scale: 1.03, x: 8 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            className={`w-full h-16 justify-between bg-gradient-to-r ${social.gradient} text-white border-0 transition-all duration-300 group/btn rounded-xl shadow-lg`}
                            onClick={() => window.open(social.href, '_blank')}
                          >
                            <div className="flex items-center gap-4">
                              <social.icon className="w-6 h-6" />
                              <div className="text-left">
                                <span className="font-semibold block text-base">{social.label}</span>
                                <span className="text-xs text-white/70">{social.description}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-20 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-300"
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          isDarkMode ? "to-gray-900/50" : "to-gray-100/50"
        }`}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-0 text-center md:text-left"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-50"></div>
                <h3 className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  Matthew Balinton
                </h3>
              </div>
              <p className={`text-lg font-medium ${
                isDarkMode ? "text-cyan-400" : "text-cyan-600"
              }`}>Full Stack Developer & AI Innovator</p>
              <p className={`text-sm ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              } mt-3 italic`}>Crafting tomorrow's digital experiences today</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", gradient: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", gradient: "from-blue-500 to-blue-700" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", gradient: "from-red-500 to-pink-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300`}></div>
                  <div className={`relative w-16 h-16 rounded-2xl ${
                    isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"
                  } group-hover:border-opacity-40 flex items-center justify-center ${
                    isDarkMode ? "text-cyan-400" : "text-cyan-600"
                  } group-hover:text-white transition-all duration-300 backdrop-blur-sm`}>
                    <social.icon className="w-7 h-7" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className={`border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-300"
          } pt-10 text-center`}>
            <p className={`text-base ${mutedText}`}>
              &copy; {new Date().getFullYear()} Matthew Balinton. Engineered with 
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block mx-2 text-red-400"
              >
                ♥
              </motion.span> 
              and 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold"> cutting-edge technology</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-40 group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center border-2 border-white/20 shadow-2xl">
          <ArrowUp className="w-7 h-7" />
        </div>
      </motion.button>
    </div>
  );
};

export default App;