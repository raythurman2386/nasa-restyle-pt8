import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import Header from './Header/Header';
import Footer from './Footer/Footer';

// Import API Key
import { apiKey } from '../private/private';

// Tailwind Styles
import './output.css';

function App() {
  // Data for the axios call
  const [data, setData] = useState();

  // useEffect to grab the data
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className=''>
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Footer />
    </div>
  );
}

export default App;
