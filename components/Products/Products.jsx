import React from 'react';
import Product from '../ProductItem/Product';

const Products = ({products}) => {
  // let products = [
  //   {
  //     name: "Nike tee",
  //     price: '500',
  //     currency: 'USD',
  //     discount: '20%',
  //     size: 'XXL',
  //     favourite:true,
  //   },
  //   {
  //     name: "DENIM tee",
  //     price: '780',
  //     currency: 'USD',
  //     discount: '30%',
  //     size: 'L',
  //     favourite:false,
  //   },
  //   {
  //     name: "YODAA tee",
  //     price: '200',
  //     currency: 'USD',
  //     discount: '20%',
  //     size: 'XL',
  //     favourite:true,
  //   },
  //   {
  //     name: "+CLS tee",
  //     price: '500',
  //     currency: 'USD',
  //     discount: '10%',
  //     size: 'M',
  //     favourite:true,
  //   },
  //   {
  //     name: "+CLS tee",
  //     price: '500',
  //     currency: 'USD',
  //     discount: '10%',
  //     size: 'M',
  //     favourite:false,
  //   },
  //   {
  //     name: "+CLS tee",
  //     price: '500',
  //     currency: 'USD',
  //     discount: '10%',
  //     size: 'M',
  //     favourite:true,
  //   },
  //   {
  //     name: "+CLS tee",
  //     price: '500',
  //     currency: 'USD',
  //     discount: '10%',
  //     size: 'M',
  //     favourite:false,
  //   },
  // ]

  return (
    <>
      <section className='products-main-wrapper'>
        <h1 id="our-products">Our products</h1>
        <div className="products-container">
          {
            products.length > 0 ?
              products.map((prod) =>
                <>
                  <Product
                    prod={prod}
                  />
                </>
              )
              :
              <>
                <p>No products available at now ! Sorry.</p>
              </>
          }
        </div>
      </section>
    </>
  )
}

export default Products;
