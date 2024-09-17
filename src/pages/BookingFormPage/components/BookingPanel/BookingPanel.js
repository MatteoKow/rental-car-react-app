import React, { useState } from 'react';
import './BookingPanel.css';

import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ProgressBar from './components/ProgressBar/ProgressBar';
import AddressDetails from './components/AddressDetails/AddressDetails';
 
const BookingPanel = (props) => {
    const { step, increaseStep, decreaseStep, makeReservation} = props;

    const stepPage = [
        <PersonalDetails {...props} />, 
        <AddressDetails  {...props} />,
        <ContactInfo  {...props} />
    ];

    return (
        <section className='booking'>
            <div className='booking-title'>Formularz rezerwacyjny</div>
            <ProgressBar step={step}/>
            <section className='booking-form'>
                <form action="">
                    {stepPage[step]}
                </form>
                <div className='buttons'>
                    {step > 0 ? <button className="back" onClick={decreaseStep}>COFNIJ</button> : null}
                    {step < 2 ? <button className="next" onClick={increaseStep}>DALEJ</button> : <button className="confirm" onClick={makeReservation}>Rezerwuj</button>}
                    
                </div>
            </section>
        </section>
    )
};

export default BookingPanel;