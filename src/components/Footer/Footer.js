import React from 'react';

const Footer = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-600 p-5'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xs tracking-tight md:flex-auto'>
          &copy; Raymond Thurman 2019
        </span>
      </div>
    </nav>
  );
};

export default Footer;
