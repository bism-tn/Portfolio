"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/bism-tn/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white text-center mt-20">Loading projects...</p>;

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-white">{repo.name}</h2>
            <p className="text-gray-300 mt-2 flex-1">{repo.description || "No description"}</p>
            <div className="flex justify-between text-gray-400 mt-4 text-sm">
              <span>{repo.language || "N/A"}</span>
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
