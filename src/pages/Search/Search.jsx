import './Search.scss'
import React from 'react'

import { SortIcon } from '../../assets/icons'
import axios from 'axios'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setListProduct } from '../../redux/slices/Product'
import ListProduct from '../../components/ListProduct/ListProduct'

function Search() {
  const { listProduct } = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      productName: ''
    },

    onSubmit: async (values) => {
      console.log(values)
      try {
        const resp = await axios(`https://shop.cyberlearn.vn/api/Product?keyword=${values.productName}`)
        // console.log(resp)
        dispatch(setListProduct(resp.data.content))
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='search'>
      <div className="search_product">
        <label>Email</label>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="search_content" >
            <input placeholder='productName' name='productName' type='text' {...formik.getFieldProps('productName')} />
            <button type='submit'>search</button>
          </div>
        </form>

      </div>
      <div className="search_sort">
        <h2 className='title'>Search result</h2>

        <label>Price</label>
        <div className="search_text">
          <input placeholder='decrease' name='decrease' type='text' />
          <input placeholder='ascending' name='ascending' type='text' />
        </div>

      </div>
      <div className="search_view">
        <ListProduct listProductProps={listProduct}/>
      </div>
    </div>
  )
}

export default Search