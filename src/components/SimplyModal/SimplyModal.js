import React from 'react';
import './SimplyModal.css';

const SimplyModal = ({ showModal, closeModal, onConfirm, text}) => {
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
                    <button className="confirm" onClick={handleConfirm}>Ok</button>
                </div>
            </div>
          </div>
        )}
      </>
      );
};

export default SimplyModal;