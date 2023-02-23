import React from 'react';
import './Footer.css';

const Footer = () =>{

    return (
        <div className="footer-container">
            <div className="footer-address text-left">
                <h1 className="header-1">Dentist</h1>
                <p>Dhanmondi, Dhaka-1205</p>
                <p>(+880) 1317424004</p>
                <p>info@dentist.com.bd</p>
            </div>
            <div>
            <h2 className="header-1">Useful Links</h2>
            <div className="footer-links">
                <ul>
                    <li>Services</li>
                    <li>Make Appointment</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
            </div>
            <div>
                <h2 className="header-1">Join for the Newsletter</h2>
                <input className="hr-style2 footer-box " type="email" name="email" placeholder='Enter your email '/> 

                <button  className="hr-style2 footer-button mx-2" type="submit">Subscribe</button>
            </div>
        </div>
    )
}

export default Footer;