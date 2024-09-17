import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaGooglePlusG, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";

import logo from "../../img/logo_white.png";

import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='info-panel-footer'>
                <div className='company-name'><img src={logo} alt="" /></div>
                <div className='nav-footer'>
                    <span><Link to='/'>STRONA GŁOWNA</Link></span>
                    <span><Link to='/our-cars'>NASZE AUTA</Link></span>
                    <span><Link to='/about-us'>O NAS</Link></span>
                    <span><Link to='/regulations'>REGULAMIN</Link></span>

                </div>
                <div className='contact-footer'>
                    <span><MdOutlineLocalPhone/> +48 123123123</span>
                    <span><MdAlternateEmail/> kontakt@rentalcar.pl</span>
                </div>

            </div>
            <div className='social-panel'>
                <span className='circle'><FaFacebookF/></span>
                <span className='circle'><FaXTwitter/></span>
                <span className='circle'><FaInstagram/></span>
                <span className='circle'><FaGooglePlusG/></span>
            </div>
            <div className='copyrights'>
                Mateusz Kowalski © 2023 Wszelkie prawa zastrzeżone
            </div>

        </div>
    )
};

export default Footer;