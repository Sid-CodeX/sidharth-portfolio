
import { portfolioData } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent to-blue-400 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-portfolio-card rounded-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-portfolio-accent/20 to-blue-400/20 rounded-xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center animate-float">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '-2s' }}>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">
                  {portfolioData.personal.title}
                </h3>
                <p className="text-portfolio-muted leading-relaxed text-lg">
                  {portfolioData.personal.bio}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-portfolio-accent mb-1">50+</div>
                  <div className="text-sm text-portfolio-muted">Projects Completed</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-portfolio-accent mb-1">2+</div>
                  <div className="text-sm text-portfolio-muted">Years Experience</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-portfolio-accent mb-1">10+</div>
                  <div className="text-sm text-portfolio-muted">Technologies</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-portfolio-accent mb-1">500+</div>
                  <div className="text-sm text-portfolio-muted">Problems Solved</div>
                </div>
              </div>

              {/* Education Highlight */}
              <div className="glass-card p-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-portfolio-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-text mb-1">
                      {portfolioData.education.degree}
                    </h4>
                    <p className="text-portfolio-muted mb-1">
                      {portfolioData.education.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-portfolio-muted">
                      <span>{portfolioData.education.duration}</span>
                      <span>•</span>
                      <span>GPA: {portfolioData.education.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
