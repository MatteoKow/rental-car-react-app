import React from 'react';
import './BookingInfo.css'
import CarsPanel from './components/CarsPanel/CarsPanel';
import DatePanel from './components/DatePanel/DatePanel';
import BookingPricePanel from './components/BookingPricePanel/BookingPricePanel';
const BookingInfo = ({car, startDate, endDate, totalPrice, extrasPrice, rentalPrice}) => {
    return (
       <section className='booking-info'>
        <CarsPanel car={car}/>
        <DatePanel startDate={startDate} endDate={endDate}/>
        <BookingPricePanel totalPrice={totalPrice} extrasPrice={extrasPrice} rentalPrice={rentalPrice} startDate={startDate} endDate={endDate}/>
       </section>
    )
};

export default BookingInfo;