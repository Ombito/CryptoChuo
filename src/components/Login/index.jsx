import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../Login/style.css";
import { useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import bcrypt from 'bcryptjs';

const LogIn = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    // const { email, password } = values;

    // setUser({});

    try {
        const hashedPassword = await bcrypt.hash(values.password, 10);
          const dataToSend = {
            email: values.email,
            password: hashedPassword,
          };
      const response = await fetch('http://127.0.0.1:5555/login_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status === 201) {
        enqueueSnackbar('Log in successful!', { variant: 'success' });
        navigate('/');
      } else {
        const responseData = response.data;
        console.log('Login error:', responseData);
        enqueueSnackbar(responseData.message || 'Invalid email or password', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 className="signup">Login</h2>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="email">
              <label htmlFor="email">Email address</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className="container"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="container"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="checkbox-div">
              <div id="checkbox-container">
                <Field type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p className="account">
                <Link to="/forgot-password">Forgot password?</Link>
              </p>
            </div>

            <button className="login-button" type="submit">Login</button>
          </Form>
        </Formik>
        <p className="account">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LogIn;
