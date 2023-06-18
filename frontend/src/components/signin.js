

import React, { useState, useContext } from 'react';
import Header from './header';
import '../styles/signin.css';
import axios from 'axios';
import { Store } from '../App';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Signin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(Store);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the validation error when input changes
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await axios.post('http://localhost:7000/signin', data);
        setToken(res.data.token);
        if (res.data.token) {
          navigate('/myprofile');
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <Header />
      <center>
        <div className="signincontainer">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label>Email ID </label>
              <input
                type='email'
                name='email'
                placeholder='abcd@gmail.com'
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>.</div>

            <div>
              <label>Password </label>
              <input
                type='password'
                name='password'
                placeholder='your password'
                value={data.password}
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div>.</div>

            <input type="submit" value="Sign In"  className='logout'/><br />
          </form>

          <div>.</div>

          <p>New User? <NavLink to="/signup"><button className='logout'>Sign Up</button></NavLink></p>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default Signin;

