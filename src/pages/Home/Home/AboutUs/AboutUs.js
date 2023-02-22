import React from 'react';
import './AboutUs.css';
import img1 from '../../../../media/images/dentist-with-smiling-female-patient.jpg';
import doctorImg from '../../../../media/images/handsome-male-dentist-room-with-medical-equipment-background.jpg';
const AboutUs = () => {
    return (
        <div className="mt-5 container alignment-container gap-5">
            <div>
                <img className="img-style" src={img1} alt="" />
            </div>
            <div className='text1-container'>
                <h4 className="header-1">About Us</h4>
                <hr className="hr-style2" />
                <h1 className="header-1">Our team has only one mission: Make you smile</h1>
                <p className="para-container">
                    "Let's make a beautiful smile in your face"- is the only benefit of Our team. Support us to continue our steps
                </p>
                <div className="alignment-container">
                    <div>
                        <img className="dr-img" src={doctorImg} alt="" />
                    </div>
                    <div className="dr-container">
                        <h2>Dr. John Doe</h2>
                        <p>Dental Specialist</p>
                        <button className="book-button">About our clinic</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;