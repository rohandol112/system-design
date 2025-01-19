import React from 'react';

const Caching = () => {
  const sections = [
    {
      title: "What is Caching?",
      content: `Caching is a technique that stores copies of frequently used data in a high-speed data storage layer to improve system performance.

Key benefits include:
• Improved response times
• Reduced database load
• Better resource utilization
• Lower network costs
• Enhanced user experience`,
      learnMore: "https://www.youtube.com/watch?v=joifNgoXXFk"
    },
    {
      title: "Caching Strategies",
      content: [
        {
          name: "Cache-Aside (Lazy Loading)",
          description: `Popular caching strategy where:
• Application first checks cache
• If miss, fetches from database
• Updates cache with new data
• Best for read-heavy workloads`,
          learnMore: "https://www.youtube.com/watch?v=JKu4nO0EAm4",
          additionalLinks: [
            {
              text: "Read detailed blog",
              url: "https://systemdesign.one/cache-aside-pattern/"
            }
          ]
        },
        {
          name: "Write-Through",
          description: `Synchronous caching pattern that:
• Updates cache and DB together
• Ensures data consistency
• Higher write latency
• Good for write-heavy loads`,
          learnMore: "https://www.youtube.com/watch?v=rP-k3JSYxmY",
          additionalLinks: [
            {
              text: "Read on System Design",
              url: "https://systemdesign.one/caching-patterns/"
            }
          ]
        },
        {
          name: "Write-Behind",
          description: `Asynchronous caching strategy where:
• Cache updated immediately
• DB updated asynchronously
• Better write performance
• Risk of data loss`,
          learnMore: "https://www.youtube.com/watch?v=L5a7MbaQ_5g",
          additionalLinks: [
            {
              text: "Read detailed analysis",
              url: "https://systemdesign.one/write-behind-pattern/"
            }
          ]
        },
        {
          name: "Write-Around",
          description: `Strategy for handling writes:
• Writes go directly to DB
• Cache only updated on reads
• Reduces cache churn
• Good for rarely read data`,
          learnMore: "https://www.youtube.com/watch?v=CELwn-0LZcE",
          additionalLinks: [
            {
              text: "Read comparison",
              url: "https://systemdesign.one/write-around-pattern/"
            }
          ]
        }
      ]
    },
    {
      title: "Cache Eviction Policies",
      content: [
        {
          name: "LRU (Least Recently Used)",
          description: `Popular eviction strategy that:
• Removes least recently accessed items
• Maintains access order of items
• Good for most use cases
• Simple to implement`,
          learnMore: "https://www.youtube.com/watch?v=akFRa58Svug"
        },
        {
          name: "LFU (Least Frequently Used)",
          description: `Frequency-based eviction where:
• Tracks how often items are accessed
• Removes least frequently used
• Better for frequency-based patterns
• More complex than LRU`,
          learnMore: "https://www.youtube.com/watch?v=uL0xP57negc"
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
        <div className="text-6xl mb-4">🚀</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Caching
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to optimize performance with effective caching strategies
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=joifNgoXXFk")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Watch Caching System Design →
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
            Choose appropriate cache size and eviction policy
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Set proper TTL (Time To Live) for cached items
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Monitor cache hit/miss rates regularly
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement cache invalidation strategies
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=U3RkDLtS7uY")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Watch more about caching →
        </button>
      </div>
    </div>
  );
};

export default Caching; 