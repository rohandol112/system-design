import React from 'react';

const DatabaseSharding = () => {
  const sections = [
    {
      title: "What is Database Sharding?",
      content: `Database sharding is a technique to break up a large database into smaller, more manageable pieces distributed across multiple machines.

Key benefits include:
• Improved query performance
• Better scalability
• Increased availability
• Reduced hardware costs
• Higher throughput`,
      learnMore: "https://www.youtube.com/watch?v=5faMjKuB9bc"  // Gaurav Sen's video
    },
    {
      title: "Sharding Strategies",
      content: [
        {
          name: "Range Based Sharding",
          description: `Distributes data based on ranges of values:
• Data divided by value ranges
• Easy to implement
• Good for sequential access
• Risk of uneven distribution`,
          learnMore: "https://www.youtube.com/watch?v=hdxdhCpgYo8",
          additionalLinks: [
            {
              text: "Read detailed guide",
              url: "https://systemdesign.one/database-sharding-patterns/"
            }
          ]
        },
        {
          name: "Hash Based Sharding",
          description: `Uses hash function to distribute data:
• Even data distribution
• Consistent access patterns
• Complex range queries
• Better load balancing`,
          learnMore: "https://www.youtube.com/watch?v=iHNovZUZM3A",
          additionalLinks: [
            {
              text: "Read about implementation",
              url: "https://systemdesign.one/hash-based-sharding/"
            }
          ]
        },
        {
          name: "Directory Based Sharding",
          description: `Uses lookup service to track data location:
• Flexible data distribution
• Dynamic shard management
• Additional lookup overhead
• More complex architecture`,
          learnMore: "https://www.youtube.com/watch?v=YPCkK_K0yzQ",
          additionalLinks: [
            {
              text: "Read detailed analysis",
              url: "https://systemdesign.one/directory-based-sharding/"
            }
          ]
        },
        {
          name: "Geographical Sharding",
          description: `Distributes data based on location:
• Lower latency for users
• Better data locality
• Regulatory compliance
• Region-specific optimization`,
          learnMore: "https://www.youtube.com/watch?v=xQnIN9bW0og",
          additionalLinks: [
            {
              text: "Read comparison",
              url: "https://systemdesign.one/geographical-sharding/"
            }
          ]
        }
      ]
    },
    {
      title: "Sharding Considerations",
      content: [
        {
          name: "Joins and Relationships",
          description: `Handling cross-shard operations:
• Complex distributed joins
• Data denormalization
• Cross-shard transactions
• Consistency challenges`,
          learnMore: "https://www.youtube.com/watch?v=FU6ZANRDyJU"
        },
        {
          name: "Rebalancing",
          description: `Managing data distribution:
• Shard splitting and merging
• Data migration strategies
• Minimal downtime
• Maintaining consistency`,
          learnMore: "https://www.youtube.com/watch?v=L_HfF5RzQ5Q"
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
        <div className="text-6xl mb-4">🔄</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Database Sharding
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to scale databases horizontally through effective sharding strategies
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=5faMjKuB9bc")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Watch Database Sharding Overview →
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
            Choose appropriate sharding key
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Plan for data rebalancing
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Handle cross-shard queries efficiently
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement proper backup strategies
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=hdxdhCpgYo8")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Watch more about sharding →
        </button>
      </div>
    </div>
  );
};

export default DatabaseSharding; 