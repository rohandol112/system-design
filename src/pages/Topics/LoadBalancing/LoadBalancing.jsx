import React from 'react';

const LoadBalancing = () => {
  const sections = [
    {
      title: "What is Load Balancing?",
      content: `Load balancing is the process of distributing network traffic across multiple servers to ensure no single server bears too much load. This improves application responsiveness and availability.

Key benefits include:
• Improved application performance and reliability
• Better resource utilization across servers
• Automatic scaling during high traffic
• Redundancy to handle server failures
• High availability and fault tolerance`,
      learnMore: "https://www.youtube.com/watch?v=vJYycNWAYZU"
    },
    {
      title: "Load Balancing Algorithms",
      content: [
        {
          name: "Round Robin",
          description: `The simplest load balancing algorithm that works by:
• Distributing requests sequentially across servers
• Equal weight given to all servers
• Good for servers with similar specifications
• Easy to implement and understand`,
          learnMore: "https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/"
        },
        {
          name: "Least Connections",
          description: `Dynamic algorithm that distributes load based on current connections:
• Tracks number of active connections to each server
• Routes traffic to least busy servers
• Better for varying request lengths
• More efficient resource utilization`,
          learnMore: "https://www.geeksforgeeks.org/load-balancing-algorithms/#21-least-connection-method-load-balancing-algorithms"
        },
        {
          name: "IP Hash",
          description: `Consistent routing based on client IP address:
• Same client always routes to same server
• Good for session persistence
• Helps maintain state information
• Useful for stateful applications`,
          learnMore: "https://www.geeksforgeeks.org/load-balancing-algorithms/#13-source-ip-hash-load-balancing-algorithms"
        },
        {
          name: "Weighted Round Robin",
          description: `Enhanced version of Round Robin that considers server capacity:
• Assigns weights to servers based on capacity
• More requests to higher capacity servers
• Better for heterogeneous environments
• Flexible traffic distribution`,
          learnMore: "https://www.geeksforgeeks.org/load-balancing-algorithms/#12-weighted-round-robin-load-balancing-algorithms"
        }
      ]
    },
    {
      title: "Types of Load Balancers",
      content: [
        {
          name: "Layer 4 Load Balancing",
          description: `Transport layer (TCP/UDP) load balancing:
• Fast and efficient processing
• Simple routing based on IP/port
• No packet inspection needed
• Lower overhead but less flexible`,
          learnMore: "https://www.geeksforgeeks.org/layers-of-osi-model/"
        },
        {
          name: "Layer 7 Load Balancing",
          description: `Application layer load balancing with advanced features:
• Content-based routing
• SSL termination capability
• HTTP header inspection
• More intelligent but higher overhead`,
          learnMore: "https://kemptechnologies.com/load-balancer/layer-7-load-balancing"
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
        <div className="text-6xl mb-4">⚖️</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Load Balancing
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to distribute traffic efficiently across multiple servers
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.geeksforgeeks.org/what-is-load-balancer-system-design/")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Read full article on GeeksForGeeks →
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
                    <button 
                      onClick={() => handleLearnMore(item.learnMore)}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn more →
                    </button>
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
            Always implement health checks for your servers
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Use SSL termination at the load balancer when possible
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Configure session persistence when needed
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Monitor your load balancer's performance metrics
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://medium.com/@abhirup.acharya009/load-balancing-system-design-fundamentals-d64674227c36")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Read more about best practices →
        </button>
      </div>
    </div>
  );
};

export default LoadBalancing; 