import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import API Key
import apiKey from '../private/private';
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
    <div className='bg-blue-700'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
