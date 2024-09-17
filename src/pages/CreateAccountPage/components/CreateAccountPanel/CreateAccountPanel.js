import React from 'react';

import './CreateAccountPanel.css'
import CustomInput from '../../../../components/CustomInput/CustomInput';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const CreateAccountPanel = (props) => {

    const navigate = useNavigate();

    const createPermison = (e) => {
        e.preventDefault();
        navigate('create-permission');
    }

    const {
        employees,
        employeeId,
        username,
        password,
        email,
        role,
        roles,
        handleEmployee,
        handleUsername,
        handlePassword,
        handleEmail,
        handleRole,
        createAccount} = props;

    return (
        <>
            <form className='create-account-panel'>
                <CustomSelect type={"employees"} elements={employees} title={"Wybierz pracownika"} handleOnChange={handleEmployee} value={employeeId}/>

                <CustomInput title={"Login"} type={"text"} handleOnChange={handleUsername} value={username}/>
                <CustomInput title={"Hasło"} type={"password"} handleOnChange={handlePassword} value={password}/>
                <CustomInput title={"Email"} type={"email"} handleOnChange={handleEmail} value={email}/>
                <div className='wrap-roles'>
                <CustomSelect type={"roles"} elements={roles} title={"Wybierz uprawnienie"} handleOnChange={handleRole} value={role}/>
                <button onClick={createPermison} type="submit" className='add-roles-button'><IoMdPersonAdd className='icon-roles'/></button>
                </div>
                <button onClick={createAccount} type="submit" className='create-account-button'>Utwórz konto</button>
            </form>
        </>
    )
};

export default CreateAccountPanel;
