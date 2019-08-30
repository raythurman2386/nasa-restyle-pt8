import React from 'react';

const Description = ({ description }) => {
  return (
    <div className='flex m-auto text-center w-4/5 md:w-11/12 sm:w-screen'>
      <p>{description}</p>
    </div>
  );
};

export default Description;
