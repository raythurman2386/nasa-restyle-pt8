import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='flex justify-center text-4xl'>
      <h1 className='font-semibold'>{title}</h1>
    </div>
  );
};

export default Title;
