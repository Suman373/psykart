import React from 'react';
import {RxDoubleArrowDown} from 'react-icons/rx';

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Best selling products</h1>
      <p>Customised tees just for you <span></span></p>
      <a href="#our-products"><RxDoubleArrowDown/></a>
    </div>
  )
}

export default Banner;
