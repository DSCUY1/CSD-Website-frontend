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
          <div className="col">
            <div className="row barbi">
              <div className="col-md-9 col-sm-12">
                <BarbillardItem />
                <BarbillardItem />
                <BarbillardItem />
              </div>
              <div className="col-md-3 col-sm-12 p-0">
                <div className="card w-100 h-100 barbillard-filtre">
                  <div className="barbillard-filtre-search">
                    <select defaultValue="f3" name="filtre" id="" className="form-control p-1 m-2" style={{ width: "95%" }}>
                      <option value="f1">aucun</option>
                      <option value="f2">notes</option>
                      <option value="f3">communique</option>
                    </select>
                  </div>
                  <hr className="m-0"/>
                </div>
              </div>
            </div>
          </div>

          <Pagination />
        </div>

        <EventLink events={events} />
      </div>
    </Layout>
  );
}

export default Barbillard;
