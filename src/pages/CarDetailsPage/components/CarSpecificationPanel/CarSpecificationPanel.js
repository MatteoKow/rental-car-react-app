import React from 'react';
import './CarSpecificationPanel.css'

import CarSpecificationItem from '../CarSepecificationItem/CarSepecificationItem';

import CarIcon from '../../../../img/icons/car-icon.png';
import ACIcon from '../../../../img/icons/ac-icon.png';
import FuelIcon from '../../../../img/icons/fuel-icon.png';
import ColorIcon from '../../../../img/icons/color-icon.png';
import TransmissionIcon from '../../../../img/icons/transmission-icon.png';
import DoorIcon from '../../../../img/icons/door-icon.png';
import HorsepowerIcon from '../../../../img/icons/horsepower-icon.png';
import YearIcon from '../../../../img/icons/year-icon.png';
import EngineIcon from '../../../../img/icons/engine-icon.png';

const CarSpecificationPanel = ({car}) => {
    const {typeCar, ac, fuel, color, transmission, doors, horsepower, year, engine} = car;
    return (
        <section className='specification-panel'>
        <div className='title-specification'>Specyfikacja</div>
        <div className='content-specification'>
            <CarSpecificationItem icon={CarIcon} title = {"Typ"} content={typeCar}/>
            <CarSpecificationItem icon={ACIcon} title = {"AC"} content={ac}/>
            <CarSpecificationItem icon={FuelIcon} title = {"Paliwo"} content={fuel}/>
            <CarSpecificationItem icon={ColorIcon} title = {"Kolor"} content={color}/>
            <CarSpecificationItem icon={TransmissionIcon} title = {"Skrzynia"} content={transmission}/>
            <CarSpecificationItem icon={DoorIcon} title = {"Drzwi"} content={doors}/>
            <CarSpecificationItem icon={HorsepowerIcon} title = {"Moc"} content={horsepower}/>
            <CarSpecificationItem icon={YearIcon} title = {"Rok"} content={year}/>
            <CarSpecificationItem icon={EngineIcon} title = {"Silnik"} content={engine}/>
        </div>
    </section>
    )
};

export default CarSpecificationPanel;