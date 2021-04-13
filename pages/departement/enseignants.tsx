import React from 'react';
import Layout from '../../components/Layout';

function Enseignants() {
  return (
    <Layout title="enseignants" nav={{ mainMenu: "departement", subMenu: "enseignant" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span className="entete">Nos Enseignants</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Enseignants;
