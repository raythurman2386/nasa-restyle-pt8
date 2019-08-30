import React, { useState } from 'react';

// import components
import Header from './Header/Header';
import Maincontent from './Maincontent/Maincontent';
import Footer from './Footer/Footer';

// Tailwind Styles
import './output.css';

function App() {
  // Hold state for the date
  const [date, setDate] = useState('2019-08-25');

  return (
    <div className='h-screen'>
      <Header date={date} setDate={setDate} />
      <Maincontent date={date} />
      <Footer />
    </div>
  );
}

export default App;
