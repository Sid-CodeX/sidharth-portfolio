
import { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const categories = ['All', 'AI', 'MERN', 'Open-Source'];
  
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter);

  const featuredProjects = portfolioData.projects.filter(project => project.featured);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-4"></div>
            <p className="text-portfolio-muted max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development and machine learning
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-portfolio-accent text-white shadow-lg shadow-portfolio-accent/25'
                    : 'glass-card hover:bg-portfolio-accent/10 text-portfolio-muted hover:text-portfolio-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="aspect-video bg-gradient-to-br from-portfolio-accent/20 to-blue-400/20 flex items-center justify-center">
                    <div className="text-4xl">🚀</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-portfolio-accent text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-portfolio-muted mb-4 leading-relaxed">
                    {expandedProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Toggle Description Button */}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center space-x-1 text-portfolio-accent hover:text-portfolio-accent/80 transition-colors mb-4 text-sm"
                  >
                    <span>{expandedProject === project.id ? 'Show Less' : 'Read More'}</span>
                    {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-bg border border-portfolio-accent/30 text-portfolio-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center">
            <a
              href="https://github.com/sidharth-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-card hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
