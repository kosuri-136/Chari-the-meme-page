import React from 'react'
import "../styles/footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <h2>LIKE US ON FACEBOOK <a href="https://www.facebook.com/Nannuinvolvecheyakandicharigaru/" >
        <img src='https://www.nopcommerce.com/images/thumbs/0015920_facebook-authentication.png' width="25px" height="25px" target="_blank" rel="noopener noreferrer" />
         <button className='logout' style={{
    backgroundColor: 'black',
    color: 'white',
    padding: '1px 2px',
    border: 'goldenrod solid',
    borderRadius: '4px',
    cursor: 'pointer',
    font: 'Bungee Spice',
    fontSize: '24px'
  }} > CHARI GARU</button></a></h2>
    </div>
  )
}

export default Footer;
