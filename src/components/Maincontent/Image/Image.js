import React from 'react';

const Image = ({ image }) => {
  return (
    <div className='flex justify-center my-6'>
      <img src={image} alt='NASA Images' />
    </div>
  );
};

export default Image;
