import React from 'react';
import './FilterRangeSection.css';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const FilterRangeSection = ({title, unit, rangeValueOnChange, rangeValue, min, max, step}) => {

    return (
        <section className='filter-component'>
            <div className='filter-title'>{title}</div>
            <RangeSlider id="range-slider" onInput={rangeValueOnChange} value={rangeValue} min={min} step={step} max={max}/>
            <div>{`${rangeValue[0]}${unit} - ${rangeValue[1]}${unit}`}</div>
        </section>
    )
};

export default FilterRangeSection;