import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import bcrypt from 'bcryptjs';

const Signup = () => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    const formik = useFormik({
      initialValues: {
        full_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      validationSchema: Yup.object({
        full_name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        confirm_password: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
      }),
      onSubmit: async (values) => {
        try {
          const hashedPassword = await bcrypt.hash(values.password, 10);
          const dataToSend = {
            full_name: values.full_name,
            username: values.username,
            email: values.email,
            password: hashedPassword,
          };
  
        //   const response = await axios.post('http://127.0.0.1:5555/signup_user', dataToSend, {
        //     withCredentials: true, // Send cookies along with the request
        //   });
        const response = await fetch('http://127.0.0.1:5555/signup_user', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

  
          if (response.status === 201) {
            enqueueSnackbar('Sign up successful!', { variant: 'success' });
            navigate('/login');
          } else {
            const responseData = response.data;
            enqueueSnackbar(responseData.error || 'Sign up failed', { variant: 'error' });
          }
        } catch (error) {
          console.error('Error during signup:', error);
          enqueueSnackbar('Error during signup', { variant: 'error' });
        }
      },
    });
  

  return (
    <div className='form'>
      <h2 className='signup'>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="Error during signupinput-group">
          <div className="full-name">
            <label>Full name</label>
            <input
              className="input-fields"
              type="text"
              placeholder="Enter Full Name"
              id="full_name"
              {...formik.getFieldProps('full_name')}
            />
            {formik.touched.full_name && formik.errors.full_name && (
              <div className="error">{formik.errors.full_name}</div>
            )}
          </div>
          <div className="username">
            <label>Username</label>
            <input
              className="input-fields"
              type="text"
              placeholder="Enter Username"
              id="username"
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="error">{formik.errors.username}</div>
            )}
          </div>
          <div className="email">
            <label>Email address</label>
            <input
              className="input-fields"
              type="text"
              placeholder="Enter email address"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="password">
            <label>Password</label>
            <input
              className="input-fields"
              type="password"
              placeholder="Enter password"
              id="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <div className="password">
            <label>Confirm password</label>
            <input
              className="input-fields"
              type="password"
              placeholder="Confirm password"
              id="confirm_password"
              {...formik.getFieldProps('confirm_password')}
            />
            {formik.touched.confirm_password && formik.errors.confirm_password && (
              <div className="error">{formik.errors.confirm_password}</div>
            )}
          </div>
        </div>
        <p id="consent">
          By creating an account, you agree to our <span>Terms & Conditions</span>
        </p>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <p className="account">
        Do you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
