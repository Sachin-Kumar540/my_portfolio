import React, { useState } from 'react';

// Main App component which acts as a single-page portfolio.
const App = () => {
  // State to manage the active section for single-page navigation.
  const [activeSection, setActiveSection] = useState('home');

  // Utility function to scroll to a section smoothly.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Portfolio data based on the provided resume.
  // This is a simple data structure to make the component cleaner.
  const portfolioData = {
    name: "Sachin Kumar",
    title: "Electronics and Instrumentation Engineer",
    contact: {
      email: "sk9313827@gmail.com",
      github: "https://github.com/SachinKumar",
      linkedin: "https://linkedin.com/in/Sachin-kumar",
      leetcode: "https://leetcode.com/SachinKumar"
    },
    aboutMe: "A dedicated and adaptable Electronics and Instrumentation Engineering student at the National Institute of Technology, Silchar, with strong skills in C, C++, and JavaScript. Passionate about web technologies like React and Node.js. A critical thinker and a team player with experience in industrial training and diverse projects. Committed to continuous learning and achieving excellence.",
    education: [
      {
        institution: "National Institute of Technology, Silchar",
        degree: "B.Tech in Electronics and Instrumentation Engineering",
        year: "2023 - Present",
        details: "CGPA: 8.08"
      },
      {
        institution: "Gurukul Vidyapeeth Hajipur",
        degree: "Higher Secondary (10+2)",
        year: "2022",
        details: "Percentage: 90.0%"
      },
      {
        institution: "Kendriya Vidyalaya Sonpur",
        degree: "High School",
        year: "2020",
        details: "Percentage: 88.6%"
      }
    ],
    skills: {
      programming: ["C", "C++", "JavaScript"],
      web: ["HTML", "CSS", "Node.js", "Express.js", "React"],
      tools: ["VS Code", "Git", "GitHub"]
    },
    projects: [
      {
        name: "Spotify Clone",
        description: "A responsive Spotify UI clone developed using HTML, CSS, and JavaScript. This project demonstrates a strong understanding of front-end development and a keen eye for design.",
        githubLink: "https://github.com/Sachin-Kumar540/spotify_clone",
        deployedLink: "#" // Placeholder URL
      }
    ],
    achievements: [
      "Completed AI Tools Workshop (be10x, June 2025)",
      "Achieved a National Level Medal in Taekwondo.",
      "Represented college in Inter-NIT Competition (Yoga).",
      "Attended a certified Drone Bootcamp on UAV technology and applications.",
      "Successfully completed the Graph Theory Programming Camp by Algo University, solving 11 advanced graph problems under mentorship of a Codeforces Master."
    ]
  };

  // Component for the header and navigation.
  const Header = () => (
    <header className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          {portfolioData.name.split(' ')[0]}
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-lg">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-lg">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-lg">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-lg">Contact</button>
        </nav>
        {/* Mobile menu button will go here */}
      </div>
    </header>
  );

  // Component for the hero section.
  const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center text-white bg-gray-950 px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-12 flex flex-col md:flex-row items-center animate-fadeIn">
        {/* Text content on the left */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Hello, I'm {portfolioData.name}
          </h1>
          <p className="text-2xl sm:text-4xl font-light text-gray-300 animate-fadeIn delay-300">
            {portfolioData.title}
          </p>
          <div className="flex justify-center md:justify-start space-x-8 mt-10 animate-fadeIn delay-500">
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-transform duration-300 transform hover:scale-125">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.498.998.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576C20.564 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Image on the right side for larger screens */}
        <div className="flex-shrink-0 mt-12 md:mt-0">
          <img
            src="https://placehold.co/250x250/252525/e5e5e5?text=Your+Photo"
            alt="Sachin Kumar"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-emerald-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );

  // Reusable card component for different sections.
  const Card = ({ title, children }) => (
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 animate-slideInUp">
      <h2 className="text-3xl font-bold mb-6 text-emerald-400">{title}</h2>
      {children}
    </div>
  );

  // Component for the "About Me" section.
  const About = () => (
    <section id="about" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="About Me">
          <p className="text-lg leading-relaxed">{portfolioData.aboutMe}</p>
        </Card>
      </div>
    </section>
  );

  // Component for the "Education" section.
  const Education = () => (
    <section id="education" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Education">
          <ul className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                <div className="text-lg font-semibold text-white">{edu.institution}</div>
                <div className="text-sm sm:text-base text-gray-400">{edu.degree} - {edu.year}</div>
                <div className="text-sm text-gray-500">{edu.details}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );

  // Component for the "Skills" section.
  const Skills = () => (
    <section id="skills" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.programming.map((skill, index) => (
                  <span key={index} className="bg-emerald-800 text-emerald-200 px-4 py-1 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.web.map((skill, index) => (
                  <span key={index} className="bg-emerald-800 text-emerald-200 px-4 py-1 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((skill, index) => (
                  <span key={index} className="bg-emerald-800 text-emerald-200 px-4 py-1 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );

  // Component for the "Projects" section.
  const Projects = () => (
    <section id="projects" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 transform border border-gray-700 hover:border-emerald-400">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.498.998.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576C20.564 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">GitHub Link</span>
                  </a>
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.03V15.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v2.53a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5zM12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6.5 6.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-2.53a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v2.53z"></path>
                    </svg>
                    <span className="sr-only">Deployed Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );

  // Component for the "Achievements" section.
  const Achievements = () => (
    <section id="achievements" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Achievements">
          <ul className="list-disc list-inside space-y-2 text-lg">
            {portfolioData.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-400">{achievement}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );

  // Component for the footer and contact information.
  const Footer = () => (
    <footer id="contact" className="py-10 bg-gray-900 text-gray-500 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">Get in Touch</h2>
        <div className="space-y-2 mb-6">
          <p>Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-400 hover:underline">{portfolioData.contact.email}</a></p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-transform duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.498.998.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576C20.564 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-8 text-sm">© 2024 Sachin Kumar. All Rights Reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-gray-950 text-white font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: #0d0d0d;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default App;
