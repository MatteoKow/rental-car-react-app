import React from 'react';
import './AddEmployeePanel.css';
import CustomInput from '../../../../components/CustomInput/CustomInput';

const AddEmployeePanel = (props) => {

    const {
        firstName,
        lastName,
        dateOfBirth,
        jobPosition,
        salary,
        email,
        phone,
        typeDocument,
        idDocument,
        address,
        city,
        code,
        country,
        handleFirstName,
        handleLastName,
        handleDateOfBirth,
        handleJobPosition,
        handleSalary,
        // handleEmail,
        handlePhone,
        handleTypeDocument,
        handleIdDocument,
        handleAddress,
        handleCity,
        handleCode,
        handleCountry,
        sendForm
    } = props;
    return (
        <>
            <form className='add-employee-panel'>

                <CustomInput title={"Imię"} type={"text"} handleOnChange={handleFirstName} value={firstName}/>
                <CustomInput title={"Nazwisko"} type={"text"} handleOnChange={handleLastName} value={lastName}/>
                <CustomInput title={"Nazwa stanowiska"} type={"text"} handleOnChange={handleJobPosition} value={jobPosition}/>
                <CustomInput title={"Pensja w PLN"} type={"text"} handleOnChange={handleSalary} value={salary}/>
                {/* <CustomInput title={"Email"} type={"email"} handleOnChange={handleEmail} value={email}/> */}
                <CustomInput title={"Data urodzenia"} type={"text"} handleOnChange={handleDateOfBirth} value={dateOfBirth}/>
                <CustomInput title={"Numer telefonu"} type={"text"} handleOnChange={handlePhone} value={phone}/>
                <CustomInput title={"Typ dokumentu"} type={"text"} handleOnChange={handleTypeDocument} value={typeDocument}/>
                <CustomInput title={"Numer dokumentu"} type={"text"} handleOnChange={handleIdDocument} value={idDocument}/>

                <CustomInput title={"Adres"} type={"text"} handleOnChange={handleAddress} value={address}/>
                <CustomInput title={"Miasto"} type={"text"} handleOnChange={handleCity} value={city}/>
                <CustomInput title={"Kod pocztowy"} type={"text"} handleOnChange={handleCode} value={code}/>                    
                <CustomInput title={"Kraj"} type={"text"} handleOnChange={handleCountry} value={country}/>

                {/* <CustomInput title={"Data urodzenia"} type={"text"} handleOnChange={handleDateOfBirth} value={dateOfBirth}/> */}

                <button onClick={sendForm} type="submit" className='add-employee-button'>Dodaj pracownika</button>
            </form>
        </>
    )
};

export default AddEmployeePanel;