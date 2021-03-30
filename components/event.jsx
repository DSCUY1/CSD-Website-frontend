import React, { useState } from 'react';
import { EventModal } from './toolsComponent/customModal';

function Event({ event }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="list-group-item event-item" onClick={ setShow } >
        <div className="card_date">
          <p>12<br/>Avril</p>
        </div>
        <p className="card-text event-item-content">
          <small className="text-muted">{`{${ event.title }}`}</small><br/>
          <span>{ event.date }</span>
          <br/> <span> { event.content } </span>
        </p>
      </li>

      <EventModal
        show={show}
        setClose={handleClose}
        event={event}
      />
    </>
  );
}

export default Event;
