import React from 'react';

const Datepicker = ({ setDate }) => {
  return (
    <div className='flex justify-center my-6'>
      <input onChange={event => setDate(event.target.value)} type='date' />
    </div>
  );
};

export default Datepicker;
