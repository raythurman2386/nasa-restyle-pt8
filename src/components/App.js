import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import Header from './Header/Header';
import Maincontent from './Maincontent/Maincontent';
import Footer from './Footer/Footer';

// Import API Key
import { apiKey } from '../private/private';

// Tailwind Styles
import './output.css';

function App() {
  // Data for the axios call
  const [data, setData] = useState({});

  // useEffect to grab the data
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(data);

  // if (!data)
  //   return (
  //     <div>
  //       <p>Loading . . .</p>
  //     </div>
  //   );

  return (
    <div className='h-screen'>
      <Header />
      <Maincontent
        title={data.title}
        url={data.url}
        date={data.date}
        mediaType={data.media_type}
        description={data.description}
      />
      <Footer />
    </div>
  );
}

export default App;
