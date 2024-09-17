import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../helpers/request';
import { MdClose } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import { parseISO, format} from 'date-fns';
import './BookingDetailsPage.css';
import CarsPanel from './components/CarsPanel/CarsPanel';
import BookingDetailsPanel from './components/BookingDetailsPanel/BookingDetailsPanel';
import BookingPricePanel from './components/BookingPricePanel/BookingPricePanel';
import BookingPersonalInfoPanel from './components/BookingPersonalInfoPanel/BookingPersonalInfoPanel';
import Modal from '../../components/Modal/Modal';



const BookingDetailsPage = () => {

    const { id } = useParams();
    const token = Cookies.get('access_token');
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id; 
    const userRole = decodedToken.role; 



    const [booking, setBooking] = useState('');
    const bookingDateFormatted = booking.bookingDate ? format(parseISO(booking.bookingDate), 'dd-MM-yyyy') : null;

    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);


    const openModal = () => {
        setShowModal(true)
        document.body.classList.add('modal-open');
    }
    const openConfirmModal = () => {
        setShowConfirmModal(true)
        document.body.classList.add('modal-open');
    }

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    }
    const closeConfirmModal = () => {
        setShowConfirmModal(false);
        document.body.classList.remove('modal-open');
    }

    const handleConfirm = () => {
            closeModal();
            cancelBooking();
    };

    const handleBookingConfirm = () => {
        closeModal();
        confirmBooking();
};

    

    const getBookingInfo = () => {
        request.post(`/bookings/${userId}`, {
            bookingId: id
        },{
            headers: {
                'Authorization': token,
            }
        })
        .then(res => {
            setBooking(res.data[0])
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
        
    }
    const cancelBooking = () => {
        request.patch(`/bookings/${userId}`, {
            bookingId: id
        }, {
            headers: {
                'Authorization': token,
            }
        })
        .then(res => {
            getBookingInfo();
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
        
    }
    const confirmBooking = () => {
        request.patch(`/bookings/confirm/${userId}`, {
            bookingId: id
        }, {
            headers: {
                'Authorization': token,
            }
        })
        .then(res => {
            getBookingInfo();
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
        
    }

    useEffect(getBookingInfo,[])

    return (
            <section className='booking-details-page'>
                <div className='title'>Rezerwacja</div>
                <section className='booking-id-title'>
                    <div className='item-title'>
                        <span>Klient</span>
                        <span>{booking.firstName} {booking.lastName}</span>
                    </div>
                    <div className='item-title'>
                        <span>ID rezerwacji</span>
                        <span>{booking._id} </span>
                    </div> 
                    <div className='item-title'>
                        <span>Data rezerwacji</span>
                        <span>{bookingDateFormatted}</span>
                    </div>
                </section>
                <section className='booking-main-panel'>
                    <div className='left'>
                        <div className=''>Samochód</div>
                        <CarsPanel booking={booking}/>
                    </div>
                    <div className='right'>
                        <div className=''>Oferta</div>
                        <BookingDetailsPanel {...booking}/>
                        <BookingPricePanel {...booking}/>
                    </div>
                </section>
                <section className='personal-info'>
                    <div className=''>Dane osobowe</div>
                    <BookingPersonalInfoPanel {...booking}/>
                </section>
                <div className='action-buttons-container'>
                    {booking.status === "waiting" && userRole.includes(3) ? <button onClick={openConfirmModal} className='confirm-booking-button'><MdOutlineCheck className='confirm-icon'/>Potwierdź rezerwacje</button>: null}
                    {booking.status !== "canceled" ? <button onClick={openModal} className='cancel-booking-button'><MdClose className='close-icon'/> Anuluj rezerwacje</button>: <button className='cancel-booking-button-active'>Rezerwacja anulowana</button>}
                </div>

                <Modal showModal={showModal} closeModal={closeModal} onConfirm={handleConfirm} text={"Czy napewno chcesz anulować rezerwacje?"}/>
                <Modal showModal={showConfirmModal} closeModal={closeConfirmModal} onConfirm={handleBookingConfirm} text={"Czy napewno chcesz potwierdzić rezerwacje?"}/>

            </section>
    )
};

export default BookingDetailsPage;