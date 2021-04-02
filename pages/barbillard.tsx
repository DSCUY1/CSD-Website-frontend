import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BarbillardItem } from '../components/articles';
import EventLink from '../components/eventLink';

function Barbillard() {
  const [events, setEvents] = useState([
    {
      date: "12 mars 2021",
      content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
      title: "Séminaire sur la cybersecurite"
    }
  ]);

  return (
    <Layout title="barbillard" nav={{ mainMenu: "accueil", subMenu: "barbillard" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards">
            <span>Departement informatique</span>
            <span>Barbillard</span>
          </div>
        </div>

        <div className="row mt-5 barbillards-items">
          <BarbillardItem />
          <BarbillardItem />
          <BarbillardItem />

          <div className="col pagination-section">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item page-next">
                  <span aria-hidden="true" className="text-muted">&gt;</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <EventLink events={events} />
      </div>
    </Layout>
  );
}

export default Barbillard;
