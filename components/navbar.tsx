import React from 'react';

function NavbarNavigation({ ToggleMenuMobile }) {
  return (
    <div id="navbar">
      <nav className="navbar-expand-lg navbar-light d-flex first-navbar">
        <button className="navbar-toggler" type="button" onClick={() => ToggleMenuMobile("toggle-menu-mobile")}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav" id="parent_menu">
          <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
          <a className="nav-link" aria-current="page" href="#">Département</a>
          <a className="nav-link" aria-current="page" href="#">Informations</a>
          <a className="nav-link" aria-current="page" href="#">Formation</a>
          <a className="nav-link" aria-current="page" href="#">Espace Etudiants</a>
          <a className="nav-link" aria-current="page" href="#">Ancien Etudiants</a>
          <a className="nav-link" aria-current="page" href="#">Nos Partenaires</a>
          <a className="nav-link" aria-current="page" href="#">Blog</a>
        </div>

        <form className="d-flex form-search">
          <input className="form-control search_bar" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </nav>
      <hr />
      <nav className="navbar-expand-lg navbar-light d-flex last-navbar">
        <div className="collapse navbar-collapse sub_menu d-flex flex-column align-items-start" id="navbarNavAltMarkup ">
          <div className="navbar-nav d-none" id="home ">
            <a className="nav-link active" aria-current="page " href="# ">Barbillard</a>
            <a className="nav-link " aria-current="page " href="# ">Evenements</a>
          </div>
          <div className="navbar-nav" id="departement ">
            <a className="nav-link" aria-current="page " href="# ">Présentation</a>
            <a className="nav-link " aria-current="page " href="# ">Condition d'admission</a>
            <a className="nav-link active" aria-current="page " href="# ">Coodonées</a>
            <a className="nav-link " aria-current="page " href="# ">Nos poles</a>
            <a className="nav-link " aria-current="page " href="# ">Nos enseignants</a>
            <a className="nav-link " aria-current="page " href="# ">Nos options et débouché</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarNavigation;
