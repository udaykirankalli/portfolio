"use client";

import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Innowaft Software & Solutions Pvt. Ltd.',
      period: 'Jan 2025 - May 2025',
      description: [
        'Assisted in software development tasks and application workflows.',
        'Worked on frontend UI improvements and feature enhancements.',
        'Integrated application components with backend REST APIs.',
        'Collaborated with team members for code supervision in an agile environment.',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'BrainOvision Solutions Pvt. Ltd.',
      period: 'Jan 2023 - Jul 2023',
      description: [
        'Worked on frontend development using HTML, CSS, and JavaScript.',
        'Built responsive web pages and resolved UI-related issues.',
        'Assisted in testing and improving website usability.',
      ],
    },
    {
      title: 'Data Science & Machine Learning Intern (Short-Term)',
      company: 'ExceR EdTech (APSCHE)',
      period: 'Jul 2024 - Aug 2024',
      description: [
        'Completed a structured short-term internship focused on Python and ML fundamentals.',
        'Worked on data preprocessing, basic model building, and evaluation.',
        'Applied supervised learning techniques on sample datasets.',
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and growth
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                    <Briefcase size={24} className="text-blue-400" />
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 text-lg mb-2">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}