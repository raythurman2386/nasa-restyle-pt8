import React from 'react';

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
