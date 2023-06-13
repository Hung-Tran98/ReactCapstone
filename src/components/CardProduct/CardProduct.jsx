import React from 'react'
import './CardProduct.scss'
import { NavLink } from 'react-router-dom';
function CardProduct(props) {
    const { productProps } = props;
    return (
        <div className='card_product'>
            <div className="card_product_image">
                <img src={productProps.image} alt="..." />
            </div>
            <div className="card_product_content">
                <p className='card_product_content name'>{productProps.name}</p>
                <p className='card_product_content des'>{productProps.shortDescription}</p>
            </div>
            <div className="card_product_interact">
                <NavLink to={`/detail/${productProps.id}`}>
                <button className='card_product_btn buy'>Buy now</button>
                </NavLink>
                <button className='card_product_btn price'>{productProps.price}$</button>
            </div>
        </div>

    )
}

export default CardProduct