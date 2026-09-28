import { useState } from 'react';
import { Sparkles, Code2, Database, Bug, Brain, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const profileImage = '/rishabh_pic.jpeg'; // Place your uploaded image inside the public folder with this exact name

  return (
    <div className={darkMode
      ? 'min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white transition-all duration-500 overflow-hidden'
      : 'min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#dbeafe] text-slate-900 transition-all duration-500 overflow-hidden'}>
      <nav className={darkMode
        ? 'sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10'
        : 'sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-300 shadow-sm'}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Rishabh Kumar</h1>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode
                ? 'px-4 py-2 rounded-xl border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/10 transition'
                : 'px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 hover:border-blue-500 hover:text-blue-600 transition shadow-sm'}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#about" className={darkMode ? 'hover:text-cyan-400 transition font-medium' : 'hover:text-blue-600 text-slate-700 transition font-semibold'}>About</a>
            <a href="#experience" className={darkMode ? 'hover:text-cyan-400 transition font-medium' : 'hover:text-blue-600 text-slate-700 transition font-semibold'}>Experience</a>
            <a href="#skills" className={darkMode ? 'hover:text-cyan-400 transition font-medium' : 'hover:text-blue-600 text-slate-700 transition font-semibold'}>Skills</a>
            <a href="#contact" className={darkMode ? 'hover:text-cyan-400 transition font-medium' : 'hover:text-blue-600 text-slate-700 transition font-semibold'}>Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center relative">
        <div className="absolute animate-pulse top-24 right-20 text-cyan-400/30">
          <Sparkles size={120} />
        </div>
        <div className="absolute animate-bounce bottom-20 left-10 text-blue-400/20 hidden md:block">
          <Rocket size={70} />
        </div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-lg">
            <Sparkles size={16} className="text-cyan-400" />
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-xs font-bold">Portfolio</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Rishabh Kumar
          </h1>
          <h2 className={darkMode ? 'text-2xl md:text-3xl text-slate-300 font-semibold' : 'text-2xl md:text-3xl text-slate-700 font-semibold'}>
            SDET | QA Engineer
          </h2>

          <p className={darkMode ? 'text-slate-300 text-lg leading-relaxed max-w-xl' : 'text-slate-700 text-lg leading-relaxed max-w-xl'}>
            Innovative SDET delivering comprehensive quality engineering for complex web applications. Leverages 3+ years of expertise spanning targeted manual testing, scalable UI/API automation frameworks, and emerging AI-assisted test generation. Adept at driving CI/CD integration and backend database validation using SQL to maximize test coverage, reduce maintenance overhead, and optimize Agile delivery.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex gap-3 w-full mb-2 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold">Automation</span>
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold">SDET</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-400 text-sm font-semibold">Data Analytics</span>
            </div>
            <a
              href="/Rishabh_Kumar_Resume.pdf"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-black font-bold transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-kumar-b30a5b1b2/"
              target="_blank"
              className={darkMode
                ? 'px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition'
                : 'px-6 py-3 rounded-2xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 transition shadow-sm'}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={profileImage}
              alt="Rishabh Kumar"
              className="relative w-[350px] md:w-[420px] rounded-[2rem] border border-white/10 shadow-2xl hover:scale-105 hover:rotate-1 transition duration-500 group-hover:shadow-cyan-500/30"
            />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className={darkMode
          ? 'bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-cyan-400 transition'
          : 'bg-white/80 border border-slate-300 rounded-3xl p-10 backdrop-blur-md shadow-xl hover:shadow-2xl transition'}>
          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-cyan-400" size={34} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <p className={darkMode ? 'text-slate-300 text-lg leading-9' : 'text-slate-700 text-lg leading-9'}>
            I am currently working as a QA Automation Engineer at Cognizant,
            contributing to enterprise healthcare applications for Cigna
            Healthcare. My expertise includes Selenium WebDriver with Java,
            Cypress automation using JavaScript/TypeScript, API testing,
            SQL validation, and end-to-end regression automation.
            <br /><br />
            Alongside automation engineering, I am actively transitioning
            toward Data Analytics and Data Science by strengthening my skills
            in Python, SQL, and analytical problem-solving.
          </p>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-cyan-400" size={34} />
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          <div className={darkMode
            ? 'bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-1 transition duration-300'
            : 'bg-white/80 border border-slate-300 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-1 transition duration-300 shadow-lg'}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Cognizant Technology Solutions</h3>
                <p className="text-cyan-400 text-lg">Associate – QA Automation Engineer</p>
              </div>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Nov 2022 – Present</p>
            </div>

            <ul className={darkMode ? 'mt-6 space-y-4 text-slate-300 leading-8 list-disc pl-6' : 'mt-6 space-y-4 text-slate-700 leading-8 list-disc pl-6'}>
              <li>Built 100+ Cypress automation test cases across enterprise healthcare modules.</li>
              <li>Developed Selenium + Java TestNG frameworks for UI and API automation.</li>
              <li>Performed REST API testing using Postman and backend validation using SQL.</li>
              <li>Contributed to AI chatbot testing and mobile testing using BrowserStack.</li>
              <li>Worked in Agile/Scrum teams with JIRA, GitHub, and CI/CD pipeline monitoring.</li>
              <li>Received client appreciation and multiple internal recognition awards.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Database className="text-cyan-400" size={34} />
          <h2 className="text-4xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Selenium',
            'Cypress',
            'Java',
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'Postman',
            'REST API',
            'GitHub',
            'JIRA',
            'AWS CloudWatch',
          ].map((skill) => (
            <div
              key={skill}
              className={darkMode
              ? 'bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300'
              : 'bg-white/90 border border-slate-300 rounded-2xl p-6 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-md'}
            >
              <p className={darkMode ? 'font-bold text-lg text-white' : 'font-bold text-lg text-slate-800'}>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Bug className="text-cyan-400" size={34} />
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={darkMode
            ? 'bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300'
            : 'bg-white/90 border border-slate-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300'}>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Top Performer</h3>
            <p className={darkMode ? 'text-slate-300 leading-8' : 'text-slate-700 leading-8'}>
              Recognized multiple times for exceeding expectations and delivering
              high-quality automation solutions.
            </p>
          </div>

          <div className={darkMode
            ? 'bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300'
            : 'bg-white/90 border border-slate-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300'}>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Impact Award</h3>
            <p className={darkMode ? 'text-slate-300 leading-8' : 'text-slate-700 leading-8'}>
              Received Impact Award for outstanding project contribution and
              commitment to quality delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className={darkMode
          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10 text-center backdrop-blur-lg'
          : 'bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 rounded-3xl p-10 text-center shadow-xl'}>
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="text-cyan-400" size={34} />
            <h2 className="text-4xl font-bold">Let’s Connect</h2>
          </div>

          <p className={darkMode ? 'text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-10' : 'text-slate-700 text-lg max-w-2xl mx-auto leading-8 mb-10'}>
            Open to opportunities in QA Automation, SDET, and future data
            analytics roles. Feel free to connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:pandey77rishabh@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-kumar-b30a5b1b2/"
              target="_blank"
              className={darkMode
                ? 'px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition'
                : 'px-6 py-3 rounded-2xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 transition shadow-sm'}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className={darkMode
        ? 'border-t border-white/10 py-8 text-center text-slate-500'
        : 'border-t border-slate-300 py-8 text-center text-slate-600'}>
        Built with React, Tailwind & ambition 🚀 | © 2026 Rishabh Kumar
      </footer>
    </div>
  );
}
