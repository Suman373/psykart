import React from 'react';
import Head from 'next/head';
import {client} from '../lib/client';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';

// rendering page( w components in next varies from react)
const Home = ({products, bannerData}) => {
  // data from server -> async func from bottom -> props passed to this page -> render data in the component dynamically
  return (
    <main className='App'>
      <Head>
        <title>Psykart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <Banner/>
      <Products products={products}/>
    </main>
  );
}

// In next , using getServerSideProps to get data from api/cms to pre render the page
// on each request made from the client (SSR)
export const getServerSideProps = async()=>{
    // sanity query
    const query = '*[_type=="product"]'; // grab all products from our cms(sanity dashboard)
    const products = await client.fetch(query); 

    const bannerQuery = '*[_type == "banner"]'; // grab all banner data from sanity
    const bannerData = await client.fetch(bannerQuery);

    // return the products and the banner data as props from this func
    return {
      props: {products, bannerData}
    }
}
export default Home;
