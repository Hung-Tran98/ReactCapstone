import React from 'react'
import './Register.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const schemaRegister = Yup.object({
  email: Yup.string().required('Email is required'),
  passWord: Yup.string().required('passWord is required').min(6, 'Must be at least 2 characters').max(15, 'Must be at least 15 characters'),
  confirmPassWord: Yup.string().required('confirmPassWord is required').min(6, 'Must be at least 2 characters').max(15, 'Must be at least 15 characters'),
  name: Yup.string().required('name is required').max(15, 'Must be at least 15 characters'),
  phone: Yup.string().required('phone is required').max(15, 'Must be at least 15 characters'),
});
function Register() {

  const formik = useFormik({
    initialValues: {
      email: '',
      passWord: '',
      confirmPassWord: '',
      name: '',
      phone: '',
      male: '',
      femail: ''
    },

    validationSchema: schemaRegister,

    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <div className='register'>
      <h2>Register</h2>
      <hr style={{ width: '80%', border: '1px solid #DEDDDC', marginBottom: '5.2rem', margin: 'auto' }} />
      <form onSubmit={formik.handleSubmit} style={{ paddingTop: '5.2rem' }}>
        <div className="register_left">
          <div className="register_content">
            <label>Email</label>
            <input placeholder='email' name='email' {...formik.getFieldProps('email')} />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
          </div>

          <div className="register_content">
            <label>Password</label>
            <input placeholder='passWord' name='passWord' {...formik.getFieldProps('passWord')} />
            {formik.errors.passWord && formik.touched.passWord && <p>{formik.errors.passWord}</p>}
          </div>
          <div className="register_content">
            <label>Password confirm</label>
            <input placeholder='password confirm' name='confirmPassWord' {...formik.getFieldProps('confirmPassWord')} />
            {formik.errors.confirmPassWord && formik.touched.confirmPassWord && <p>{formik.errors.confirmPassWord}</p>}

          </div>
        </div>
        <div className="register_right">
          <div className="register_content">
            <label>Name</label>
            <input placeholder='name' name='name' {...formik.getFieldProps('name')} />
            {formik.errors.name && formik.touched.name && <p>{formik.errors.name}</p>}

          </div>
          <div className="register_content">
            <label>Phone</label>
            <input placeholder='phone' name='phone' {...formik.getFieldProps('phone')} />
            {formik.errors.phone && formik.touched.phone && <p>{formik.errors.phone}</p>}

          </div>
          <div class="register_radio">
            <label>Gender</label>
            <div className="radio_button">
              <input type="radio" name='male' value='male' onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <label>Male</label>
            </div>
            <div className="radio_button">
              <input type="radio" name='femail' value='femail' onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <label>Femail</label>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </div>

      </form>

    </div>
  )
}

export default Register