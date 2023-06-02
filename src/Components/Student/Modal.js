import React from 'react';
import './styles.css';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  return (
   /*  <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div> */
    <div className="modal-overlay">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
    </div>
  );
};

export default Modal;