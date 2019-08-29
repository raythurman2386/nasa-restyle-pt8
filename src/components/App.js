import React from 'react';

// import components
import Header from './Header/Header';
import Maincontent from './Maincontent/Maincontent';
import Footer from './Footer/Footer';

// Tailwind Styles
import './output.css';

function App() {
  return (
    <div className='h-screen'>
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
