"use client";

import { Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      skills: ['Python', 'REST API', 'Node.js', 'Express.js'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'SQL'],
      color: 'from-teal-500 to-blue-500',
    },
    {
      category: 'AI & ML',
      skills: ['Machine Learning', 'NLP', 'LLMs'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Linux', 'Agile'],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <Code2 size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-8">Core Competencies</h3>
          <div className="space-y-6">
            {[
              { skill: 'Full Stack Development', level: 90 },
              { skill: 'Python & Flask', level: 85 },
              { skill: 'React & JavaScript', level: 85 },
              { skill: 'Database Management', level: 80 },
              { skill: 'Machine Learning & AI', level: 75 },
              { skill: 'Cloud & DevOps', level: 70 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-blue-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}