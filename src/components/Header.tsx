
import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <nav className="section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            Sidharth
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 hover:text-portfolio-accent ${
                  activeSection === item.href.substring(1)
                    ? 'text-portfolio-accent'
                    : 'text-portfolio-muted'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <button className="flex items-center space-x-2 px-4 py-2 bg-portfolio-accent text-white rounded-lg hover:bg-portfolio-accent/80 transition-colors">
                <Download size={16} />
                <span>Resume</span>
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="flex items-center space-x-2 px-4 py-2 border border-portfolio-accent text-portfolio-accent rounded-lg hover:bg-portfolio-accent hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-colors duration-200 hover:text-portfolio-accent ${
                    activeSection === item.href.substring(1)
                      ? 'text-portfolio-accent'
                      : 'text-portfolio-muted'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <button className="flex items-center space-x-2 px-4 py-2 bg-portfolio-accent text-white rounded-lg hover:bg-portfolio-accent/80 transition-colors">
                  <Download size={16} />
                  <span>Download Resume</span>
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="flex items-center space-x-2 px-4 py-2 border border-portfolio-accent text-portfolio-accent rounded-lg hover:bg-portfolio-accent hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
