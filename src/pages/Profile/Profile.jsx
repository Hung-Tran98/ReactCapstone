import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../redux/slices/User'
import './Profile.scss'
function Profile() {
  const { cart, countProduct } = useSelector(state => state.ProductReducer)
  const { userProfile } = useSelector(state => state.UserReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const actionThunk = getProfileThunk();
    dispatch(actionThunk)
  }, [])
  return (
    <div style={{ background: '#F5F5F5' }}>
      <h2 className='title'>Profile</h2>
      <div className='profile'>
        <img src={userProfile.avatar} alt="..." />
        <div className='profile_center'>
          <div className="profile_content">
            <label>Email</label>
            <input placeholder='email' name='email' type='text' />
          </div>
          <div className="profile_content">
            <label>Phone</label>
            <input placeholder='phone' name='phone' type='text' />
          </div>
        </div>
        <div className="profile_end">
          <div className="profile_content">
            <label>Name</label>
            <input placeholder='name' name='name' type='text' />
          </div>
          <div className="profile_content">
            <label>Password</label>
            <input placeholder='passWord' name='passWord' type='text' />
          </div>
          <div class="profile_radio">
            <label>Gender</label>
            <div className="radio_button">
              <input type="radio" name='gender' value={true} />
              <label>Male</label>
            </div>
            <div className="radio_button"  >
              <input type="radio" name='gender' value={false} />
              <label>Femail</label>
            </div>
            <button>Update</button>
          </div >
        </div>
      </div>
      <hr />

      <div style={{marginBottom:'2rem'}}>
        <label className='order'>Order history</label>
        <label className='favourite'>Favourite</label>
        <div style={{backgroundColor:'#FFFFFF'}}>
          <p className='title_order'>+ Orders have been placed on 09 - 19 - 2020</p>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className='id'>id</th>
                <th className='img'>img</th>
                <th className='name'>name</th>
                <th className='price'>price</th>
                <th className='quantity'>quantity</th>
                <th className='total'>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingLeft: '4.1rem' }}>{cart.id}</td>
                <td style={{ paddingLeft: '5.7rem' }}><img src={cart.image} alt="..." style={{ width: '8.5rem' }} /></td>
                <td style={{ paddingLeft: '5.7rem' }}>{cart.name}</td>
                <td style={{ paddingLeft: '20.4rem' }}>{cart.price}$</td>
                <td style={{ paddingLeft: '11.8rem' }}>{countProduct}</td>
                <td style={{ paddingLeft: '9.9rem' }}>{cart.price * countProduct}$</td>
              </tr>
            </tbody>
          </table>
          <p className='title_order'>+ Orders have been placed on 09 - 19 - 2020</p>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className='id'>id</th>
                <th className='img'>img</th>
                <th className='name'>name</th>
                <th className='price'>price</th>
                <th className='quantity'>quantity</th>
                <th className='total'>total</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{ paddingLeft: '4.1rem' }}>{cart.id}</td>
                <td style={{ paddingLeft: '5.7rem' }}><img src={cart.image} alt="..." style={{ width: '8.5rem' }} /></td>
                <td style={{ paddingLeft: '5.7rem' }}>{cart.name}</td>
                <td style={{ paddingLeft: '20.4rem' }}>{cart.price}$</td>
                <td style={{ paddingLeft: '11.8rem' }}>{countProduct}</td>
                <td style={{ paddingLeft: '9.9rem' }}>{cart.price * countProduct}$</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>

  )
}

export default Profile