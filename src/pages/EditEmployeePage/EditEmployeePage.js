import React, { useEffect, useState } from 'react';
import './EditEmployeePage.css';
import EmployeeDetailsPanel from './components/EmployeeDetailsPanel/EmployeeDetailsPanel';
import Cookies from 'js-cookie';
import request from '../../helpers/request';
import {useNavigate, useParams } from 'react-router-dom';

const EditEmployeePage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState([]);
    const [inputIsActive, setInputIsActive] = useState(false);
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [salary, setSalary] = useState(0);
    const [dateOfBirth, setDateOfBith] = useState('');
    const [phone, setPhone] = useState('');
    const [typeDocument, setTypeDocument] = useState('');
    const [idDocument, setIdDocument] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [country, setCountry] = useState('');
  
    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleJobPosition = (e) => setJobPosition(e.target.value);
    const handleSalary = (e) => setSalary(e.target.value);
    const handleDateOfBirth = (e) => setDateOfBith(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleTypeDocument = (e) => setTypeDocument(e.target.value);
    const handleIdDocument = (e) => setIdDocument(e.target.value);
    const handleAddress = (e) => setAddress(e.target.value);
    const handleCity = (e) => setCity(e.target.value);
    const handleCode = (e) => setCode(e.target.value);
    const handleCountry = (e) => setCountry(e.target.value);

    const handleInputActive = () => setInputIsActive(!inputIsActive);
    const handleChangePassword = (e) => {
      e.preventDefault();
      navigate('change-password')
    }

    const getEmployee = () => {
        const token = Cookies.get('access_token');
    
        request.get(`/employees/${id}`, {
          headers: {
             'Authorization': token
         }
        })
        .then(res => {
          setUserData(res.data);
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setJobPosition(res.data.jobPosition);
          setSalary(res.data.salary);
          setTypeDocument(res.data.typeDocument);
          setIdDocument(res.data.idDocument)
          setDateOfBith(res.data.dateOfBirth);
          setPhone(res.data.phone);
          setAddress(res.data.address);
          setCity(res.data.city);
          setCode(res.data.code);
          setCountry(res.data.country);
    
        })
        .catch(e => {
          const { code, message} = e.response.data;
          if (code === 400) {
              alert(message);
          }
        })
      }
      const employee = {
        firstName, 
        lastName, 
        jobPosition,
        salary,
        typeDocument,
        idDocument,
        address, 
        city, 
        code, 
        country, 
        phone, 
        dateOfBirth
      }
      const updateEmployee = (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');    
        request.put(`/employees/update/${id}`, employee, {
          headers: {
             'Authorization': token
         }
        })
        .then(res => {
          navigate(0);
        })
        .catch(e => {
          const { code, message} = e.response.data;
          if (code === 400) {
              alert(message);
          }
        })
      }
    
      useEffect( getEmployee,[])

    return (
        <>
        <EmployeeDetailsPanel 
          inputIsActive={inputIsActive}
          firstName={firstName}
          lastName={lastName}
          jobPosition={jobPosition}
          salary={salary}
          typeDocument={typeDocument}
          idDocument={idDocument}
          dateOfBirth={dateOfBirth}
          phone={phone}
          address={address}
          city={city}
          code={code}
          country={country}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleDateOfBirth={handleDateOfBirth}
          handleJobPosition={handleJobPosition}
          handleSalary={handleSalary}
          handleTypeDocument={handleTypeDocument}
          handleIdDocument={handleIdDocument}
          handlePhone={handlePhone}
          handleAddress={handleAddress}
          handleCity={handleCity}
          handleCode={handleCode}
          handleCountry={handleCountry}
          updateEmployee={updateEmployee}
          handleInputActive={handleInputActive}
          handleChangePassword={handleChangePassword}
        />
    </>
    )
}

export default EditEmployeePage;