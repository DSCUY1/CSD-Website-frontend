import React from 'react';
import Layout from '../../components/Layout';

function Poles() {
  return (
    <Layout title="poles" nav={{ mainMenu: "departement", subMenu: "poles" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span className="entete">Nos Poles</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Poles;
