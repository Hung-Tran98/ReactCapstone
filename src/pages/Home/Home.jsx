import React, { useEffect } from 'react'
import CarouselHome from '../../components/CarouselHome/CarouselHome'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setListProduct } from '../../redux/slices/Product';
import ListProduct from '../../components/ListProduct/ListProduct';
import { useScrollTop } from '../../hooks/useScrollTop';
import './Home.scss'


function Home() {
  // useScrollTop();
  const { listProduct } = useSelector(state => state.ProductReducer);

  const dispatch = useDispatch();

  const getListProduct = async () => {
    const resp = await axios.get('https://shop.cyberlearn.vn/api/Product')

    const action = setListProduct(resp.data.content);

    console.log(action)
    dispatch(action)
  }
  useEffect(() => {
    getListProduct();
  }, [])

  
  return (
    <>
      <CarouselHome />
      <h2 className='title'>Product Feature</h2>
      <div className='list_product'>
        <ListProduct listProductProps={listProduct} />
      </div>

    </>
  )
}

export default Home