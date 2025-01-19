import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Netflix System Design",
      description: "How Netflix handles video streaming for millions of users",
      topics: ["CDN", "Microservices", "Load Balancing"],
      complexity: "Advanced",
      icon: "🎬",
      learnMore: "https://www.youtube.com/watch?v=psQzyFfsUGU",
      additionalLinks: [
        {
          text: "Netflix Tech Blog",
          url: "https://netflixtechblog.com/"
        }
      ]
    },
    {
      title: "WhatsApp Architecture",
      description: "Scaling messaging for billions of users worldwide",
      topics: ["Real-time Systems", "Message Queues", "Database Sharding"],
      complexity: "Advanced",
      icon: "💬",
      learnMore: "https://www.youtube.com/watch?v=vvhC64hQZMk",
      additionalLinks: [
        {
          text: "WhatsApp Engineering",
          url: "https://engineering.whatsapp.com/"
        }
      ]
    },
    {
      title: "Twitter System Design",
      description: "Handling millions of tweets and real-time feeds",
      topics: ["Data Storage", "Caching", "Fan-out Service"],
      complexity: "Intermediate",
      icon: "🐦",
      learnMore: "https://www.youtube.com/watch?v=wYk0xPP_P_8",
      additionalLinks: [
        {
          text: "Twitter Engineering Blog",
          url: "https://blog.twitter.com/engineering/en_us"
        }
      ]
    },
    {
      title: "Uber Backend Architecture",
      description: "Location tracking and ride matching at scale",
      topics: ["Geospatial", "Real-time Processing", "Distributed Systems"],
      complexity: "Advanced",
      icon: "🚗",
      learnMore: "https://www.youtube.com/watch?v=umWABit-wbk",
      additionalLinks: [
        {
          text: "Uber Engineering",
          url: "https://eng.uber.com/"
        }
      ]
    }
  ];

  const handleLearnMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        System Design Case Studies
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Learn from real-world architectures of successful tech companies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="text-4xl mb-4">{study.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {study.title}
            </h2>
            <p className="text-gray-400 mb-4">
              {study.description}
            </p>
            
            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.topics.map((topic, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Complexity Badge */}
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-xs ${
                study.complexity === "Advanced" 
                  ? "bg-red-900/30 text-red-400" 
                  : "bg-yellow-900/30 text-yellow-400"
              }`}>
                {study.complexity}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleLearnMore(study.learnMore)}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
              >
                <span className="mr-1">📺</span> Watch Analysis →
              </button>
              {study.additionalLinks.map((link, i) => (
                <button 
                  key={i}
                  onClick={() => handleLearnMore(link.url)}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <span className="mr-1">📄</span> {link.text} →
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Instagram", "Airbnb", "Discord"].map((company, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 opacity-75">
              <h3 className="text-xl font-medium text-gray-400 mb-2">
                {company} System Design
              </h3>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 