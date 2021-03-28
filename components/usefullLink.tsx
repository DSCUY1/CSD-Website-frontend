import React from 'react';

function UsefullLink() {
  return (
    <div className="card w-100">
      <div className="card-header links-header">
        <h5 className="card-title">Liens utiles</h5>
      </div>

      <div className="card-body links-body">
        <div className="links-body--list">
          <a href="#" className="btn link_btn btn-block pt-3 pb-3" tabIndex={-1} role="button" aria-disabled="true">Préinscription à l'Université de Yaoundé I  <span>&rarr;</span></a>
          <a href="#" className="btn link_btn btn-block pt-3 pb-3" tabIndex={-1} role="button" aria-disabled="true">Inscription académique  <span>&rarr;</span></a>
          <a href="#" className="btn link_btn btn-block pt-3 pb-3" tabIndex={-1} role="button" aria-disabled="true">Emploi de temps 2021  <span>&rarr;</span></a>
          <a href="#" className="btn link_btn btn-block pt-3 pb-3" tabIndex={-1} role="button" aria-disabled="true">Soumettre une requête à l'administration  <span>&rarr;</span></a>
          <a href="#" className="btn link_btn btn-block pt-3 pb-3" tabIndex={-1} role="button" aria-disabled="true">Télécharger l'application mobile  <span>&rarr;</span></a>
        </div>
      </div>
    </div>
  );
}

export default UsefullLink;
