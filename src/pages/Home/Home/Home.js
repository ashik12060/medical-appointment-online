import React from 'react';
import img from '../../../media/images/full-equiped-medical-cabinet.jpg';
import CardItem from '../CardItem/CardItem';
import './Home.css';
const Home = () => {
    return (
        <>
        
            <div className="home-container">
                <div className="left-section">
                    <h1><span style={{color:"rgb(67, 8, 116)"}}>A</span> <span style={{color:"rgb(107, 36, 238)"}}>dentistry</span></h1>
                    <h1><span style={{color:"rgb(107, 36, 238)"}}>clinic</span> <span style={{color:"rgb(67, 8, 116)"}}>you can</span> </h1>
                    <h1><span style={{color:"rgb(67, 8, 116)"}}>trust</span></h1>
                    <p className="text-container">Consult with our dentists and checkup your tooth today to make a healthy smile!</p>
                    <button className="mx-5 book-button">Book an Appointment</button>
                    <button className="browse-button">Browse Service</button>
                </div>

                <div className="separate-width">
                    <img src={img} alt="img" />
                </div>
            </div>

            <div>
                <h4 className="mt-5 mx-5" style={{color:"rgb(67, 8, 116)"}}>Our Services</h4>
                <hr className="hr-style"/>


            </div>
            <div className="home-container container">
                <div><h2>Our dental team will help you from various way you need!</h2></div>
                <div><button className="ms-5 book-button">Book an Appointment</button></div>
            </div>
            <CardItem></CardItem>
        </>
        
    );
};

export default Home;