import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [toggle, setToggle] = useState(false);

  function clickToggle() {
    setToggle(!toggle);
  }

  return (
    <div className='bg-gradient-to-br from-purple-200 to-pink-300'>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={toggle ? <SignIn authfun={clickToggle} /> : <SignUp authfun={clickToggle} />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
