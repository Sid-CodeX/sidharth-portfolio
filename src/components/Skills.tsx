import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import CertificateModal from './CertificateModal';
import CodingProfileCard from './CodingProfileCard';

const Skills = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState('');
  const [selectedCertName, setSelectedCertName] = useState('');

  const openCertModal = (imageUrl, name) => {
    setSelectedCertImage(imageUrl);
    setSelectedCertName(name);
    setIsCertModalOpen(true);
  };

  const closeCertModal = () => {
    setIsCertModalOpen(false);
    setSelectedCertImage('');
    setSelectedCertName('');
  };

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
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-4" />
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

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2 p-3 bg-portfolio-bg rounded-lg">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-portfolio-text font-medium">
                        {skill.name}
                      </span>
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
                  <div
                    key={index}
                    className="glass-card p-6 min-w-[300px] hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
                    onClick={() => openCertModal(cert.image, cert.name)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-portfolio-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-portfolio-accent/30 transition-colors">
                        <img
                          src={cert.image}
                          alt={`${cert.name} thumbnail`}
                          className="w-14 h-14 object-cover rounded-full"
                        />
                      </div>
                      <h4 className="font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-portfolio-muted text-sm mb-1">{cert.issuer}</p>
                      {cert.date && <p className="text-portfolio-accent text-sm">{cert.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-portfolio-text">
              Coding Profiles
            </h3>
            {/* CORRECTED: Changed the layout to a vertical flex column */}
            <div className="flex flex-col space-y-6 max-w-lg mx-auto">
              {portfolioData.codingProfiles.map((profile) => (
                <CodingProfileCard key={profile.platform} profile={profile} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        imageUrl={selectedCertImage}
        isOpen={isCertModalOpen}
        onClose={closeCertModal}
        name={selectedCertName}
      />
    </section>
  );
};

export default Skills;
