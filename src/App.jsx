import { useState } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const profileImage = '/rishabh_pic.jpeg'; // Place your uploaded image inside the public folder with this exact name

  return (
    <div className={darkMode
      ? 'min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white transition-all duration-500'
      : 'min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 transition-all duration-500'}>
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Rishabh Kumar</h1>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-xl border border-white/20 hover:border-cyan-400 transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Rishabh Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold">
            SDET | Aspiring Data Analyst
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            QA Automation Engineer with 3+ years of experience in Selenium,
            Cypress, REST API testing, SQL validation, and Agile delivery.
            Passionate about automation, analytics, and building scalable
            quality engineering solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Rishabh_Kumar_Resume.pdf"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-kumar-b30a5b1b2/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={profileImage}
              alt="Rishabh Kumar"
              className="relative w-[350px] md:w-[420px] rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className={darkMode
          ? 'bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md'
          : 'bg-white/70 border border-slate-300 rounded-3xl p-10 backdrop-blur-md shadow-lg'}>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <p className="text-slate-300 text-lg leading-9">
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
        <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Cognizant Technology Solutions</h3>
                <p className="text-cyan-400 text-lg">Associate – QA Automation Engineer</p>
              </div>
              <p className="text-slate-400">Nov 2022 – Present</p>
            </div>

            <ul className="mt-6 space-y-4 text-slate-300 leading-8 list-disc pl-6">
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
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

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
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-1 transition"
            >
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Top Performer</h3>
            <p className="text-slate-300 leading-8">
              Recognized multiple times for exceeding expectations and delivering
              high-quality automation solutions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Impact Award</h3>
            <p className="text-slate-300 leading-8">
              Received Impact Award for outstanding project contribution and
              commitment to quality delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-10">
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
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        © 2026 Rishabh Kumar. All rights reserved.
      </footer>
    </div>
  );
}
