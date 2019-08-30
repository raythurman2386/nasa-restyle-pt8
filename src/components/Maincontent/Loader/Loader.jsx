import React from 'react';
import Loader from 'react-loader';

const ReactLoader = () => {
  return (
    <div>
      <Loader loaded={false} className='spinner' />
    </div>
  );
};

export default ReactLoader;
