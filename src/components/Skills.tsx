
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    { name: 'Languages', skills: portfolioData.skills.languages, icon: '💻' },
    { name: 'Frameworks', skills: portfolioData.skills.frameworks, icon: '⚛️' },
    { name: 'AI/ML', skills: portfolioData.skills.aiml, icon: '🤖' },
    { name: 'Tools', skills: portfolioData.skills.tools, icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-card/30">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-4"></div>
            <p className="text-portfolio-muted max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div key={category.name} className="glass-card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-portfolio-text">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-portfolio-text font-medium">
                          {skill.name}
                        </span>
                        <span className="text-portfolio-accent font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-portfolio-bg rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-portfolio-accent to-blue-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-portfolio-text">
              Certifications & Courses
            </h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 min-w-max">
                {portfolioData.certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 min-w-[300px] hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-portfolio-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-portfolio-accent/30 transition-colors">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h4 className="font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-portfolio-muted text-sm mb-1">{cert.issuer}</p>
                      <p className="text-portfolio-accent text-sm">{cert.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-portfolio-text">
              Coding Profiles
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioData.codingProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 text-center hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="text-3xl mb-3">{profile.icon}</div>
                  <h4 className="font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">
                    {profile.platform}
                  </h4>
                  <p className="text-portfolio-muted text-sm mb-1">@{profile.username}</p>
                  <p className="text-portfolio-accent text-sm font-medium">{profile.stats}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
