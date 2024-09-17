import React, { useEffect, useState } from 'react';

import request from '../../helpers/request';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarItem from './components/CarItem/CarItem';
import Cookies from 'js-cookie';

import './CarsListPage.css';
import { useNavigate } from 'react-router-dom';

const CarsListPage = () => {

    const navigate = useNavigate();

    const [allCars, setAllCars] = useState([]);
    const [searchBarData, setSearchBarData] = useState('');
    const [activeButton, setActiveButton] = useState('active');

    const handleOnChangeBar = (e) => setSearchBarData(e.target.value);
    const handleOnClick = (id) => navigate(`${id}`)



    const getInactiveCars = () => {
        request.get('/cars/inactive')
        .then(res => {
            setAllCars(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };

    const getCars = () => {
        request.get('/cars')
        .then(res => {
            setAllCars(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };

    const deactivateCar = (id) => {
        const token = Cookies.get('access_token');
      
        request.patch(`/cars/deactivate/${id}`, null, {
          headers: {
              'Authorization': token
          }
        })
        .then(res => {
          getCars();
        })
        .catch(e => {
          const { code, message} = e.response.data;
          if (code === 400) {
              alert(message);
          }
      })
      } 

    const activateCar = (id) => {
        const token = Cookies.get('access_token');
      
        request.patch(`/cars/activate/${id}`, null, {
          headers: {
              'Authorization': token
          }
        })
        .then(res => {
          getInactiveCars();
        })
        .catch(e => {
          const { code, message} = e.response.data;
          if (code === 400) {
              alert(message);
          }
      })
      } 


    const filtered = allCars.filter((car) => {
        return Object.values(car).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchBarData.toLowerCase());
          }
          return false;
        });
      });

    useEffect(getCars, [])

    const cars = filtered.map((car) => ( <CarItem key={car._id} car={car} deactivateCar={deactivateCar} activateCar={activateCar} handleOnClick={handleOnClick}/>))

    return (
        <>
            <div className='main-title'>Samochody</div>
            <section className='panel-wrap'>
                <section className='cars-search-bar'>
                    <SearchBar handleOnChangeBar={handleOnChangeBar} searchBarData={searchBarData}/>
                </section>
                <section className='filter-bar'>
              <button
                        onClick={() => {
                            getCars();
                            setActiveButton('active');
                        }}
                        className={`employees-button ${activeButton === 'active' ? 'active' : ''}`}
                    >
                        Aktywne
                    </button>
                    <button
                        onClick={() => {
                            getInactiveCars();
                            setActiveButton('inactive');
                        }}
                        className={`employees-button ${activeButton === 'inactive' ? 'active' : ''}`}
                    >
                        Nieaktywne
                    </button>
              </section>
                <section className='cars-list'>
                    {cars.length > 0 ? cars : <div className='no-booking-banner'>Brak aut</div>}
                </section>

            </section>
        </>
        
    )
};

export default CarsListPage;