import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BarbillardItem } from '../components/articles';
import EventLink from '../components/eventLink';
import { Pagination } from '../components/toolsComponent/customPagination';

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

          <Pagination />
        </div>

        <EventLink events={events} />
      </div>
    </Layout>
  );
}

export default Barbillard;
