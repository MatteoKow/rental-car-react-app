import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './AddProductPage.css'; 

import ParametersPanel from './components/ParametersPanel/ParametersPanel';
import UploadPanel from './components/UploadPanel/UploadPanel';
import request from '../../helpers/request';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SimplyModal from '../../components/SimplyModal/SimplyModal';


const types = [
    {
        id: 1,
        name: "SUV"
    },
    {
        id: 2,
        name: "Sedan"
    },
    {
        id: 3,
        name: "Hatchback"
    },
    {
        id: 4,
        name: "Kombi"
    },
    {
        id: 5,
        name: "Coupe"
    }
];

const fuels = [
    {
        id: 1,
        name: "Benzyna"
    },
    {
        id: 2,
        name: "Diesel"
    },
    {
        id: 3,
        name: "Gaz"
    },
    {
        id: 4,
        name: "Elektyczny"
    }
];

const transmissions = [
    {
        id: 1,
        name: "Automatyczna"
    },
    {
        id: 2,
        name: "Manualna"
    }
];

const AC = [
    {
        id: 1,
        name: "Tak"
    },
    {
        id: 2,
        name: "Nie"
    }
];


const AddProductPage = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [makes, setMakes] = useState([]);

    const [makeId, setMakeId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [typeCar, setTypeCar] = useState(null);
    const [year, setYear] = useState('');
    const [fuel, setFuel] = useState('');
    const [horsepower, setHorsepower] = useState('');
    const [color, setColor] = useState('');
    const [transmission, setTransmission] = useState('');
    const [engine, setEngine] = useState('');
    const [doors, setDoors] = useState('');
    const [ac, setAC] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSimplyModal, setShowSimplyModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [action, setAction] = useState();
    const [quantity, setQuantity] = useState(0);



    const handleMakeId = (e) => setMakeId(e.target.value);
    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleTypeCar = (e) => setTypeCar(e.target.value);
    const handleYear = (e) => setYear(e.target.value);
    const handleFuel = (e) => setFuel(e.target.value);
    const handleHorsepower = (e) => setHorsepower(e.target.value);
    const handleColor = (e) => setColor(e.target.value);
    const handleTransmision = (e) => setTransmission(e.target.value);
    const handleEngine = (e) => setEngine(e.target.value);
    const handleDoors = (e) => setDoors(e.target.value);
    const handleAC = (e) => setAC(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleQuantity = (e) => setQuantity(e.target.value);


    const getMakes = () => {
        request.get('/makes')
        .then(res => {
            setMakes(res.data);
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    }

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
        document.body.classList.add('modal-open');
    }
    const openSimplyModal = () => {
        setShowSimplyModal(true);
        document.body.classList.add('modal-open');
    }

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    }

    const handleConfirm = () => {
            closeModal();
            handleOnSubmit();
    };

    const handleOnSubmit = () => {
        const formData = new FormData();
        formData.append('make_id', makeId);
        formData.append('price', price);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('typeCar', typeCar);
        formData.append('year', year);
        formData.append('fuel', fuel);
        formData.append('horsepower', horsepower);
        formData.append('color', color);
        formData.append('transmission', transmission);
        formData.append('engine', engine);
        formData.append('doors', doors);
        formData.append('ac', ac);
        formData.append('quantity', quantity);

      
        for (let i = 0; i < images.length; i++) {
            formData.append(`carImages`, images[i]);
        }

      
        request.post('/cars/add', formData)
          .then(res => {
            setModalContent("Pomyślnie dodano samochód");
            setAction(() => () => navigate('/user/cars'));
            openSimplyModal();
          })
          .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
              setModalContent(message);
              setAction(() => () => navigate());
              openSimplyModal();
                
            }
          });
      };

    useEffect(getMakes,[])

    return (
        <>
            <div className='main-title'>Dodaj samochód</div>
            <form className='box-panel-wrap'>
                <UploadPanel 
                    images={images}
                    setImages={setImages}
                />
                <ParametersPanel
                    makeId={makeId}
                    makes={makes}
                    title={title}
                    description={description}
                    year={year}
                    fuels={fuels}
                    horsepower={horsepower}
                    color={color}
                    transmissions={transmissions}
                    engine={engine}
                    doors={doors}
                    AC={AC}
                    price={price}
                    types={types}
                    quantity={quantity}
                    handleQuantity={handleQuantity}
                    handleMakeId={handleMakeId}
                    handleTitle={handleTitle}
                    handleDescription={handleDescription}
                    handleTypeCar={handleTypeCar}
                    handleYear={handleYear}
                    handleFuel={handleFuel}
                    handleHorsepower={handleHorsepower}
                    handleColor={handleColor}
                    handleTransmision={handleTransmision}
                    handleEngine={handleEngine}
                    handleDoors={handleDoors}
                    handleAC={handleAC}
                    handlePrice={handlePrice}
                    handleOnSubmit={openModal}
                />
                
            </form>
            <Modal showModal={showModal} closeModal={closeModal} onConfirm={(e)=> handleConfirm(e)} text={"Czy napewno chcesz dodać auto?"}/>
            <SimplyModal showModal={showSimplyModal} closeModal={closeModal} onConfirm={action} text={modalContent}/>
        </>
    ) 
}; 

export default AddProductPage;