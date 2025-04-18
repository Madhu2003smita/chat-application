import React from 'react'
import NavBar from '../components/NavBar'
import FriendBox from '../components/FriendBox'
import ChatBox from '../components/ChatBox'

function Home() {
  return (
    <div className='h-screen  flex flex-col '>
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        {/* FriendBox */}
        <div className="w-1/5 border-r overflow-y-auto ">
          <FriendBox />
        </div>

        {/* ChatBox */}
        <div className="flex-1 overflow-y-auto">
          <ChatBox />
        </div>
      </div>
    </div>

  )
}

export default Home