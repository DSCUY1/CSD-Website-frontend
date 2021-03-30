import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export function EventModal({ show, setClose, event }) {
  return (
    <Modal show={show} onHide={setClose}>
      <Modal.Header>
        <span className="close-modal" onClick={setClose}>&times;</span>
        <Modal.Title>
          <div className="modal-titre">
            { event.title }
          </div>
          <small className="modal-date" style={{ color: "white" }}>{ event.date }</small>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src="/static/home.png" alt="" className="card-img-top" height="200px" />
        <div className="modal-form">
          { event.content }
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-primary border-radius-0">S'inscrire</button>
      </Modal.Footer>
    </Modal>
  )
}

export function BarbillardModal({ show, setClose, barbillard }) {
  return (
    <Modal show={show} onHide={setClose}>
      <Modal.Header>
        <span className="close-modal" onClick={setClose}>&times;</span>
        <Modal.Title>
          <div className="modal-titre">
            { barbillard.title }
          </div>
          <small className="modal-date" style={{ color: "white" }}>{ barbillard.date }</small>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src="/static/home.png" alt="" className="card-img-top" height="200px" />
        <div className="modal-form">
          { barbillard.content }
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-primary border-radius-0">S'inscrire</button>
      </Modal.Footer>
    </Modal>
  )
}
