import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Tailwind Styles
import './output.css';

function App() {
  // Data for the axios call
  const [data, setData] = useState();

  // useEffect to grab the data
  useEffect(() => {
    axios
      .get()
      .then()
      .catch();
  });

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
