import React from 'react';
import Layout from '../components/Layout';

function Evenement() {
  return (
    <Layout title="evenements" nav={{ mainMenu: "accueil", subMenu: "evenement" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards">
            <span>Departement informatique</span>
            <span>Evènements</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Evenement;
