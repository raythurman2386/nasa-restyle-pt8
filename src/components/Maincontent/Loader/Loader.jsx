import React from 'react';
import Loader from 'react-loader';

const ReactLoader = ({ data }) => {
  return (
    <div>
      <Loader loaded={false} className='' />
    </div>
  );
};

export default ReactLoader;
