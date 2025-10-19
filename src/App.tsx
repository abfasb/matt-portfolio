import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Database, Briefcase, Award, Moon, Sun, Menu, X, Calendar, MapPin, Building2, CheckCircle2, Star, Sparkles, ArrowUpRight, Zap, Users, Code, Globe, Cpu, Shield, Cloud } from 'lucide-react';

// Enhanced UI Components
const Card = ({ children, className = '', hover = false, ...props }) => (
  <div 
    className={`
      rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 
      backdrop-blur-sm transition-all duration-500
      ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  const variants = {
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95';
  const sizes = {
    default: 'px-6 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-8 py-4 text-base',
    icon: 'p-3'
  };
  const variants = {
    default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
  };
  
  return (
    <button className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Avatar = ({ src, alt, fallback, className = '' }) => (
  <div className={`relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    {fallback && !src && (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
        {fallback}
      </div>
    )}
  </div>
);

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  
  const observerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for section highlighting
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const personalInfo = {
    name: "Matthew Balinton",
    title: "Full-Stack Developer & Software Architect",
    tagline: "Crafting digital excellence through innovative solutions and scalable architectures",
    email: "matthew.balinton@example.com",
    github: "https://github.com/matthewbalinton",
    linkedin: "https://linkedin.com/in/matthewbalinton",
    location: "Calapan City, Philippines",
    avatar: "https://i.ibb.co/8gRDWFTf/Matt-ID-1-1.jpg",
    yearsExp: "5+",
    projectsCount: "50+",
    clientsServed: "100K+"
  };

  const projects = [
    {
      title: "DILG Calapan City Portal",
      description: "Enterprise government platform with document management, citizen services, real-time tracking, and comprehensive reporting dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
      github: "https://github.com/yourusername/dilg-portal",
      live: "https://dilg-calapan.gov.ph",
      status: "Production",
      featured: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics, custom visualizations, and automated reporting capabilities.",
      tech: ["TypeScript", "Next.js", "GraphQL", "D3.js", "MongoDB"],
      github: "https://github.com/yourusername/analytics-dash",
      live: "https://analytics-demo.com",
      status: "Production",
      featured: true
    },
    {
      title: "E-Commerce Ecosystem",
      description: "Full-featured marketplace with inventory management, multi-vendor support, payment integration, and AI-powered recommendations.",
      tech: ["React", "Laravel", "MySQL", "Stripe", "Docker"],
      github: "https://github.com/yourusername/ecommerce",
      status: "Active",
      featured: false
    },
    {
      title: "Collaborative Task Manager",
      description: "Team productivity suite with real-time collaboration, advanced filtering, time tracking, and integration with popular tools.",
      tech: ["Vue.js", "Express", "Socket.io", "Redis", "PostgreSQL"],
      github: "https://github.com/yourusername/taskmanager",
      status: "Active",
      featured: false
    },
    {
      title: "API Gateway Service",
      description: "Microservices orchestration layer with rate limiting, authentication, caching, monitoring, and comprehensive API documentation.",
      tech: ["Node.js", "FastAPI", "Redis", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/api-gateway",
      status: "Production",
      featured: true
    },
    {
      title: "Real-Time Communication Hub",
      description: "Enterprise messaging platform with end-to-end encryption, video conferencing, file sharing, and team workspaces.",
      tech: ["React", "WebRTC", "Socket.io", "MongoDB", "AWS S3"],
      github: "https://github.com/yourusername/comm-hub",
      status: "Beta",
      featured: false
    }
  ];

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux", "SASS", "Webpack"],
    backend: ["Node.js", "Laravel", "Python", "Express", "GraphQL", "REST APIs", "FastAPI", "Socket.io"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Elasticsearch", "Firebase"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Nginx", "Kubernetes", "Terraform", "Jenkins"]
  };

  const experience = [
    {
      company: "Department of Interior & Local Government",
      position: "Lead Full-Stack Developer",
      period: "2023 - Present",
      location: "Calapan City, PH",
      type: "Full-time",
      achievements: [
        "Architected and deployed government portal serving 50K+ citizens",
        "Implemented automated document processing reducing processing time by 75%",
        "Led team of 6 developers through complete platform modernization",
        "Integrated real-time analytics dashboard for performance monitoring"
      ]
    },
    {
      company: "TechVentures Inc.",
      position: "Senior Full-Stack Developer",
      period: "2021 - 2023",
      location: "Manila, PH",
      type: "Full-time",
      achievements: [
        "Built microservices architecture handling 1M+ daily transactions",
        "Reduced API latency by 65% through optimization and caching strategies",
        "Mentored junior developers and established coding best practices",
        "Implemented CI/CD pipelines reducing deployment time by 80%"
      ]
    },
    {
      company: "Digital Solutions Co.",
      position: "Full-Stack Developer",
      period: "2019 - 2021",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Delivered 20+ client projects using modern web technologies",
        "Implemented CI/CD pipelines improving deployment efficiency by 80%",
        "Integrated payment systems and third-party APIs for e-commerce platforms",
        "Developed responsive web applications with focus on user experience"
      ]
    }
  ];

  const achievements = [
    { title: "AWS Certified Developer", icon: <Award className="w-5 h-5" />, year: "2024", description: "Professional certification in cloud architecture" },
    { title: "Hackathon Winner", icon: <Zap className="w-5 h-5" />, year: "2023", description: "1st place in national coding competition" },
    { title: "Open Source Contributor", icon: <Code className="w-5 h-5" />, year: "2022", description: "Active contributor to major open source projects" },
    { title: "Tech Conference Speaker", icon: <Users className="w-5 h-5" />, year: "2023", description: "Featured speaker at DevCon 2023" }
  ];

  const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: "50+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: <Briefcase className="w-6 h-6" />, value: "5+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-6 h-6" />, value: "100K+", label: "Clients Served", color: "from-green-500 to-emerald-500" },
    { icon: <Globe className="w-6 h-6" />, value: "24/7", label: "System Uptime", color: "from-orange-500 to-red-500" }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matthew
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`font-medium transition-all duration-300 ${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400 scale-110'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="icon"
              variant="outline"
              className="rounded-full md:hidden"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );

  const MobileMenu = () => (
    <div className={`fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-500 ${
      mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-3xl font-bold transition-all duration-500 ${
              activeSection === item.toLowerCase()
                ? 'text-blue-600 dark:text-blue-400 scale-110'
                : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );

  const HeroSection = () => (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Avatar & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8">
            <div className="relative group">
              <Avatar 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                fallback="MB"
                className="w-64 h-64 lg:w-80 lg:h-80 shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="w-4 h-4 mr-1" />
                Available for hire
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                {personalInfo.name.split(' ').map((name, index) => (
                  <span key={index} className="block">
                    {name}
                  </span>
                ))}
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="outline" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {personalInfo.location}
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Shield className="w-4 h-4 mr-1" />
                Security Cleared
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Cloud className="w-4 h-4 mr-1" />
                Cloud Certified
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button className="gap-3">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-3">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="outline" className="gap-3">
                  <Mail className="w-5 h-5" />
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">PORTFOLIO</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crafting digital solutions that drive results and exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              hover 
              className={`group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <Badge variant={project.status === 'Production' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" variant="outline" className="w-full gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">EXPERTISE</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mastering modern technologies to build scalable and efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillsList]) => (
            <Card key={category} hover className="text-center">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                  category === 'frontend' ? 'from-blue-500 to-cyan-500' :
                  category === 'backend' ? 'from-green-500 to-emerald-500' :
                  category === 'database' ? 'from-purple-500 to-pink-500' :
                  'from-orange-500 to-red-500'
                } flex items-center justify-center text-white`}>
                  {category === 'frontend' && <Code2 className="w-8 h-8" />}
                  {category === 'backend' && <Server className="w-8 h-8" />}
                  {category === 'database' && <Database className="w-8 h-8" />}
                  {category === 'devops' && <Cpu className="w-8 h-8" />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
                  {category}
                </h3>
                
                <div className="space-y-3">
                  {skillsList.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:scale-105 transition-transform duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">JOURNEY</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions and leading teams to success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} hover className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                        <Building2 className="w-5 h-5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          
          <CardContent className="relative p-12 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-none">
              <Sparkles className="w-4 h-4 mr-1" />
              LET'S CONNECT
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into exceptional digital experiences
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href={`mailto:${personalInfo.email}`} className="group">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-gray-300">{personalInfo.email}</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <Github className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">GitHub</h3>
                    <p className="text-sm text-gray-300">View my work</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <p className="text-sm text-gray-300">Connect with me</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-3">
              <Mail className="w-5 h-5" />
              Start Conversation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Matthew Balinton
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Crafting digital excellence through innovative solutions
        </p>
        
        <div className="flex items-center justify-center space-x-6 mb-6">
          {[personalInfo.github, personalInfo.linkedin, `mailto:${personalInfo.email}`].map((link, index) => (
            <a 
              key={index}
              href={link}
              target={index !== 2 ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {index === 0 && <Github className="w-5 h-5" />}
              {index === 1 && <Linkedin className="w-5 h-5" />}
              {index === 2 && <Mail className="w-5 h-5" />}
            </a>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © 2024 Matthew Balinton. Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'dark bg-gray-950' : 'bg-white'
    } ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <Navigation />
      <MobileMenu />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;