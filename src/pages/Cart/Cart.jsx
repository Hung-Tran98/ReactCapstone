import React from 'react'
import './Cart.scss'
import CheckIcon from '../../assets/icons/CheckIcon'
import { useSelector } from 'react-redux'
function Cart() {
  const { cart, countProduct } = useSelector(state => state.ProductReducer)
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <hr style={{ width: '84%', border: '1px solid #DEDDDC', marginBottom: '5.2rem', margin: 'auto' }} />
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th className='icon'><CheckIcon /></th>
            <th className='id'>id</th>
            <th className='img'>img</th>
            <th className='name'>name</th>
            <th className='price'>price</th>
            <th className='quantity'>quantity</th>
            <th className='total'>total</th>
            <th className='action'>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ paddingLeft: '1.6rem' }}><CheckIcon /></th>
            <td style={{ paddingLeft: '4.1rem' }}>{cart.id}</td>
            <td style={{ paddingLeft: '5.7rem' }}><img src={cart.image} alt="..." style={{ width: '8.5rem' }} /></td>
            <td style={{ paddingLeft: '5.7rem' }}>{cart.name}</td>
            <td style={{ paddingLeft: '20.4rem' }}>{cart.price}$</td>
            <td style={{ paddingLeft: '11.8rem' }}>{countProduct}</td>
            <td style={{ paddingLeft: '9.9rem' }}>{cart.price * countProduct}$</td>
            <td style={{ paddingLeft: '7rem', marginTop: '3rem', display: 'flex', alignItems: 'center' }}>
              <button style={{ textTransform: 'uppercase', width: '10rem', border: 'none', marginLeft: '2.1rem', padding: '0.6rem 0.6rem 0.6rem 0.8rem', background: '#6200EE', color: '#FFFFFF', fontFamily: 'Roboto', fontsize: '1.4rem', fontWeight: 500, letterSpacing: '0.125rem', boxShadow: '0rem 0.8rem 1rem rgba(0, 0, 0, 0.14), 0rem 0.3rem 1.4rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2)', borderRadius: '0.4rem' }}>Edit</button>
              <button style={{ textTransform: 'uppercase', width: '10rem', border: 'none', marginLeft: '2.1rem', padding: '0.6rem 0.6rem 0.6rem 0.8rem', background: '#EB5757', color: '#FFFFFF', fontFamily: 'Roboto', fontsize: '1.4rem', fontWeight: 500, letterSpacing: '0.125rem', boxShadow: '0rem 0.8rem 1rem rgba(0, 0, 0, 0.14), 0rem 0.3rem 1.4rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2)', borderRadius: '0.4rem' }}>Delete</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Cart