import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ video }) => {
  return (
    <div className='flex justify-center my-6'>
      <ReactPlayer url={video} playing controls />
    </div>
  );
};

export default Video;
