import React from 'react';
import './ContactInfo.css';
import { Link } from 'react-router-dom';

const ContactInfo = (props) => {
    const {email, phone, handleEmail, handlePhone} = props;
    return (
        <>
            <div className='title-form'>Dane kontaktowe</div>
            <div className='row-3'>
                <input placeholder="Email" type="text" value={email} onChange={handleEmail} />
            </div>
            <div className='row-3'>
                <input placeholder="Numer telefonu" type="text" value={phone} onChange={handlePhone} />
            </div> 
            <div className='title-form'>Metoda płatności</div>

            <div className='radio-row'>
                <input type="radio" checked id="option2" name="options" value="Płatność na miejscu" /> Płatność na miejscu

            </div>
            <span className='info-payment'>
                <span>Aby rezerwacja została potwierdzona jest 24h na wpłacenie zaliczki w wysokości 50% kwoty.</span>
                <span><Link target='_blank' to='/regulations'>Regulamin</Link></span>
                <br/>
                <span><b>Tytuł przelewu: </b>"numer rezerwacji"</span>
                <span><b>Numer konta: </b>PL222979824782467335332333</span>
            </span>
        </>
    )
};

export default ContactInfo;