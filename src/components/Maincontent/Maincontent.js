import React from 'react';

// Import component files
import Title from './Title/Title';
import Image from './Image/Image';
import Video from './Video/Video';
import Description from './Description/Description';

const Maincontent = () => {
  // try to implement loader here
  // if (!data)
  //   return (
  //     <div>
  //       <p>Loading . . .</p>
  //     </div>
  //   );

  return (
    <div className='flex flex-col align-center h-screen'>
      <Title />
      <Image />
      <Video />
      <Description />
    </div>
  );
};

export default Maincontent;
