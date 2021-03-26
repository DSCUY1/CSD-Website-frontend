import React, {Component} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ControlledCarousel from './toolsComponent/customCarousel';

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{this.props.title}</title>
        </Head>

        <div className="container-fluid">
          <div className="row">
            <div className="menu-navbar">
              <div class="navbar-nav-mobile">
                <a class="nav-link active" aria-current="page" href="#">Acceuil</a>
                <a class="nav-link" aria-current="page" href="#">Département</a>
                <a class="nav-link" aria-current="page" href="#">Informations</a>
                <a class="nav-link" aria-current="page" href="#">Formation</a>
                <a class="nav-link" aria-current="page" href="#">Espace Etudiants</a>
                <a class="nav-link" aria-current="page" href="#">Ancien Etudiants</a>
                <a class="nav-link" aria-current="page" href="#">Nos Partenaires</a>
                <a class="nav-link" aria-current="page" href="#">Blog</a>
              </div>
            </div>
            <div className="col-sm">
              <div class="container-fluid d-flex justify-content-between header-section">
                <div className="header-section-logo">
                  <Image src="/static/logo_dark.png" height={45} width={45} alt="..." />
                  <p className="mt-2 ps-2">Université de Yaoundé I</p>
                </div>
                <div className="d-flex header-section-info">
                  <a className="color-violet fst-italic text-decoration-none">Visite le site de UY1</a>
                  <button className="btn text-light" type="button">connexion</button>
                </div>
              </div>

              <div id="navbar">
                <nav className="navbar-expand-lg navbar-light d-flex first-navbar">
                  <button class="navbar-toggler" type="button">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="navbar-nav" id="parent_menu">
                    <a class="nav-link active" aria-current="page" href="#">Acceuil</a>
                    <a class="nav-link" aria-current="page" href="#">Département</a>
                    <a class="nav-link" aria-current="page" href="#">Informations</a>
                    <a class="nav-link" aria-current="page" href="#">Formation</a>
                    <a class="nav-link" aria-current="page" href="#">Espace Etudiants</a>
                    <a class="nav-link" aria-current="page" href="#">Ancien Etudiants</a>
                    <a class="nav-link" aria-current="page" href="#">Nos Partenaires</a>
                    <a class="nav-link" aria-current="page" href="#">Blog</a>
                  </div>

                  <form class="d-flex form-search">
                    <input class="form-control search_bar" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </nav>
                <hr />
                <nav className="navbar-expand-lg navbar-light d-flex last-navbar">
                  <div class="collapse navbar-collapse sub_menu d-flex flex-column align-items-start" id="navbarNavAltMarkup ">
                    <div class="navbar-nav d-none" id="home ">
                      <a class="nav-link active" aria-current="page " href="# ">Barbillard</a>
                      <a class="nav-link " aria-current="page " href="# ">Evenements</a>
                    </div>
                    <div class="navbar-nav" id="departement ">
                      <a class="nav-link" aria-current="page " href="# ">Présentation</a>
                      <a class="nav-link " aria-current="page " href="# ">Condition d'admission</a>
                      <a class="nav-link active" aria-current="page " href="# ">Coodonées</a>
                      <a class="nav-link " aria-current="page " href="# ">Nos poles</a>
                      <a class="nav-link " aria-current="page " href="# ">Nos enseignants</a>
                      <a class="nav-link " aria-current="page " href="# ">Nos options et débouché</a>
                    </div>
                  </div>
                </nav>
              </div>

              <ControlledCarousel />

              <div>
                {this.props.children}
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Layout;
