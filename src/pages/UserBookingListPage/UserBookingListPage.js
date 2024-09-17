import React, { useEffect, useState } from 'react';
import BookingItem from '../../components/BookingItem/BookingItem';
import './UserBookingListPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const UserBookingListPage = () => {
    const navigate = useNavigate();
    
    const [bookings, setBookings] = useState([]);
    const [searchBarData, setSearchBarData] = useState('');
    const [activeButton, setActiveButton] = useState('active');

    const handleOnChangeBar = (e) => setSearchBarData(e.target.value)

    const handleOnClick = (id) => navigate(`${id}`)


    
 
    const getBookings = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id; ;
        request.get(`/bookings/user/${id}`, { 
            headers: {
                'Authorization': token
            }
        })
        .then( res => {
            setBookings(res.data)
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }
    const getCompletedBookings = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;

        request.get(`/bookings/user/completed/${id}`, {
            headers: {
                'Authorization': token
            }
        })
      .then(res => {
        setBookings(res.data);
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
      }
    const getWaitingBookings = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;

        request.get(`/bookings/user/waiting/${id}`, {
            headers: {
                'Authorization': token
            }
        })
      .then(res => {
        setBookings(res.data);
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
      }    
    const getCanceledBookings = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id; ;
        request.get(`/bookings/user/canceled/${id}`, {
            headers: {
                'Authorization': token
            }
        })
      .then(res => {
        setBookings(res.data);
      })
      .catch(e => {
        const { code, message} = e.response.data;
        if (code === 400) {
            alert(message);
        }
    })
      }
    
    const filtered = bookings.filter((booking) => {
        return Object.values(booking).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchBarData.toLowerCase());
          }
          return false;
        });
      });

    const bookingList = filtered.map((booking) => <BookingItem key={booking._id} handleOnClick={handleOnClick} {...booking}/>)
    useEffect(getBookings,[]);
    return (
        <>
        <div className='main-title'>Rezerwacje</div>
        <section className='panel-wrap'>
            <section className='booking-search-bar'>
                <SearchBar handleOnChangeBar={handleOnChangeBar} searchBarData={searchBarData}/>
            </section>

            <section className='filter-bar-booking'>
              <button onClick={() => { getBookings(); setActiveButton('active');}} className={`booking-button ${activeButton === 'active' ? 'active' : ''}`}>
                    Potwierdzone
              </button>
              <button onClick={() => { getWaitingBookings(); setActiveButton('waiting');}} className={`booking-button ${activeButton === 'waiting' ? 'active' : ''}`}>
                    Oczekujące
              </button>
              <button onClick={() => { getCompletedBookings(); setActiveButton('completed'); }} className={`booking-button ${activeButton === 'completed' ? 'active' : ''}`}>
                    Zakończone
              </button>

              <button onClick={() => { getCanceledBookings(); setActiveButton('canceled'); }} className={`booking-button ${activeButton === 'canceled' ? 'active' : ''}`}>
                    Anulowane
              </button> 
              </section>
                {bookingList.length > 0 ? bookingList : <div className='no-booking-banner'>Brak rezerwacji</div>}
        </section>
        </>
    )
};

export default UserBookingListPage;