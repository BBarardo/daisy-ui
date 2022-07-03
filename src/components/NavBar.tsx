import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className='navbar bg-neutral shadow-xl'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>B3</a>
      </div>
      <div className='flex-none'>
        <button className='btn btn-primary'>Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;
