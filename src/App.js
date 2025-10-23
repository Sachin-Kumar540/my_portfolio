import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioData = {
    name: "Sachin Kumar",
    title: "Electronics and Instrumentation Engineer",
    contact: {
      email: "sk9313827@gmail.com",
      github: "https://github.com/Sachin-Kumar540",
      linkedin: "https://linkedin.com/in/Sachin-kumar",
      leetcode: "https://leetcode.com/SachinKumar"
    },
    aboutMe:
      "A dedicated and adaptable Electronics and Instrumentation Engineering student at the National Institute of Technology, Silchar, with strong skills in C, C++, and JavaScript. Passionate about web technologies like React and Node.js. A critical thinker and a team player with experience in industrial training and diverse projects. Committed to continuous learning and achieving excellence.",
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
        description:
          "A responsive Spotify UI clone built using HTML, CSS, and JavaScript. This project showcases front-end development skills and attention to responsive design.",
        githubLink: "https://github.com/Sachin-Kumar540/spotify_clone",
        deployedLink: "#"
      },
      {
        name: "📊 Mutual Fund Overview & Insights",
        description:
          "A data-driven analysis project identifying the top 30 mutual fund schemes with high return and low risk using Python (Pandas, Sklearn) and Power BI for visualization.",
        githubLink: "https://github.com/Sachin-Kumar540/mutual_fund_insights",
        deployedLink: "#"
      }
    ],
    achievements: [
      "Completed AI Tools Workshop (be10x, June 2025)",
      "Achieved a National Level Medal in Taekwondo.",
      "Represented college in Inter-NIT Competition (Yoga).",
      "Attended a certified Drone Bootcamp on UAV technology and applications.",
      "Completed Graph Theory Programming Camp by Algo University, solving 11 advanced graph problems under mentorship of a Codeforces Master."
    ]
  };

  // Header
  const Header = () => (
    <header className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          {portfolioData.name.split(' ')[0]}
        </div>
        <nav className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-lg capitalize"
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );

  // Hero Section
  const Hero = () => (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center text-white bg-gray-950 px-4 py-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-1 text-center md:text-left space-y-8">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Hello, I'm {portfolioData.name}
          </h1>
          <p className="text-2xl sm:text-4xl font-light text-gray-300">
            {portfolioData.title}
          </p>
        </div>
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

  const Card = ({ title, children }) => (
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-emerald-400">{title}</h2>
      {children}
    </div>
  );

  const About = () => (
    <section id="about" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="About Me">
          <p className="text-lg leading-relaxed">{portfolioData.aboutMe}</p>
        </Card>
      </div>
    </section>
  );

  const Skills = () => (
    <section id="skills" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-2 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-emerald-800 text-emerald-200 px-4 py-1 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );

  const Projects = () => (
    <section id="projects" className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <Card title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 border border-gray-700 hover:border-emerald-400"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <i className="fab fa-github fa-lg"></i>
                    <span>GitHub</span>
                  </a>
                  {project.deployedLink && project.deployedLink !== "#" && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <i className="fas fa-external-link-alt fa-lg"></i>
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );

  const Contact = () => (
    <footer id="contact" className="py-20 bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">Contact Me</h2>
        <p className="text-lg mb-8">📧 {portfolioData.contact.email}</p>
        <div className="flex justify-center space-x-10">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-transform transform hover:scale-125"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href={portfolioData.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-125"
          >
            <i className="fas fa-code fa-2x"></i>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
