import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CoreDomains from '../components/CoreDomains';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Awards from '../components/Awards';
import ResearchSpeaking from '../components/ResearchSpeaking';
import TechStack from '../components/TechStack';
import HiringManagerSummary from '../components/HiringManagerSummary';
import Contact from '../components/Contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-900">Nidhi Srivastava</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="#expertise" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Expertise</a>
              <a href="#projects" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#experience" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
              <a href="#research" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Research</a>
              <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="expertise">
          <CoreDomains />
        </section>
        
        <section id="projects">
          <ProjectsShowcase />
        </section>
        
        <section id="experience">
          <ExperienceTimeline />
        </section>
        
        <section id="research">
          <ResearchSpeaking />
        </section>
        
        <section id="tech">
          <TechStack />
        </section>
        
        <section id="hiring">
          <HiringManagerSummary />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Nidhi Srivastava</h3>
              <p className="text-sm text-slate-400">Senior GRC Architect & Cybersecurity Leader</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#expertise" className="text-sm hover:text-white transition-colors">Core Expertise</a>
                <a href="#projects" className="text-sm hover:text-white transition-colors">Featured Projects</a>
                <a href="#research" className="text-sm hover:text-white transition-colors">Research & Speaking</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:nidhi.srivastava@example.com" className="text-sm hover:text-white transition-colors">Email</a>
                <a href="#" className="text-sm hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-sm hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © 2025 Nidhi Srivastava. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;