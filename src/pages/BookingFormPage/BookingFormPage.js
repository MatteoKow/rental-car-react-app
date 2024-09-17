import React, { useEffect, useState } from 'react';
import './BookingFormPage.css'
import BookingPanel from './components/BookingPanel/BookingPanel';
import BookingInfo from './components/BookingInfo/BookingInfo';
import request from '../../helpers/request';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import SimplyModal from '../../components/SimplyModal/SimplyModal';

let clientId = null;


const BookingFormPage = () => {

    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const totalPrice = searchParams.get('totalPrice');
    const rentalPrice = searchParams.get('rentalPrice');
    const extrasPrice = searchParams.get('extras');
    const extraDriver = JSON.parse(searchParams.get('extraDriver'));
    const insurance = JSON.parse(searchParams.get('insurance'));
    const assistance = JSON.parse(searchParams.get('assistance'));
    const navigation = JSON.parse(searchParams.get('navigation'));
    const wifi = JSON.parse(searchParams.get('wifi'));
    const childSeat = JSON.parse(searchParams.get('childSeat'));

    const [car, setCar] = useState('');
    const [step, setStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [drivingLicense, setDrivingLicense] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');

    const [showSimplyModal, setShowSimplyModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [action, setAction] = useState();
  
    const openSimplyModal = () => {
        setShowSimplyModal(true);
        document.body.classList.add('modal-open');
    }
  
    const closeModal = () => {
        setShowSimplyModal(false);
        document.body.classList.remove('modal-open');
    }

    const bookingInfo = {
        carId: id,
        clientId,
        totalPrice,
        startDate,
        endDate,
        firstName,
        lastName,
        dateOfBirth: `${year}-${month}-${day}`,
        email,
        phone,
        drivingLicense,
        address,
        city,
        zipCode,
        country,
        rentalPrice,
        extrasPrice,
        extras: {
            extraDriver,
            insurance,
            assistance,
            navigation,
            wifi,
            childSeat
        }
    }

    const validateBookingInfo = () => {
        if (
          firstName === '' ||
          lastName === '' ||
          day === 0 ||
          month === 0 ||
          year === 0 ||
          email === '' ||
          phone === '' ||
          drivingLicense === '' ||
          address === '' ||
          city === '' ||
          zipCode === '' ||
          country === ''
        ) {
          return false;
        }
        return true;
      };

    const makeReservation = () => {
        if(!validateBookingInfo()){
            setModalContent("Nie wszystkie pola zostały uzupełnione!");
            setAction(() => () => closeModal);
            openSimplyModal();
            return
        }
        request.post(`/bookings/add`, bookingInfo)
        .then(res => {
            navigate(`successful?id=${res.data.bookingId}`)
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                navigate('failed');
            }
        }); 
        
    }

    const getUserInfo = () => {
        try {
            const jwtToken = Cookies.get('access_token');
            clientId = jwt_decode(jwtToken).id;
          

        request.get(`/users/${clientId}`, {
            headers: {
                'Authorization': jwtToken
            }
          })
        .then(res => {
        
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setDrivingLicense(res.data.drivingLicense);
            setAddress(res.data.address);
            setCity(res.data.city);
            setZipCode(res.data.zipCode);
            setCountry(res.data.country);
            let birth = new Date(res.data.dateOfBirth)
            setDay(birth.getDate().toString().padStart(2, '0'));
            setMonth((birth.getMonth() + 1).toString().padStart(2, '0'));
            setYear(birth.getFullYear());
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        }); 
    } catch {}
    }

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleDay = (e) => setDay(e.target.value);
    const handleMonth = (e) => setMonth(e.target.value);
    const handleYear = (e) => setYear(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleDrivingLicense = (e) => setDrivingLicense(e.target.value);
    const handleAddress = (e) => setAddress(e.target.value);
    const handleCity = (e) => setCity(e.target.value);
    const handleZipCode = (e) => setZipCode(e.target.value);
    const handleCountry = (e) => setCountry(e.target.value);

    const increaseStep = () => setStep(step + 1);
    const decreaseStep = () => setStep(step - 1);

    const getCar = () => {
        request.get(`/cars/${id}`)
        .then(res => {
            setCar(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };


    useEffect(() => {
        getCar();
        getUserInfo();
    }, []);


    

    return (
        <section className='conteiner-booking'>

            <BookingPanel 
                increaseStep={increaseStep} 
                decreaseStep={decreaseStep} 
                step={step}

                firstName={firstName}
                lastName={lastName} 
                day={day}
                month={month}
                year={year}
                email={email}
                phone={phone}
                drivingLicense={drivingLicense}
                address={address}
                city={city}
                zipCode={zipCode}
                country={country}

                makeReservation = {makeReservation}
                handleFirstName={handleFirstName} 
                handleLastName={handleLastName}
                handleDay={handleDay}
                handleMonth={handleMonth}
                handleYear={handleYear}
                handleEmail={handleEmail}
                handlePhone={handlePhone}
                handleDrivingLicense={handleDrivingLicense}
                handleAddress={handleAddress}
                handleCity={handleCity}
                handleZipCode={handleZipCode}
                handleCountry={handleCountry}

            />
            <BookingInfo startDate={startDate} endDate={endDate} totalPrice={totalPrice} extrasPrice={extrasPrice} rentalPrice={rentalPrice}car={car}/>
            <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>

        </section>
    )
};

export default BookingFormPage;