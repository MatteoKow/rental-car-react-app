import React, { useState, useEffect } from 'react';
import './PermissionPage.css';
import CreatePermissionPanel from './components/CreatePermissionPanel/CreatePermissionPanel';
import { useNavigate } from 'react-router-dom';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import PermissionsListPanel from './components/PermissionsListPanel/PermissionsListPanel';


const PermissionPage = () => {
    const navigate = useNavigate();
    const [roleName, setRoleName] = useState('');
    const [roles, setRoles] = useState([]);
    const [rolesDB, setRolesDB] = useState([]);
    const [activeButton, setActiveButton] = useState('active');


    const handleRoleName = (e) => setRoleName(e.target.value);

    const handleRole = (switchNumber, checked) => {
        if (checked) {
            setRoles((prevRoles) => [...prevRoles, switchNumber]);
        } else {
            setRoles((prevRoles) => prevRoles.filter((role) => role !== switchNumber));
        }
    };

    const permission = {
        name: roleName,
        roles
    }
    const createPermission = (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        request.post('/permissions/add', permission, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            alert("Utworzono uprawnienie");
            navigate(-1);
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
            setRolesDB(res.data)
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }
    const deleteRole = (id) => {
        const token = Cookies.get('access_token');
        request.delete(`/permissions/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getRoles();
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    } 

    useEffect(getRoles,[])
    return (
        <>
            <div className='main-title-permission'>Uprawnienia</div>
            <section className='filter-bar-permission'> 
              <button
                        onClick={() => {
                            setActiveButton('active');
                        }}
                        className={`permission-button ${activeButton === 'active' ? 'active' : ''}`}
                    >
                        Dodaj
                    </button>
                    <button
                        onClick={() => {
                            setActiveButton('inactive');
                        }}
                        className={`permission-button ${activeButton === 'inactive' ? 'active' : ''}`}
                    >
                        Uprawnienia
                    </button>
              </section>
            {activeButton === 'active' ? 
                <CreatePermissionPanel roleName={roleName} handleRoleName={handleRoleName} handleRole={handleRole} roles={roles} createPermission={createPermission}/>
                :
                <PermissionsListPanel rolesDB={rolesDB} deleteRole={deleteRole}/>
            }
            
        </>
    );
};

export default PermissionPage;