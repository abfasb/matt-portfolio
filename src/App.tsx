import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
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
  Globe
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "DILG Calapan City",
      description: "Enterprise-grade document management system with advanced AI capabilities, automated classification, intelligent search algorithms, and comprehensive real-time analytics dashboard for efficient government operations.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "AI/ML"],
      github: "https://github.com/abfasb/dilg-calapan-capstone-backend",
      live: "https://dilg-calapan.vercel.app",
      category: "Government",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "KioskPharmaPOS",
      description: "Revolutionary pharmacy POS with cutting-edge prescription AI featuring computer vision and deep learning for handwritten prescription recognition, inventory management, and patient safety checks.",
      tech: ["React", "TypeScript", "Node.js", "Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/abfasb/KioskPharmaPOS-frontend",
      live: "#",
      category: "Healthcare",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Brightcares AutoParts",
      description: "Advanced e-commerce platform with predictive analytics, machine learning-powered inventory optimization, customer behavior analysis, and automated intelligent restocking system.",
      tech: ["React", "Firebase", "ML", "Tailwind", "Node.js", "Analytics"],
      github: "#",
      live: "https://brightcares-autoparts.firebaseapp.com/",
      category: "E-commerce",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Learning Management System",
      description: "Comprehensive educational platform with advanced course management, real-time collaboration tools, student performance tracking, and interactive learning modules for modern institutions.",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "Docker", "Redis"],
      github: "https://github.com/abfasb/web2-system",
      live: "#",
      category: "Education",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      icon: <Star className="w-6 h-6" />
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
      color: "from-blue-600 to-cyan-600"
    },
    {
      role: "BSIT Student",
      company: "Information Technology",
      period: "2022 - 2026",
      description: "Pursuing Bachelor of Science in Information Technology with intensive focus on advanced software architecture, AI/ML integration, cloud computing, and cutting-edge web technologies.",
      tech: ["Academic Research", "Open Source", "Innovation"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "15+", icon: <Target className="w-5 h-5" />, color: "from-blue-600 to-cyan-600" },
    { label: "Tech Stack", value: "20+", icon: <Zap className="w-5 h-5" />, color: "from-purple-600 to-pink-600" },
    { label: "Experience", value: "3+", icon: <TrendingUp className="w-5 h-5" />, color: "from-emerald-600 to-teal-600" },
    { label: "Satisfied Clients", value: "10+", icon: <Users className="w-5 h-5" />, color: "from-orange-600 to-red-600" }
  ];

  const skills = [
    { 
      category: "Frontend Excellence", 
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Bootstrap"], 
      color: "from-blue-600 to-cyan-600",
      icon: <Code2 className="w-5 h-5" />
    },
    { 
      category: "Backend Mastery", 
      items: ["Node.js", "Express", "Laravel", "Django", "Python", "C#"], 
      color: "from-purple-600 to-pink-600",
      icon: <Zap className="w-5 h-5" />
    },
    { 
      category: "Database & Storage", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma", "Redis", "Supabase"], 
      color: "from-emerald-600 to-teal-600",
      icon: <Globe className="w-5 h-5" />
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "GitHub Actions"], 
      color: "from-orange-600 to-red-600",
      icon: <Rocket className="w-5 h-5" />
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MB
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-2">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-2.5"
                onClick={() => window.open('https://storage.googleapis.com/pharma-kiosk-ad218.appspot.com/uploads/DILG-251019-2498/Mat%20Resume%20%281%29.pdf?GoogleAccessId=firebase-adminsdk-cqbiu%40pharma-kiosk-ad218.iam.gserviceaccount.com&Expires=1898553600&Signature=r0g6%2FDA6RlskJKccPZrOTQD9AGYv6aUbshwnAmeN0lNklk7pgKPh8f5frQOj%2BWLOSjE4A0%2BL8YbZmWkis0wYnveQEfDcYoT8NiwplFKBWWPHtP5UXI3B8up0LkTiU0EAv598t3bF%2F%2BNSZmrqGG6Qw1gh0cjCpX1LrkUqGEGRotMpcq4FAQK4gn5%2BFdP6EoFvyQEQ%2Br%2B2TYuerjifVGUAn7o4LMzkT9vBlPCnJHYlGrsoZi8iY3MiIzmLGQZxZY29IMXz1YIfWZ28gblthiU0E3d%2BiRl8kwSjGr%2BxkHcpMfhUbSweK4A2Bl2x5tUXJfuJQFFj5c0FP7leWCjxJ4S5ig%3D%3D', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative z-10"
        >
          <div className="text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="inline-block mb-6"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <Badge className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-3 text-base">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Available for Opportunities
                  </Badge>
                </div>
              </motion.div>

              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className="text-white">Hi, I'm </span>
                <br />
                <motion.span 
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Matthew Balinton
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-3xl md:text-4xl text-gray-300 mb-8 font-light"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer & AI Enthusiast
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-400 max-w-4xl mx-auto mb-14 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                Crafting next-generation digital experiences with 
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold"> cutting-edge technologies </span>
                and seamless
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> AI integration</span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg border-0"
                  onClick={() => scrollToSection('projects')}
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-10 py-7 text-lg border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="flex justify-center gap-6 mb-20"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", label: "GitHub", gradient: "from-gray-700 to-gray-900" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", label: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", label: "Email", gradient: "from-red-600 to-pink-600" }
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                  <div className="relative p-5 rounded-2xl bg-black border border-white/10 group-hover:border-white/30 transition-all duration-300">
                    <social.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
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
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                  <div className="relative bg-black border border-white/10 rounded-3xl p-8">
                    <div className={`flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white`}>
                      {stat.icon}
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-6 py-3 text-base">
                <Award className="w-5 h-5 mr-2" />
                About Me
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Innovation Through Code
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Card className="relative border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-3xl flex items-center text-white">
                      <Sparkles className="w-7 h-7 mr-3 text-purple-400" />
                      My Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-300 leading-relaxed text-lg">
                    <p>
                      From writing my first "Hello World" in 2022 to architecting sophisticated enterprise applications, 
                      my journey has been fueled by relentless curiosity and passion for technological innovation.
                    </p>
                    <p>
                      I specialize in crafting seamless digital experiences that bridge complex technical architecture 
                      with intuitive user interfaces. Every project represents an opportunity to innovate, evolve, and 
                      redefine possibilities.
                    </p>
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="font-bold text-xl mb-6 flex items-center text-white">
                        <Award className="w-6 h-6 mr-3 text-blue-400" />
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
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className="text-base text-gray-300 group-hover/item:text-white transition-colors">{cert}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Card className="relative border border-white/10 bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center text-white">
                      <Award className="w-7 h-7 mr-3 text-emerald-400" />
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
                          <div className="relative flex items-start p-5 rounded-2xl bg-black/60 border border-white/10 group-hover/achievement:border-white/30 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white flex-shrink-0 mr-5`}>
                              {achievement.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-lg text-white mb-1">{achievement.title}</h5>
                              <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                              <p className="text-xs text-blue-400 font-medium">{achievement.year}</p>
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
              <h3 className="text-3xl font-bold mb-8 text-white">Technical Arsenal</h3>
              
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${skillSet.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <Card className="relative border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${skillSet.color}`} />
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl flex items-center text-white">
                        {skillSet.icon}
                        <span className="ml-3">{skillSet.category}</span>
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
                              className="relative px-4 py-2 text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
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
      <section id="projects" ref={projectsRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-6 py-3 text-base">
                <Code2 className="w-5 h-5 mr-2" />
                Portfolio Showcase
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative h-full border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group-hover:border-white/30 transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-4 py-2`}>
                        {project.category}
                      </Badge>
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 leading-relaxed mt-3 text-base">
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
                          <Badge className="text-xs bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-4 border-t border-white/10 pt-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                        disabled={project.github === '#'}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:shadow-blue-500/50 border-0 transition-all duration-300`}
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
      <section id="experience" ref={experienceRef} className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-6 py-3 text-base">
                <Briefcase className="w-5 h-5 mr-2" />
                Professional Experience
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Career Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Continuous evolution through innovation and excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex gap-10 mb-20 last:mb-0 relative"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="relative z-10"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-br ${exp.color} rounded-3xl blur opacity-75`}></div>
                  <div className={`relative flex-shrink-0 w-32 h-32 rounded-3xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white border-4 border-black`}>
                    {exp.icon}
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex-1 pb-8 relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <Card className="relative border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                        <div>
                          <CardTitle className="text-3xl mb-3 text-white">{exp.role}</CardTitle>
                          <CardDescription className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge className="self-start flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/20 text-gray-300">
                          <Calendar className="w-5 h-5" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="text-sm bg-blue-950/50 border border-blue-500/30 text-blue-300 px-4 py-2">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full blur opacity-75"></div>
              <Badge className="relative bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 px-6 py-3 text-base">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Start Your Project
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    I'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300 flex items-center">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="border-2 border-white/10 focus:border-blue-500 bg-white/5 text-white placeholder:text-gray-500 transition-all duration-300 h-14 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 flex items-center">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-2 border-white/10 focus:border-blue-500 bg-white/5 text-white placeholder:text-gray-500 transition-all duration-300 h-14 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 flex items-center">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or idea..." 
                      rows={7}
                      className="border-2 border-white/10 focus:border-blue-500 bg-white/5 text-white placeholder:text-gray-500 transition-all duration-300 resize-none text-base"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-base font-semibold">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Card className="relative border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
                  <CardHeader>
                    <CardTitle className="text-3xl text-white">Contact Info</CardTitle>
                    <CardDescription className="text-gray-400 text-base">Reach out through any channel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="relative group/contact"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover/contact:opacity-50 transition duration-300"></div>
                      <div className="relative flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-blue-950/50 to-cyan-950/50 border border-blue-500/20">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white flex-shrink-0">
                          <Mail className="w-8 h-8" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-white mb-1">Email</p>
                          <p className="text-sm text-gray-400">matthew.balinton@example.com</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="relative group/contact"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover/contact:opacity-50 transition duration-300"></div>
                      <div className="relative flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-500/20">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white flex-shrink-0">
                          <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-white mb-1">Location</p>
                          <p className="text-sm text-gray-400">Philippines</p>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Card className="relative border border-white/10 bg-gradient-to-br from-gray-950/90 to-black backdrop-blur-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-900" />
                  <CardHeader>
                    <CardTitle className="text-3xl text-white">Social Links</CardTitle>
                    <CardDescription className="text-gray-400 text-base">Connect on your preferred platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {[
                        { 
                          icon: Github, 
                          href: "https://github.com/abfasb", 
                          label: "GitHub",
                          gradient: "from-gray-700 to-gray-900",
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
                          gradient: "from-red-600 to-pink-600",
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
                            className={`w-full h-16 justify-between bg-gradient-to-r ${social.gradient} hover:shadow-2xl hover:shadow-blue-500/30 text-white border-0 transition-all duration-300 group/btn`}
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
      <footer className="relative py-20 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-0 text-center md:text-left"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50"></div>
                <h3 className="relative text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Matthew Balinton
                </h3>
              </div>
              <p className="text-gray-400 text-lg font-medium">Full Stack Developer & AI Enthusiast</p>
              <p className="text-sm text-gray-500 mt-3 italic">Crafting tomorrow's digital experiences today</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", gradient: "from-gray-700 to-gray-900" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", gradient: "from-blue-600 to-blue-800" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", gradient: "from-red-600 to-pink-600" }
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
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/20 group-hover:border-white/40 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300">
                    <social.icon className="w-7 h-7" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-gray-400 text-base">
              &copy; {new Date().getFullYear()} Matthew Balinton. Engineered with 
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block mx-2 text-red-500"
              >
                ♥
              </motion.span> 
              and 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> cutting-edge technology</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
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
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center border-2 border-white/20">
          <ArrowUp className="w-7 h-7" />
        </div>
      </motion.button>
    </div>
  );
};

export default App;