import { useState, useEffect, useRef } from 'react';
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
  Code2,
  Download,
  ArrowUp,
  MapPin,
  User,
  GraduationCap,
  Zap,
  Target,
  TrendingUp,
  Rocket,
  Brain,
  Moon,
  Sun,
  Menu,
  X,
  Cpu,
  Database,
  Cloud,
  Workflow,
  Shield,
  Server,
  Layers,
  Code,
  Network,
  ArrowRight,
  CheckCircle,
  Clock,
  Monitor,
  Heart,
  Coffee
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

  const bgColor = isDarkMode ? "bg-gray-950" : "bg-white";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const cardBg = isDarkMode ? "bg-gray-900/80" : "bg-white/90";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";
  const navBg = isDarkMode ? "bg-gray-950/98" : "bg-white/98";
  
  const sectionBg = isDarkMode ? "bg-gray-950" : "bg-gray-50";
  const cardBorder = isDarkMode ? "border-gray-800" : "border-gray-200";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-600";

  const navTextColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const navHoverColor = isDarkMode ? "hover:text-white" : "hover:text-blue-600";
  const navActiveColor = isDarkMode ? "text-white" : "text-blue-600";
  const navIconColor = isDarkMode ? "text-gray-100" : "text-gray-700";

  const navSections = [
    { id: 'home', label: 'Home', icon: <Cpu className="w-4 h-4" />, gradient: 'from-blue-600 to-cyan-600' },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" />, gradient: 'from-blue-600 to-indigo-600' },
    { id: 'projects', label: 'Projects', icon: <Layers className="w-4 h-4" />, gradient: 'from-indigo-600 to-purple-600' },
    { id: 'experience', label: 'Experience', icon: <Workflow className="w-4 h-4" />, gradient: 'from-purple-600 to-pink-600' },
    { id: 'contact', label: 'Contact', icon: <Network className="w-4 h-4" />, gradient: 'from-pink-600 to-rose-600' }
  ];

  const projects = [
    {
      title: "DILG Calapan City - AI Driven Document Management System",
      description: "Government-grade document management system with AI-powered classification, intelligent search, and real-time analytics dashboard for streamlined municipal operations.",
      tech: ["React", "TypeScript", "Cloud Storage", "Firebase", "Mongodb", "AI/ML"],
      github: "https://github.com/abfasb/dilg-calapan-capstone-backend",
      live: "https://dilg-calapan.vercel.app",
      category: "Government SaaS",
      gradient: "from-blue-600 to-indigo-700",
      icon: <Shield className="w-5 h-5" />,
      status: "Production",
      features: ["AI Classification", "Real-time Analytics", "Secure Storage", "Workflow Automation"]
    },
    {
      title: "KioskPharmaPOS - Healthcare Platform",
      description: "Advanced pharmacy management system with computer vision for prescription recognition, inventory optimization, and patient safety protocols.",
      tech: ["React", "TypeScript", "Node.js", "Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/abfasb/KioskPharmaPOS-frontend",
      live: "#",
      category: "Healthcare Tech",
      gradient: "from-emerald-600 to-teal-700",
      icon: <Brain className="w-5 h-5" />,
      status: "Completed",
      features: ["Computer Vision", "Inventory AI", "Safety Checks", "Patient Management"]
    },
    {
      title: "Brightcares AutoParts - E-commerce",
      description: "Intelligent e-commerce platform with predictive analytics, ML-powered inventory optimization, and automated restocking systems.",
      tech: ["React", "Firebase", "Machine Learning", "Node.js", "Analytics"],
      github: "#",
      live: "https://brightcares-autoparts.firebaseapp.com/",
      category: "E-commerce",
      gradient: "from-orange-600 to-red-700",
      icon: <Rocket className="w-5 h-5" />,
      status: "Production",
      features: ["Predictive Analytics", "ML Optimization", "Auto Restocking", "Customer Insights"]
    },
    {
      title: "Learning Management System",
      description: "Comprehensive educational platform with course management, real-time collaboration, and advanced student performance tracking.",
      tech: ["Laravel", "MySQL", "JavaScript", "Docker", "Redis", "WebSockets"],
      github: "https://github.com/abfasb/web2-system",
      live: "#",
      category: "EdTech",
      gradient: "from-violet-600 to-purple-700",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "Completed",
      features: ["Real-time Collaboration", "Progress Tracking", "Course Management", "Scalable Infrastructure"]
    }
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2024 - Present",
      description: "Architecting and developing full-stack applications with modern tech stacks. Specializing in React, TypeScript, Node.js ecosystems, and seamless AI/ML integration for scalable, production-ready solutions.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "AI/ML"],
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-600 to-cyan-700",
      achievements: ["Built 15+ production applications", "Integrated AI/ML in 8 projects"],
      type: "Professional"
    },
    {
      role: "BSIT Student",
      company: "Information Technology",
      period: "2022 - 2026",
      description: "Pursuing Bachelor of Science in Information Technology with intensive focus on advanced software architecture, AI/ML integration, cloud computing, and web technologies.",
      tech: ["Software Architecture", "Cloud Computing", "AI/ML Research"],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-indigo-600 to-purple-700",
      achievements: ["Maintained Good GPA", "Led technical teams"],
      type: "Education"
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "15+", icon: <Target className="w-4 h-4" />, color: "from-blue-600 to-cyan-700", suffix: "Solutions" },
    { label: "Technologies", value: "20+", icon: <Zap className="w-4 h-4" />, color: "from-indigo-600 to-purple-700", suffix: "Modern Stack" },
    { label: "Experience", value: "3", icon: <TrendingUp className="w-4 h-4" />, color: "from-emerald-600 to-teal-700", suffix: "Years" },
  ];

  const skills = [
    { 
      category: "Frontend Architecture", 
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "State Management"], 
      color: "from-blue-600 to-cyan-700",
      icon: <Monitor className="w-4 h-4" />,
      level: 95
    },
    { 
      category: "Backend Systems", 
      items: ["Node.js", "Express", "Laravel", "Python", "API Design", "Microservices"], 
      color: "from-indigo-600 to-purple-700",
      icon: <Server className="w-4 h-4" />,
      level: 90
    },
    { 
      category: "Data & Infrastructure", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma", "Redis"], 
      color: "from-emerald-600 to-teal-700",
      icon: <Database className="w-4 h-4" />,
      level: 88
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions", "Infrastructure"], 
      color: "from-orange-600 to-red-700",
      icon: <Cloud className="w-4 h-4" />,
      level: 85
    }
  ];


  return (
    <div className={`min-h-screen ${bgColor} ${textColor} overflow-x-hidden transition-colors duration-300`}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" 
            : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
        }`}></div>
        
        <div className={`absolute inset-0 opacity-20 ${
          isDarkMode 
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" 
            : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
        } bg-[size:64px_64px]`}></div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${
                isDarkMode ? "bg-blue-500/20" : "bg-blue-500/10"
              } rounded-full`}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? `${navBg} backdrop-blur-xl border-b ${borderColor} shadow-lg` 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg`}>
                <img src='https://i.ibb.co/8gRDWFTf/Matt-ID-1-1.jpg' alt='Matt Logo' className="w-10 h-10 rounded-full" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Matthew Balinton
                </div>
                <div className={`text-xs ${mutedText}`}>Full Stack Developer</div>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-1">
              {navSections.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative px-6 py-3 transition-all duration-300 ${navTextColor} ${
                    activeSection === item.id 
                      ? navActiveColor 
                      : `${navHoverColor}`
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <div className={`flex items-center space-x-2 ${
                    activeSection === item.id ? navActiveColor : navIconColor
                  }`}>
                    {item.icon}
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl border ${borderColor} ${
                  isDarkMode 
                    ? 'bg-gray-900 text-cyan-400' 
                    : 'bg-white text-amber-600'
                } transition-colors`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-6 py-3 rounded-xl shadow-lg"
                  onClick={() => window.open('https://storage.googleapis.com/pharma-kiosk-ad218.appspot.com/uploads/DILG-251023-5723/Mat%20Resume%20%281%29.pdf?GoogleAccessId=firebase-adminsdk-cqbiu%40pharma-kiosk-ad218.iam.gserviceaccount.com&Expires=1898553600&Signature=i1d6c903wVhnKgFuQvvNppvuUvM4fHaq8gefLa7Zc4hNqw3BN9sx2vrj7nGgiZBXiigw55WmoDl5ZxlRjdP6cxivfI%2Fzbx0qIUxljOD%2FZIE%2FaQtrTZHZQI4GTVShzqWFCuyt1lWH74D4dnYlQdgu0n%2FFv31uHu5D7niI9o%2BgXqIjy3Xs467NtfjPS6KTqEBEGRH3FHCyXWDQ3Crz4WpHD361vgbxgj292DNi0WGn4kkOmzohu8npZWnx309T%2FTnIP%2BxERGMZM%2BZTxO5n9MYuBYkd9S9yF6FIhJUm1tUIRADJkxTieEiFkg8HLyhngaGmGj5fjQMiUdaMM7Tc7GvUyQ%3D%3D', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleNav}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`lg:hidden p-3 rounded-xl border ${borderColor} ${
                  isDarkMode ? "bg-gray-900 text-gray-400" : "bg-white text-gray-600"
                }`}
              >
                {isNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${
              isDarkMode ? "bg-gray-950/95" : "bg-white/95"
            } backdrop-blur-xl z-30 lg:hidden`}
            onClick={() => setIsNavOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex items-center justify-center min-h-screen p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-sm space-y-4">
                {navSections.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-2xl border ${
                      isDarkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
                    } transition-all duration-300 ${
                      activeSection === item.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium ${
                      activeSection === item.id 
                        ? navActiveColor
                        : navTextColor
                    }`}>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative z-10"
        >
          <div className="text-center">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-12"
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm font-medium">Available for Projects</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Matthew
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                  Balinton
                </span>
              </h1>
              
              <motion.p 
                className={`text-2xl md:text-3xl ${mutedText} mb-8 font-light`}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Full Stack Developer
              </motion.p>
              
              <motion.p 
                className={`text-lg ${mutedText} max-w-3xl mx-auto leading-relaxed`}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Building scalable, maintainable software solutions with modern web technologies, 
                cloud architecture, and AI integration. Passionate about creating impactful digital experiences.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-base border-0 rounded-xl shadow-lg"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`px-8 py-4 text-base border-2 ${
                    isDarkMode 
                      ? "border-gray-700 hover:border-blue-500 text-blue-400" 
                      : "border-gray-300 hover:border-blue-500 text-blue-600"
                  } rounded-xl backdrop-blur-sm`}
                  onClick={() => scrollToSection('contact')}
                >
                  Start a Project
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${mutedText} font-medium`}>
                    {stat.label}
                  </div>
                  <div className={`text-xs ${mutedText} mt-1`}>
                    {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className={`py-24 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                About Me
              </span>
            </h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              Passionate developer crafting digital solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Hello, I'm Matthew
                </h3>
                <div className={`space-y-4 ${mutedText} leading-relaxed`}>
                  <p>
                    I'm a passionate full-stack developer with a deep love for creating 
                    innovative digital solutions. With over 1 year of experience, I've 
                    dedicated myself to mastering the art of web development and software engineering.
                  </p>
                  <p>
                    My journey in technology started with curiosity and has evolved into 
                    a career focused on building scalable, user-friendly applications that 
                    solve real-world problems. I believe in writing clean, maintainable code 
                    and staying at the forefront of emerging technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with 
                    the developer community.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">1500+</div>
                    <div className={`text-sm ${mutedText}`}>Cups of Coffee</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">10K+</div>
                    <div className={`text-sm ${mutedText}`}>Lines of Code</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">100%</div>
                    <div className={`text-sm ${mutedText}`}>Passion</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7</div>
                    <div className={`text-sm ${mutedText}`}>Learning</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className={`w-80 h-80 mx-auto rounded-2xl ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900" 
                    : "bg-gradient-to-br from-gray-100 to-gray-200"
                } border ${borderColor} shadow-2xl overflow-hidden`}>
                  <img 
                    src="https://i.ibb.co/8gRDWFTf/Matt-ID-1-1.jpg" 
                    alt="Matthew Balinton" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg`}
                >
                  <Code2 className="w-6 h-6" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg`}
                >
                  <Brain className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className={`py-24 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Projects
              </span>
            </h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              Production-ready solutions built with scalability, security, and performance in mind
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <Card className={`h-full ${cardBg} border ${cardBorder} backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-xl`}>
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={
                        project.status === "Production" ? "border-green-500 text-green-400" :
                        project.status === "In Development" ? "border-yellow-500 text-yellow-400" :
                        "border-blue-500 text-blue-400"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className={`text-xl ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } mb-3`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`leading-relaxed ${mutedText}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className={`text-sm font-semibold ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              <span className={mutedText}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className={`flex gap-3 border-t ${
                    isDarkMode ? "border-gray-800" : "border-gray-200"
                  } pt-4`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                      onClick={() => window.open(project.live, '_blank')}
                      disabled={project.live === '#'}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className={`py-24 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Professional Journey
              </span>
            </h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              From concept to production - building solutions with modern technology stacks
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                    {exp.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <Card className={`${cardBg} border ${cardBorder} backdrop-blur-sm overflow-hidden`}>
                    <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <div>
                          <CardTitle className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className={`text-base font-semibold ${
                            isDarkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}>
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="self-start">
                          <Calendar className="w-3 h-3 mr-2" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className={`leading-relaxed ${mutedText}`}>
                        {exp.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className={`font-semibold text-sm uppercase tracking-wide ${
                          isDarkMode ? "text-cyan-400" : "text-cyan-600"
                        }`}>
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                              <span className={mutedText}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className={`font-semibold text-sm uppercase tracking-wide ${
                          isDarkMode ? "text-cyan-400" : "text-cyan-600"
                        }`}>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-24 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Technical Expertise
              </span>
            </h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              Mastery of modern technologies and development practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <Card className={`${cardBg} border ${cardBorder} backdrop-blur-sm overflow-hidden`}>
                  <div className={`h-1 bg-gradient-to-r ${skillSet.color}`} />
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-lg flex items-center ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {skillSet.icon}
                      <span className="ml-3">{skillSet.category}</span>
                      <div className="ml-auto flex items-center space-x-2">
                        <span className={`text-sm ${mutedText}`}>{skillSet.level}%</span>
                        <div className={`w-16 h-2 ${
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
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`py-24 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                Start Your Project
              </span>
            </h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              Ready to build something extraordinary? Let's discuss your solution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className={`${cardBg} border ${cardBorder} backdrop-blur-sm`}>
                <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <CardHeader>
                  <CardTitle className={`text-2xl ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>Send a Message</CardTitle>
                  <CardDescription className={`text-base ${mutedText}`}>
                    I'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className={`text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Matthew Balinton" 
                      className={`border ${
                        isDarkMode ? "border-gray-700 focus:border-blue-500 bg-gray-800" : "border-gray-300 focus:border-blue-500 bg-gray-50"
                      } transition-all duration-300 h-12 rounded-xl`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className={`text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="matbalinton@gmail.com" 
                      className={`border ${
                        isDarkMode ? "border-gray-700 focus:border-blue-500 bg-gray-800" : "border-gray-300 focus:border-blue-500 bg-gray-50"
                      } transition-all duration-300 h-12 rounded-xl`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className={`text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="What enhancement can I add in my portfolio..." 
                      rows={6}
                      className={`border ${
                        isDarkMode ? "border-gray-700 focus:border-blue-500 bg-gray-800" : "border-gray-300 focus:border-blue-500 bg-gray-50"
                      } transition-all duration-300 resize-none rounded-xl`}
                    />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 font-semibold rounded-xl">
                    Send Message
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className={`${cardBg} border ${cardBorder} backdrop-blur-sm`}>
                <div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
                <CardHeader>
                  <CardTitle className={`text-2xl ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>Contact Information</CardTitle>
                  <CardDescription className={`text-base ${mutedText}`}>
                    Reach out through any channel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-5 p-4 rounded-xl border border-blue-500/20 bg-blue-500/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`font-bold text-lg mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>Email</p>
                      <p className={`text-sm ${mutedText}`}>matbalinton@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 p-4 rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                      <MapPin className="w-5 h-5" />
                    </div>  
                    <div>
                      <p className={`font-bold text-lg mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>Location</p>
                      <p className={`text-sm ${mutedText}`}>Puerto Galera, Oriental Mindoro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${
                isDarkMode 
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700" 
                  : "bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300"
              } backdrop-blur-sm`}>
                <div className="h-1 bg-gradient-to-r from-gray-600 to-gray-800" />
                <CardHeader>
                  <CardTitle className={`text-2xl ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>Connect With Me</CardTitle>
                  <CardDescription className={`text-base ${mutedText}`}>
                    Professional networks and platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { 
                        icon: Github, 
                        href: "https://github.com/abfasb", 
                        label: "GitHub",
                        description: "View my repositories"
                      },
                      { 
                        icon: Linkedin, 
                        href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", 
                        label: "LinkedIn",
                        description: "Professional network"
                      },
                      { 
                        icon: Mail, 
                        href: "matbalinton@gmail.com", 
                        label: "Email",
                        description: "Direct contact"
                      }
                    ].map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        className={`w-full h-14 justify-start border ${
                          isDarkMode ? "border-gray-700 hover:border-blue-500" : "border-gray-300 hover:border-blue-500"
                        } transition-all duration-300 rounded-xl`}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <social.icon className="w-5 h-5 mr-4" />
                        <div className="text-left">
                          <span className="font-semibold block">{social.label}</span>
                          <span className="text-xs text-gray-500">{social.description}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className={`relative py-16 border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-300"
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          isDarkMode ? "to-gray-900/50" : "to-gray-100/50"
        }`}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white`}>
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Matthew Balinton
                  </div>
                  <div className={`text-sm ${mutedText}`}>Full Stack Developer</div>
                </div>
              </div>
              <p className={`text-sm ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              } italic`}>Building the future of software</p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/abfasb" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl border ${
                    isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
                  } flex items-center justify-center ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } hover:text-blue-600 transition-colors`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className={`border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-300"
          } pt-8 text-center`}>
            <p className={`text-sm ${mutedText}`}>
              &copy; {new Date().getFullYear()} Matthew Balinton. Crafted with precision for excellence.
            </p>
          </div>
        </div>
      </footer>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center border-2 border-white/20 shadow-lg">
          <ArrowUp className="w-5 h-5" />
        </div>
      </motion.button>
    </div>
  );
};

export default App;