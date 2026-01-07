"use client";

import { Folder, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Phonalynx – AI-Powered Resume Analyzer",
      tech: "React, Flask, PostgreSQL, Gemini API, Firebase",
      link: "https://github.com/udaykirankalli/AI-Resume-Analyzer",
      description: [
        "Built a full-stack web application for resume parsing and analysis.",
        "Integrated NLP-based resume extraction using LLM APIs.",
        "Designed backend APIs and database models for resume storage and scoring.",
      ],
    },
    {
      title: "AI-Based Recipe Generator & Recommender",
      tech: "React, Express, Flask, Hugging Face, MongoDB",
      link: "https://github.com/udaykirankalli/AI-Based-Recipe-Recommender-System",
      description: [
        "Built an AI recipe generator using LLaMA-2-7B-Chat (GGUF) via Hugging Face.",
        "Enabled ingredient-based input, calorie calculation, and meal suggestions.",
        "Implemented modular backend services and optimized data access patterns.",
      ],
    },
    {
      title: "Supply Chain Risk Prediction System",
      tech: "Python, Machine Learning",
      link: "https://github.com/udaykirankalli/Global-Supply-Chain-Optimization-and-Risk-Management-System",
      description: [
        "Built a machine learning system to analyze and predict supply chain disruptions.",
        "Performed data preprocessing, feature engineering, and model evaluation.",
        "Visualized results using dashboards for insights and analysis.",
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Building solutions that make a difference
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Title + Link */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Folder size={24} className="text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Project"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {/* Tech Stack */}
                <p className="text-blue-400 text-sm mb-4">
                  {project.tech}
                </p>

                {/* Description */}
                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
