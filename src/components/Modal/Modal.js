import React from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal, onConfirm, text}) => {
      const handleConfirm = () => {
        onConfirm();
        closeModal();
      };
    
      return (
        <>
        {showModal && (
          <div className="overlay">
            <div className="modal">
                <p>{text}</p>
                <div className="modal-content">
                    <button className="confirm" onClick={handleConfirm}>Potwierdź</button>
                    <button className="close" onClick={closeModal}>Anuluj</button>
                </div>
            </div>
          </div>
        )}
      </>
      );
};

export default Modal;