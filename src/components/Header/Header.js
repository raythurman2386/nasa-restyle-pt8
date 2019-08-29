import React from 'react';

const Header = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-600 p-5'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight md:flex-auto'>
          NASA Photo of the Day
        </span>
      </div>
    </nav>
  );
};

export default Header;
