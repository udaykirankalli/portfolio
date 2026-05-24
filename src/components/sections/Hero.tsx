"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  Download,
  FileText,
  ExternalLink,
  X,
} from "lucide-react";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Content */}
          <div>
<div className="mb-6">
  <span className="
    inline-flex items-center gap-2 px-4 py-2
    bg-white/10 backdrop-blur-xl
    border border-white/20
    text-white text-sm
    rounded-full
    shadow-lg shadow-black/30
  ">
    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
    Software Engineer
  </span>
</div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-white">Uday Kiran</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Kalli
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Software Engineer with hands-on experience gained through internships and academic projects, 
              building web and backend applications using Python, JavaScript, React, and Flask. Strong foundation 
              in REST APIs, databases, data structures, and software engineering fundamentals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105"
              >
                Get In Touch
              </a>

              {/* 🔥 ONLY THIS BUTTON CHANGED */}
              <button
                onClick={() => setResumeOpen(true)}
                className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all"
              >
                <FileText size={20} />
                View Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://github.com/udaykirankalli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <Github size={20} className="text-white" />
                <span className="text-white">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/udaykirankalli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <Linkedin size={20} className="text-white" />
                <span className="text-white">LinkedIn</span>
              </a>
              <a
                href="mailto:kalliudaykiran@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <Mail size={20} className="text-white" />
                <span className="text-white">Email</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>kalliudaykiran@gmail.com</span>
              </div>
            </div>
          </div>

         {/* Right Side - Current Focus Card */}
          <div className="lg:sticky lg:top-24">
            <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Current Focus
              </h2>
              <p className="text-gray-400 mb-8">
                Leading innovative projects as a Software Engineer, building cutting-edge solutions across multiple domains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">Full Stack Development</h3>
                  <p className="text-gray-400 text-xs">React.js, Node.js, Next.js</p>
                </div>

                <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 mb-4 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-all">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">AI & Machine Learning</h3>
                  <p className="text-gray-400 text-xs">NLP, LLMs</p>
                </div>

                <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 mb-4 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-all">
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">Backend Systems</h3>
                  <p className="text-gray-400 text-xs">Python, Flask, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </div>

      {/* ================= RESUME MODAL (NEW) ================= */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[90vw] max-w-5xl h-[85vh] bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Uday Kiran Kalli — Resume
                </h3>
                <p className="text-sm text-gray-400">
                  View or download my resume
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1jHOmqo6HFjqa0BeJE4boJfT2yMmPvcm5/view?usp=sharing"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
                >
                  <ExternalLink size={16} className="text-white" />
                  <span className="text-white">Open</span>
                </a>
                --.



                

                <a
  href="https://drive.google.com/uc?export=download&id=1jHOmqo6HFjqa0BeJE4boJfT2yMmPvcm5"
  download
  className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-black rounded-xl hover:bg-gray-200"
>
  <Download size={16} />
  Download
</a>

                <button
                  onClick={() => setResumeOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
<iframe
  src="https://drive.google.com/file/d/1jHOmqo6HFjqa0BeJE4boJfT2yMmPvcm5/preview"
  className="w-full h-full bg-black"
  title="Resume Preview"
/>
          </div>
        </div>
      )}
    </section>
  );
}
