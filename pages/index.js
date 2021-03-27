import Head from 'next/head'
import Layout from '../components/Layout';
import { ImportantImage } from '../components/toolsComponent/customCarousels';

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

          <div className="card-footer d-flex border-0 pres_footer">
            <a href="#" className="btn hover">Conditions d'admission</a>
            <a href="#" className="btn nohover">Nous Contacter</a>
          </div>

        </div>

        <div className="col-md-5 d-flex">
          <ImportantImage />
        </div>
      </div>
    </Layout>
  )
}
