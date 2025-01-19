import React from 'react';
import profileImage from '../../assets/Profile.png'; // Adjust the path based on where you save the image

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1E1145] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1E1145]/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Container */}
            <div className="w-full md:w-1/2">
              <img 
                src={profileImage} 
                alt="Rohan Dol" 
                className="rounded-xl w-full object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
              <p className="text-gray-300 text-lg mb-4">
                Hi, I'm Rohan Dol, a passionate developer and system design enthusiast. I created this platform to help others learn and master system design concepts.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With a strong background in distributed systems and scalable architectures, I aim to make complex concepts accessible to everyone.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/rohandol112" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#9333EA] text-white rounded-lg hover:bg-[#8B5CF6] transition-all duration-200"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-[#9333EA] text-[#9333EA] rounded-lg hover:bg-[#9333EA]/10 transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;