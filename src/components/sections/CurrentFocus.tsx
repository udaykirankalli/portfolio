"use client";

import { Code, Database, Brain, Cloud, GitBranch, Cpu } from 'lucide-react';

export default function CurrentFocus() {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      technologies: 'React.js, HTML5, CSS3, Flask, REST API',
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      technologies: 'PostgreSQL, MongoDB',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      technologies: 'Machine Learning, NLP, LLMs',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      technologies: 'AWS, Docker, Git, GitHub',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Backend Development',
      technologies: 'Python, Java, JavaScript',
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Operating Systems',
      technologies: 'Linux, DBMS, System Design',
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Building innovative solutions across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {skill.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}