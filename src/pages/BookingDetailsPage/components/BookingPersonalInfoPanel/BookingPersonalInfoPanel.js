import React from 'react';
import './BookingPersonalInfoPanel.css'
import { MdOutlineMail, MdOutlinePhoneInTalk, MdLocationCity, MdHome} from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { GiPostStamp } from "react-icons/gi";




const BookingPersonalInfoPanel = (props) => {

    const {email, phone, drivingLicense, address, city, zipCode} = props;
    return (
        <section className='booking-paersonal-info-panel'>
            <div className='item-info'>
                <span><MdOutlineMail className='info-icon'/>Email</span>
                <span>{email}</span>
            </div>
            <div className='item-info'>
                <span><MdOutlinePhoneInTalk className='info-icon'/>Telefon</span>
                <span>{phone}</span>
            </div>
            <div className='item-info'>
                <span><HiOutlineIdentification className='info-icon'/>Prawo jazdy</span>
                <span>{drivingLicense}</span>
            </div>
            <div className='item-info'>
                <span><MdHome className='info-icon'/>Adres</span>
                <span>{address}</span>
            </div>
            <div className='item-info'>
                <span><MdLocationCity className='info-icon'/>Miasto</span>
                <span>{city}</span>
            </div>
            <div className='item-info'>
                <span><GiPostStamp className='info-icon'/>Kod</span>
                <span>{zipCode}</span>
            </div>





        </section>
    );
};

export default BookingPersonalInfoPanel;