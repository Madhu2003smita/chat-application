import React, { useState, useEffect } from 'react';
import { RiChatSmile3Line } from "react-icons/ri";
import axios from 'axios';

function FriendBox() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(({ data }) => setUser(data.users));
  }, []);

  return (
    <div className="flex-1 overflow-y-auto h-full bg-gradient-to-r from-purple-500 rounded-t-4xl via-violet-300 to-pink-300 font-semibold flex flex-col">
      {/* Header */}
      <div className="flex sticky top-0 justify-center items-center gap-2 text-3xl p-4 border-b-4 rounded-4xl border-none bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-white shadow-lg">
        <span>Friends</span>
        <RiChatSmile3Line className="text-4xl hover:text-amber-200 transition-colors duration-300" />
      </div>

      {/* Scrollable Content with Hidden Scrollbar */}
      <div className="px-4 py-2 overflow-y-auto no-scrollbar">
        {user.map((usr) => (
          <div
            key={usr.id}
            className="flex items-center gap-4 bg-amber-100 p-3 mb-3 rounded-2xl shadow-md hover:bg-amber-200 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={usr.image}
              alt={usr.firstName}
              className="h-14 w-14 rounded-full object-cover shadow-md"
            />
            <span className="text-lg font-medium text-gray-800">{usr.firstName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendBox;
