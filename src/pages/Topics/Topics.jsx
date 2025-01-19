import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  const topics = [
    {
      title: "Load Balancing",
      description: "Learn about distributing network traffic across multiple servers",
      difficulty: "Intermediate",
      icon: "⚖️",
      slug: "load-balancing"
    },
    {
      title: "Caching",
      description: "Understanding different caching strategies and implementations",
      difficulty: "Beginner",
      icon: "🚀",
      slug: "caching"
    },
    {
      title: "Database Sharding",
      description: "Horizontal scaling techniques for databases",
      difficulty: "Advanced",
      icon: "🔄",
      slug: "database-sharding"
    },
    {
      title: "Microservices",
      description: "Building and scaling distributed service architectures",
      difficulty: "Advanced",
      icon: "🔌",
      slug: "microservices"
    },
    {
      title: "System Security",
      description: "Best practices for securing distributed systems",
      difficulty: "Intermediate",
      icon: "🔒",
      slug: "system-security"
    },
    {
      title: "API Design",
      description: "Principles and patterns for building robust APIs",
      difficulty: "Intermediate",
      icon: "🔗",
      slug: "api-design"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        System Design Topics
      </h1>
      <p className="text-gray-400 mb-12">
        Master the fundamentals of distributed systems and scalable architecture
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <Link 
            to={`/topics/${topic.slug}`} 
            key={index} 
            className="group"
          >
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {topic.title}
              </h2>
              <p className="text-gray-400 mb-4 text-sm">
                {topic.description}
              </p>
              <span className={`px-3 py-1 rounded-full text-xs ${
                topic.difficulty === "Beginner" 
                  ? "bg-green-900/30 text-green-400" 
                  : topic.difficulty === "Intermediate"
                  ? "bg-yellow-900/30 text-yellow-400"
                  : "bg-red-900/30 text-red-400"
              }`}>
                {topic.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;