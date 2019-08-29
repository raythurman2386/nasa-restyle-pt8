import React from 'react';
import DatePicker from 'react-datepicker';

// Styles for datepicker
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({ date, setDate }) => {
  return (
    <form className='flex my-6'>
      <input
        placeholder={date}
        onChange={event => setDate(event.target.value)}
        type={'date'}
      />
    </form>
  );
};

export default Datepicker;
