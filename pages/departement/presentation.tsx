import React, {useState} from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { ImportantImage } from '../../components/toolsComponent/customCarousels';
import { ArticleBarbillard } from '../../components/articles';
import UsefullLink from "../../components/usefullLink";

function Presentation() {
  const [barbillards, setBarbillards] = useState([
      {
        id: 1,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      },
      {
        id: 2,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      },
      {
        id: 3,
        date: "12 mars 2021",
        content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
        title: "Séminaire sur la cybersecurite"
      }
    ]);

  return (
    <Layout title="presentation" nav={{ mainMenu: "departement", subMenu: "presentation" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row">
          <div className="col" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span className="entete">Présentation</span>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row section-presentation">
          <div className="col">
            <div className="row">
              <div className="col section-presentation-header border-0">
                <h5 className="card-title pres_subtitle">Faculté des Sciences</h5>
                <h1 className="card-title pres_title">Département d'Informatique</h1>
              </div>
            </div>

            <div className="row">
              <div className="card border-0 col-md-12 pl-0">

                <div className="texte card-body border-0">

                  <p className="card-text">
                    Les enseignements d’Informatique ont démarré à la Faculté des Sciences de l’Université de Yaoundé en 1978. A la faveur de la convention tripartite signée entre l’Université des Nations Unies (UNU), l’Institut National de Recherche en Informatique et Automatique
                    (INRIA) et l’Université de Yaoundé I en 1985, la Maîtrise a démarré, suivie l’année d’après par le cycle de Doctorat.<br/><br/>

                    <small className="text-muted fs-15">
                      L’informatique est partout dans nos vies. Que ce soit dans nos téléphones,
                      nos réfrigérateurs ou nos voitures, l’informatique révolutionne la façon dont nous communiquons, pensons et travaillons.
                    </small>
                  </p>

                  <div className="pres_footer">
                    <Link href="/departement/condition_admission"><a className="btn hover">Conditions d'admission</a></Link>
                    <a href="#" className="btn nohover">Nous Contacter</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="chef-word">
              <div className="chef-word--title">
                Mot du chef de departement
              </div>
              <div className="card" id="chef-card">
                <div className="card-body">
                  <header className="chef-card--header">
                    <img src="/static/home.png" alt="" />
                    <div className="chef-card--info">
                      <span>Dr Aminou</span>
                      <span className="text-muted">Chef du departement</span>
                    </div>
                  </header>
                  <hr />
                  <section className="chef-card--content">
                    Ici on aura le mot du chef de departement, avec un message de bienvenu.
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row m-0 mt-3">
          <div className="col section-lists-photo m-0">
            <header className="list-photo--header">Quelques Photos</header>

            <section className="list-photo--main">
              <div className="row">
                <div className="col-md-6 col-sm-6 p-2">
                  <div className="photo-item">
                    <img src="/static/home.png" width="100%" height={200} alt="" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 p-2">
                  <div className="photo-item">
                    <img src="/static/home.png" width="100%" height={200} alt="" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 p-2">
                  <div className="photo-item">
                    <img src="/static/home.png" width="100%" height={200} alt="" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 p-2">
                  <div className="photo-item">
                    <img src="/static/home.png" width="100%" height={200} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 barbillard evenement-barbillard h-auto">
            <ArticleBarbillard barbillards={barbillards} />
          </div>

          <div className="col-md-6 links">
            <UsefullLink />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Presentation;
