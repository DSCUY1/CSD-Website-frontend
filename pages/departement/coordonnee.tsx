import React, {useState} from 'react';
import Layout from '../../components/Layout';
import { ArticleBarbillard } from '../../components/articles';
import Event from '../../components/event';
import Link from 'next/link';

function Coordonnee() {
  const [events, setEvents] = useState([
    {
      date: "12 mars 2021",
      content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
      title: "Séminaire sur la cybersecurite"
    }
  ]);

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

  return (
    <Layout title="coordonnee" nav={{ mainMenu: "departement", subMenu: "coordonnee" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span>Coordonnées du Département</span>
          </div>
        </div>

        <div className="row m-0 p-0 coordonneeSection">
          <div className="col-md-5 coordonneeSectionLeft">
            <div className="row">
              <div className="col-md-12 barbillard coordonnee-bar mb-2">
                <ArticleBarbillard barbillards={barbillards} />
              </div>

              <div className="col-md-12 events coordonnee-events mb-2">
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
          </div>

          <div className="col-md-7 mb-2 coordonneeSectionRight">
            <div className="coordonnee-top">
              <div className="coordonnee-title text-muted">
                Le secrétariat du Département d'informatique et les bureaux sont situés à l'extension n° 1 de la Faculté des Sciences de l'Université de Yaoundé I.
              </div>

              <div className="coordonnee-info">
                <h4>Departement d'Informatique</h4>

                <div className="coordonnee-info--top text-muted">
                  <span>Faculté des Sciences</span><br/>
                  <span>Université de Yaoundé I</span><br/>
                  <span>254, Rue de l'Université - Ngoaékélé</span><br/>
                  <span>Yaoundé, Cameroun</span><br/>
                </div>

                <div className="coordonnee-info--bottom text-muted">
                  <span><b>Téléphone</b> : 237 224-432</span><br/>
                  <span><b>Courriel</b> : dept-inf@facsciences-uy1.cm</span><br/>
                </div>

              </div>
            </div>
            <hr className="coordonnee-hr" />
            <div className="coordonnee-bottom">
              <div className="coordonnee-item">
                <h4>Le Chef de Département</h4>
                <div className="coordonnee-item--content text-muted">
                  <span>Dr. Aminou Halidou</span><br />
                  <span>chef-dept-inf@facsciences-uy1.cm</span><br />
                </div>
              </div>

              <div className="coordonnee-item">
                <h4>Secrétaires de direction</h4>
                <div className="coordonnee-item--content text-muted">
                  <span>Pierrette Ateba</span><br />
                  <span>pierrette.ateba@facsciences-uy1.cm</span><br />
                </div>

                <div className="coordonnee-item--content text-muted">
                  <span>Adèle Bala</span><br />
                  <span>adele.bala@facsciences-uy1.cm</span><br />
                </div>
              </div>

              <div className="coordonnee-item">
                <h4>Point focal</h4>
                <div className="coordonnee-item--content text-muted">
                  <span>Responsable (s)</span><br />
                  <span>pointfocal-inf@facsciences-uy1.cm</span><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Coordonnee;
