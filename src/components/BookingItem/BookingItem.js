import React from 'react';
import { parse, format} from 'date-fns';
import { BsThreeDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";



import './BookingItem.css'

const BookingItem = (props) => {
    const {_id, firstName, lastName, startDate, endDate, makeImage, title, totalPrice, carImage, handleOnClick} = props;

    const startD = format(parse(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'dd.MM.yyyy');
    const startH = format(parse(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'HH:mm');
    const endD = format(parse(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'dd.MM.yyyy');
    const endH = format(parse(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'HH:mm');

    return (
        <div className='container'>
            <div className='image'>
                <img src={carImage[0]} alt="car" />
            </div>
            <div className='info'>
                <div className='info-top'>
                    <div className='left'>
                        <img src={makeImage} alt={makeImage} />
                        <div className='title-car'>{title}</div>
                        <span>ID: {_id}</span>
                    </div>
                    <div className='right'>
                        <BsThreeDots className="booking-details" onClick={()=> handleOnClick(_id)}/>
                    </div>
                </div>

                <div className='info-middle'>
                    <span>{firstName} {lastName}</span>
                </div>

                <div className='info-bottom'>
                    <div className='info-wrap'>
                        <div className='date-info'>
                            <span>DATA ODBIORU</span>
                            <span><div className='icon-calendar'><MdAccessTime/></div>{startH}</span>
                            <span><div className='icon-calendar'><FaRegCalendarAlt/></div>{startD}</span>
                        </div>
                        <div className='icon'><MdArrowForwardIos/></div>
                        <div className='date-info'>
                            <span>DATA ZWROTU</span>
                            <span><div className='icon-calendar'><MdAccessTime/></div>{endH}</span>
                            <span><div className='icon-calendar'><FaRegCalendarAlt/></div>{endD}</span>
                        </div>
                    </div>
                    <span className='price'>Cena: {totalPrice} zł</span>
                </div>

            </div>
        </div>
    )
};

export default BookingItem;