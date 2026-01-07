import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import GitHubContributions from "@/components/sections/GitHubContributions"
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-2xl animate-float-slow rotate-45"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-cyan-500/20 rounded-xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-teal-500/20 rounded-lg animate-float-fast rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-blue-400/20 rounded-2xl animate-float-slow-reverse"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <GitHubContributions />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
