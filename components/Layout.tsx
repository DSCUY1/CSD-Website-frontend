import React, {Component} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ControlledCarousel from './toolsComponent/customCarousel';
import CustomCardFooter from './toolsComponent/customCardFooter';

class Layout extends Component {
  render() {
    let header_card1 = <>
      <img src="/static/logo_fac.png" alt="..." style={{ height: "60px", width: "60px" }}/>
      <div className="ps-2 d-flex header-body-card ml-3 text-light">
        <h5 className="fs-18">Departement d'informatique</h5>
        <h6 className="fs-15 op-6 text-light">Université de Yaoundé I</h6>
      </div>
    </>;
    let header_card2 = <h2 className="fs-18 op-6 text-light">INFORMATIONS</h2>;
    let header_card3 = <h2 className="fs-18 op-6 text-light">NOS SITES WEB</h2>;

    let footer_card1 = <a href="" className="btn-card btn btn-link p-2 text-decoration-none text-white">Mon portail</a>;
    let footer_card2 = <a href=""><img className="m-0" src="/static/logo_playStore.png" style={{ height: "30px", width: "100px" }} alt="" /></a>;

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
              <div className="navbar-nav-mobile">
                <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
                <a className="nav-link" aria-current="page" href="#">Département</a>
                <a className="nav-link" aria-current="page" href="#">Informations</a>
                <a className="nav-link" aria-current="page" href="#">Formation</a>
                <a className="nav-link" aria-current="page" href="#">Espace Etudiants</a>
                <a className="nav-link" aria-current="page" href="#">Ancien Etudiants</a>
                <a className="nav-link" aria-current="page" href="#">Nos Partenaires</a>
                <a className="nav-link" aria-current="page" href="#">Blog</a>
              </div>
            </div>
            <div className="col-sm">
              <div className="container-fluid d-flex justify-content-between header-section">
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
                  <button className="navbar-toggler" type="button">
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

              <ControlledCarousel />

              <div className="mainSection">
                {this.props.children}
              </div>



              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm footer-links">
                    <div className="row">
                      <CustomCardFooter
                        headerCard={header_card1}
                        footerCard={footer_card1}
                        className="col-lg-4 col-md-6 col-sm-12"
                      >
                        <a href="#" className="text-decoration-none text-white">Présentation</a><br/>
                        <a href="#" className="text-decoration-none text-white">Conditions d'admission</a><br/>
                        <a href="#" className="text-decoration-none text-white">Nos pôles</a><br/>
                        <a href="#" className="text-decoration-none text-white">Nos enseignants</a><br/>
                        <a href="#" className="text-decoration-none text-white">Options & débouchés</a><br/>
                      </CustomCardFooter>

                      <CustomCardFooter
                        headerCard={header_card2}
                        footerCard={footer_card2}
                        className="col-lg-4 col-md-6 col-sm-12"
                      >
                        <a href="#" className="text-decoration-none text-white">Babillard</a><br/>
                        <a href="#" className="text-decoration-none text-white">Espaces Etudiants</a><br/>
                        <a href="#" className="text-decoration-none text-white">Anciens Etudiants</a><br/>
                        <a href="#" className="text-decoration-none text-white">Nos partenaires</a><br/>
                        <a href="#" className="text-decoration-none text-white">Blog</a><br/>
                      </CustomCardFooter>

                      <CustomCardFooter
                        headerCard={header_card3}
                        className="col-lg-4 col-md-6 col-sm-12"
                      >
                        <a href="#" className="text-decoration-none text-white">Faculté des Sciences</a><br/>
                          <a href="#" className="text-decoration-none text-white">Ecole Doctorale CRFD Sciences et Technologies</a><br/>
                          <a href="#" className="text-decoration-none text-white">Université de Yaoundé I</a><br/>
                          <a href="#" className="text-decoration-none text-white">MINESUP</a><br/>
                      </CustomCardFooter>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm footer-info">
                    <p className="d-flex text-light fs-12">Tous droits réservés © Université de Yaoundé I</p>
                    <div className="d-flex">
                        <p className="text-light fs-12">Designed & Developed by</p>
                        <img src="/static/logo_dsc.png" style={{ height: "40px" }} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Layout;

// <div class="row fs-13 text-white ff-rr back-black pe-3 ps-3">
//             <p class="col-md-7 d-flex pt-md-3 ps-md-5">Tous droits réservés © Université de Yaoundé I</p>
//             <div class="col-md-5 d-md-flex flex-md-row-reverse">
//                 <img src="../image/logo_dsc.png" alt="">
//                 <p class="pt-3 me-2">Designed & Developed by</p>
//             </div>
//         </div>
