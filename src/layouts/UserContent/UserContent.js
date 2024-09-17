import React, { useEffect } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import AddProductPage from '../../pages/AddProductPage/AddProductPage';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';
import BookingListPage from '../../pages/BookingListPage/BookingListPage';
import EmployeesPage from '../../pages/EmployeesPage/EmployeesPage';
import AddEmployeePage from '../../pages/AddEmployeePage/AddEmployeePage';
import AccountsPage from '../../pages/AccountsPage/AccountsPage';
import CreateAccountPage from '../../pages/CreateAccountPage/CreateAccountPage';
import MyProfilePage from '../../pages/MyProfilePage/MyProfilePage';


import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import UserBookingListPage from '../../pages/UserBookingListPage/UserBookingListPage';
import ChangePasswordPage from '../../pages/ChangePasswordPage/ChangePasswordPage';
import EditEmployeePage from '../../pages/EditEmployeePage/EditEmployeePage';
import EditEmployeeAccountPage from '../../pages/EditEmployeeAccountPage/EditEmployeeAccountPage';
import BookingDetailsPage from '../../pages/BookingDetailsPage/BookingDetailsPage';
import CarsListPage from '../../pages/CarsListPage/CarsListPage';
import EditCarPage from '../../pages/EditCarPage/EditCarPage';
import PermissionPage from '../../pages/PermissionPage/PermissionPage';
import ReviewsPage from '../../pages/ReviewsPage/ReviewsPage';
import FavouritesCarPage from '../../pages/FavouritesCarPage/FavouritesCarPage';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import AllReviewsPage from '../../pages/AllReviewsPage/AllReviewsPage';



const UserContent = () => {
  const jwtToken = Cookies.get('access_token');
  let role = [];
  if(jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    role = decodedToken.role;
  }


  const ProtectedRoute = ({ requiredRoles, element: Element, ...rest }) => {
    const navigate = useNavigate();
    useEffect(() => {

      try {
        if (!requiredRoles.some(element => role.includes(element))) {
          navigate('/user');
        }
      } catch (error) {
        console.error('Błąd dekodowania tokenu JWT:', error);
        navigate('/user');
      }
    }, [navigate, requiredRoles]);
  
    return <Element {...rest} />;
  };
  
    return (
        <Routes>
            {/* <Route path='/' element={<DashboardPage />}/> */}
            <Route path='/my-profile' element={<MyProfilePage />}/>
            <Route path='/my-profile/change-password' element={<ChangePasswordPage/>}/>
            <Route path='/cars' element={<ProtectedRoute element={CarsListPage}  requiredRoles={[2]}/>}  />
            <Route path='/cars/:id' element={<ProtectedRoute element={EditCarPage}  requiredRoles={[2]}/>}  />
            <Route path='/add-car' element={<ProtectedRoute element={AddProductPage}  requiredRoles={[2]}/>}  />
            <Route path='/bookings' element={<ProtectedRoute element={BookingListPage} requiredRoles={[3]}/>}/>
            <Route path='/bookings/:id' element={<ProtectedRoute element={BookingDetailsPage} requiredRoles={[3]}/>}/>
            <Route path='/all-reviews' element={<ProtectedRoute element={AllReviewsPage} requiredRoles={[3]}/>} /> 
            <Route path='/user-bookings' element={ <ProtectedRoute element={UserBookingListPage} requiredRoles={[1]}/>}/>
            <Route path='/user-bookings/:id' element={<ProtectedRoute element={BookingDetailsPage} requiredRoles={[1]}/>}/>
            <Route path='/reviews' element={<ProtectedRoute element={ReviewsPage} requiredRoles={[1]}/>}/>
            <Route path='/favourites' element={<ProtectedRoute element={FavouritesCarPage} requiredRoles={[1]}/>}/>
            <Route path='/employees' element={<ProtectedRoute element={EmployeesPage} requiredRoles={[4]}/>} />
            <Route path='/employees/edit-employee/:id' element={<ProtectedRoute element={EditEmployeePage} requiredRoles={[4]}/>} />
            <Route path='/employees/add-employee' element={<ProtectedRoute element={AddEmployeePage} requiredRoles={[4]}/>} />
            <Route path='/accounts' element={<ProtectedRoute element={AccountsPage} requiredRoles={[4]}/>} />
            <Route path='/accounts/edit-account/:id' element={<ProtectedRoute element={EditEmployeeAccountPage} requiredRoles={[4]} />} />
            <Route path='/accounts/create-account' element={<ProtectedRoute element={CreateAccountPage} requiredRoles={[4]}/>} /> 
            <Route path='/accounts/create-account/create-permission' element={<ProtectedRoute element={PermissionPage} requiredRoles={[4]}/>} />
            <Route path='/statistics' element={<ProtectedRoute element={StatisticsPage} requiredRoles={[5]}/>} /> 
            <Route path='*' element={<MyProfilePage />}/>
        </Routes>
    )
};

export default UserContent;