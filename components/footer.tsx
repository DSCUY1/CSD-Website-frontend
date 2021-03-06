import React from 'react';
import CustomCardFooter from './toolsComponent/customCardFooter';
import Link from 'next/link';

function Footer() {
  let header_card1 = <>
    <img src="/static/logo_fac.png" alt="..."/>
    <div className="ps-2 d-flex header-body-card ml-3 text-light">
      <h5 className="fs-18">Departement d'informatique</h5>
      <h6 className="fs-15 op-6 text-light">Université de Yaoundé I</h6>
    </div>
  </>;

  let header_card2 = <h2 className="fs-18 op-6 text-light">INFORMATIONS</h2>;
  let header_card3 = <h2 className="fs-18 op-6 text-light">NOS SITES WEB</h2>;

  let footer_card1 = <a href="" className="btn-card btn btn-link p-2 text-decoration-none text-white">Mon portail</a>;
  let footer_card2 = <a href=""><img className="m-0" src="/static/logo_playStore.png" alt="" /></a>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm footer-links">
          <div className="row">
            <CustomCardFooter
              headerCard={header_card1}
              footerCard={footer_card1}
            >
              <Link href="/departement/presentation"><a href="#" className="text-decoration-none text-white">Présentation</a></Link><br/>
              <Link href="/departement/condition_admission"><a href="#" className="text-decoration-none text-white">Conditions d'admission</a></Link><br/>
              <Link href="/departement/poles"><a href="#" className="text-decoration-none text-white">Nos pôles</a></Link><br/>
              <Link href="/departement/enseignants"><a href="#" className="text-decoration-none text-white">Nos enseignants</a></Link><br/>
              <Link href="/departement/options"><a href="#" className="text-decoration-none text-white">Options & débouchés</a></Link><br/>
            </CustomCardFooter>

            <CustomCardFooter
              headerCard={header_card2}
              footerCard={footer_card2}
            >
              <Link href="/"><a href="#" className="text-decoration-none text-white">Babillard</a></Link><br/>
              <a href="#" className="text-decoration-none text-white">Espaces Etudiants</a><br/>
              <a href="#" className="text-decoration-none text-white">Anciens Etudiants</a><br/>
              <a href="#" className="text-decoration-none text-white">Nos partenaires</a><br/>
              <a href="#" className="text-decoration-none text-white">Blog</a><br/>
            </CustomCardFooter>

            <CustomCardFooter
              headerCard={header_card3}
              footerCard={null}
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
          <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <p className="text-light fs-12">Designed & Developed by</p>
              <img src="/static/logo_dsc.png" style={{ height: "40px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
