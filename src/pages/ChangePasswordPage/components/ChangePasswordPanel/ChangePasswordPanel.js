import React from 'react';
import './ChangePasswordPanel.css';

import CustomInput from '../../../../components/CustomInput/CustomInput';

const ChangePasswordPanel = (props) => {
    const {                
        oldPassword,
        newPassword,
        confirmNewPassword,
        handleOldPassword,
        handleNewPassword,
        handleConfirmNewPassword,
        changePassword,
        errorIsActive,
        buttonIsActive
    } = props;
    return (
        <section className='change-password-panel'>
            <CustomInput type={"password"} value={oldPassword} handleOnChange={handleOldPassword} title="Stare hasło"/>
            <CustomInput type={"password"} value={newPassword} handleOnChange={handleNewPassword} title="Nowe hasło"/>
            <CustomInput type={"password"} value={confirmNewPassword} handleOnChange={handleConfirmNewPassword}title="Powtórz nowe hasło"/>
            {errorIsActive ? <span>Hasła są różne</span> : null}
            <button disabled={!buttonIsActive} onClick={(e)=>changePassword(e)} className='change-password'>Zmień hasło</button>
        </section>
    )
};

export default ChangePasswordPanel;