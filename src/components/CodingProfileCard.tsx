import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const CodingProfileCard = ({ profile }) => {
  const [stats, setStats] = useState(null);
  const [githubStats, setGithubStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (profile.platform === 'GitHub') {
          // Fetch user data (public repos)
          const userResponse = await fetch(profile.api.endpoint);
          const userData = await userResponse.json();

          // Fetch contribution data from the third-party API
          const contributionResponse = await fetch(profile.api.contributionEndpoint);
          const contributionData = await contributionResponse.json();
          
          if (!userResponse.ok || !contributionResponse.ok) {
            throw new Error(`Failed to fetch stats from GitHub.`);
          }
          
          // Calculate total contributions by summing the yearly contributions from the API response.
          const totalContributions = Object.values(contributionData.total).reduce((acc: number, val: unknown) => {
            return acc + Number(val);
          }, 0);
          
          setGithubStats({
            public_repos: userData.public_repos,
            total_contributions: totalContributions,
            // The streak data is not provided directly by this API, so we'll leave it as N/A.
            max_streak: 'N/A',
            current_streak: 'N/A',
          });
        } else if (profile.api?.endpoint) {
          const response = await fetch(profile.api.endpoint);
          if (!response.ok) {
            throw new Error(`Failed to fetch stats from ${profile.platform}`);
          }
          const data = await response.json();
          setStats(data);
        } else {
          // Placeholder for HackerRank as it has no direct API
          setStats({ problemsSolved: profile.stats });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [profile]);

  const isUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="glass-card p-6 text-left w-full hover:bg-portfolio-card/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <div className="flex items-center space-x-4 mb-4">
        {isUrl(profile.icon) ? (
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={profile.icon}
              alt={`${profile.platform} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="text-3xl">{profile.icon}</div>
        )}
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

          {profile.platform === 'GitHub' && githubStats && (
            <div className="mt-2 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-2 rounded-lg text-center">
                  <p className="text-sm font-medium text-white">Public Repos</p>
                  <p className="text-lg font-bold text-portfolio-accent">{githubStats.public_repos}</p>
                </div>
                <div className="bg-gray-800 p-2 rounded-lg text-center">
                  <p className="text-sm font-medium text-white">Total Contributions</p>
                  <p className="text-lg font-bold text-portfolio-accent">{githubStats.total_contributions}</p>
                </div>
              </div>
            </div>
          )}

          {profile.platform === 'HackerRank' && stats && (
            <div className="mt-2 space-y-1">
              <p className="text-portfolio-muted">
                {stats.problemsSolved}
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