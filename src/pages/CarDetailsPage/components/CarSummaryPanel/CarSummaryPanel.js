import React, { useState } from 'react';
import './CarSummaryPanel.css';
import CarSummaryItem from './components/CarSummaryItem/CarSummaryItem';
import DatePanel from './components/DatePanel/DatePanel';
import BookingPricePanel from './components/BookingPricePanel/BookingPricePanel';
import ExtrasPanel from './components/ExtrasPanel/ExtrasPanel';

const CarSummaryPanel = (props) => {
    const {
        title,
        startDate,
        endDate,
        price,
        totalPrice,
        handleOnSubmit,
        summaryExtras,
    } = props;

    return (
        <section className='car-summary-panel'> 
            <DatePanel startDate={startDate} endDate={endDate}/>
            <ExtrasPanel {...props}/>
            <BookingPricePanel totalPrice={totalPrice} extrasPrice={summaryExtras} rentalPrice={price} startDate={startDate} endDate={endDate}/>
            <button className='rent-button' onClick={handleOnSubmit}>Rezerwuj</button>
        </section>
    )
};

export default CarSummaryPanel;