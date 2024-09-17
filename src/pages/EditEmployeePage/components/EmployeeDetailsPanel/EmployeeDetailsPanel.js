import React from 'react';

import { FiEdit3 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import './EmployeeDetailsPanel.css';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import ProfileBarPanel from './components/ProfileBarPanel/ProfileBarPanel';

const EmployeeDetailsPanel = (props) => {

    const {
        firstName, lastName, jobPosition, salary, typeDocument, idDocument, address, city, code, country, phone, dateOfBirth, inputIsActive,
        handleFirstName,
        handleLastName,
        handleJobPosition,
        handleSalary,
        handleTypeDocument,
        handleIdDocument,
        handleDateOfBirth,
        handlePhone,
        handleAddress,
        handleCity,
        handleCode,
        handleCountry,
        handleInputActive,
        updateEmployee,
    } = props;

    return (
        <>
            <form className='profile-details-panel'>
                <ProfileBarPanel {...props}/> 
                <div className='edit-title' onClick={handleInputActive}>{!inputIsActive ? <FiEdit3 className='icon'/> : <AiOutlineClose className='icon'/> } Edytuj </div>
                <section className='input-container'>
                    <CustomInput title={"Imię"} type={"text"} active={inputIsActive} handleOnChange={handleFirstName} value={firstName}/>
                    <CustomInput title={"Nazwisko"} type={"text"} active={inputIsActive}  handleOnChange={handleLastName} value={lastName}/>
                    <CustomInput title={"Nazwa stanowiska"} type={"text"} active={inputIsActive} handleOnChange={handleJobPosition} value={jobPosition}/>
                    <CustomInput title={"Pensja w PLN"} type={"text"} active={inputIsActive} handleOnChange={handleSalary} value={salary}/>
                    <CustomInput title={"Data urodzenia"} active={inputIsActive} handleOnChange={handleDateOfBirth} value={dateOfBirth}/>
                    <CustomInput title={"Numer telefonu"} type={"text"} active={inputIsActive} handleOnChange={handlePhone} value={phone}/>
                    <CustomInput title={"Typ dokumentu"} type={"text"}  active={inputIsActive} handleOnChange={handleTypeDocument} value={typeDocument}/>
                    <CustomInput title={"Numer dokumentu"} type={"text"}  active={inputIsActive} handleOnChange={handleIdDocument} value={idDocument}/>
                    <CustomInput title={"Adres"} type={"text"} active={inputIsActive} handleOnChange={handleAddress} value={address}/>
                    <CustomInput title={"Miasto"} type={"text"} active={inputIsActive} handleOnChange={handleCity} value={city}/>
                    <CustomInput title={"Kod pocztowy"} type={"text"} active={inputIsActive} handleOnChange={handleCode} value={code}/>
                    <CustomInput title={"Kraj"} type={"text"} active={inputIsActive} handleOnChange={handleCountry} value={country}/>
 
                </section>
                <button disabled={!inputIsActive} className={!inputIsActive ? 'update-profile-button' : 'update-profile-button-active'} onClick={updateEmployee} type="submit">Zapisz zmiany</button>
            </form>
        </>
    )
};

export default EmployeeDetailsPanel;