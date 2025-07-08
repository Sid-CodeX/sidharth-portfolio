
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-portfolio-card/50 border-t border-white/10">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to Top Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 glass-card hover:bg-portfolio-accent transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp size={20} className="group-hover:text-white" />
            </button>
          </div>

          {/* Footer Content */}
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="text-2xl font-bold gradient-text">
              Sidharth
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-portfolio-muted">
              <a href="#about" className="hover:text-portfolio-accent transition-colors">About</a>
              <a href="#experience" className="hover:text-portfolio-accent transition-colors">Experience</a>
              <a href="#projects" className="hover:text-portfolio-accent transition-colors">Projects</a>
              <a href="#skills" className="hover:text-portfolio-accent transition-colors">Skills</a>
              <a href="#contact" className="hover:text-portfolio-accent transition-colors">Contact</a>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-portfolio-accent to-transparent mx-auto"></div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-portfolio-muted">
              <span>&copy; {new Date().getFullYear()} Sidharth. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 animate-pulse" />
                <span>and lots of ☕</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="text-sm text-portfolio-muted">
              Built with React, TypeScript, and Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
