import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import './DetailsAccountPanel.css'
import CustomInput from '../../../../components/CustomInput/CustomInput';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const DetailsAccountPanel = (props) => {

    const {
        username,
        email,
        role,
        roles,
        inputIsActive,
        handleInputActive,
        handleUsername,
        handleEmail,
        handleRole,
        updateUser} = props;

    return (
        <>
            <form className='account-details-panel'>
                <div className='edit-title' onClick={handleInputActive}>{!inputIsActive ? <FiEdit3 className='icon'/> : <AiOutlineClose className='icon'/> } Edytuj </div>
                <section className='input-container'>
                    <CustomInput active={inputIsActive} title={"Login"} type={"text"} handleOnChange={handleUsername} value={username}/>
                    <CustomInput active={inputIsActive} title={"Email"} type={"email"} handleOnChange={handleEmail} value={email}/>
                    <CustomSelect active={inputIsActive} type={"roles"} elements={roles} title={"Wybierz uprawnienie"} handleOnChange={handleRole} value={role}/>
                </section>
                <button disabled={!inputIsActive} className={!inputIsActive ? 'update-account-button' : 'update-account-button-active'} onClick={updateUser} type="submit">Zapisz zmiany</button>
            </form>
        </>
    )
};

export default DetailsAccountPanel;
