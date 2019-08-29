import React from 'react';

// Import component files
import Title from './Title/Title';
import Image from './Image/Image';
import Video from './Video/Video';
import Description from './Description/Description';

const Maincontent = ({ title, date, url, mediaType, description }) => {
  // try to implement loader here
  // if (!data)
  //   return (
  //     <div>
  //       <p>Loading . . .</p>
  //     </div>
  //   );

  return (
    <div className='flex flex-col align-center h-screen'>
      <Title title={title} />
      <p className='text-center'>{date}</p>
      <div className='flex justify-around'>
        <Image image={url} />
        <Video video={url} />
        <Description description={description} />
      </div>
    </div>
  );
};

export default Maincontent;
