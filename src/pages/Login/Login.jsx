import React, { useEffect, useState } from 'react'
import './Login.scss'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios';
import { saveLocalStorage } from '../../utils';
import { ACCESSTOKEN } from '../../consts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateIsLogin } from '../../redux/slices/Product';

const schemaLogin = Yup.object({
  email: Yup.string().email().required('Email is required'),
  passWord: Yup.string().required('passWord is required').min(6, 'Must be at least 2 characters').max(15, 'Must be at least 15 characters')
});
function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      passWord: ''
    },
    validationSchema: schemaLogin,

    onSubmit: async (values) => {
      console.log(values)
      try {
        const resp = await axios.post('https://shop.cyberlearn.vn/api/Users/signin', {
          "email": values.email,
          "password": values.passWord,
        })
        console.log(resp)
        saveLocalStorage(ACCESSTOKEN, resp.data.content.accessToken)
        navigate('/profile')
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className='login'>
      <h2>Login</h2>
      <hr style={{ width: '84%', border: '1px solid #DEDDDC', marginBottom: '5.2rem', margin: 'auto' }} />
      <form onSubmit={formik.handleSubmit} style={{ margin: 'auto', width: '28%', paddingTop: '2.7rem' }}>
        <div className="login_content">
          <label>Email</label>
          <input placeholder='email' name='email' type='text' {...formik.getFieldProps('email')} />
          {formik.errors.email && formik.touched.email && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.email}</p>}
        </div>
        <div className="login_content">
          <label>Password</label>
          <input placeholder='passWord' name='passWord' type='text' {...formik.getFieldProps('passWord')} />
          {formik.errors.passWord && formik.touched.passWord && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.passWord}</p>}
        </div>
        <div className="login_submit" style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '4rem' }}>
          <p>Register now ?</p>
          <button type='submit'>Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login