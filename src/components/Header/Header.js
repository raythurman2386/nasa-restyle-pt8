import React from 'react';
import Datepicker from './Datepicker/Datepicker';

const Header = ({ date, setDate }) => {
  return (
    <nav className='flex items-center justify-around flex-wrap relative sticky top-0 bg-blue-600 p-2'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight md:flex-auto'>
          NASA Photo of the Day
        </span>
      </div>
      <Datepicker date={date} setDate={setDate} />
    </nav>
  );
};

export default Header;
