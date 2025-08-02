import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

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
      // Fallback mock stats if no API
      setStats({
        problemsSolved: profile.stats,
        totalSolved: 169,
        acceptanceRate: 74,
        easySolved: 79,
        mediumSolved: 76,
        hardSolved: 14
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

export default CodingProfileCard;
