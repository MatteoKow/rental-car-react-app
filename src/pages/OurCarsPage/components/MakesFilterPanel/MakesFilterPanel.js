import React from 'react';
import './MakesFilterPanel.css';
import MakeLogoItem from './components/MakeLogoItem/MakeLogoItem';



const MakesFilterPanel = ({handleMakeCar, uniqueMakes, selectedMake}) => {

    const makes = uniqueMakes.map((make)=> (<MakeLogoItem key={make.name} handleMakeCar={handleMakeCar} logo={make.logo} name={make.name} isSelected={selectedMake === make.name}/>));

    return (
        <section className='makes-filter-panel'>
            {makes}
        </section>
    )
}; 

export default MakesFilterPanel;