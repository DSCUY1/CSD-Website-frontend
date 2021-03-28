import React from 'react';

function Event() {
  return (
    <li className="list-group-item event-item">
      <div className="card_date">
        <p>12<br/>Avril</p>
      </div>
      <p className="card-text event-item-content">
        <small className="text-muted">{`{Séminaire sur la cybersecurite}`}</small><br/>
        <span>11 mars 2021</span>
        <br/> <span>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</span>
      </p>
    </li>
  );
}

export default Event;
