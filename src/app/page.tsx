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
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
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
