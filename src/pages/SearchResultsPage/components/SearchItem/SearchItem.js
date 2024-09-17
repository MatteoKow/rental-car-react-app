import React from 'react';
import SpecificationItem from '../../../../components/SpecificationItem/SpecificationItem';
import './SearchItem.css'

const SearchItem = ({car, handleOnClick, daysDifference}) => {
    const {_id, price, title, image, makeImage, fuel, transmission, doors, ac} = car;
    return (
        <div className='item-box'>
            <div className='image'>
                <img src={image[0]} alt="car" />
            </div>
            <div className='info'>
                <div className='info-top'>
                    <img src={makeImage} alt={makeImage} />
                    <div>{title}</div>    
                </div>

                <div className='info-middle'>
                    <SpecificationItem title={"Drzwi"} value={doors}/>
                    <SpecificationItem title={"AC"} value={ac}/>
                    <SpecificationItem title={"Skrzynia biegów"} value={transmission}/>
                    <SpecificationItem title={"Paliwo"} value={fuel}/>
                    <div className='price-item'>
                        <span>{price * (daysDifference ? daysDifference : 1)} zł</span>
                        <span>Cena za {daysDifference ? daysDifference : 1} {daysDifference !== 1 ? "dni": "dzień"}</span>
                    </div>
                </div>
                <div className='info-bottom'>

                    <button className='booking-now-button' type='submit' onClick={()=> handleOnClick(_id)} >Zarezerwuj teraz</button>
                </div>

            </div>
        </div>
    )
};

export default SearchItem;