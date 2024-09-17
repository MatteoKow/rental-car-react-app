import React from 'react';
import './StatsGeneralPanel.css';
import StatItem from '../StatsByDatePanel/components/StatItem/StatItem';
import { FaPerson } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";




const StatsGeneralPanel = (props) => {
    return (
        <div className='stats-general-panel'>
            <span className='title-stats'>Ogólne</span>
            <div className='general-stat-list'>
                <StatItem value={props.employeesAmount} title={"Pracownicy"} icon={FaPerson} color={"#161A30"}/>
                <StatItem value={props.carsAmount} title={"Samochody"} icon={FaCarAlt} color={"#161A30"}/>
                <StatItem value={props.revenueAmount + " PLN"} title={"Przychód"} icon={MdOutlineAttachMoney} color={"#161A30"}/>
                <StatItem value={props.allBookings} title={"Rezerwacje"} icon={BsArrowCounterclockwise} color={"#161A30"}/>


            </div>
        </div>
    );
};

export default StatsGeneralPanel;