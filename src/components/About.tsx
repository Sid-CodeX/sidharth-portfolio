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

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">
                  {portfolioData.personal.title}
                </h3>
                <p className="text-portfolio-muted leading-relaxed text-lg">
                  {portfolioData.personal.bio}
                </p>
              </div>

              {/* Problem-Solving Philosophy Section */}
              <div className="glass-card p-6">
                <h4 className="font-semibold text-portfolio-text mb-4 text-xl">{portfolioData.personal.philosophy.title}</h4>
                <ul className="list-disc list-inside text-portfolio-muted leading-relaxed space-y-2">
                  {portfolioData.personal.philosophy.points.map((point, index) => (
                    <li key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
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