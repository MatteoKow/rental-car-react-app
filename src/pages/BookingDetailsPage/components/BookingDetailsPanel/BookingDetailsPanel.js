import React from 'react';
import './BookingDetailsPanel.css';
import { parseISO, format, parse} from 'date-fns';
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";


import { MdAccessTime } from "react-icons/md";


const BookingDetailsPanel = (props) => {
    const {startDate, endDate, extras} = props;
    const {assistance, childSeat, extraDriver, insurance, navigation, wifi} = extras ?? {};
    
    const startDateFormatted = startDate ? format(parseISO(startDate), 'dd-MM-yyyy') : null;
    const endDateFormatted = endDate ? format(parseISO(endDate), 'dd-MM-yyyy') : null;

    const startH = startDate ? format(parse(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'HH:mm') : null;
    const endH = endDate ? format(parse(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'HH:mm') : null;
 
    const check = (condition) => condition ? <MdOutlineCheck className='choice-icon'/> : <MdClose className='choice-icon'/> 

    return (
        <section className='booking-details-panel'>
                <div className='top-details'>
                    <div className='date-info'>
                        <span>DATA ODBIORU</span>
                        <span><div className='icon-calendar'><MdAccessTime/></div>{startH}</span>
                        <span><div className='icon-calendar'><FaRegCalendarAlt/></div>{startDateFormatted}</span>
                    </div>
                    <div className='icon'><MdArrowForwardIos/></div>
                    <div className='date-info'>
                        <span>DATA ZWROTU</span>
                        <span><div className='icon-calendar'><MdAccessTime/></div>{endH}</span>
                        <span><div className='icon-calendar'><FaRegCalendarAlt/></div>{endDateFormatted}</span>
                    </div>
            </div>
            <div className='bottom-details'>
                DODATKI
                <div className='bottom'>
                    <span>{check(extraDriver)}Dodatkowy kierowca</span>
                    <span>{check(insurance)}Ubezpieczenie</span>
                    <span>{check(assistance)}Pomoc Drogowa 24/7</span>
                    <span>{check(navigation)}Nawigacja</span>
                    <span>{check(wifi)}Wi-Fi</span>
                    <span>{check(childSeat)}Fotelik dziecięcy</span>
                </div>
            </div>
        </section>
        
    ); 
};

export default BookingDetailsPanel;