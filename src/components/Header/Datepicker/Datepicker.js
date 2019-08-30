import React from 'react';

const Datepicker = ({ date, setDate }) => {
  return (
    <form className='flex my-6'>
      <input
        className='rounded-lg p-1'
        placeholder={date}
        onChange={event => setDate(event.target.value)}
        type={'date'}
      />
    </form>
  );
};

export default Datepicker;
