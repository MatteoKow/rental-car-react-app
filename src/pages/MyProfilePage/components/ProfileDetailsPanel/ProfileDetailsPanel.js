import React from 'react';

import { FiEdit3 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import './ProfileDetailsPanel.css';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import ProfileBarPanel from './components/ProfileBarPanel/ProfileBarPanel';

const ProfileDetailsPanel = (props) => {

    const {
        firstName, lastName, username, email, address, city, zipCode, country, phone, drivingLicense, dateOfBirth, inputIsActive,
        handleUsername,
        handleFirstName,
        handleLastName,
        handleDrivingLicense,
        handleDateOfBirth,
        handleEmail,
        handlePhone,
        handleAddress,
        handleCity,
        handleZipCode,
        handleCountry,
        handleInputActive,
        updateUser,
        handleChangePassword
    } = props;

    return (
        <>
            <form className='profile-details-panel'>
                <ProfileBarPanel {...props}/> 
                <button className='edit-title' onClick={handleInputActive}>{!inputIsActive ? <FiEdit3 className='icon'/> : <AiOutlineClose className='icon'/> } Edytuj </button>
                <section className='input-container'>
                    <CustomInput title={"Imię"} type={"text"} active={inputIsActive} handleOnChange={handleFirstName} value={firstName}/>
                    <CustomInput title={"Nazwisko"} type={"text"} active={inputIsActive}  handleOnChange={handleLastName} value={lastName}/>
                    <CustomInput title={"Login"} type={"text"} active={inputIsActive} handleOnChange={handleUsername} value={username}/>
                    <CustomInput title={"Email"} type={"email"} active={inputIsActive} handleOnChange={handleEmail} value={email}/>
                    <CustomInput title={"Adres"} type={"text"} active={inputIsActive} handleOnChange={handleAddress} value={address}/>
                    <CustomInput title={"Miasto"} type={"text"} active={inputIsActive} handleOnChange={handleCity} value={city}/>
                    <CustomInput title={"Kod pocztowy"} type={"text"} active={inputIsActive} handleOnChange={handleZipCode} value={zipCode}/>
                    <CustomInput title={"Kraj"} type={"text"} active={inputIsActive} handleOnChange={handleCountry} value={country}/>
                    <CustomInput title={"Numer telefonu"} type={"text"} active={inputIsActive} handleOnChange={handlePhone} value={phone}/>
                    <CustomInput title={"Numer parawa jazdy"} type={"text"}  active={inputIsActive} handleOnChange={handleDrivingLicense} value={drivingLicense}/>
                    {/* <CustomInput title={"Data urodzenia"} handleOnChange={handleDateOfBirth} value={dateOfBirth}/> */}
                </section>
                <button disabled={!inputIsActive} className={!inputIsActive ? 'update-profile-button' : 'update-profile-button-active'} onClick={(e)=> updateUser(e)} type="submit">Zapisz zmiany</button>
            </form>
        </>
    )
};

export default ProfileDetailsPanel;