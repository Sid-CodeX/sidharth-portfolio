import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated to match your project data from the new portfolioData structure
  const categories = ['All', 'AI', 'MERN'];
  
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter);

  const openProjectDetail = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
                className="glass-card hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer"
                onClick={() => openProjectDetail(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-portfolio-accent/20 to-blue-400/20 flex items-center justify-center h-48">
                      <div className="text-4xl">🚀</div>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-portfolio-accent text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">View Details</span>
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
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.longDescription.tech.slice(0, 4).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-bg border border-portfolio-accent/30 text-portfolio-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.longDescription.tech.length > 4 && (
                      <span className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent text-sm rounded-full">
                        +{project.longDescription.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    {project.longDescription.links.github && (
                      <a
                        href={project.longDescription.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {/* CORRECTED: Conditionally render the demo link button */}
                    {project.longDescription.links.demo && (
                      <a
                        href={project.longDescription.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center">
            <a
              href="https://github.com/Sid-Codex"
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
      
      {/* Project Detail Modal */}
      <ProjectDetail 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetail}
      />
    </section>
  );
};

export default Projects;