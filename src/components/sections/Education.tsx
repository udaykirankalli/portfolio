"use client";

import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const certifications = [
    'Oracle AI Foundations Associate (2025-2027)',
    'Google Cloud Generative AI and IBM AI Engineering Certifications',
    'Published Paper: "Smart Chef: AI Recipe Generator" (UGC Care, 2025)',
    'Completed Advanced Software Engineering Job Simulation — Walmart',
    'Active problem solver on LeetCode and HackerRank focusing on DSA, SQL, and Python',
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and growth
          </p>
        </div>

        {/* Education */}
        <div className="mb-12 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <GraduationCap size={32} className="text-blue-400" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                B.Tech in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-blue-400 text-lg">Aditya Engineering College, Andhra Pradesh</p>
              <p className="text-gray-400 mt-2">2023 - 2025 | GPA: 8.07/10</p>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award size={28} className="text-blue-400" />
            <h3 className="text-2xl font-semibold text-white">
              Achievements & Certifications
            </h3>
          </div>

          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}