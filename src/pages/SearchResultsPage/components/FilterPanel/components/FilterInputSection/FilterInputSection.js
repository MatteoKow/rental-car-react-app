import React, { useState, useRef } from 'react';
import './FilterInputSection.css';

const FilterInputSection = ({ minPrice, maxPrice, handleMinPrice, handleMaxPrice }) => {
  const [tempMinPrice, setTempMinPrice] = useState(minPrice);
  const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);
  const minPriceTimeout = useRef(null);
  const maxPriceTimeout = useRef(null);

  const handleMinPriceChange = (e) => {
    const newValue = e.target.value;
    if (newValue === '' || newValue === '0') setTempMinPrice('');
    else setTempMinPrice(Math.abs(newValue));
    clearTimeout(minPriceTimeout.current);
    minPriceTimeout.current = setTimeout(() => {
      handleMinPrice(Math.abs(newValue));
    }, 500);
  };
  
  const handleMaxPriceChange = (e) => {
    const newValue = e.target.value;
    if (newValue === '' || newValue === '0') setTempMaxPrice('');
    else setTempMaxPrice(Math.abs(newValue));
    clearTimeout(maxPriceTimeout.current);
    maxPriceTimeout.current = setTimeout(() => {
      handleMaxPrice(Math.abs(newValue));
    }, 500);
  };
  

  return (
    <section className='filter-component'>
        <div className='filter-title'>Cena za dzień</div>
        <div className='input-filter'>
            <label htmlFor="">Min</label>
            <input type="number" value={tempMinPrice} onChange={handleMinPriceChange} />
        </div>
        <div className='input-filter'>
            <label htmlFor="">Max</label>
            <input type="number" value={tempMaxPrice} onChange={handleMaxPriceChange} />
        </div>
    </section>
  );
};

export default FilterInputSection;
