import React from 'react';
import './TypeCarFilterPanel.css'
import TypeCarItem from './components/TypeCarItem/TypeCarItem';

const TypeCarFilterPanel = ({handleTypeCar, selectedType}) => {
    return (
        <section className='type-car-filter-panel'>
            <TypeCarItem handleTypeCar={handleTypeCar} title={"Wszystkie"} isSelected={selectedType === 'Wszystkie'}/>
            <TypeCarItem handleTypeCar={handleTypeCar} title={"Sedan"} isSelected={selectedType === 'Sedan'}/>
            <TypeCarItem handleTypeCar={handleTypeCar}title={"SUV"} isSelected={selectedType === 'SUV'}/>
            <TypeCarItem handleTypeCar={handleTypeCar} title={"Truck"} isSelected={selectedType === 'Truck'}/>
            <TypeCarItem handleTypeCar={handleTypeCar} title={"Coupe"} isSelected={selectedType === 'Coupe'}/>
        </section>
    ) 
};

export default TypeCarFilterPanel;