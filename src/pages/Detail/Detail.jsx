import React, { useEffect } from 'react'
import DetailProduct from '../../components/DetailProduct/DetailProduct'
import './Detail.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductByIdThunk } from '../../redux/slices/Product'
import ListProduct from '../../components/ListProduct/ListProduct'
import { Skeleton } from 'antd';

function Detail() {
  const param = useParams()
  const dispatch = useDispatch();

  const { productDetail, isLoading } = useSelector(state => state.ProductReducer)

  const getProdutById = async (id) => {
    try {
      const action = getProductByIdThunk(id)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProdutById(param.detailId)
  }, [param.detailId])
  if (isLoading) {
    return <Skeleton active />
  }

  return (
    <div>
      <DetailProduct propsProductDetail={productDetail} />
      <p className='product_detail_title'>-Realate Product -</p>
      <div className="list_product">

        <ListProduct listProductProps={productDetail.relatedProducts} />
      </div>
    </div>
  )
}

export default Detail