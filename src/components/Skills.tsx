import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import CertificateModal from './CertificateModal';

// A new component for the full-size certificate modal
const CertificateModal = ({ imageUrl, isOpen, onClose, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white p-6 rounded-lg shadow-2xl overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors z-50"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center">{name}</h3>
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto rounded-lg shadow-md max-h-[75vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const CodingProfileCard = ({ profile }) => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (profile.api?.endpoint) {
      const fetchData = async () => {
        try {
          const response = await fetch(profile.api.endpoint);
          if (!response.ok) {
            throw new Error(`Failed to fetch stats from ${profile.platform}`);
          }
          const data = await response.json();
          setStats(data);
        } catch (err) {
          setError(err.message);
          setStats(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setStats({
        problemsSolved: profile.stats,
        easySolved: 79, // Hardcoded for platforms without a real API
        mediumSolved: 76,
        hardSolved: 14,
        maxStreak: "21 days", // Placeholder
        currentStreak: "7 days", // Placeholder
        contestRating: 1540 // Placeholder
      });
      setIsLoading(false);
    }
  }, [profile]);
  
  return (
    <div className="glass-card p-6 text-left w-full hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-3xl">{profile.icon}</div>
        <div>
          <h4 className="font-semibold text-xl text-portfolio-text">{profile.platform}</h4>
          <p className="text-portfolio-muted text-sm">@{profile.username}</p>
        </div>
      </div>

      {isLoading ? (
        <p className="text-portfolio-muted">Loading stats...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          {profile.platform === 'LeetCode' && stats && (
            <div className="mt-2 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-2 rounded-lg text-center">
                      <p className="text-sm font-medium text-white">Total Solved</p>
                      <p className="text-lg font-bold text-portfolio-accent">{stats.totalSolved}</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg text-center">
                      <p className="text-sm font-medium text-white">Acceptance</p>
                      <p className="text-lg font-bold text-portfolio-accent">{stats.acceptanceRate}%</p>
                  </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-800 p-2 rounded-lg text-center">
                  <p className="text-sm text-white">Easy</p>
                  <p className="font-bold text-green-500">{stats.easySolved}</p>
                </div>
                <div className="bg-gray-800 p-2 rounded-lg text-center">
                  <p className="text-sm text-white">Medium</p>
                  <p className="font-bold text-yellow-500">{stats.mediumSolved}</p>
                </div>
                <div className="bg-gray-800 p-2 rounded-lg text-center">
                  <p className="text-sm text-white">Hard</p>
                  <p className="font-bold text-red-500">{stats.hardSolved}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-portfolio-muted text-sm"><span className="font-semibold text-portfolio-text">Max Streak:</span> {stats.maxStreak}</p>
                <p className="text-portfolio-muted text-sm"><span className="font-semibold text-portfolio-text">Current Streak:</span> {stats.currentStreak}</p>
                <p className="text-portfolio-muted text-sm"><span className="font-semibold text-portfolio-text">Contest Rating:</span> {stats.contestRating}</p>
              </div>
            </div>
          )}

          {profile.platform === 'GitHub' && stats && (
            <div className="mt-2">
              <p className="text-portfolio-text font-medium mb-2">
                Public Repos: {stats.public_repos}
              </p>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={profile.api.heatmap}
                  alt="GitHub Contributions Heatmap"
                  className="w-full h-auto rounded-md mt-2 border border-portfolio-accent/30 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          )}

          {profile.platform === 'HackerRank' && (
            <div className="mt-2 space-y-1">
              <p className="text-portfolio-muted">
                <span className="font-semibold text-portfolio-text">
                  Rank:
                </span> {profile.stats.split(' ')[0]}
              </p>
              <p className="text-portfolio-muted">
                <span className="font-semibold text-portfolio-text">
                  Solved:
                </span> {profile.stats.split(' ')[2]}
              </p>
            </div>
          )}
        </>
      )}

      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center space-x-2 text-portfolio-accent hover:underline transition-colors"
      >
        <ExternalLink size={16} />
        <span>View Profile</span>
      </a>
    </div>
  );
};


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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-4" />
            <p className="text-portfolio-muted max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

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

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-portfolio-text">
              Coding Profiles
            </h3>
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
