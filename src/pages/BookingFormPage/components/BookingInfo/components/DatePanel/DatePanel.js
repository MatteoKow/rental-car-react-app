import React from 'react';
import './DatePanel.css';
import { parseISO, format, parse} from 'date-fns';
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";


import { MdAccessTime } from "react-icons/md";


const DatePanel = (props) => {
    const {startDate, endDate} = props;    
    const startDateFormatted = startDate ? format(parse(startDate, "yyyy-MM-dd HH:mm", new Date()), 'dd-MM-yyyy') : null;
    const endDateFormatted = endDate ? format(parse(endDate, "yyyy-MM-dd HH:mm", new Date()), 'dd-MM-yyyy') : null;
    const startH = startDate ? format(parse(startDate, "yyyy-MM-dd HH:mm", new Date()), 'HH:mm') : null;
    const endH = endDate ? format(parse(endDate, "yyyy-MM-dd HH:mm", new Date()), 'HH:mm') : null;

    const check = (condition) => condition ? <MdOutlineCheck className='choice-icon'/> : <MdClose className='choice-icon'/> 

    return (
        <section className='booking-details-panel'>
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
        </section>
    ); 
};

export default DatePanel;