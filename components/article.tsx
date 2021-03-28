import React from 'react'

function Article() {
  return (
    <div className="card w-100">
      <div className="card-body">
        <ul className="list-info">
          <h5 className="card-title">Babillard</h5>

          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
        </ul>
        <a href="#" className="btn btn_per btn-lg" tabIndex={-1} role="button" aria-disabled="true">Liste de tous les articles  <span>&rarr;</span></a>
        <div className="border_communicate"></div>
      </div>
    </div>
  );
}

export default Article;
