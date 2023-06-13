import { Carousel } from 'antd';
import './CarouselHome.scss'
import { useRef } from 'react';
import { Next, Previous } from 'src/assets/icons'
import { NavLink } from 'react-router-dom';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};
function CarouselHome() {
    const carouselRef = useRef();
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className='carousel_main'>
            <button className='control next' onClick={() => { carouselRef.current.next() }}><Next /></button>
            <button className='control prev' onClick={() => { carouselRef.current.prev() }}><Previous /></button>
            <Carousel ref={carouselRef} afterChange={onChange}>

                <div style={contentStyle}>

                    <div className='carousel_content'>

                        <div className='carousel_image'>
                            <img src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="..." />
                        </div>
                        <div className="carousel_detail">
                            <p>Adidas Prophere</p>
                            <p>The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.</p>
                            <NavLink to={`/detail/1`}>
                                <button className='carousel_button_buy'>Buy now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div style={contentStyle}>
                    <div className='carousel_content'>
                        <div className='carousel_image'>
                            <img src="https://shop.cyberlearn.vn/images/adidas-super-star-red.png" alt="..." />
                        </div>
                        <div className="carousel_detail">
                            <p>Adidas Super Star Red</p>
                            <p>The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.</p>
                            <NavLink to={`/detail/4`}>
                                <button className='carousel_button_buy'>Buy now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div style={contentStyle}>
                    <div className='carousel_content'>
                        <div className='carousel_image'>
                            <img src="https://shop.cyberlearn.vn/images/converse-chuck-taylor.png" alt="..." />
                        </div>
                        <div className="carousel_detail">
                            <p>Converse Chuck Taylor</p>
                            <p>The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.</p>
                            <NavLink to={`/detail/19`}>
                                <button className='carousel_button_buy'>Buy now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>



            </Carousel>
        </div>
    );
}

export default CarouselHome