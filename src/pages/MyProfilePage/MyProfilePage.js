import React, { useEffect, useState } from 'react';
import './MyProfilePage.css'
import ProfileDetailsPanel from './components/ProfileDetailsPanel/ProfileDetailsPanel';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import request from '../../helpers/request';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SimplyModal from '../../components/SimplyModal/SimplyModal';

const MyProfilePage = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const [inputIsActive, setInputIsActive] = useState(false);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [dateOfBirth, setDateOfBith] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSimplyModal, setShowSimplyModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [action, setAction] = useState();

  const openModal = (e) => {
      e.preventDefault();
      setShowModal(true)
      document.body.classList.add('modal-open');
  }
  const openSimplyModal = () => {
      setShowSimplyModal(true);
      document.body.classList.add('modal-open');
  }

  const closeModal = () => {
      setShowModal(false);
      setShowSimplyModal(false);
      document.body.classList.remove('modal-open');
  }

  const handleConfirm = () => {
          closeModal();
          updateUser();
  };

  const handleUsername = (e) => setUsername(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleDrivingLicense = (e) => setDrivingLicense(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBith(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZipCode = (e) => setZipCode(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleInputActive = (e) => {
    e.preventDefault();
    setInputIsActive(!inputIsActive);
  }
  const handleChangePassword = (e) => {
    e.preventDefault();
    navigate('change-password')
  }

  const getUser = () => {
    const token = Cookies.get('access_token');
    const decodedToken = jwt_decode(token);
    const id = decodedToken.id; 

    request.get(`/users/${id}`, {
      headers: {
         'Authorization': token
     }
    })
    .then(res => {
      setUserData(res.data);
      setUsername(res.data.username);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setDrivingLicense(res.data.drivingLicense);
      setDateOfBith(res.data.dateOfBirth);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setAddress(res.data.address);
      setCity(res.data.city);
      setZipCode(res.data.zipCode);
      setCountry(res.data.country);

    })
    .catch(e => {
      const { code, message} = e.response.data;
      if (code === 400) {
          alert(message);
      }
    })
  }
  const user = {
    firstName, 
    lastName, 
    username, 
    email, 
    address, 
    city, 
    zipCode, 
    country, 
    phone, 
    drivingLicense,
    dateOfBirth
  }
  const updateUser = () => {
    const token = Cookies.get('access_token');
    const decodedToken = jwt_decode(token);
    const id = decodedToken.id;

    request.put(`/users/update/${id}`, user, {
      headers: {
         'Authorization': token
     }
    })
    .then(res => {
      setModalContent("Pomyślnie zaktualizowno dane");
      setAction(() => () => closeModal());
      openSimplyModal();
      setInputIsActive(false);
    })
    .catch(e => {
      const { code, message} = e.response.data;
      if (code === 400) {
        setModalContent(message);
        setAction(() => () => navigate());
        openSimplyModal();
    }
    })
  }

  useEffect( getUser,[])
    return (
        <>
            <ProfileDetailsPanel 
              username={username}
              firstName={firstName}
              lastName={lastName}
              drivingLicense={drivingLicense}
              dateOfBirth={dateOfBirth}
              email={email}
              phone={phone}
              address={address}
              city={city}
              zipCode={zipCode}
              country={country}
              handleUsername={handleUsername}
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
              handleDrivingLicense={handleDrivingLicense}
              handleDateOfBirth={handleDateOfBirth}
              handleEmail={handleEmail}
              handlePhone={handlePhone}
              handleAddress={handleAddress}
              handleCity={handleCity}
              handleZipCode={handleZipCode}
              handleCountry={handleCountry}
              updateUser={openModal}
              handleInputActive={handleInputActive}
              inputIsActive={inputIsActive}
              handleChangePassword={handleChangePassword}
            />
            <Modal showModal={showModal} closeModal={closeModal} onConfirm={(e)=> handleConfirm(e)} text={"Czy napewno chcesz zmienić dane?"}/>
            <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>
        </>
    )
};

export default MyProfilePage;