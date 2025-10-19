import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  TrendingUp
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-50px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-50px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-50px" });

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

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
      description: "A comprehensive document reporting system integrated with AI capabilities for efficient government document management and processing. Features automated classification, intelligent search, and real-time analytics.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "AI Integration"],
      github: "https://github.com/abfasb/dilg-calapan-capstone-backend",
      live: "https://dilg-calapan.vercel.app",
      category: "Government",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "KioskPharmaPOS",
      description: "Advanced pharmacy point-of-sale system with prescription AI that automatically identifies and processes handwritten prescriptions using computer vision and machine learning algorithms.",
      tech: ["React", "TypeScript", "Node.js", "Python", "OpenCV", "Firebase"],
      github: "https://github.com/abfasb/KioskPharmaPOS-frontend",
      live: "#",
      category: "Healthcare",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Brightcares AutoParts",
      description: "E-commerce platform for automotive parts featuring predictive analytics for inventory management, customer behavior analysis, and automated restocking recommendations.",
      tech: ["React", "Firebase", "Machine Learning", "Tailwind CSS", "Node.js"],
      github: "#",
      live: "https://brightcares-autoparts.firebaseapp.com/",
      category: "E-commerce",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Learning Management System",
      description: "Full-featured educational platform with course management, student tracking, assignment submission, and real-time collaboration tools for modern educational institutions.",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "Docker"],
      github: "https://github.com/abfasb/web2-system",
      live: "#",
      category: "Education",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelance & Side Projects",
      period: "2023 - Present",
      description: "Developing full-stack applications using modern technologies including React, TypeScript, Node.js, and various databases. Specializing in AI integration and scalable web solutions.",
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma", "Node.js"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      role: "BSIT Student",
      company: "Computer Science Major",
      period: "2022 - 2026",
      description: "Currently pursuing Bachelor of Science in Information Technology with focus on software development, AI integration, and modern web technologies.",
      tech: ["Academic Projects", "Research", "Open Source"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: <Target className="w-5 h-5" /> },
    { label: "Technologies", value: "20+", icon: <Zap className="w-5 h-5" /> },
    { label: "Years Experience", value: "3+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Happy Clients", value: "10+", icon: <Users className="w-5 h-5" /> }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"], color: "blue" },
    { category: "Backend", items: ["Node.js", "Express", "Laravel", "Django", "Python", "C#"], color: "purple" },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma"], color: "green" },
    { category: "DevOps", items: ["Docker", "GitHub Actions", "Kubernetes", "AWS", "Vercel", "CI/CD"], color: "orange" }
  ];

  const certifications = [
    "Fortinet Certified Associate in Cybersecurity",
    "Fortinet Certified Fundamentals in Cybersecurity"
  ];

  const achievements = [
    {
      title: "Hack4Gov Mimaropa Placer",
      year: "2024-2025",
      description: "Placed in regional government hackathon",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Open Source Contributor",
      year: "2023",
      description: "Active contributor to open source projects",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Computer Literacy Award",
      year: "2012-2023",
      description: "Multiple time award recipient",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Cursor follower effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            >
              MB
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30 border-0"
                onClick={() => window.open('https://storage.googleapis.com/pharma-kiosk-ad218.appspot.com/uploads/DILG-251019-2498/Mat%20Resume%20%281%29.pdf?GoogleAccessId=firebase-adminsdk-cqbiu%40pharma-kiosk-ad218.iam.gserviceaccount.com&Expires=1898553600&Signature=r0g6%2FDA6RlskJKccPZrOTQD9AGYv6aUbshwnAmeN0lNklk7pgKPh8f5frQOj%2BWLOSjE4A0%2BL8YbZmWkis0wYnveQEfDcYoT8NiwplFKBWWPHtP5UXI3B8up0LkTiU0EAv598t3bF%2F%2BNSZmrqGG6Qw1gh0cjCpX1LrkUqGEGRotMpcq4FAQK4gn5%2BFdP6EoFvyQEQ%2Br%2B2TYuerjifVGUAn7o4LMzkT9vBlPCnJHYlGrsoZi8iY3MiIzmLGQZxZY29IMXz1YIfWZ28gblthiU0E3d%2BiRl8kwSjGr%2BxkHcpMfhUbSweK4A2Bl2x5tUXJfuJQFFj5c0FP7leWCjxJ4S5ig%3D%3D', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background gradients */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-50"
                />
                <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Code2 className="w-20 h-20 text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-4"
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 py-2 text-sm shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for opportunities
                </Badge>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Matthew Balinton
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
                Full Stack Developer & AI Enthusiast
              </p>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transforming ideas into elegant digital solutions. I specialize in building 
                <span className="text-blue-600 font-semibold"> scalable web applications </span>
                with modern technologies and 
                <span className="text-cyan-600 font-semibold"> AI integration</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-xl shadow-blue-500/30 border-0"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", label: "GitHub", color: "hover:bg-gray-900" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", label: "Email", color: "hover:bg-red-600" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent ${social.color} hover:text-white group`}
                >
                  <social.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 shadow-lg shadow-purple-500/30">
              <Award className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Passionate Developer with a Vision
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building innovative solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Sparkles className="w-6 h-6 mr-3 text-purple-600" />
                    My Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    From writing my first "Hello World" in 2022 to developing sophisticated full-stack applications today, 
                    my journey in technology has been driven by an insatiable curiosity and a passion for innovation.
                  </p>
                  <p>
                    I specialize in creating seamless digital experiences that bridge the gap between complex technical 
                    requirements and intuitive user interfaces. Every project is an opportunity to learn, grow, and push 
                    the boundaries of what's possible.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Certifications
                    </h4>
                    <ul className="space-y-3">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Award className="w-6 h-6 mr-3 text-blue-600" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 mr-4">
                            {achievement.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">{achievement.title}</h5>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                            <p className="text-xs text-blue-600 mt-1">{achievement.year}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${
                      skillSet.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                      skillSet.color === 'purple' ? 'from-purple-500 to-pink-500' :
                      skillSet.color === 'green' ? 'from-green-500 to-teal-500' :
                      'from-orange-500 to-red-500'
                    }`} />
                    <CardHeader>
                      <CardTitle className="text-lg">{skillSet.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillSet.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge 
                              variant="secondary"
                              className={`px-3 py-1 ${
                                skillSet.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200' :
                                skillSet.color === 'purple' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200' :
                                skillSet.color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100 border-green-200' :
                                'bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200'
                              }`}
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
      <section id="projects" ref={projectsRef} className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 py-2 shadow-lg shadow-blue-500/30">
              <Code2 className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovation through code and design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-md`}>
                        {project.category}
                      </Badge>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                      >
                        <Code2 className="w-6 h-6 text-gray-700" />
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed mt-3">
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
                          transition={{ delay: 0.6 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="text-xs bg-gray-50 border-gray-300">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-3 border-t border-gray-100 pt-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                        disabled={project.github === '#'}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-blue-500/30 border-0 transition-all duration-300`}
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
      <section id="experience" ref={experienceRef} className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-white border-0 px-4 py-2 shadow-lg shadow-green-500/30">
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous growth through learning and building
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-8 mb-16 last:mb-0 relative"
              >
                {/* Enhanced Timeline dot */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-2xl z-10 border-4 border-white`}
                >
                  {exp.icon}
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 pb-8"
                >
                  <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                        <div>
                          <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge className="self-start flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 leading-relaxed text-base">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.7 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
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
      <section id="contact" ref={contactRef} className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-2 shadow-lg shadow-orange-500/30">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Let's collaborate and bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form and I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-2 border-gray-300 focus:border-blue-500 transition-all duration-300 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-2 border-gray-300 focus:border-blue-500 transition-all duration-300 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      rows={6}
                      className="border-2 border-gray-300 focus:border-blue-500 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/30 border-0 text-base">
                      Send Message
                      <Mail className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">matthew.balinton@example.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-sm text-gray-600">Philippines</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-900" />
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                  <CardDescription>Let's stay connected on social platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {[
                      { 
                        icon: Github, 
                        href: "https://github.com/abfasb", 
                        label: "GitHub",
                        gradient: "from-gray-700 to-gray-900",
                        hoverGradient: "hover:from-gray-800 hover:to-black"
                      },
                      { 
                        icon: Linkedin, 
                        href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", 
                        label: "LinkedIn",
                        gradient: "from-blue-600 to-blue-700",
                        hoverGradient: "hover:from-blue-700 hover:to-blue-800"
                      },
                      { 
                        icon: Mail, 
                        href: "mailto:matthew.balinton@example.com", 
                        label: "Email",
                        gradient: "from-red-600 to-pink-600",
                        hoverGradient: "hover:from-red-700 hover:to-pink-700"
                      }
                    ].map((social) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full h-14 justify-start gap-4 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} text-white border-0 shadow-lg transition-all duration-300`}
                          onClick={() => window.open(social.href, '_blank')}
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="font-medium">{social.label}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0 text-center md:text-left"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Matthew Balinton
              </h3>
              <p className="text-gray-400">Full Stack Developer & AI Enthusiast</p>
              <p className="text-sm text-gray-500 mt-2">Building the future, one line at a time</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/abfasb", color: "hover:text-gray-300" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/matthew-balinton-9478a7255/", color: "hover:text-blue-400" },
                { icon: Mail, href: "mailto:matthew.balinton@example.com", color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-white/10`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Matthew Balinton. Crafted with 
              <span className="text-red-400 mx-1">♥</span> 
              and lots of <span className="text-blue-400">code</span>
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
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/40 flex items-center justify-center z-40 border-2 border-white"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default App;