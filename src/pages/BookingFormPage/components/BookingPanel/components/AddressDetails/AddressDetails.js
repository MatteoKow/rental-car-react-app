import React from 'react';
import './AddressDetails.css';

const AddressDetails = (props) => {

    const {
        address,
        city,
        zipCode,
        country,
        handleAddress,
        handleCity,
        handleZipCode,
        handleCountry,
    } = props;
    return (
        <>            
            <div className='title-form'>Adres zamieszkania</div>
            <div className='row-5'>
                <input placeholder="Adres" type="text" value={address} onChange={handleAddress} />
            </div>

            <div className='row-1'>
                <input  placeholder="Miasto" type="text" value={city} onChange={handleCity} />
                <input placeholder="Kod pocztowy" type="text" value={zipCode} onChange={handleZipCode} />
            </div>
            <div className='row-5'>
                <input placeholder="Kraj" type="text" value={country} onChange={handleCountry} />
            </div>
        </>
    )
};

export default AddressDetails;