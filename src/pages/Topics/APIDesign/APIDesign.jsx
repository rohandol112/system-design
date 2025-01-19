import React from 'react';

const APIDesign = () => {
  const sections = [
    {
      title: "What is API Design?",
      content: `API (Application Programming Interface) design is the process of developing APIs that expose data and application functionality for use by developers and users.

Key aspects include:
• RESTful principles
• Authentication methods
• Error handling
• Documentation
• Versioning strategies`,
      learnMore: "https://www.youtube.com/watch?v=_YlYuNMTCc8"
    },
    {
      title: "API Design Principles",
      content: [
        {
          name: "RESTful Architecture",
          description: `Core REST principles:
• Resource-based URLs
• HTTP methods (GET, POST, etc.)
• Stateless communication
• Standard status codes`,
          learnMore: "https://www.youtube.com/watch?v=WXsD0ZgxjRw",
          additionalLinks: [
            {
              text: "REST API Best Practices",
              url: "https://restfulapi.net/rest-architectural-constraints/"
            }
          ]
        },
        {
          name: "Authentication & Security",
          description: `Securing your API:
• API keys
• JWT tokens
• OAuth 2.0
• Rate limiting`,
          learnMore: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
          additionalLinks: [
            {
              text: "API Security Guide",
              url: "https://owasp.org/www-project-api-security/"
            }
          ]
        },
        {
          name: "API Documentation",
          description: `Making APIs accessible:
• OpenAPI/Swagger
• API reference guides
• Code examples
• Interactive documentation`,
          learnMore: "https://www.youtube.com/watch?v=S8kmHtQeflo",
          additionalLinks: [
            {
              text: "OpenAPI Guide",
              url: "https://swagger.io/docs/specification/about/"
            }
          ]
        },
        {
          name: "API Versioning",
          description: `Managing API evolution:
• URL versioning
• Header versioning
• Breaking changes
• Backward compatibility`,
          learnMore: "https://www.youtube.com/watch?v=Q-BpqyOT3a8",
          additionalLinks: [
            {
              text: "Versioning Strategies",
              url: "https://www.freecodecamp.org/news/api-versioning-methods-comprehensive-guide/"
            }
          ]
        }
      ]
    },
    {
      title: "Advanced Concepts",
      content: [
        {
          name: "GraphQL vs REST",
          description: `Modern API paradigms:
• Query flexibility
• Over/under-fetching
• Schema definition
• Real-time updates`,
          learnMore: "https://www.youtube.com/watch?v=PTfZBCH0S5E",
          additionalLinks: [
            {
              text: "GraphQL Basics",
              url: "https://graphql.org/learn/"
            }
          ]
        },
        {
          name: "API Performance",
          description: `Optimizing API responses:
• Caching strategies
• Pagination
• Data compression
• Query optimization`,
          learnMore: "https://www.youtube.com/watch?v=nUdXf0cz-M4",
          additionalLinks: [
            {
              text: "Performance Guide",
              url: "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer"
            }
          ]
        }
      ]
    }
  ];

  const handleLearnMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="text-6xl mb-4">🔗</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          API Design
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to design and build robust, scalable APIs
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=_YlYuNMTCc8")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Watch API Design Overview →
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              {section.title}
            </h2>
            
            {Array.isArray(section.content) ? (
              <div className="grid md:grid-cols-2 gap-6">
                {section.content.map((item, i) => (
                  <div key={i} className="bg-[#252525] p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-2 text-purple-400">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => handleLearnMore(item.learnMore)}
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                      >
                        <span className="mr-1">📺</span> Watch video →
                      </button>
                      {item.additionalLinks && item.additionalLinks.map((link, index) => (
                        <button 
                          key={index}
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
            ) : (
              <div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.learnMore && (
                  <button 
                    onClick={() => handleLearnMore(section.learnMore)}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn more →
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Best Practices Section */}
      <div className="mt-12 bg-[#1A1A1A] p-8 rounded-xl border border-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-white">API Design Best Practices</h2>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Use clear, consistent naming conventions
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement proper error handling
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Version your APIs appropriately
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Provide comprehensive documentation
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=P0a7PwRNLVU")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Watch more about API design →
        </button>
      </div>
    </div>
  );
};

export default APIDesign; 