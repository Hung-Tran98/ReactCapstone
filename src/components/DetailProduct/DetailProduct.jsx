import React from 'react'
import './DetailProduct.scss'
function DetailProduct(props) {
    const { propsProductDetail } = props;
    const { size } = propsProductDetail;

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
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                </div>
                <button className='dentail_product_add'>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct