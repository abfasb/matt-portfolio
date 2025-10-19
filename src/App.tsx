import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Database, Briefcase, Award, Moon, Sun, Menu, X, Calendar, MapPin, Building2, CheckCircle2, Star, Sparkles, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const personalInfo = {
    name: "Matthew Balinton",
    title: "Full-Stack Developer",
    tagline: "Architecting scalable solutions & crafting seamless digital experiences",
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
      status: "Production"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics, custom visualizations, and automated reporting capabilities.",
      tech: ["TypeScript", "Next.js", "GraphQL", "D3.js", "MongoDB"],
      github: "https://github.com/yourusername/analytics-dash",
      live: "https://analytics-demo.com",
      status: "Production"
    },
    {
      title: "E-Commerce Ecosystem",
      description: "Full-featured marketplace with inventory management, multi-vendor support, payment integration, and AI-powered recommendations.",
      tech: ["React", "Laravel", "MySQL", "Stripe", "Docker"],
      github: "https://github.com/yourusername/ecommerce",
      status: "Active"
    },
    {
      title: "Collaborative Task Manager",
      description: "Team productivity suite with real-time collaboration, advanced filtering, time tracking, and integration with popular tools.",
      tech: ["Vue.js", "Express", "Socket.io", "Redis", "PostgreSQL"],
      github: "https://github.com/yourusername/taskmanager",
      status: "Active"
    },
    {
      title: "API Gateway Service",
      description: "Microservices orchestration layer with rate limiting, authentication, caching, monitoring, and comprehensive API documentation.",
      tech: ["Node.js", "FastAPI", "Redis", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/api-gateway",
      status: "Production"
    },
    {
      title: "Real-Time Communication Hub",
      description: "Enterprise messaging platform with end-to-end encryption, video conferencing, file sharing, and team workspaces.",
      tech: ["React", "WebRTC", "Socket.io", "MongoDB", "AWS S3"],
      github: "https://github.com/yourusername/comm-hub",
      status: "Beta"
    }
  ];

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Laravel", "Python", "Express", "GraphQL", "REST APIs"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Nginx", "Kubernetes"]
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
        "Led team of 6 developers through complete platform modernization"
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
        "Mentored junior developers and established coding best practices"
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
        "Integrated payment systems and third-party APIs for e-commerce platforms"
      ]
    }
  ];

  const achievements = [
    { title: "AWS Certified Developer", icon: <Award className="w-5 h-5" />, year: "2024" },
    { title: "Hackathon Winner", icon: <Star className="w-5 h-5" />, year: "2023" },
    { title: "Open Source Contributor", icon: <Code2 className="w-5 h-5" />, year: "2022" },
    { title: "Tech Conference Speaker", icon: <Sparkles className="w-5 h-5" />, year: "2023" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`}>
      {/* Floating Action Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Button
          onClick={() => setDarkMode(!darkMode)}
          size="icon"
          className={`rounded-full shadow-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'}`}
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
        </Button>
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          size="icon"
          className={`rounded-full shadow-lg md:hidden ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'}`}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-40 md:hidden ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-lg`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium ${darkMode ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Hero Section - Compressed Grid */}
        <section id="about" className="mb-20">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Profile Card */}
            <Card className={`lg:col-span-8 border-0 ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-xl`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="w-24 h-24 border-4 border-blue-500">
                    <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
                    <AvatarFallback>MB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalInfo.name}
                    </h1>
                    <p className="text-xl text-blue-600 font-semibold mb-3">{personalInfo.title}</p>
                    <p className={`text-lg mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {personalInfo.tagline}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="secondary" className={`${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        <MapPin className="w-3 h-3 mr-1" /> {personalInfo.location}
                      </Badge>
                      <Badge variant="secondary" className={`${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        <Briefcase className="w-3 h-3 mr-1" /> Available for hire
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Github className="w-4 h-4" /> GitHub
                        </Button>
                      </a>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                      </a>
                      <a href={`mailto:${personalInfo.email}`}>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
                          <Mail className="w-4 h-4" /> Contact
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards - Compact */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <Card className={`border-0 ${darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
                <CardContent className="p-6 text-center">
                  <Code2 className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{personalInfo.projectsCount}</div>
                  <div className={`text-sm ${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>Projects</div>
                </CardContent>
              </Card>
              <Card className={`border-0 ${darkMode ? 'bg-gradient-to-br from-purple-900 to-purple-800' : 'bg-gradient-to-br from-purple-50 to-purple-100'}`}>
                <CardContent className="p-6 text-center">
                  <Server className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{personalInfo.yearsExp}</div>
                  <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-slate-600'}`}>Years</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Grid - Compressed */}
        <section id="projects" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured Projects</h2>
            <Badge className="bg-blue-600 text-white">6 Projects</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <Card key={idx} className={`border-0 ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:shadow-xl'} transition-all duration-300 group`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className={`text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</CardTitle>
                    <Badge variant={project.status === 'Production' ? 'default' : 'secondary'} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className={`text-sm line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className={`text-xs ${darkMode ? 'border-slate-700' : ''}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full gap-1">
                        <Github className="w-3 h-3" /> Code
                      </Button>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 gap-1">
                          <ArrowUpRight className="w-3 h-3" /> Live
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Grid - Compressed & Creative */}
        <section id="skills" className="mb-20">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, skillsList]) => (
              <Card key={category} className={`border-0 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <CardHeader className="pb-3">
                  <CardTitle className={`text-lg capitalize flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {category === 'frontend' && <Code2 className="w-5 h-5 text-blue-500" />}
                    {category === 'backend' && <Server className="w-5 h-5 text-green-500" />}
                    {category === 'database' && <Database className="w-5 h-5 text-purple-500" />}
                    {category === 'devops' && <Briefcase className="w-5 h-5 text-orange-500" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience with Timeline */}
        <section id="experience" className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Professional Journey</h2>
          
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Experience Timeline */}
            <div className="lg:col-span-8 relative">
              {/* Connecting Line */}
              <div className={`absolute left-[11px] top-6 bottom-6 w-0.5 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-950 dark:border-slate-50"></div>
                    
                    <Card className={`border-0 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <CardTitle className={`text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                              {exp.position}
                            </CardTitle>
                            <CardDescription className={`text-base font-semibold mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                              <Building2 className="w-4 h-4 inline mr-1" />
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className={`${darkMode ? 'border-slate-700' : ''}`}>
                              <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                            </Badge>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          <MapPin className="w-3 h-3 inline mr-1" />
                          {exp.location}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Connected */}
            <div className="lg:col-span-4 relative">
              {/* Connecting Line for Achievements */}
              <div className={`absolute left-[11px] top-6 bottom-6 w-0.5 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              
              <div className="space-y-4">
                <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Achievements</h3>
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-950 dark:border-slate-50"></div>
                    
                    <Card className={`border-0 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                              {achievement.title}
                            </h4>
                            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                              {achievement.year}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Compact */}
        <section id="contact">
          <Card className={`border-0 ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-xl`}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Let's Build Something Great
                </h2>
                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Open to new opportunities and exciting projects
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                  <Mail className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email</h3>
                  <p className={`text-sm text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{personalInfo.email}</p>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                  <Github className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>GitHub</h3>
                  <p className={`text-sm text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>View my work</p>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                  <Linkedin className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</h3>
                  <p className={`text-sm text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Connect with me</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className={`mt-20 py-8 text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <p className="text-sm">© 2025 {personalInfo.name} • Built with React, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;