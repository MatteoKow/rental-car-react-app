import React from 'react';
import './PermissionsListPanel.css';
import PermissionItem from './components/PermissionItem/PermissionItem';

const PermissionsListPanel = ({rolesDB, deleteRole}) => {
    
    const permissionsList = rolesDB.map(role => <PermissionItem key={role._id} deleteRole={deleteRole} {...role}/>)
    return (
        <section className='permissions-list-panel'>
            {permissionsList}
        </section>
    );
};

export default PermissionsListPanel;