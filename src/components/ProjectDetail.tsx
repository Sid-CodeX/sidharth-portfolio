import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDetailProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-portfolio-accent/20 p-6 md:p-8 lg:p-10">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-portfolio-text mb-2 md:text-4xl">
            {project.title}
          </DialogTitle>
          <p className="text-lg text-portfolio-muted mb-4 md:mb-6">
            {project.description}
          </p>
        </DialogHeader>

        {/* External Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {project.longDescription.links.demo && (
            <a
              href={project.longDescription.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-portfolio-accent text-white rounded-lg hover:bg-portfolio-accent/80 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.longDescription.links.github && (
            <a
              href={project.longDescription.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 glass-card hover:bg-portfolio-accent/10 text-portfolio-text rounded-lg transition-colors"
            >
              <Github size={16} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

        {/* Screenshots */}
        {project.images?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image: string, index: number) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">About the Project</h3>
          <p className="text-portfolio-muted leading-relaxed text-base">
            {project.longDescription.intro}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">Key Features</h3>
          <div className="space-y-3">
            {project.longDescription.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 glass-card rounded-lg"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-portfolio-accent rounded-full mt-2"></div>
                <div
                  className="text-portfolio-text leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.longDescription.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-portfolio-accent/20 text-portfolio-accent border border-portfolio-accent/30 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;