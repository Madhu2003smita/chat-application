import React, { useState, useEffect } from 'react';
import { RiChatSmile3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from 'axios';

function FriendBox() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(({ data }) => setUser(data.users));
  }, []);

  return (
    <div className="flex-1 overflow-y-auto h-full bg-gradient-to-r from-purple-500 via-violet-300 to-pink-300 font-semibold flex flex-col">
      
      {/* Header */}
      <div className="flex sticky top-0 justify-between items-center px-4 py-3 sm:py-4 border-b-4 border-none bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-white shadow-lg">
        <GiHamburgerMenu className="block sm:hidden text-2xl cursor-pointer hover:text-amber-200 transition-colors duration-300" />

        <div className="flex-1 flex justify-center items-center gap-2 text-xl sm:text-2xl md:text-3xl">
          <span className=''>Friends</span>
          <RiChatSmile3Line className="text-2xl sm:text-3xl md:text-4xl hover:text-amber-200 transition-colors duration-300" />
        </div>

        <div className="w-6 sm:hidden"></div>
      </div>

      {/* User List */}
      <div className="px-3 sm:px-4 py-4 overflow-y-auto space-y-3">
        {user.map((usr) => (
          <div
            key={usr.id}
            className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white/70 backdrop-blur-md p-2 sm:p-3 rounded-3xl shadow-lg hover:bg-white/90 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative group">
              <img
                src={usr.image}
                alt={usr.firstName}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-md ring-4 ring-pink-300 group-hover:ring-violet-400 transition-all duration-300"
              />
              {/* Tooltip on mobile */}
              <span className="sm:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {usr.firstName}
              </span>
            </div>

            {/* Name only visible on sm+ */}
            <span className="hidden sm:block text-lg md:text-xl font-medium text-gray-800">
              {usr.firstName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendBox;
