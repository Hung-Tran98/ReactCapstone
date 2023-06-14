import React from 'react'
import './Register.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schemaRegister = Yup.object({
  email: Yup.string().email().required('Email is required'),
  passWord: Yup.string().required('passWord is required').min(6, 'Must be at least 2 characters').max(15, 'Must be at least 15 characters'),
  confirmPassWord: Yup.string().required('confirmPassWord is required').min(6, 'Must be at least 6 characters').max(15, 'Must be at least 15 characters').oneOf([Yup.ref('passWord')], 'Confirm PassWord must be matched'),
  name: Yup.string().required('name is required').max(15, 'Must be at least 15 characters'),
  phone: Yup.string().required('phone is required').min(10, 'Must be at least 10 characters').max(10, 'Must be at least 10 characters'),
});
function Register() {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      passWord: '',
      name: '',
      phone: '',
      gender: false
    },

    validationSchema: schemaRegister,

    onSubmit: async (values) => {
      try {
        const resp = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', {
          "email": values.email,
          "password": values.passWord,
          "name": values.name,
          "gender": values.gender,
          "phone": values.phone
        })
        navigate('/login')
        console.log(resp)
        
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='register'>
      <h2>Register</h2>
      <hr style={{ width: '84%', border: '1px solid #DEDDDC', marginBottom: '5.2rem', margin: 'auto' }} />
      <form onSubmit={formik.handleSubmit} style={{ paddingTop: '5.2rem' }}>
        <div className="register_left">
          <div className="register_content">
            <label>Email</label>
            <input placeholder='email' name='email' type='text' {...formik.getFieldProps('email')} />
            {formik.errors.email && formik.touched.email && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.email}</p>}
          </div>

          <div className="register_content">
            <label>Password</label>
            <input placeholder='passWord' name='passWord' type='text' {...formik.getFieldProps('passWord')} />
            {formik.errors.passWord && formik.touched.passWord && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.passWord}</p>}
          </div>
          <div className="register_content">
            <label>Password confirm</label>
            <input placeholder='password confirm' name='confirmPassWord' type='text' {...formik.getFieldProps('confirmPassWord')} />
            {formik.errors.confirmPassWord && formik.touched.confirmPassWord && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.confirmPassWord}</p>}

          </div>
        </div>
        <div className="register_right">
          <div className="register_content">
            <label>Name</label>
            <input placeholder='name' name='name' type='text' {...formik.getFieldProps('name')} />
            {formik.errors.name && formik.touched.name && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.name}</p>}

          </div>
          <div className="register_content">
            <label>Phone</label>
            <input placeholder='phone' name='phone' type='text' {...formik.getFieldProps('phone')} />
            {formik.errors.phone && formik.touched.phone && <p style={{ color: '#F50E0E', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.2rem' }}>{formik.errors.phone}</p>}

          </div>
          <div class="register_radio" {...formik.getFieldProps('gender')}>
            <label>Gender</label>
            <div className="radio_button" >
              <input type="radio" name='gender' value={true} />
              <label>Male</label>
            </div>
            <div className="radio_button"  >
              <input type="radio" name='gender' value={false} />
              <label>Femail</label>
            </div>
          </div >
          <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Register