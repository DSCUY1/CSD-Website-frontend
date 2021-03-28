import Head from 'next/head'
import Layout from '../components/Layout';
import { ImportantImage } from '../components/toolsComponent/customCarousels';
import { ArticleBarbillard, ArticleImportant } from '../components/articles';
import UsefullLink from '../components/usefullLink';
import Event from '../components/event';

export default function Home() {
  return (
    <Layout title="home">
      <div className="container-fluid section-presentation">
        <div className="card border-0 col-md">
          <div className="card-header border-0">
            <h5 className="card-title pres_subtitle">Faculté des Sciences</h5>
            <h1 className="card-title pres_title">Département d'Informatique</h1>
          </div>

          <div className="texte card-body border-0">

            <p className="card-text">
              Les enseignements d’Informatique ont démarré à la Faculté des Sciences de l’Université de Yaoundé en 1978. A la faveur de la convention tripartite signée entre l’Université des Nations Unies (UNU), l’Institut National de Recherche en Informatique et Automatique
              (INRIA) et l’Université de Yaoundé I en 1985, la Maîtrise a démarré, suivie l’année d’après par le cycle de Doctorat.<br/><br/>

              <small className="text-muted">
                L’informatique est partout dans nos vies. Que ce soit dans nos téléphones,
                nos réfrigérateurs ou nos voitures, l’informatique révolutionne la façon dont nous communiquons, pensons et travaillons.
              </small>
            </p>

          </div>

          <div className="card-footer border-0 pres_footer">
            <a href="#" className="btn hover fs-15">Conditions d'admission</a>
            <a href="#" className="btn nohover fs-15">Nous Contacter</a>
          </div>

        </div>

        <div className="col-md-5 col-sm-12 d-flex">
          <ImportantImage />
        </div>
      </div>

        <div className="container-fluid">
          <div className="row info-universite">
            <div className="col-md-6 programmes">
              <div className="card w-100">
                <div className="card-header programmes-header">
                  <h5 className="card-title">Nos programmes de formation</h5>
                  <p className="card-text">Le Département d’informatique offre trois programmes de formation fondamentale et deux programmes de formation professionnelle :</p>
                </div>

                <div className="card-body programmes-body">
                  <div className="programmes-body--list">
                    <ul className="list-group">
                      <li>Licence fondamentale</li>
                      <li>Master recherche</li>
                      <li>Doctorat informatique</li>
                    </ul>
                    <ul className="list-group">
                      <li>Licence professionnelle</li>
                      <li>Master professionnelle RAM</li>
                      <li>Master professionnelle SIGL</li>
                    </ul>
                  </div>

                  <div>
                    <img src="/static/casquet.png" style={{ height: "130px", width: "130px" }} alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 barbillard">
              <ArticleBarbillard />
            </div>

          </div>

          <div className="row events-links">
            <div className="col-md-6 events">
              <div className="card w-100">
                <div className="card-header events-header">
                  <h5>Nos évènements</h5>
                </div>

                <div className="card-body events-body">

                  <Event />
                  <Event />
                  <Event />

                </div>

                <div className="card-footer events-footer">
                  <a href="#" className="btn link_btn events-btn" tabIndex={-1} role="button" aria-disabled="true">Tous nos évènements  <span>&rarr;</span></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 links">
              <UsefullLink />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row articles">

            <ArticleImportant />
            <ArticleImportant />
            <ArticleImportant />
            <ArticleImportant />
            <ArticleImportant />
            <ArticleImportant />

          </div>
        </div>

    </Layout>
  )
}
