import React, { useEffect, useState } from 'react'
import './Cart.scss'
import CheckIcon from '../../assets/icons/CheckIcon'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, updateCount, updateCountProduct } from '../../redux/slices/Product'
import axios from 'axios'
function Cart() {
  const dispatch = useDispatch()
  const { cart, count } = useSelector(state => state.ProductReducer)
  const { userProfile } = useSelector(state => state.UserReducer)
  console.log(count)
  if (count < 1) {
    dispatch(updateCount(1))
  }
  const handleChangeQuantity = (num) => {
    dispatch(updateCount(count + num))
  }
  const handleDeleteProductId = (id) => {

    const newCart = cart.filter((item) => item.id !== id)

    dispatch(updateCart(newCart))
    dispatch(updateCountProduct(0))
  }
  const postProductOrder = async (id, count, email) => {
    try {
      console.log(id)
      console.log(count)
      console.log(email)
      const resp = await axios.post('https://shop.cyberlearn.vn/api/Users/order', {
        "orderDetail": [
          {
            "productId": id,
            "quantity": count
          }
        ],
        "email": email
      })
      console.log(resp)
      alert('Success!')

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <hr />
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th className=''><CheckIcon /></th>
            <th className=''>id</th>
            <th className=''>img</th>
            <th className=''>name</th>
            <th className=''>price</th>
            <th className=''>quantity</th>
            <th className=''>total</th>
            <th className='cart_action'>action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(cart => {
            return (
              <tr>
                <td className='td_icon'><CheckIcon /></td>
                <td className='td_id'>{cart.id ? cart.id : '0'}</td>
                <td className='td_image'><img src={cart.image} alt="..." /></td>
                <td className='td_name'>{cart.name ? cart.name : 'name'}</td>
                <td className='td_price'>{cart.price ? cart.price : '0'}</td>
                <td className='td_quantity'> <button className='up' onClick={() => handleChangeQuantity(1)}>+</button> <input type="text" value={count} /> <button className='down' onClick={() => handleChangeQuantity(-1)}>-</button></td>
                <td className='td_total'>{cart.price * count ? cart.price * count : '0'}</td>
                <td className='td_action'>
                  <button className='action_edit'>Edit</button>
                  <button className='action_delete' onClick={() => { handleDeleteProductId(cart.id) }}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>


      </table>
      {cart.map(cart => {
        return (
          <button className='submit' onClick={() => postProductOrder(cart.id, count, userProfile.email)}>submit order</button>
        )
      })}


    </div>
  )
}

export default Cart