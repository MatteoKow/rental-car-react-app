import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './CreateAccountPage.css'
import CreateAccountPanel from './components/CreateAccountPanel/CreateAccountPanel';
import request from '../../helpers/request';
import { set } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([]);
    const [roles, setRoles] = useState([])

    const handleEmployee = (e) => {
        if(e.target){
            setEmployeeId(e.target.value)
            const employeeObj = employees.find((employee)=> employee._id === e.target.value);
            setFirstName(employeeObj.firstName);
            setLastName(employeeObj.lastName);
            setDateOfBirth(employeeObj.dateOfBirth);
            setPhone(employeeObj.phone);
            setEmployeeId(employeeObj._id)
        }

    }
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleRole = (e) => setRole((e.target.value.split(',')).map(Number));


    const account = {
        employeeId,
        firstName,
        lastName,
        dateOfBirth,
        phone,
        username,
        email,
        password,
        role
    };

    const getEmployees = () => {
        const token = Cookies.get('access_token');
        request.get('/employees/employees-without-account', {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setEmployees(res.data)
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const getRoles = () => {
        const token = Cookies.get('access_token');
        request.get('/permissions', {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setRoles(res.data)
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const createAccount = (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        request.post('/auth/register-employee', account, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            alert("Utworzono konto");
            navigate(-1);
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }
    useEffect(()=> {
        getEmployees();
        getRoles();
    }, []);

    return (
        <>
            <div className='main-title'>Utwórz konto</div>
            <CreateAccountPanel 
                employees={employees}
                employeeId={employeeId}
                username={username}
                password={password}
                email={email}
                role={role}
                roles={roles}
                handleEmployee={handleEmployee}
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handleEmail={handleEmail}
                handleRole={handleRole}
                createAccount={createAccount} 
            />
        </>
    )
};

export default CreateAccountPage;