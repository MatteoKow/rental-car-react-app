import React, { useState } from 'react';
import request from '../../helpers/request';
import AddEmployeePanel from './components/AddEmployeePanel/AddEmployeePanel';
import './AddEmployeePage.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    // const [day, setDay] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [salary, setSalary] = useState(0);
    // const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [typeDocument, setTypeDocument] = useState('');
    const [idDocument, setIdDocument] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [country, setCountry] = useState('');

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleDateOfBirth = (e) => setDateOfBirth(e.target.value)
    // const handleDay = (e) => setDay(e.target.value);
    // const handleMonth = (e) => setMonth(e.target.value);
    // const handleYear= (e) => setYear(e.target.value);
    const handleJobPosition= (e) => setJobPosition(e.target.value);
    const handleSalary = (e) => setSalary(e.target.value);
    // const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleTypeDocument = (e) => setTypeDocument(e.target.value);
    const handleIdDocument = (e) => setIdDocument(e.target.value);
    const handleAddress = (e) => setAddress(e.target.value);
    const handleCity = (e) => setCity(e.target.value);
    const handleCode = (e) => setCode(e.target.value);
    const handleCountry = (e) => setCountry(e.target.value);

    const employee = {
        firstName,
        lastName,
        // dateOfBirth: `${year}-${month}-${day}`,
        dateOfBirth,
        jobPosition,
        salary,
        // email,
        phone,
        typeDocument,
        idDocument,
        address,
        city,
        code,
        country,
    }
    const sendForm = (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        request.post('/employees/add', employee, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            alert("Dodano pracownika");
            navigate(-1);
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }


    return (
        <>
            <div className='main-title'>Dodaj pracownika</div>
            <AddEmployeePanel 
                firstName={firstName}
                lastName={lastName}
                dateOfBirth={dateOfBirth}
                jobPosition={jobPosition}
                salary={salary}
                // email={email}
                phone={phone}
                typeDocument={typeDocument}
                idDocument={idDocument}
                address={address}
                city={city}
                code={code}
                country={country}
                handleFirstName={handleFirstName}
                handleLastName={handleLastName}
                handleDateOfBirth={handleDateOfBirth}
                handleJobPosition={handleJobPosition}
                handleSalary={handleSalary}
                // handleEmail={handleEmail}
                handlePhone={handlePhone}
                handleTypeDocument={handleTypeDocument}
                handleIdDocument={handleIdDocument}
                handleAddress={handleAddress}
                handleCity={handleCity}
                handleCode={handleCode}
                handleCountry={handleCountry}
                sendForm={sendForm}
            />
        </>
    )
};

export default AddEmployeePage;