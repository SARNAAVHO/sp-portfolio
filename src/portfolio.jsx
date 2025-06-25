import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Calendar, GraduationCap, Code, Database, Cloud, Cpu } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const email = "piyush30052004@gmail.com"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const skills = {
    languages: ['Python', 'C++', 'C', 'Java', 'JavaScript'],
    web: ['HTML', 'CSS', 'GSAP', 'React', 'NextJS'],
    databases: ['MySQL', 'MongoDB', 'PostgrSQL'],
    datascience: ['TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
    tools: ['Git', 'Jupyter', 'VS Code', 'IntelliJ', 'PyCharm'],
    cloud: ['AWS', 'OpenStack']
  };

  const projects = [
    {
      title: 'Poly Market Analyzer',
      period: 'Oct 24 - Present',
      description: 'Developed and evaluated multiple stock movement prediction models including a Multi-Stock Shared LSTM (F1: 0.76), Ticker-Aware LSTM with stock embeddings (Acc: 64%), and VAR baseline (F1: 0.65). Explored advanced architectures such as Transformer, CNN, and GA/GP-based rule models for interpretable forecasting.',
      tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Plotly', 'Streamlit'],
      githubUrl: 'https://github.com/SARNAAVHO/Poly-market-analyzer'
    },
    {
      title: 'Cloud Network Optimization',
      period: 'Feb 25 - Present',
      description: 'Developed a system to predict optimal VPC placement for VMs based on performance metrics by collecting and processing CPU, RAM, and Disk data using Python and CloudSim. Currently analyzing VM performance across VPCs and developing a machine learning and reinforcement learning model for prediction.',
      tech: ['Python', 'AWS', 'OpenStack', 'CloudSim', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'Psutil', 'NumPy', 'Plotly'],
      githubUrl: 'https://github.com/username/cloud-network-optimization'
    },
    // {
    //   title: 'IDS for Hypervisor Networks',
    //   period: 'April 25 - Present',
    //   description: 'Currently developing a hypervisor network IDS using a novel hypergraph ensemble model, achieving 30% higher accuracy on datasets like CICIDS, NSL-KDD, UNSW, and ToN-IoT. Utilizing CloudSim for traffic simulation and Zeek/CICFlowMeter for real-time capture.',
    //   tech: ['Python', 'CloudSim', 'Zeek', 'CICFlowmeter', 'TensorFlow', 'Scikit-Learn', 'PyTorch'],
    //   githubUrl: 'https://github.com/username/hypervisor-ids'
    // }
    {
      title: 'KeenEdge-AI',
      period: 'June 25 - Present',
      description: 'Built an AI mock interview app using React, Next.js, and Gemini API for dynamic question generation and feedback. Enabled real-time response evaluation to simulate realistic interview scenarios.Integrated Clerk for secure user authentication and session handling, supporting multiple users and sessions. Ensured data privacy and smooth access control.Used Shadcn UI for a responsive, modern interface across devices. Leveraged Drizzle ORM with Neon for scalable PostgreSQL database operations. (In Progress)',
      tech: ['React', 'NextJS', 'Gemini API', 'Clerk', 'Shadcn', 'Drizzle ORM', 'Neon', 'PostgreSQL'],
      githubUrl: 'https://github.com/SARNAAVHO/KeenEdge-AI'
    }
  ];

  const coursework = [
    'Data Structures & Algorithms', 'Operating Systems', 'Object Oriented Programming',
    'Database Management System', 'Computer Networks', 'AI & Machine Learning',
    'Cloud Computing', 'Cyber Security', 'Soft Computing'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block">
              <span className="text-4xl md:text-4xl font-mono font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                &lt;WELCOME/&gt;
              </span>
            </div>
          </div>
          <div className="flex justify-center space-x-1 mb-8">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
          <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" 
                 style={{
                   animation: 'loadingBar 2.5s ease-in-out forwards'
                 }}></div>
          </div>
        </div>
        <style jsx>{`
          @keyframes loadingBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sarnaavho Pal
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Internship', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`cursor-pointer transition-colors duration-300 hover:text-blue-400 hover:font-semibold hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Sarnaavho Pal
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Final-year B.Tech Student in Computer Science & Engineering
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Specializing in Artificial Intelligence & Machine Learning with expertise in cloud computing, 
              developing innovative ML models and network optimization solutions.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-blue-500/30">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-sm">CGPA: 8.4</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-blue-500/30">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Graduating 2026</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 cursor-pointer"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a dedicated final-year Bachelor of Technology student in Computer Science and Engineering, 
              specializing in Artificial Intelligence & Machine Learning. My passion lies in developing cutting-edge 
              machine learning models and exploring cloud computing solutions for real-world problems.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm gaining hands-on experience through innovative projects including network performance 
              optimization using Python, TensorFlow, and AWS. My expertise spans across machine learning, cloud 
              computing, and frontend development, with a strong commitment to continuous learning through 
              certifications and practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  IEEE Silchar Subsection Student Summer Internship Program (IS3IP-2024)
                </h3>
                <p className="text-xl text-gray-300 mb-2">Intern, Department of Computer Science & Engineering</p>
                <p className="text-lg text-gray-400 mb-4">NIT Silchar, Assam</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 bg-slate-700/50 px-4 py-2 rounded-full text-sm">
                  June 2024 – July 2024
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Worked under the mentorship of <strong className="text-blue-300">Dr. Ripon Patgiri</strong> to develop a prototype Large Language Model (LLM) using open-source frameworks.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Explored transformer-based architectures and fine-tuned models for domain-specific applications.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Collaborated with peers to research, implement, and evaluate NLP tasks.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                Large Language Models
              </span>
              <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                Transformer Architecture
              </span>
              <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                NLP
              </span>
              <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                Model Fine-tuning
              </span>
              <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                Open-source Frameworks
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500/20">
              <a 
                href="https://drive.google.com/file/d/1dzi5J1gcDGjJDb1yR6y-ewrcvJX6LrZv/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">Computer Science and Engineering (AIML)</p>
                  <p className="text-lg text-gray-400">Institute of Engineering and Management, Kolkata</p>
                </div>
                <div className="text-right">
                  <div className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-2 text-center">
                    <span className="text-blue-300 font-semibold">CGPA: 8.4</span>
                  </div>
                  <p className="text-gray-400">Oct 2022 – July 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Higher Secondary Education</h3>
                  <p className="text-lg text-gray-300 mb-2">CBSE Board</p>
                  <p className="text-gray-400">Kendriya Vidyalaya Ordnance Factory Dum Dum</p>
                </div>
                <div className="text-right">
                  <div className="space-y-2">
                    <div className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                      <span className="text-blue-300 font-semibold">XII: 89%</span>
                    </div>
                    <div className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                      <span className="text-blue-300 font-semibold">X: 91.2%</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">2010 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-400 flex items-center">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                      {project.period}
                    </span>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 border border-blue-500/30"
                    >
                      <Github className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-300">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Data Science & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.datascience.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Tools & Software</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Cloud Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm text-blue-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-xl">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new opportunities, collaborations, or interesting projects. 
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex justify-center space-x-6">
              {/* <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </button> */}

                <button 
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Mail className="w-5 h-5" />
          <span>Email Me</span>
        </button>
        
        {/* Tooltip */}
        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transition-all duration-200 whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          {email}
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>

              <button className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-blue-500/30 cursor-pointer">
                <Github className="w-5 h-5" />
                <a href='https://github.com/SARNAAVHO'>GitHub</a>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <a href='https://www.linkedin.com/in/sarnaavho-pal/'>LinkedIn</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sarnaavho Pal. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;