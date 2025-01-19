import React from 'react';

const SystemSecurity = () => {
  const sections = [
    {
      title: "What is System Security?",
      content: `System security encompasses the strategies, protocols, and practices used to protect systems, networks, and data from threats and unauthorized access.

Key aspects include:
• Authentication & Authorization
• Data Encryption
• Network Security
• Security Monitoring
• Incident Response`,
      learnMore: "https://www.youtube.com/watch?v=sdpxddDzXfE"
    },
    {
      title: "Security Fundamentals",
      content: [
        {
          name: "Authentication & Authorization",
          description: `Core security concepts:
• User authentication methods
• Role-based access control
• OAuth 2.0 and JWT
• Multi-factor authentication`,
          learnMore: "https://www.youtube.com/watch?v=2PPSXonhIck",
          additionalLinks: [
            {
              text: "Read about OAuth 2.0",
              url: "https://www.oauth.com/oauth2-servers/getting-ready/"
            }
          ]
        },
        {
          name: "Data Encryption",
          description: `Protecting sensitive data:
• Encryption at rest
• Encryption in transit
• Key management
• Hashing techniques`,
          learnMore: "https://www.youtube.com/watch?v=o_g-M7UBqI8",
          additionalLinks: [
            {
              text: "Encryption Guide",
              url: "https://www.ssl.com/article/ssl-tls-handshake-overview/"
            }
          ]
        },
        {
          name: "Network Security",
          description: `Securing network communications:
• Firewalls & WAFs
• DDoS protection
• VPNs & Network isolation
• SSL/TLS protocols`,
          learnMore: "https://www.youtube.com/watch?v=E9iVGHUr0fk",
          additionalLinks: [
            {
              text: "Network Security Basics",
              url: "https://www.cloudflare.com/learning/security/what-is-network-security/"
            }
          ]
        },
        {
          name: "Security Monitoring",
          description: `Continuous security oversight:
• Log monitoring
• Intrusion detection
• Security auditing
• Vulnerability scanning`,
          learnMore: "https://www.youtube.com/watch?v=3yamG9aNJ1k",
          additionalLinks: [
            {
              text: "Security Monitoring Guide",
              url: "https://www.crowdstrike.com/cybersecurity-101/security-monitoring/"
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
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          System Security
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          Learn how to protect your systems from security threats and vulnerabilities
        </p>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=sdpxddDzXfE")}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          📚 Watch Security Overview →
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
        <h2 className="text-2xl font-semibold mb-6 text-white">Security Best Practices</h2>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Always follow the principle of least privilege
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Implement defense in depth
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Regular security audits and updates
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            Proper logging and monitoring
          </li>
        </ul>
        <button 
          onClick={() => handleLearnMore("https://www.youtube.com/watch?v=sdpxddDzXfE")}
          className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Watch more about security →
        </button>
      </div>
    </div>
  );
};

export default SystemSecurity; 