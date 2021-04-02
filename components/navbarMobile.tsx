import React from 'react';
import NavbarCollapse from './toolsComponent/customCollapse';
import Link from "next/link";

function NavbarNavigationMobile({ navigation, onNavigate }) {
  // definition des elements du menu mobile
  const { accueil, departement, information, formation, espaceEtudiant, ancienEtudiant, nosPartenaires, blog } = navigation;

  let mobileMenu = {
    accueil: <Link href="/"><a className={`list-group-item list-group-item-action ${accueil.active}`} href="#">Acceuil</a></Link>,
    departement: <a className={`list-group-item list-group-item-action ${departement.active}`} href="#">Departement</a>,
    information: <a className={`list-group-item list-group-item-action ${information.active}`} href="#">Informations</a>,
    formation: <a className={`list-group-item list-group-item-action ${formation.active}`} href="#">Formation</a>,
    espaceEtudiant: <a className={`list-group-item list-group-item-action ${espaceEtudiant.active}`} href="#">Espace Etudiants</a>,
    ancienEtudiant: <a className={`list-group-item list-group-item-action ${ancienEtudiant.active}`} href="#">Ancien Etudiants</a>,
    partenaires: <a className={`list-group-item list-group-item-action ${nosPartenaires.active}`} href="#">Nos Partenaires</a>,
    blog: <a className={`list-group-item list-group-item-action ${blog.active}`} href="#">Blog</a>
  }

  return (
    <div className="list-group navbar-nav-mobile">
      <div className="scroll-menu">
        <NavbarCollapse
          trigger={mobileMenu.accueil}
        >
          <div className="list-group">
            <Link href="/barbillard"><a className={`list-group-item list-group-item-action ${accueil.sousMenu.barbillard}`} href="# " onClick={() => onNavigate({ MainMenu: "accueil", subMenu: "barbillard" })}>Barbillard</a></Link>
            <Link href="/evenements"><a className={`list-group-item list-group-item-action ${accueil.sousMenu.evenement}`} href="# " onClick={() => onNavigate({ MainMenu: "accueil", subMenu: "evenement" })}>Evenements</a></Link>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.departement}
        >
          <div className="list-group">
            <Link href="/departement/presentation"><a className={`list-group-item list-group-item-action ${departement.sousMenu.presentation}`} onClick={() => onNavigate({ MainMenu: "departement", subMenu: "presentation" })}>Présentation</a></Link>
            <Link href="/departement/condition_admission"><a className={`list-group-item list-group-item-action ${departement.sousMenu.conditionAdmission}`} href="#" onClick={() => onNavigate({ MainMenu: "departement", subMenu: "conditionAdmission" })}>Condition d'admission</a></Link>
            <Link href="/departement/coordonnee"><a className={`list-group-item list-group-item-action ${departement.sousMenu.coordonnee}`} href="# " onClick={() => onNavigate({ MainMenu: "departement", subMenu: "coordonnee" })}>Coodonées</a></Link>
            <Link href="/departement/poles"><a className={`list-group-item list-group-item-action ${departement.sousMenu.poles}`} href="# " onClick={() => onNavigate({ MainMenu: "departement", subMenu: "poles" })}>Nos poles</a></Link>
            <Link href="/departement/enseignants"><a className={`list-group-item list-group-item-action ${departement.sousMenu.enseignant}`} href="# " onClick={() => onNavigate({ MainMenu: "departement", subMenu: "enseignant" })}>Nos enseignants</a></Link>
            <Link href="/departement/options"><a className={`list-group-item list-group-item-action ${departement.sousMenu.options}`} href="# " onClick={() => onNavigate({ MainMenu: "departement", subMenu: "options" })}>Nos options et débouché</a></Link>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.information}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${information.sousMenu.sousMenu}`} href="#" onClick={() => onNavigate({ MainMenu: "information", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.formation}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${formation.sousMenu.sousMenu}`} href="# " onClick={() => onNavigate({ MainMenu: "formation", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.espaceEtudiant}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${espaceEtudiant.sousMenu.sousMenu}`} href="# " onClick={() => onNavigate({ MainMenu: "espaceEtudiant", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.ancienEtudiant}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${ancienEtudiant.sousMenu.sousMenu}`} href="# " onClick={() => onNavigate({ MainMenu: "ancienEtudiant", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.partenaires}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${nosPartenaires.sousMenu.sousMenu}`} href="# " onClick={() => onNavigate({ MainMenu: "nosPartenaires", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>

        <NavbarCollapse
          trigger={mobileMenu.blog}
        >
          <div className="list-group">
            <a className={`list-group-item list-group-item-action ${blog.sousMenu.sousMenu}`} href="# " onClick={() => onNavigate({ MainMenu: "blog", subMenu: "sousMenu" })}>Sous menu</a>
          </div>
        </NavbarCollapse>
      </div>

      <div className="uy1-link mt-5">
        <a className="color-violet fst-italic text-decoration-none">Visite le site de UY1</a>
      </div>
    </div>
  );
}

export default NavbarNavigationMobile;
