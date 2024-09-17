import React from 'react';
import './StatsByDatePanel.css';
import CarsPanel from './components/CarsPanel/CarsPanel.js'
import StatItem from './components/StatItem/StatItem.js';
import { TbBrandBooking} from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";




const StatsByDatePanel = (props) => {
    return (
        <div className='stats-by-date-panel'>
            <div className='car-stats'>
                <span className='title-stats'>Najpopularniejszy</span>
                {props.car ? <CarsPanel car={props.car}/> : <div className='no-car-baner'>Brak auta</div>}
            </div>
          
            <div className='stats-list'>
                <span className='title-stats'>Dane</span>
                <StatItem value={props.max + " PLN"} title={"Najdroższa rezerwacja"} icon={TbBrandBooking} color="#161A30"/>
                <StatItem value={`${props.duration} ${props.duration !== 1 ? "dni" : "dzień"}`} title={"Najdłuższy wynajem"} icon={IoMdTime} color="#31304D" />
                <StatItem value={props.totalAmount + " PLN"} title={"Przychód"} icon={MdOutlineAttachMoney} color="#233B53"/>
                <StatItem value={props.bookingsAmount} title={"Rezerwacje"} icon={BsArrowCounterclockwise} color="#40506E" />
            </div>
            
        </div>
    );
}; 

export default StatsByDatePanel;