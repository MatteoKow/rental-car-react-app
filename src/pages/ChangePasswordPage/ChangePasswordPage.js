import React, { useState } from 'react';
import './ChangePasswordPage.css';
import ChangePasswordPanel from './components/ChangePasswordPanel/ChangePasswordPanel';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import request from '../../helpers/request';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SimplyModal from '../../components/SimplyModal/SimplyModal';


const ChangePasswordPage = () => {

    const navigate = useNavigate()

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorIsActive, setErrorIsActive] = useState(false);
    const [buttonIsActive, setButtonIsActive] = useState(false);
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
        document.body.classList.remove('modal-open');
    }

    const handleConfirm = () => {
            closeModal();
            changePassword();
    };

    const handleOldPassword = (e) => {
        setOldPassword(e.target.value);
        formValidate();
    }

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        passwordValidate(confirmNewPassword);
        formValidate();
    }

    const handleConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value);
        passwordValidate(e.target.value);
        formValidate();
    }

    const passwordValidate = (confirmedPassword) => {
        if (newPassword === confirmedPassword) {
            setErrorIsActive(false)
        } else {
            setErrorIsActive(true)
        }
    }

    const formValidate = () => {
        if (oldPassword && newPassword && confirmNewPassword) {
            setButtonIsActive(true);
        } else {
            setButtonIsActive(false);
        }
    }

   

    const changePassword = () => {
        passwordValidate(confirmNewPassword);
        formValidate();
        if (newPassword === confirmNewPassword) {
            const token = Cookies.get('access_token');
            const decodedToken = jwt_decode(token);
            const id = decodedToken.id; ;

            const password = {
                id,
                oldPassword,
                newPassword,
                confirmNewPassword
            }
   
            request.patch(`/users/update/password/${id}`, password, {
                headers: {
                   'Authorization': token
               }
              })
              .then(res => {
                setModalContent("Pomyślnie zmieniono hasło");
                setAction(() => () => navigate('/user/my-profile'));
                openSimplyModal();
              })
              .catch(e => {
                const { code, message} = e.response.data;
                if (code === 400) {
                    setModalContent(message);
                    setAction(() => () => navigate(0));
                    openSimplyModal();
                }
              })

        } else {
            alert("Hasła nie pasują, nie można zmienić hasła.");
        }
    }

    return (
        <>
            <div className='main-title'>Zmień hasło</div>
            <ChangePasswordPanel 
                errorIsActive={errorIsActive}
                buttonIsActive={buttonIsActive}
                oldPassword={oldPassword}
                newPassword={newPassword}
                confirmNewPassword={confirmNewPassword}
                handleOldPassword={handleOldPassword}
                handleNewPassword={handleNewPassword}
                handleConfirmNewPassword={handleConfirmNewPassword}
                changePassword={openModal}
            />
            <Modal showModal={showModal} closeModal={closeModal} onConfirm={(e)=> handleConfirm(e)} text={"Czy napewno chcesz zmienić hasło?"}/>
            <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>
        </>

    )
};

export default ChangePasswordPage;