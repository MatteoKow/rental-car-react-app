import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { parse, format, differenceInHours } from 'date-fns';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import CarMainPanel from './components/CarMainPanel/CarMainPanel';
import TitlePanel from './components/TitlePanel/TitlePanel';

import './CarDetailsPage.css';
import CarDescriptionPanel from './components/CarDescriptionPanel/CarDescriptionPanel';
import CarSpecificationPanel from './components/CarSpecificationPanel/CarSpecificationPanel';
import CarSummaryPanel from './components/CarSummaryPanel/CarSummaryPanel';
import request from '../../helpers/request';





const CarDetailsPage = React.memo(() => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const startHour = searchParams.get('startHour');
    const endHour = searchParams.get('endHour');

    const startDateTime = parse(`${startDate} ${startHour}`, 'dd-MM-yyyy HH:mm', new Date());
    const endDateTime = parse(`${endDate} ${endHour}`, 'dd-MM-yyyy HH:mm', new Date());

    const hoursDifference = differenceInHours(endDateTime, startDateTime);
    const daysDifference = Math.ceil(hoursDifference / 24);

    const startDateObj = format(startDateTime, 'yyyy-MM-dd HH:mm');
    const endDateObj = format(endDateTime, 'yyyy-MM-dd HH:mm');

    const [car, setCar] = useState('');
    const [totalPrice, setTotalPrice] = useState();
    const [rentalPrice, setRentalPrice] = useState();
    const [summaryExtras, setSummaryExtras] = useState(0);
    const [checkedDriver, setDriverChecked] = useState(false);
    const [checkedInsurance, setInsuaranceChecked] = useState(false);
    const [checkedAssistance, setAssistanceChecked] = useState(false);
    const [checkedNavigation, setNavigationChecked] = useState(false);
    const [checkedWiFi, setWiFiChecked] = useState(false);
    const [checkedChildSeat, setChildSeatChecked] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate(`booking-form/${id}?startDate=${startDateObj}&endDate=${endDateObj}&extraDriver=${checkedDriver}&insurance=${checkedInsurance}&assistance=${checkedAssistance}&navigation=${checkedNavigation}&wifi=${checkedWiFi}&childSeat=${checkedChildSeat}&extras=${summaryExtras}&rentalPrice=${rentalPrice}&totalPrice=${totalPrice}`);
    } 
    const handleOnChangeDriver = () => {
        if (!checkedDriver) {
            setSummaryExtras((prevState)=> prevState + 100);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 100);
        }
        else {
            setSummaryExtras((prevState)=> prevState - 100);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 100);
        }
        setDriverChecked(!checkedDriver)
    };
    const handleOnChangeInsurance = () => {
        if (!checkedInsurance) {
            setSummaryExtras((prevState)=> prevState + 50);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 50);
        } else {
            setSummaryExtras((prevState)=> prevState - 50);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 50);
        }
        setInsuaranceChecked(!checkedInsurance)
    };
    const handleOnChangeAssistane = () => {
        if (!checkedAssistance) {
            setSummaryExtras((prevState)=> prevState + 50);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 50);
        } else {
            setSummaryExtras((prevState)=> prevState - 50);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 50);
        }
        setAssistanceChecked(!checkedAssistance)
    };
    const handleOnChangeNavigation = () => {
        if (!checkedNavigation) {
            setSummaryExtras((prevState)=> prevState + 10);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 10);
        } else {
            setSummaryExtras((prevState)=> prevState - 10);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 10);
        }
        setNavigationChecked(!checkedNavigation)
    };
    const handleOnChangeWiFi = () => {
        if (!checkedWiFi) {
            setSummaryExtras((prevState)=> prevState + 20);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 20);
        } else {
            setSummaryExtras((prevState)=> prevState - 20);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 20);
        }
        setWiFiChecked(!checkedWiFi)
    };
    const handleOnChildSeat = () => {
        if (!checkedChildSeat) {
            setSummaryExtras((prevState)=> prevState + 20);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + 20);
        } else {
            setSummaryExtras((prevState)=> prevState - 20);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - 20);
        }
        setChildSeatChecked(!checkedChildSeat)
    };
    const getCar = () => {
        request.get(`/cars/${id}`)
        .then(res => {
            setCar(res.data[0]);
            const total = res.data[0].price;
            setTotalPrice(total * (daysDifference ? daysDifference : 1) )
            setRentalPrice(total * (daysDifference ? daysDifference : 1) )
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };
    const images = car.image ? car.image.map((url) => ({
        original: url,
        thumbnail: url,
      })) : [];

    useEffect(() => {
        getCar();
    }, []);


    return (
        <section className='details-page'>
            <section className='details-page-left'>
                <CarMainPanel images={images} price={car.price} title={car.title}/>
                <CarDescriptionPanel description={car.description}/>
                <CarSpecificationPanel car={car}/>
            </section>

            <section className='details-page-right'>
                <CarSummaryPanel 
                    title={car.title}
                    startDate={startDateObj}
                    endDate={endDateObj}
                    price={car.price}
                    totalPrice={totalPrice}
                    handleOnSubmit={handleOnSubmit} 
                    handleOnChangeDriver = {handleOnChangeDriver}
                    handleOnChangeInsurance = {handleOnChangeInsurance}
                    handleOnChangeAssistane={handleOnChangeAssistane}
                    handleOnChangeNavigation={handleOnChangeNavigation}
                    handleOnChangeWiFi={handleOnChangeWiFi}
                    handleOnChildSeat={handleOnChildSeat}
                    summaryExtras={summaryExtras}
                    checkedDriver={checkedDriver}
                    checkedInsurance={checkedInsurance}
                    checkedAssistance={checkedAssistance}
                    checkedNavigation={checkedNavigation}
                    checkedWiFi={checkedWiFi}
                    checkedChildSeat={checkedChildSeat}
                />
            </section>

            
        </section>
    ) 
});

export default CarDetailsPage;