import React from 'react';
import './CreatePermissionPanel.css';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import Switch from "react-switch";


const CreatePermissionPanel = (props) => {
    const {
        roleName,
        roles,
        handleRoleName,
        handleRole,
        createPermission
        } = props;
    return (
        <>
        <form className='create-permission-panel'>
            <CustomInput title={"Nazwa uprawnienia"} type={"text"} handleOnChange={handleRoleName} value={roleName}/>
            <br/>
            <br/>

                <div className="wrap-switch">
                    <label>Samochody</label>
                    <Switch onChange={(checked) => handleRole(2, checked)} checked={roles.includes(2)} onColor="#000" height={22} width={45} />
                </div>
            <div className="wrap-switch">
                <label>Rezerwacje</label>
                <Switch onChange={(checked) => handleRole(3, checked)} checked={roles.includes(3)} onColor="#000" height={22} width={45} />
            </div>
            <div className="wrap-switch">
                <label>Pracownicy</label>
                <Switch onChange={(checked) => handleRole(4, checked)} checked={roles.includes(4)} onColor="#000" height={22} width={45} />
            </div>
            <div className="wrap-switch">
                <label>Statystyki</label>
                <Switch onChange={(checked) => handleRole(5, checked)} checked={roles.includes(5)} onColor="#000" height={22} width={45} />
            </div>
            <button onClick={createPermission} type="submit" className='create-account-button'>Utwórz uprawnienie</button>
        </form>
    </>
    );
};

export default CreatePermissionPanel;