
import React, { useState } from 'react';
import Header from './header';
import "../styles/signup.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [errors, setErrors] = useState({});

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the validation error when input changes
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!data.username.trim()) {
      alert('Username is required');
      isValid = false;
    }

    if (!data.email.trim()) {
      alert( 'Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert('Email is invalid');
      isValid = false;
    }

    if (!data.password) {
      alert('Password is required');
      isValid = false;
    } else if (data.password.length < 6) {
      alert('Password must be at least 6 characters');
      isValid = false;
    }

    if (!data.confirmpassword) {
      alert('Confirm Password is required');
      isValid = false;
    } else if (data.confirmpassword !== data.password) {
      alert('Passwords do not match');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = e => {
    e.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost:7000/signup', data)
        .then(res => {
          alert(res.data);
          setData({
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
          });
          setErrors({});
        })
        .catch(error => {
          if (error.response && error.response.data) {
            alert(error.response.data);
          } else {
            alert('An error occurred. Please try again.');
          }
        });
    }
  };

  return (
    <>
      <Header />

      <center>
        <div className='signupcontainer'>
          <h2>Signup</h2>

          <form onSubmit={submitHandler} autoComplete="off">
            <div>
              <label>USER NAME</label>
              <input
                type='text'
                name='username'
                placeholder='write name'
                value={data.username}
                onChange={changeHandler}
              />
              {errors.username && <div className="error">{errors.username}</div>}
            </div>
            <div>.</div>

            <div>
              <label>Email ID </label>
              <input
                type='email'
                name='email'
                placeholder='abcdefg@gmail.com'
                value={data.email}
                onChange={changeHandler}
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
                onChange={changeHandler}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div>.</div>

            <div>
              <label>Confirm Password </label>
              <input
                type='password'
                name='confirmpassword'
                placeholder='confirm password'
                value={data.confirmpassword}
                onChange={changeHandler}
              />
              {errors.confirmpassword && <div className="error">{errors.confirmpassword}</div>}
            </div>
            <div>.</div>

            <input type="submit" value="Signup" className='logout'/><br />
          </form>

          <div>.</div>

          <p>Have an account? <NavLink to="/signin"><button className='logout'>Sign In</button></NavLink></p>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default Signup;
