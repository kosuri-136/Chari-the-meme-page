import React from 'react'
import "../styles/header.css"
import { Link, NavLink } from 'react-router-dom'
// import Signin from './signin'
// import Signup from './signup'
const Header = () => {
 
  return (<>
    <div className='header'>
          <div className="stripes"></div>
                <img src="https://media.tenor.com/HBPyD1dRAEMAAAAS/nannu-involve-cheyakandi-brahmi.gif" className="header-image header-image-left" alt="Left" />
                <h1 className="h1-bg">CHAARI GARU</h1>
                <img src="https://media.tenor.com/hQfiQk-4H-AAAAAS/adhurs-brahmi.gif" className="header-image header-image-right" alt="Right" />
    </div>
    <div className='header1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ flexGrow: 1, textAlign: 'center' }}>
    <span className='text1'>ONE SPOT FOR ALL MEMES </span>
  </div>
  <NavLink className='nav-link' to="/myprofile"> <span className='signinbtn'> Home </span></NavLink>
 <NavLink className='nav-link' to="/signin"> <span className='signinbtn'> SIGNIN </span></NavLink>
 <NavLink className='nav-link' to="/signup"> <span className='signupbtn'>SIGNUP </span></NavLink>
</div>

    </>)
}

export default Header
