import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      <img src={image} alt='NASA Images' />
    </div>
  );
};

export default Image;
