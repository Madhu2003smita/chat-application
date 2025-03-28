import {React, useState} from 'react'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'

function App() {

  const [toggle, setToggle] = useState(false);

  function clickToggle(){
    setToggle(!toggle);
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-red-50 bg-gradient-to-br from-purple-200 to-pink-300'>
      {toggle ? <SignIn  authfun={clickToggle}  />: <SignUp   authfun={clickToggle}/>}
    </div>
  )
}

export default App