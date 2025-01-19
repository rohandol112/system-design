import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1E1145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-white">System</span>{' '}
            <span className="text-[#9333EA]">Design</span>
          </h1>
          <p className="text-gray-300 text-xl mx-auto max-w-3xl mb-12">
            Welcome to System Design! Let's build robust and efficient systems together!
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-6 mb-32">
            <Link 
              to="/topics"
              className="px-8 py-3 bg-[#9333EA] text-white rounded-lg hover:bg-[#8B5CF6] transition-all duration-200 font-medium text-lg"
            >
              Start Learning
            </Link>
            <a 
              href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#9333EA] text-[#9333EA] rounded-lg hover:bg-[#9333EA]/10 transition-all duration-200 font-medium text-lg inline-flex items-center"
            >
              Let's Connect <FaLinkedin className="ml-2" />
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 pb-20">
          <FeatureCard 
            icon="⚡"
            title="Scalability"
            description="Learn horizontal and vertical scaling strategies for handling millions of users."
          />
          <FeatureCard 
            icon="🌐"
            title="Distributed Systems"
            description="Master microservices, load balancing, and distributed databases."
          />
          <FeatureCard 
            icon="🏗️"
            title="System Architecture"
            description="Design robust architectures using modern best practices and patterns."
          />
        </div>

        {/* Topics Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Popular Topics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TopicCard 
              title="Load Balancing"
              description="Learn about distributing traffic across multiple servers."
            />
            <TopicCard 
              title="Caching"
              description="Understand different caching strategies and implementations."
            />
            <TopicCard 
              title="Database Sharding"
              description="Master the art of horizontal partitioning of data."
            />
            <TopicCard 
              title="System Design"
              description="End-to-end system design interview preparation."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#1E1145]/30 p-8 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-[#1E1145]/40 transition-all duration-300">
    <div className="text-3xl mb-6">{icon}</div>
    <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
  </div>
);

const TopicCard = ({ title, description }) => (
  <div className="bg-[#1E1145]/20 p-6 rounded-xl border border-white/5 hover:bg-[#1E1145]/30 transition-all duration-300">
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;