import React from 'react';
import SpecificationItem from '../../../../components/SpecificationItem/SpecificationItem';
import { GrEdit, GrTrash } from "react-icons/gr";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import './CarItem.css'

const CarItem = ({car, handleOnClick, deactivateCar, activateCar}) => {
    const {_id, active, price, title, image, makeImage, fuel, transmission, doors, ac} = car;
    
    return (
        <div className='car-item-box'>
            <div className='image'>
                <img src={image[0]} alt="car" />
            </div>
            <div className='info'>
                <div className='info-top'>
                    <img src={makeImage} alt={makeImage} />
                    <div>{title}</div>
                    <span className='action-car'>
                        { active ? <GrTrash className="icon" onClick={()=> deactivateCar(_id)}/> : <MdOutlineAddCircleOutline className="icon" onClick={()=> activateCar(_id)}/>}
                    </span>
                </div>

                <div className='info-middle'>
                    <SpecificationItem title={"Drzwi"} value={doors}/>
                    <SpecificationItem title={"AC"} value={ac}/>
                    <SpecificationItem title={"Skrzynia biegów"} value={transmission}/>
                    <SpecificationItem title={"Paliwo"} value={fuel}/>
                    <div className='price-item'>
                        <span>{price} zł</span>
                        {/* <span>Cena za {daysDifference ? daysDifference : 1} dni</span> */}
                    </div>
                </div>
                <div className='info-bottom'>
                    <button className='show-car-button' type='submit' onClick={()=> handleOnClick(_id)} >Edytuj</button>
                </div>

            </div>
        </div>
    )
};

export default CarItem;