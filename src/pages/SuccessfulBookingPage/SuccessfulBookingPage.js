import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import successfulImage from '../../img/success.png';
import './SuccessfulBookingPage.css';

const SuccessfulBookingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idBooking = searchParams.get('id');

    const handleOnClick = () => navigate('/')
    return (
        <section className='successful-booking-page'>
            <img src={successfulImage} alt="" />
            <div className='successful-title'>Rezerwacja powiodła się</div>
            <div className='booking-id'>Numer rezerwacji: {idBooking}</div>

            <button onClick={handleOnClick} className='back-button'>Strona główna</button>

        </section>
        
    );
};

export default SuccessfulBookingPage;