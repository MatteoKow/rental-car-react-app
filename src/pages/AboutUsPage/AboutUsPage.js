import React from 'react';
import './AboutUsPage.css';
import Map from '../../components/Map/Map';

import { MdOutlineMail, MdOutlinePhoneInTalk, MdLocationCity, MdHome} from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";



const AboutUsPage = () => {
    return (
        <section className='about-us-page'>
            <section className='contact-panel'>
            <span className='title'>O nas</span>
                <div className='contact-box'>
                    <span className='text-info'>
                    Jesteśmy dynamiczną wypożyczalnią samochodową z siedzibą w centrum Kielc. Nasza firma od samego początku kładzie nacisk na profesjonalizm, wysoką jakość obsługi i bogaty wybór pojazdów, które spełniają różnorodne potrzeby naszych klientów. Dodatkowo, nasza flota pojazdów jest regularnie aktualizowana, aby zapewnić najnowocześniejsze i najbardziej komfortowe samochody. 
                    </span>
                    <span className='title'>Kontakt</span>
                    <div className='contact-panel-details'>
                        <span><MdHome/>Warszawska 1231</span>
                        <span><MdLocationCity/>25-345 Kielce</span>
                        <span><FaGlobeAfrica/>Polska</span>
                        <span><MdOutlineMail/>kontakt@rentalcar.pl</span>
                        <span><MdOutlinePhoneInTalk/>+48 123123123</span>
                    </div>
                </div>



            </section>
            <section className='map-panel'>
                <Map />
            </section>
            
        </section>

    ) 
};


export default AboutUsPage;