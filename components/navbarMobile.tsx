import React from 'react';
import NavbarCollapse from './toolsComponent/customCollapse';

function NavbarNavigationMobile() {
  // definition des elements du menu mobile

  let mobileMenu = {
    accueil: <a className="list-group-item list-group-item-action active" href="#">Acceuil</a>,
    departement: <a className="list-group-item list-group-item-action" href="#">Departement</a>,
    information: <a className="list-group-item list-group-item-action" href="#">Informations</a>,
    formation: <a className="list-group-item list-group-item-action" href="#">Formation</a>,
    espaceEtudiant: <a className="list-group-item list-group-item-action" href="#">Espace Etudiants</a>,
    ancienEtudiant: <a className="list-group-item list-group-item-action" href="#">Ancien Etudiants</a>,
    partenaires: <a className="list-group-item list-group-item-action" href="#">Nos Partenaires</a>,
    blog: <a className="list-group-item list-group-item-action" href="#">Blog</a>
  }

  return (
    <div className="list-group navbar-nav-mobile">
      <NavbarCollapse
        trigger={mobileMenu.accueil}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action active-sublist" href="# ">Barbillard</a>
          <a className="list-group-item list-group-item-action " href="# ">Evenements</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.departement}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action" href="# ">Présentation</a>
          <a className="list-group-item list-group-item-action " href="# ">Condition d'admission</a>
          <a className="list-group-item list-group-item-action active-sublist" href="# ">Coodonées</a>
          <a className="list-group-item list-group-item-action" href="# ">Nos poles</a>
          <a className="list-group-item list-group-item-action" href="# ">Nos enseignants</a>
          <a className="list-group-item list-group-item-action" href="# ">Nos options et débouché</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.information}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.formation}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.espaceEtudiant}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.ancienEtudiant}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.partenaires}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>

      <NavbarCollapse
        trigger={mobileMenu.blog}
      >
        <div className="list-group">
          <a className="list-group-item list-group-item-action " href="# ">Sous menu</a>
        </div>
      </NavbarCollapse>
    </div>
  );
}

export default NavbarNavigationMobile;
