import React from 'react';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  // this is generally the home page, landing page for the product lists
  let productArr = ['Gnext', 'LUX COZI, apna luck pehenke chalo', 'DENIM', 'Nikee'];

  return (
    <main className='App'>
      <Navbar/>
      <Banner/>
    </main>
  )
}

export default Home;
