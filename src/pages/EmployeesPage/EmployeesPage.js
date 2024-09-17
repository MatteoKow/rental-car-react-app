import React, { useEffect, useState } from 'react';
import './EmployeesPage.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeItem from './components/EmployeeItem/EmployeeItem';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import request from '../../helpers/request';


const EmployeesPage = () => {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchBarData, setSearchBarData] = useState('')
    const [activeButton, setActiveButton] = useState('active');
    
    const handleEdit = (id) => navigate(`edit-employee/${id}`)

    const handleOnChangeBar = (e) => setSearchBarData(e.target.value)

    const getEmployees = () => {
        const token = Cookies.get('access_token');
    
      request.get(`/employees/`, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        setEmployees(res.data);
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
    }
    
    const archiveEmployee = (id) => {
      const token = Cookies.get('access_token');
    
      request.patch(`/employees/update/archive-employee/${id}`, null, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        getEmployees();
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
    } 

    const activateEmployee = (id) => {
      const token = Cookies.get('access_token');
    
      request.patch(`/employees/update/activate/${id}`, null, {
        headers: {
            'Authorization': token
        }
      })
      .then(res => {
        getInactiveEmployees()
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
    }

    const getInactiveEmployees = () => {
      const token = Cookies.get('access_token');
  
    request.get(`/employees/inactive`, {
      headers: {
          'Authorization': token
      }
    })
    .then(res => {
      setEmployees(res.data);
    })
    .catch(e => {
      const { code, message} = e.response.data;
      if (code === 400) {
          alert(message);
      }
  })
    }

    const filtered = employees.filter((employee) => {
        return Object.values(employee).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchBarData.toLowerCase());
          }
          return false;
        });
      });

    const employeesList = filtered.map((employee) => <EmployeeItem key={employee._id} handleEdit={handleEdit} archiveEmployee={archiveEmployee} activateEmployee={activateEmployee} {...employee}/>)

    useEffect(getEmployees, [])

    return (
        <>
            <div className='main-title'>Pracownicy</div>
            <section className='employee-page'>
              <section className='action-panel'>
                  <SearchBar handleOnChangeBar={handleOnChangeBar} searchBarData={searchBarData}/>
                  <button className='add-employee' onClick={()=> navigate('/user/employees/add-employee')}>Dodaj pracownika</button>
              </section>
              <section className='filter-bar'> 
              <button
                        onClick={() => {
                            getEmployees();
                            setActiveButton('active');
                        }}
                        className={`employees-button ${activeButton === 'active' ? 'active' : ''}`}
                    >
                        Aktywni
                    </button>
                    <button
                        onClick={() => {
                            getInactiveEmployees();
                            setActiveButton('inactive');
                        }}
                        className={`employees-button ${activeButton === 'inactive' ? 'active' : ''}`}
                    >
                        Nieaktywni
                    </button>
              </section>
              <section className='employees-list'>
                  {employeesList}
              </section>
            </section>
        </>
    )
};

export default EmployeesPage;