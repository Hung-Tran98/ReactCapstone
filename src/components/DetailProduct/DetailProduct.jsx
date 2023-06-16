import React, { useEffect } from 'react'
import './DetailProduct.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, updateCountProduct } from '../../redux/slices/Product';
function DetailProduct(props) {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [countProduct, setCountProduct] = useState(0);
    const dispatch = useDispatch();
    const { propsProductDetail } = props;
    const { size } = propsProductDetail;
    if (count < 1) {
        setCount(1)
    }
    dispatch(updateCountProduct(countProduct))
    dispatch(updateCart(cart))
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
                    <button onClick={() => {
                        setCount(count + 1)
                    }}>+</button>
                    <p>{count}</p>
                    <button onClick={() => {
                        setCount(count - 1)
                    }}>-</button>
                </div>
                <button className='dentail_product_add' onClick={() => { setCountProduct(countProduct + 1); setCart(propsProductDetail) }}>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct