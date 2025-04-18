import { GiHand } from 'react-icons/gi';
import { PiUserFill } from 'react-icons/pi';

function NavBar() {
  return (
    <div className='w-screen h-18 bg-gradient-to-r from-purple-300 to-yellow-300  shadow-inner shadow-black-200 rounded-4xl flex justify-between px-8 py-4 items-center '>
      <div className='flex items-center gap-2 text-white font-bold text-3xl'>
        <span className='text-3xl '>TalkyTalk</span>
        <GiHand className='text-amber-300 hover:scale-110 transition-transform duration-300' />
      </div>

      {/* Profile Icon with Hover Effect */}
      <div className='h-14 w-14 bg-amber-300 rounded-full flex justify-center items-center hover:bg-amber-400 transition-colors duration-300'>
        <PiUserFill size={38} className='text-white' />
      </div>
    </div>
  );
}

export default NavBar;
