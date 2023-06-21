import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../redux/slices/User'
import './Profile.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const schemaRegister = Yup.object({
  email: Yup.string().email().required('Email is required'),
  passWord: Yup.string().required('passWord is required').min(6, 'Must be at least 2 characters').max(15, 'Must be at least 15 characters'),
  name: Yup.string().required('name is required').max(15, 'Must be at least 15 characters'),
  phone: Yup.string().required('phone is required').min(10, 'Must be at least 10 characters').max(10, 'Must be at least 10 characters'),
});
function Profile() {
  const formik = useFormik({
    initialValues: {
      email: '',
      passWord: '',
      name: '',
      phone: '',
      gender: false
    },

    validationSchema: schemaRegister,
  })
  const { cart, countProduct } = useSelector(state => state.ProductReducer)
  const { userProfile } = useSelector(state => state.UserReducer)
  console.log(userProfile.ordersHistory)
  const dispatch = useDispatch()
  useEffect(() => {
    const actionThunk = getProfileThunk();
    dispatch(actionThunk)
  }, [])
  return (
    <div style={{ background: '#F5F5F5' }}>
      <h2 className='title'>Profile</h2>
      <div className='profile'>
        <form onSubmit={formik.handleSubmit}>
          <img src={userProfile.avatar} alt="..." />
          <div className='profile_center'>
            <div className="profile_content">
              <label>Email</label>
              <input placeholder={userProfile.email} name='email' type='text' {...formik.getFieldProps('email')} />
              {formik.errors.email && formik.touched.email && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.email}</p>}
            </div>
            <div className="profile_content">
              <label>Phone</label>
              <input placeholder={userProfile.phone} name='phone' type='text' {...formik.getFieldProps('phone')} />
              {formik.errors.phone && formik.touched.phone && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.phone}</p>}
            </div>
          </div>
          <div className="profile_end">
            <div className="profile_content">
              <label>Name</label>
              <input placeholder={userProfile.name} name='name' type='text' {...formik.getFieldProps('name')} />
              {formik.errors.name && formik.touched.name && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.name}</p>}
            </div>
            <div className="profile_content">
              <label>Password</label>
              <input placeholder='passWord' name='passWord' type='text' {...formik.getFieldProps('passWord')} />
              {formik.errors.passWord && formik.touched.passWord && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.passWord}</p>}
            </div>
            <div class="profile_radio">
              <label>Gender</label>
              <div className="radio_button">
                {userProfile.gender ? <input type="radio" name='gender' value={true} checked /> : <input type="radio" name='gender' value={true} />}
                <label>Male</label>
              </div>
              <div className="radio_button"  >
                {userProfile.gender === false ? <input type="radio" name='gender' value={false} checked /> : <input type="radio" name='gender' value={false} />}
                <label>Femail</label>
              </div>
              <button>Update</button>
            </div >
          </div>
        </form>

      </div>
      <hr />

      <div style={{ marginBottom: '2rem' }}>
        <label className='order'>Order history</label>
        <label className='favourite'>Favourite</label>
        <div style={{ backgroundColor: '#FFFFFF' }}>
          {userProfile.ordersHistory?.map(ordersHistory => {
            console.log(ordersHistory.orderDetail.name)
            return (
              <Fragment key={ordersHistory.id}>
                <p className='title_order'>+ Orders have been placed on {ordersHistory.date}</p>
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
                      <td style={{ paddingLeft: '4.1rem' }}>{ordersHistory.id}</td>
                      {ordersHistory.orderDetail?.map(orderDetail => {
                        return (
                          <>
                            <td style={{ paddingLeft: '5.7rem' }}><img src={orderDetail.image} alt="..." style={{ width: '8.5rem' }} /></td>
                            <td style={{ paddingLeft: '5.7rem' }}>{orderDetail.name}</td>
                            <td style={{ paddingLeft: '20.4rem' }}>{orderDetail.price}$</td>
                            <td style={{ paddingLeft: '11.8rem' }}>{orderDetail.quantity}</td>
                            <td style={{ paddingLeft: '9.9rem' }}>{orderDetail.price * orderDetail.quantity}$</td>
                          </>
                        )
                      })}

                    </tr>
                  </tbody>
                </table>
              </Fragment>
            )
          })}
        </div>

      </div>

    </div>

  )
}

export default Profile