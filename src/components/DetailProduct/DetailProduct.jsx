import React from 'react'
import './DetailProduct.scss'
import { useState } from 'react';
function DetailProduct(props) {
    const [count, setCount] = useState(1)
    const { propsProductDetail } = props;
    const { size } = propsProductDetail;
    if (count < 1) {
        setCount(1);
    }

    return (
        <div className='detail_product'>
            <div className="detail_product_left">
                <img src={propsProductDetail.image} alt="..." />
            </div>
            <div className="detail_product_right">
                <p>{propsProductDetail.name}</p>
                <p>{propsProductDetail.description}</p>
                <p>Available size</p>
                <div className='detail_product_size'>
                    {size?.map((s, index) => {
                        return <button key={index}><p>{s}</p></button>
                    })}
                </div>
                <p>{propsProductDetail.price}$</p>
                <div className="dentail_product_quanlity">
                    <button onClick={() => { setCount(count + 1) }}>+</button>
                    <p>{count}</p>
                    <button onClick={() => { setCount(count - 1) }}>-</button>
                </div>
                <button className='dentail_product_add'>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct