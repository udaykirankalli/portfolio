"use client";

import { User, Target, Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main About */}
          <div className="md:col-span-2 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <User size={28} className="text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
  I'm a passionate Software Engineer specializing in Full Stack Development and AI/ML technologies. 
  I completed my B.Tech in Artificial Intelligence and Machine Learning in 2025, combining strong 
  academic foundations with real-world experience gained through multiple internships.
</p>
<p>
  My journey in tech has been driven by curiosity and a love for problem-solving. I enjoy building 
  scalable web applications, exploring machine learning algorithms, and working on projects that 
  make a real impact. From developing AI-powered resume analyzers to creating intelligent recipe 
  generators, I thrive on turning innovative ideas into functional solutions.
</p>
<p>
  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
  projects, or solving algorithmic challenges on platforms like LeetCode and HackerRank.
</p>

            </div>
          </div>

          {/* What I Do */}
          <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Target size={28} className="text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Design and develop full-stack web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Build AI/ML solutions using modern frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Create RESTful APIs and microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Optimize database performance and architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Contribute to open-source projects</span>
              </li>
            </ul>
          </div>

          {/* What Drives Me */}
          <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={28} className="text-teal-400" />
              <h3 className="text-2xl font-semibold text-white">What Drives Me</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Creating technology that solves real-world problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Continuous learning and skill development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Collaborating with talented teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Writing clean, maintainable code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Sharing knowledge with the community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
