import React from 'react';
import './ResetPasswordPanel.css';

import CustomInput from '../../../../components/CustomInput/CustomInput';

const ResetPasswordPanel = (props) => {
    const {                
        newPassword,
        confirmNewPassword,
        handleNewPassword,
        handleConfirmNewPassword,
        changePassword,
        errorIsActive,
        buttonIsActive
    } = props;
    return (
        <section className='reset-password-panel'>
            <CustomInput type={"password"} value={newPassword} handleOnChange={handleNewPassword} title="Nowe hasło"/>
            <CustomInput type={"password"} value={confirmNewPassword} handleOnChange={handleConfirmNewPassword}title="Powtórz nowe hasło"/>
            {errorIsActive ? <span>Hasła są różne</span> : null}
            <button disabled={!buttonIsActive} onClick={(e)=>changePassword(e)} className='reset-password'>Zmień hasło</button>
        </section>
    )
};

export default ResetPasswordPanel;