import React from 'react';
import Image from 'next/image'
import cardImage from '../../public/assets/bannerimage.webp';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import {FaInfo} from 'react-icons/fa';

const Product = ({ prod }) => {
    
    return (
        <div className='product-card' >
            <Image src={cardImage} alt="Product from store" />
            <div className="header">
                <h2>{prod.name}</h2>
                <i className={prod.favourite===true ? 'saved' : 'unsaved'}>
                    <BsFillSuitHeartFill/>
                </i>
            </div>
            <p>Price : {prod.price} <span>{prod.currency}</span></p>
            <p>Size : {prod?.size}</p>
            <p>{prod?.details}</p>
            <div className="button-container">
                <button>Add to cart</button>
                <button>Buy now</button>
            </div>
        </div>
    )
}

export default Product;
