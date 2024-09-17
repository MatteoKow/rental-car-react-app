import React from 'react';
import './FilterPanel.css';
import FilterCheckboxSection from './components/FilterCheckboxSection/FilterCheckboxSection';
import FilterInputSection from './components/FilterInputSection/FilterInputSection';

const FilterPanel = (props) => {

    const {
        uniqueTypes,
        uniqueMakes,
        uniqueFuels,
        uniqueTransmissions,
        handleSelectedTypes,
        handleSelectedMakes,
        handleSelectedFuels,
        handleSelectedTransmissions,
        handleMinPrice, 
        handleMaxPrice,
        minPrice, 
        maxPrice, 
    } = props;

    return (
        <>
            <aside className='filter-panel'>
                <div className='title-name'>Filtry</div>
                <FilterCheckboxSection title={"Typ auta"} values={uniqueTypes} handleSelected={handleSelectedTypes}/>
                <FilterInputSection minPrice={minPrice} maxPrice={maxPrice} handleMinPrice={handleMinPrice} handleMaxPrice={handleMaxPrice}/>
                <FilterCheckboxSection title={"Marka"} values={uniqueMakes} handleSelected={handleSelectedMakes}/>
                <FilterCheckboxSection title={"Paliwo"} values={uniqueFuels} handleSelected={handleSelectedFuels}/>
                <FilterCheckboxSection title={"Skrzynia biegów"} values={uniqueTransmissions} handleSelected={handleSelectedTransmissions}/>
            </aside>
        </>
    )
};

export default FilterPanel;