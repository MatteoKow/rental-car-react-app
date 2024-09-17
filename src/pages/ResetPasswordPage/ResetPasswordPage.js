import React, { useState } from 'react';
import './ResetPasswordPage.css';
import ResetPasswordPanel from './components/ResetPasswordPanel/ResetPasswordPanel';
import request from '../../helpers/request';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SimplyModal from '../../components/SimplyModal/SimplyModal';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const navigate = useNavigate()

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
        if (newPassword && confirmNewPassword) {
            setButtonIsActive(true);
        } else {
            setButtonIsActive(false);
        }
    }

   

    const changePassword = () => {
        passwordValidate(confirmNewPassword);
        formValidate();
        if (newPassword === confirmNewPassword) {
            const password = {
                token,
                newPassword,
            }
   
            request.patch(`/users/update/reset`, password, {
                headers: {
                   'Authorization': token
               }
              })
              .then(res => {
                setModalContent("Pomyślnie zmieniono hasło");
                setAction(() => () => navigate('/login'));
                openSimplyModal();
              })
              .catch(e => {
                const { code, message} = e.response.data;
                if (code === 400) {
                    setModalContent(message);
                    setAction(() => () => navigate('/'));
                    openSimplyModal();
                }
              })

        } else {
            alert("Hasła nie pasują, nie można zmienić hasła.");
        }
    }

    return (
        <section className='reset-password-page'>
            <div className='main-title'>Zmień hasło</div>
            <ResetPasswordPanel
                            errorIsActive={errorIsActive}
                            buttonIsActive={buttonIsActive}
                            newPassword={newPassword}
                            confirmNewPassword={confirmNewPassword}
                            handleNewPassword={handleNewPassword}
                            handleConfirmNewPassword={handleConfirmNewPassword}
                            changePassword={openModal}
            
            />
            <Modal showModal={showModal} closeModal={closeModal} onConfirm={(e)=> handleConfirm(e)} text={"Czy napewno chcesz zmienić hasło?"}/>
            <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>
        </section>
    );
}

export default ResetPasswordPage;