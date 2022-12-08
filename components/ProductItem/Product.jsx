import React from 'react';

const Product = ({prod}) => {

  return (
    <div className='product-card'>
        <img src='' alt="Product from store"/>
        <div className="header">
            <h2>{prod.name}</h2>

        </div>
        <p>{prod.price} <span>{prod.currency}</span></p>
        <p>{prod?.size}</p>
        <p>{prod?.discount}</p>
        <div className="button-container">
            <button>Add to cart</button>
            <button>Buy now</button>
        </div>
    </div>
  )
}

export default Product;
