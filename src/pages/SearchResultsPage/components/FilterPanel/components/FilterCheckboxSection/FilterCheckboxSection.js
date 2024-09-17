import React, { useState } from 'react';
import './FilterCheckboxSection.css';
import FilterCheckboxItem from './components/FilterCheckboxItem/FilterCheckboxItem';

const FilterCheckboxSection = ({title, values, handleSelected}) => {
    const [exapndIsActive, setExapndIsActive] = useState(false);
    const elements = values.map((value) => ( <FilterCheckboxItem key={value} option={value} handleSelected={handleSelected}/>));

    const handleOnClick = () => setExapndIsActive(!exapndIsActive);

    return (
        <section className='filter-component'>
            <div className='filter-title'>{title}</div>
            {exapndIsActive ? elements : elements.slice(0,5) }
            {values.length > 5 ? <button className="show-more-button" onClick={handleOnClick}>{exapndIsActive ? "Mniej" : "Wiecej" }</button> : null}
        </section>
    )
};

export default FilterCheckboxSection;