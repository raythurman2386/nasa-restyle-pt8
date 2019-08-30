import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import component files
import Title from './Title/Title';
import Image from './Image/Image';
import Video from './Video/Video';
import Description from './Description/Description';
import ReactLoader from './Loader/Loader';

// Import API Key
import { apiKey } from '../../private/private';

const Maincontent = ({ date }) => {
  // Data for the axios call
  const [data, setData] = useState({});

  // useEffect to grab the data
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
      // set data to state
      .then(res => setData(res.data))
      // log any errors to the console
      .catch(err => console.log(err));

    // Pass date so it only renders on date change
  }, [date]);

  // console.log(data);

  // try to implement loader here
  if (!data) return <ReactLoader />;

  return (
    <div className='flex flex-col align-center h-auto m-6'>
      <Title title={data.title} />
      <p className='text-center'>{data.date}</p>

      {/* Render the proper media type */}
      {data.media_type === 'image' ? (
        <Image image={data.url} />
      ) : (
        <Video video={data.url} />
      )}
      <Description description={data.explanation} />
    </div>
  );
};

export default Maincontent;
