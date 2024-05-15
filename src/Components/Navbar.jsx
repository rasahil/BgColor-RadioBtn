// src/Components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-center gap-4 p-3 bg-cyan-300'>
        <li className='bg-gradient-to-r btn px-3 py-1 rounded-lg outline-double from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          <Link to="/">Home</Link>
        </li>
        <li  className='bg-gradient-to-r btn px-3 py-1 rounded-lg outline-double from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          <Link to="/about">About</Link>
        </li>
        <li  className='bg-gradient-to-r btn px-3 py-1 rounded-lg outline-double from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
