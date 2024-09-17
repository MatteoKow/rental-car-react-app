import React from 'react';
import './BookingPricePanel.css';
import { parse, format, differenceInHours} from 'date-fns';


const BookingPricePanel = (props) => {

    const {totalPrice, extrasPrice, rentalPrice, startDate, endDate} = props;
    const startDateTime = parse(startDate, "yyyy-MM-dd HH:mm", new Date());
    const endDateTime = parse(endDate, "yyyy-MM-dd HH:mm", new Date());

    const hoursDifference = differenceInHours(endDateTime, startDateTime);
    const daysDifference = Math.ceil(hoursDifference / 24);

    
    return (
        <section className='pre-booking-price-panel'>
            <div className='details-price'>
                <span>SZCZEÓGŁY</span>
                <ul>
                    <li>{rentalPrice} zł - Auto {daysDifference} {daysDifference !== 1 ? "dni": "dzień"} </li>
                    <li>{extrasPrice} zł - Dodatki</li>
                </ul>
                </div>
            <div className='total-price'>
                <span>SUMA</span>
                <span>{totalPrice} zł</span>
            </div>
        </section>
    );
};

export default BookingPricePanel;