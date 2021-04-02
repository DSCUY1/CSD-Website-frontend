import React, {useState} from 'react';
import Link from 'next/link';

function NavbarNavigation({ ToggleMenuMobile, navigation, onNavigate, nav }) {
  const { accueil, departement, information, formation, espaceEtudiant, ancienEtudiant, nosPartenaires, blog } = navigation;
  const [navigate, setNavigate] = useState({
    accueil: nav.mainMenu === "accueil" ? "":"d-none",
    departement: nav.mainMenu === "departement" ? "":"d-none",
    information: "d-none",
    formation: "d-none",
    espaceEtudiant: "d-none",
    ancienEtudiant: "d-none",
    partenaire: "d-none",
    blog: "d-none"
  });

  const handleNavigate = (navigateTo) => {
    let navigue = {...navigate};

    navigue.accueil = "d-none";
    navigue.departement = "d-none";
    navigue.information = "d-none";
    navigue.formation = "d-none";
    navigue.espaceEtudiant = "d-none";
    navigue.ancienEtudiant = "d-none";
    navigue.partenaire = "d-none";
    navigue.blog = "d-none";

    switch (navigateTo) {
      case "accueil":
        navigue.accueil = "";
        break;
      case "departement":
        navigue.departement = "";
        break;
      case "information":
        navigue.information = "";
        break;
      case "formation":
        navigue.formation = "";
        break;
      case "espaceEtudiant":
        navigue.espaceEtudiant = "";
        break;
      case "ancienEtudiant":
        navigue.ancienEtudiant = "";
        break;
      case "partenaire":
        navigue.partenaire = "";
        break;
      case "blog":
        navigue.blog = "";
        break;
      default: // nothing here
        break;
    }

    setNavigate(navigue);
  }

  return (
    <div id="navbar">
      <nav className="navbar-expand-lg navbar-light d-flex first-navbar">
        <button className="navbar-toggler" type="button" onClick={() => ToggleMenuMobile("toggle-menu-mobile")}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav" id="parent_menu">
          <Link href="/"><a className={`nav-link ${accueil.active}`} aria-current="page" href="#" onClick={() => handleNavigate("accueil")}>Acceuil</a></Link>
          <a className={`nav-link ${departement.active}`} aria-current="page" href="#" onClick={() => handleNavigate("departement")}>Département</a>
          <a className={`nav-link ${information.active}`} aria-current="page" href="#">Informations</a>
          <a className={`nav-link ${formation.active}`} aria-current="page" href="#">Formation</a>
          <a className={`nav-link ${espaceEtudiant.active}`} aria-current="page" href="#">Espace Etudiants</a>
          <a className={`nav-link ${ancienEtudiant.active}`} aria-current="page" href="#">Ancien Etudiants</a>
          <a className={`nav-link ${nosPartenaires.active}`} aria-current="page" href="#">Nos Partenaires</a>
          <a className={`nav-link ${blog.active}`} aria-current="page" href="#">Blog</a>
        </div>

        <form className="d-flex form-search">
          <input className="form-control search_bar" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </nav>
      <hr />
      <nav className="navbar-expand-lg navbar-light d-flex last-navbar">
        <div className="collapse navbar-collapse sub_menu d-flex flex-column align-items-start" id="navbarNavAltMarkup ">
          <div className={`navbar-nav ${navigate.accueil}`} id="home">
            <Link href="/barbillard"><a className={`nav-link ${accueil.sousMenu.barbillard.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "accueil", subMenu: "barbillard"})}>Barbillard</a></Link>
            <Link href="/evenements"><a className={`nav-link ${accueil.sousMenu.evenement.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "accueil", subMenu: "evenement"})}>Evenements</a></Link>
          </div>
          <div className={`navbar-nav ${navigate.departement}`} id="departement">
            <Link href="/departement/presentation"><a className={`nav-link ${departement.sousMenu.presentation.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "departement", subMenu: "presentation"})}>Présentation</a></Link>
            <Link href="/departement/condition_admission"><a className={`nav-link ${departement.sousMenu.conditionAdmission.substr(0, 6)}`} aria-current="page" href="#" onClick={() => onNavigate({MainMenu: "departement", subMenu: "conditionAdmission"})}>Condition d'admission</a></Link>
            <Link href="/departement/coordonnee"><a className={`nav-link ${departement.sousMenu.coordonnee.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "departement", subMenu: "coordonnee"})}>Coodonées</a></Link>
            <Link href="/departement/poles"><a className={`nav-link ${departement.sousMenu.poles.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "departement", subMenu: "poles"})}>Nos poles</a></Link>
            <Link href="/departement/enseignants"><a className={`nav-link ${departement.sousMenu.enseignant.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "departement", subMenu: "enseignant"})}>Nos enseignants</a></Link>
            <Link href="/departement/options"><a className={`nav-link ${departement.sousMenu.options.substr(0, 6)}`} aria-current="page" onClick={() => onNavigate({MainMenu: "departement", subMenu: "options"})}>Nos options et débouché</a></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarNavigation;
