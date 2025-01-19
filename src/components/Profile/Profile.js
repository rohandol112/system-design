import React from 'react';
import ProfilePic from '../../assets/Profile.png';

const Profile = () => {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
      <img 
        src={ProfilePic} 
        alt="Profile" 
        className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
      />
      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">User</span>
    </div>
  );
};

export default Profile;