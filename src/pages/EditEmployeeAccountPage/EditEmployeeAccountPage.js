import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './EditEmployeeAccountPage.css'
import DetailsAccountPanel from './components/DetailsAccountPanel/DetailsAccountPanel';
import request from '../../helpers/request';
import { set } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployeeAccountPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inputIsActive, setInputIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState([]);
    const [roles, setRoles] = useState([])

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleRole = (e) => setRole((e.target.value.split(',')).map(Number));
    const handleInputActive = () => setInputIsActive(!inputIsActive);


    const user = {
        id,
        username,
        email,
        role
    };


    const getUser = () => {
        const token = Cookies.get('access_token');
        request.get(`/users/employee/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setUsername(res.data.username);
            setEmail(res.data.email);
            setRole(res.data.role)
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

    const updateUser = (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        request.patch(`/users/update/employee/${id}`, user, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            alert("Zaktualizowano konto");
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
        getUser();
        getRoles();
    }, []);
    return (
        <>
            <div className='main-title'>Edytuj konto</div>
            <DetailsAccountPanel 
                username={username}
                email={email}
                role={role}
                roles={roles}
                inputIsActive={inputIsActive}
                handleInputActive={handleInputActive}
                handleUsername={handleUsername}
                handleEmail={handleEmail}
                handleRole={handleRole}
                updateUser={updateUser} 
            />
        </>
    )
};

export default EditEmployeeAccountPage;