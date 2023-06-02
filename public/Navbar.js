import React, {Component,useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Modal from './Student/Modal';
import Complaint from './Student/Complaint';

function Navbar () {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }

    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#e3f2fd'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome Nitin 
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <FontAwesomeIcon icon={faHouse} className="text-primary" style={{ fontSize: '2rem' }} />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Complaints
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" onClick={openModal}>Register Complaint(s)</button>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Complaints(s)
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      View status
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <FontAwesomeIcon icon={faPowerOff} className="text-primary" style={{ fontSize: '2rem', padding: '1rem' }} /> */}
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showModal && (
        <Modal onClose={closeModal}>
          <Complaint/>
        </Modal>
      )}
      </>
    );
}

export default Navbar;
