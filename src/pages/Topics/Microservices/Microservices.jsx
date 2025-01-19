import React from 'react';

const Microservices = () => {
  const sections = [
    {
      title: "What are Microservices?",
      content: `Microservices is an architectural style that structures an application as a collection of small, independent services that communicate over well-defined APIs.

Key benefits include:
• Independent deployability
• Technology flexibility
• Scalability per service
• Easier maintenance
• Better fault isolation`,
      learnMore: "https://www.youtube.com/watch?v=SqcXvc3ZmRU"  // Gaurav Sen's video
    },
    {
      title: "Core Concepts",
      content: [
        {
          name: "Service Discovery",
          description: `Mechanism for services to find each other:
• Service registry
• Load balancing
• Health checking
• Dynamic scaling`,
          learnMore: "https://www.youtube.com/watch?v=GboiMJm6WlA",
          additionalLinks: [
            {
              text: "Read detailed guide",
              url: "https://microservices.io/patterns/service-registry.html"
            }
          ]
        },
        {
          name: "API Gateway",
          description: `Single entry point for all clients:
• Request routing
• Composition
• Protocol translation
• Authentication`,
          learnMore: "https://www.youtube.com/watch?v=9vS1zQx3hXA",
          additionalLinks: [
            {
              text: "Read about patterns",
              url: "https://microservices.io/patterns/apigateway.html"
            }
          ]
        },
        {
          name: "Inter-Service Communication",
          description: `How services talk to each other:
• Synchronous (REST/gRPC)
• Asynchronous (Message Queues)
• Event-driven patterns
• Circuit breaking`,
          learnMore: "https://www.youtube.com/watch?v=0Dz-TcLfOFg",
          additionalLinks: [
            {
              text: "Communication patterns",
              url: "https://microservices.io/patterns/communication-style/"
            }
          ]
        },
        {
          name: "Data Management",
          description: `Managing data in distributed services:
• Database per service
• Event sourcing
• CQRS pattern
• Distributed transactions`,
          learnMore: "https://www.youtube.com/watch?v=E8-e-3fRHBw",
          additionalLinks: [
            {
              text: "Read about patterns",
              url: "https://microservices.io/patterns/data/database-per-service.html"
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
        <div className="text-6xl mb-4">🔌</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Microservices Architecture
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to build scalable and maintainable distributed systems using microservices
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=SqcXvc3ZmRU")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Watch Microservices Overview →
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
        <h2 className="text-2xl font-semibold mb-6 text-white">Best Practices</h2>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Design services around business capabilities
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement proper service boundaries
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Use asynchronous communication when possible
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement proper monitoring and tracing
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=SqcXvc3ZmRU")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Watch more about microservices →
        </button>
      </div>
    </div>
  );
};

export default Microservices; 