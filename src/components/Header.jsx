import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b border-gray-300">
      <div className="col l-10 l-o-1">
        <div className="flex flex-row justify-between">
        <Link to='/'>
          <img src={Logo} alt="Home Land" className="sm:ml-3" />
        </Link>
        <div className="flex items-center gap-6 sm:mr-3">
          <Link to='/login' className='hover:text-violet-900 transition'>Login</Link>
          <Link to='/register' className='bg-violet-800 hover:bg-violet-700 transition text-white px-4 py-2.5 rounded-lg'>Register</Link>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
