import React, { useState, location } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

import LeftSideLogin from './components/LeftSideLogin/LeftSideLogin';
import RightSideLogin from './components/RightSideLogin/RightSideLogin';
import RegisterPanel from './components/RightSideLogin/components/RegisterPanel/RegisterPanel';
import LoginPanel from './components/RightSideLogin/components/LoginPanel/LoginPanel';
import request from '../../helpers/request';
import SimplyModal from '../../components/SimplyModal/SimplyModal';
import ForgotPassword from './components/RightSideLogin/components/ForgotPassword/ForgotPassword';
const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isForgotActive, setIsForgotActive] = useState(false);



  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [registerLogin, setRegisterLogin] = useState('');
  const [email, setEmail] = useState('');
  const [emailToReset, setEmailToReset] = useState('');

  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState('');

  const [showSimplyModal, setShowSimplyModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [action, setAction] = useState();

  const openSimplyModal = () => {
      setShowSimplyModal(true);
      document.body.classList.add('modal-open');
  }

  const closeModal = () => {
      setShowSimplyModal(false);
      document.body.classList.remove('modal-open');
  }

  const handleRegisterActive = () => setIsRegisterActive(!isRegisterActive);
  const handleForgotActive = () => setIsForgotActive(!isForgotActive);
  const handleOnChangeLogin = (e) => setLogin(e.target.value);
  const handleOnChangePassword = (e) => setPassword(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleDay = (e) => setDay(e.target.value);
  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleEmailToReset = (e) => setEmailToReset(e.target.value);

  const handleRegisterLogin = (e) => setRegisterLogin(e.target.value);
  const handleRegisterPassword = (e) => setRegisterPassword(e.target.value);
  const handleConfirmRegisterPassword = (e) => setConfirmRegisterPassword(e.target.value);

  const loginUser = {
    username: login,
    password: password
  }

  const registerUser = {
    firstName,
    lastName,
    dateOfBirth: `${year}-${month}-${day}`,
    phone: phone,
    username: registerLogin,
    email,
    password: registerPassword,
  }

  const setTokenInCookie = (token) => {
    Cookies.set('access_token', token, { expires: 7 });
  }

  const sendLoginForm = (e) => {
    e.preventDefault();
    request.post('/auth/login', loginUser)
      .then(res => {
        const token = res.data.access_token;
        if (token) {
          setTokenInCookie(token);
          setIsLoggedIn(true);
          navigate('/user');
        } else {
          setModalContent("Bład");
          setAction(() => () => navigate());
          openSimplyModal();
        }
      })
      .catch(e => {
        const { code, message } = e.response.data;
        if (code === 400) {
          setModalContent(message);
          setAction(() => () => navigate());
          openSimplyModal();
        }
      });
  }

  const sendRequestToChangePassword = (e) => {
    e.preventDefault()
    request.post('/auth/mail-to-reset', {emailToReset})
      .then(res => {
        window.location.reload();
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
          setModalContent(message);
          setAction(() => () => navigate());
          openSimplyModal();
        }
      });
  }

  const sendRegisterForm = (e) => {
    e.preventDefault();
    if (registerPassword !== confirmRegisterPassword) {
      setModalContent('Potwierdzenie hasła nie zgadza się z wprowadzonym hasłem.');
      setAction(() => () => navigate());
      openSimplyModal();
      return;
    }
    request.post('/auth/register', registerUser)
      .then(res => {
        window.location.reload();
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
          setModalContent(message);
          setAction(() => () => navigate());
          openSimplyModal();
        }
      });
  }
  const handleBackButtonClick = () => {
    if (isRegisterActive) {
      handleRegisterActive();
    } else if (isForgotActive) {
      handleForgotActive();
    }
  }

  return (
    <section className='login-page'>
      <LeftSideLogin />
      <RightSideLogin loginHandle={handleOnChangeLogin} passwordHandle={handleOnChangePassword}>
        {(isRegisterActive || isForgotActive) ? <button className='back-button' onClick={handleBackButtonClick}>{"<"}</button> : null}
        {isRegisterActive ?  
          <RegisterPanel 
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
            handleDay={handleDay}
            handleMonth={handleMonth}
            handleYear={handleYear} 
            handlePhone={handlePhone} 
            handleRegisterLogin={handleRegisterLogin}
            handleEmail={handleEmail}
            handleRegisterPassword={handleRegisterPassword}
            handleConfirmRegisterPassword={handleConfirmRegisterPassword}
            sendRegisterForm={sendRegisterForm}
  
            firstName={firstName}
            lastName={lastName}
            day={day}
            month={month}
            year={year}
            phone={phone}
            email={email}
            registerLogin={registerLogin}
            registerPassword={registerPassword}
            confirmRegisterPassword={confirmRegisterPassword}
          />
          : isForgotActive ? 
            <ForgotPassword
              handleEmailToReset={handleEmailToReset}
              emailToReset={emailToReset}
              sendRequestToChangePassword={sendRequestToChangePassword}
            />
          :
            <LoginPanel  
              handleOnChangeLogin={handleOnChangeLogin} 
              handleOnChangePassword={handleOnChangePassword} 
              sendLoginForm={sendLoginForm}
              handleRegisterActive={handleRegisterActive} 
              handleForgotActive={handleForgotActive} 
              login={login}
              password={password}
            />
        }
      </RightSideLogin>
      <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>
    </section>
  );
      };

  
  export default LoginPage;