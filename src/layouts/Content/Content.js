import React, { useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage'
import SearchResultsPage from '../../pages/SearchResultsPage/SearchResultsPage';
import UserPage from '../../pages/UserPage/UserPage';
import BookingFormPage from '../../pages/BookingFormPage/BookingFormPage';
import CarDetailsPage from '../../pages/CarDetailsPage/CarDetailsPage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import OurCarsPage from '../../pages/OurCarsPage/OurCarsPage';
import SuccessfulBokingPage from '../../pages/SuccessfulBookingPage/SuccessfulBookingPage';
import FailedBookingPage from '../../pages/FailedBookingPage/FailedBookingPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';
import RegulationsPage from '../../pages/RegulationsPage/RegulationsPage';


const ProtectedRoute =  React.memo(({ setIsLoggedIn, element: Element, ...rest }) => {
    const navigate = useNavigate();
    const token = Cookies.get('access_token');
  
    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);

    return <Element {...rest} setIsLoggedIn={setIsLoggedIn}/>;
  })

const Content = React.memo(({setIsLoggedIn}) => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/our-cars' element={<OurCarsPage />} />
      <Route path='/regulations' element={<RegulationsPage />} />
      <Route path='/results/*' element={<SearchResultsPage />} />
      <Route path='/results/car-details/:id/*' element={<CarDetailsPage />} />
      <Route path='/results/car-details/:id/booking-form/:id/*' element={<BookingFormPage/>} />
      <Route path='/results/car-details/:id/booking-form/:id/successful' element={<SuccessfulBokingPage/>} />
      <Route path='/results/car-details/:id/booking-form/:id/failed' element={<FailedBookingPage/>} />
      <Route path='/reset/:token' element={<ResetPasswordPage/>} />
      <Route path='/user/*' element={<ProtectedRoute element={UserPage} setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
});

export default Content;