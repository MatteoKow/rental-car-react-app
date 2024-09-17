import React, { useEffect, useState } from 'react';
import './AccountsPage.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import AccountItem from './components/AccountItem/AccountItem';
import Cookies from 'js-cookie';
import request from '../../helpers/request';

const AccountsPage = () => {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);
    const [searchBarData, setSearchBarData] = useState('')

    const handleOnChangeBar = (e) => setSearchBarData(e.target.value)
    const handleEdit = (id) => navigate(`edit-account/${id}`)

    const getAccounts = () => {
        const token = Cookies.get('access_token');
    
      request.get(`/users/employees`, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        setAccounts(res.data);
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
    }

    const deleteUser = (id) => {
      const token = Cookies.get('access_token');
    
      request.delete(`/users/${id}`, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        getAccounts();
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
    }

    const filtered = accounts.filter((account) => {
        return Object.values(account).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchBarData.toLowerCase());
          }
          return false;
        });
      });

    const accountsList = filtered.map((account) => <AccountItem key={account._id} handleEdit={handleEdit} deleteUser={deleteUser} {...account}/>)

      useEffect(getAccounts, [])

    return (
        <>
            <div className='main-title'>Konta pracowników</div>
            <section className='accounts-page'>
              <section className='action-panel'>
                  <SearchBar handleOnChangeBar={handleOnChangeBar} searchBarData={searchBarData} />
                  <button className='create-account' onClick={()=> navigate('/user/accounts/create-account')}>Utwórz konto</button>
              </section>
              {accountsList}
            </section>
        </>
    )
};

export default AccountsPage;