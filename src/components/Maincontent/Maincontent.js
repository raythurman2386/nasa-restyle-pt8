import React from 'react';

// Import component files
import Title from './Title/Title';
import Image from './Image/Image';
import Video from './Video/Video';
import Description from './Description/Description';

const Maincontent = ({ data }) => {
  // try to implement loader here
  if (!data)
    return (
      <div>
        <p>Loading . . .</p>
      </div>
    );

  return (
    <div className='flex justify-center h-screen'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
};

export default Maincontent;
