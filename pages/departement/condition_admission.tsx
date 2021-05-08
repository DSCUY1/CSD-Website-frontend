import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { ArticleBarbillard } from '../../components/articles';
import Event from '../../components/event';
import Link from 'next/link';

function ConditionAdmission() {
  const [barbillards, setBarbillards] = useState([
      {
        id: 1,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      },
      {
        id: 2,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      },
      {
        id: 3,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      }
    ]);

  const [events, setEvents] = useState([
    {
      date: "12 mars 2021",
      content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
      title: "Séminaire sur la cybersecurite"
    }
  ]);

  return (
    <Layout title="condition admission" nav={{ mainMenu: "departement", subMenu: "conditionAdmission" }}>
      <div className="container-fluid p-0" style={{ marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span className="entete">Condition d'Admission</span>
          </div>
        </div>
      </div>

      <section className="ca-main container-fluid p-0">
        <div className="ca-main--header">
          <div className="ca-main--header-top">
            Baccalauréat Scientifique
          </div>
          <div className="ca-main--header-bottom">
            <span style={{ width: "50px", height: "50px" }}>C</span>
            <span style={{ width: "70px", height: "70px" }}>D</span>
            <span style={{ width: "50px", height: "50px" }}>Ti</span>
          </div>
        </div>

        <div className="ca-main--middel">
          <div className="ca-main--middel-left">
            <div className="ca-elt">
              <span className="ca-elt--image">img</span>
              <span className="ca-elt--text">Tout d’abord vérifiez si votre Baccaulauréat fait partie de ceux indiqué ci haut.</span>
            </div>
            <div className="ca-elt">
              <span className="ca-elt--image">img</span>
              <span className="ca-elt--text">En plus d’avoir un baccalaureat de serie indiqué ci haut, Vérifier si vous respectez les critères ci dessous</span>
            </div>
          </div>
          <div className="ca-main--middel-right"></div>
        </div>

        <div className="ca-main--bottom">
          <span>Ces conditions dependent des filières du departement</span>
          <div>
            <div className="ca-list--left">
              <span>FONDAMENTAL</span>
              <ul>
                <li>Avoir une moyenne supérieur ou egale a 12 en mathématiques</li>
                <li>Avoir une moyenne supérieur ou egale a 12 en Physique</li>
                <li>Avoir une moyenne supérieur ou egale a 12 en Anglais</li>
              </ul>
            </div>
            <div className="ca-separator"></div>
            <div className="ca-list--right">
              <span>ICT</span>
              <ul>
                <li>Avoir une moyenne supérieur ou egale a 12 en mathématiques</li>
                <li>Avoir une moyenne supérieur ou egale a 12 en Physique</li>
                <li>Avoir une moyenne supérieur ou egale a 12 en Anglais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 barbillard evenement-barbillard h-auto">
            <ArticleBarbillard barbillards={barbillards} />
          </div>

          <div className="col-md-6 mb-2" id="events">
            <div className="card w-100" style={{ height: "100%" }}>
              <div className="card-header events-header">
                <h5>Nos évènements</h5>
              </div>
              <div className="card-body events-body">

                <Event event={events[0]} />
                <Event event={events[0]} />
                <Event event={events[0]} />

              </div>

              <div className="card-footer events-footer">
                <Link href="/evenements"><a className="btn link_btn events-btn" tabIndex={-1} role="button" aria-disabled="true">Tous nos évènements  <span>&rarr;</span></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ConditionAdmission;
