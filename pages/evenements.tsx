import React, {useState} from 'react';
import Layout from '../components/Layout';
import { EvenementItem, ArticleBarbillard } from '../components/articles';
import { Pagination } from '../components/toolsComponent/customPagination';
import UsefullLink from "../components/usefullLink";

function Evenement() {
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
    <Layout title="evenements" nav={{ mainMenu: "accueil", subMenu: "evenement" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards">
            <span>Departement informatique</span>
            <span>Evènements</span>
          </div>
        </div>

        <div className="row evenement-container">
          <div className="col-md-6 col-sm-6 evenement-section">
            <EvenementItem />
            <EvenementItem />
          </div>
          <div className="col-md-6 col-sm-6 evenement-section">
            <EvenementItem />
            <EvenementItem />
          </div>
        </div>

        <div className="row">
          <Pagination />
        </div>

        <div className="row mt-2">
          <div className="col-md-6 barbillard evenement-barbillard h-auto">
            <ArticleBarbillard barbillards={barbillards} />
          </div>

          <div className="col-md-6 links">
            <UsefullLink />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Evenement;
