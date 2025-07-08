
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-card/30">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-4"></div>
            <p className="text-portfolio-muted max-w-2xl mx-auto">
              My professional journey and the impact I've made in various roles
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-portfolio-accent to-blue-400"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-portfolio-bg"></div>
                  
                  {/* Experience Card */}
                  <div className="glass-card p-6 hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center text-2xl">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-portfolio-text mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-portfolio-accent font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-portfolio-muted text-sm mb-3">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-portfolio-muted mt-2 sm:mt-0">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-portfolio-text mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-portfolio-muted">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-text">
                Looking for opportunities?
              </h3>
              <p className="text-portfolio-muted mb-6">
                I'm actively seeking full-time opportunities where I can contribute and grow.
              </p>
              <button className="px-6 py-3 bg-portfolio-accent text-white font-semibold rounded-lg hover:bg-portfolio-accent/80 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
