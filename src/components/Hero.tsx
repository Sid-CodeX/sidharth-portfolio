
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = portfolioData.personal.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-portfolio-accent font-medium mb-4 flex items-center justify-center space-x-2">
              <span>👋</span>
              <span>Hello, I'm</span>
            </p>
          </div>

          {/* Name */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-portfolio-text mb-8">
              {portfolioData.personal.title}
            </h2>
          </div>

          {/* Animated Tagline */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-portfolio-muted mb-12 max-w-2xl mx-auto min-h-[2rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Location */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center space-x-2 text-portfolio-muted mb-12">
              <MapPin size={16} />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16" style={{ animationDelay: '1s' }}>
            <button className="px-8 py-4 bg-portfolio-accent text-white font-semibold rounded-lg hover:bg-portfolio-accent/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/25">
              Download CV
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-portfolio-accent text-portfolio-accent font-semibold rounded-lg hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex items-center justify-center space-x-6" style={{ animationDelay: '1.2s' }}>
            <a
              href="https://github.com/sidharth-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-portfolio-accent transition-colors duration-300 group"
            >
              <Github size={24} className="group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/sidharth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-portfolio-accent transition-colors duration-300 group"
            >
              <Linkedin size={24} className="group-hover:text-white" />
            </a>
            <a
              href="mailto:sidharth@example.com"
              className="p-3 glass-card hover:bg-portfolio-accent transition-colors duration-300 group"
            >
              <Mail size={24} className="group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full glass-card hover:bg-portfolio-accent transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
