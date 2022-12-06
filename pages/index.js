import React from 'react';

const Home = () => {
  // this is generally the home page, landing page for the product lists
  let productArr = ['Gnext', 'LUX COZI, apna luck pehenke chalo', 'DENIM', 'Nikee'];

  return (
    <main>
      {/* banner goes here */}
      <div className='home-banner'>
        <h1>Best selling products</h1>
        <p>Customised tees just for you</p>
      </div>
      <section className="products-container">
          {
            productArr?.map((prod)=>(
              <>
                <h1>{prod}</h1>
              </>
            ))
          }
      </section>
    </main>
  )
}

export default Home;
