import React from 'react';
import {useNavigate } from 'react-router-dom';
import failedImage from '../../img/failed.png';
import './FailedBookingPage.css';

const FailedBookingPage = () => {
    const navigate = useNavigate();


    const handleOnClick = () => navigate('/')
    return (
        <section className='successful-booking-page'>
            <img src={failedImage} alt="" />
            <div className='successful-title'>Rezerwacja nie powiodła się. Samochód jest niedostępny.</div>

            <button onClick={handleOnClick} className='back-button'>Strona główna</button>

        </section>
        
    );
};

export default FailedBookingPage;