import React from 'react';
import Layout from '../../components/Layout';

function Enseignants() {
  return (
    <Layout title="enseignants" nav={{ mainMenu: "departement", subMenu: "enseignant" }}>
      nos enseignants
    </Layout>
  );
}

export default Enseignants;
