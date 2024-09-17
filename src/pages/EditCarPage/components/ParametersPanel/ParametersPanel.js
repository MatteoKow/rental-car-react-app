import React from 'react';
import SpecificationIcon from '../../../../components/SpecificationIcon/SpecificationIcon';

import ACIcon from '../../../../img/icons/ac-icon.png';
import FuelIcon from '../../../../img/icons/fuel-icon.png';
import ColorIcon from '../../../../img/icons/color-icon.png';
import TransmissionIcon from '../../../../img/icons/transmission-icon.png';
import DoorIcon from '../../../../img/icons/door-icon.png';
import HorsepowerIcon from '../../../../img/icons/horsepower-icon.png';
import YearIcon from '../../../../img/icons/year-icon.png';
import EngineIcon from '../../../../img/icons/engine-icon.png';

import './ParametersPanel.css'

const ParametersPanel = (props) => {

    const {
        makeId,
        makes,
        title,
        description,
        year,
        fuels,
        fuel,
        horsepower,
        color,
        transmissions,
        transmission,
        engine,
        doors,
        AC,
        ac,
        price,
        types,
        typeCar,
        quantity,
        handleQuantity,
        handleMakeId,
        handleTitle,
        handleDescription,
        handleTypeCar,
        handleYear,
        handleFuel,
        handleHorsepower,
        handleColor,
        handleTransmision,
        handleEngine,
        handleDoors,
        handleAC,
        handlePrice,
        handleOnSubmit, 
    } = props;
    const makesList = makes.map((make)=>(<option key={make._id} value={make._id}>{make.name}</option>))
    const typesList = types.map((type)=>(<option key={type.id} value={type.name}>{type.name}</option>))
    const fulesList = fuels.map((fuel)=>(<option key={fuel.id} value={fuel.name}>{fuel.name}</option>))
    const transmissionsList = transmissions.map((transmission)=>(<option key={transmission.id} value={transmission.name}>{transmission.name}</option>))
    const ACList = AC.map((ac)=>(<option key={ac.id} value={ac.name}>{ac.name}</option>))




    return (
        <section className='box-panel'>
            <section className='panel-info'>
                <label className='input-name'>Tytuł ogłoszenia</label>
                <input  className='input-area' type="text" onChange={handleTitle} value={title}></input>
                <label className='input-name'>Opis samochodu</label>
                <textarea onChange={handleDescription} value={description}></textarea>
                <label className='input-name'>Cena za dzień w PLN</label>
                <input className='input-area' type="number" onChange={handlePrice} value={price}></input>
                <label className='input-name'>Ilość samochodów</label>
                <input className='input-area' type="number" onChange={handleQuantity} value={quantity}></input>

                <div className='car-info'>
                    <div className='info-item'>
                        <label className='input-name'>Marka</label>
                        <select value={makeId} onChange={handleMakeId}>
                            {makesList}
                        </select>
                    </div>
                    <div className='info-item'>
                        <label className='input-name'>Typ</label>
                        <select value={typeCar} onChange={handleTypeCar}>
                            {typesList}
                        </select>
                    </div>
                    
                </div>
                



                {/* stworzyc nowy komponent z inputem */}
                <label className='input-name'>Specyfikacja samochodu</label>
                <div className='parameter-info'>
                    <div className='part1'>
                        <div className='input-row'>
                            <SpecificationIcon icon={YearIcon} alt=""/>
                            <input onChange={handleYear} value={year} type="number" placeholder='Rok'/>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={FuelIcon} alt=""/>
                            <select value={fuel} onChange={handleFuel}>
                                {fulesList}
                            </select>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={ACIcon} alt=""/>
                            <select value={ac} onChange={handleAC}>
                                {ACList}
                            </select>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={TransmissionIcon} alt=""/>
                            <select value={transmission} onChange={handleTransmision}>
                                {transmissionsList}
                            </select>
                        </div>


                    </div>

                    <div className='part2'>
                        <div className='input-row'>
                            <SpecificationIcon icon={HorsepowerIcon} alt=""/>
                            <input onChange={handleHorsepower} value={horsepower} type="number" placeholder='Moc KM'/>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={ColorIcon} alt=""/>
                            <input onChange={handleColor} value={color} type="text" placeholder='Kolor'/>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={EngineIcon} alt=""/>
                            <input onChange={handleEngine} value={engine} type="number" placeholder='Rozmiar silnika'/>
                        </div>
                        <div className='input-row'>
                            <SpecificationIcon icon={DoorIcon} alt=""/>
                            <input onChange={handleDoors} value={doors} type="number" placeholder='Drzwi'/>
                        </div>
                    </div>
                </div>
                <div className='button-wrap'>
                    <button className="send-car-button" onClick={(e)=>handleOnSubmit(e)}>Dodaj</button>
                </div>


            </section>
        </section>
    )
};

export default ParametersPanel;