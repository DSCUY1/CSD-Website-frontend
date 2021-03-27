import Head from 'next/head'
import Layout from '../components/Layout';
import { ImportantImage } from '../components/toolsComponent/customCarousels';
import Article from '../components/article';

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
                  <h5 class="card-title">Nos programmes de formation</h5>
                  <p class="card-text">Le Département d’informatique offre trois programmes de formation fondamentale et deux programmes de formation professionnelle :</p>
                </div>

                <div className="card-body programmes-body">
                  <div className="programmes-body--list">
                    <ul class="list-group">
                      <li>Licence fondamentale</li>
                      <li>Master recherche</li>
                      <li>Doctorat informatique</li>
                    </ul>
                    <ul class="list-group">
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
              <Article />
            </div>
          </div>
        </div>

    </Layout>
  )
}

// <div class="container-fluid">
//         <div class="row info_univ">

//             <div class="col-sm-6 col-md-6 school_path">

//                 <div class="card shadow-sm">

//                     <div class="card-body">
//                         <h5 class="card-title">Nos programmes de formation</h5>
//                         <p class="card-text">Le Département d’informatique offre trois programmes de formation fondamentale et deux programmes de formation professionnelle :</p>
//                     </div>

//                     <div class="row g-0">
//                         <div class="col-md-7">
//                             <div class="card-body">
//                                 <ul class="list-group">
//                                     <li>Licence fondamentale</li>
//                                     <li>Master recherche</li>
//                                     <li>Doctorat informatique</li>
//                                 </ul>
//                                 <ul class="list-group">
//                                     <li>Licence professionnelle</li>
//                                     <li>Master professionnelle RAM</li>
//                                     <li>Master professionnelle SIGL</li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div class="col-md-4">
//                             <img src="../image/casquet.png" alt="..." />
//                         </div>
//                     </div>

//                     <div class="border_info"></div>
//                 </div>

//             </div>

//             <div class="col-sm col-md communicated">
//                 <div class="card col-sm-11">

//                     <div class="row g-0">

//                         <div class="card-body">

//                             <ul class="list_info">
//                                 <h5 class="card-title">Babillard</h5>

//                                 <li class="list-group-item">
//                                     <p class="card-text">
//                                         <span>11 mars 2021</span><br/>
//                                         <small class="text-muted">Séminaire sur la cybersecurite</small><br/> il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense
//                                     </p>
//                                 </li>
//                                 <li class="list-group-item">
//                                     <p class="card-text">
//                                         <span>11 mars 2021</span><br/>
//                                         <small class="text-muted">Séminaire sur la cybersecurite</small><br/> il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense
//                                     </p>
//                                 </li>
//                                 <li class="list-group-item">
//                                     <p class="card-text">
//                                         <span>11 mars 2021</span><br/>
//                                         <small class="text-muted">Séminaire sur la cybersecurite</small><br/> il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense
//                                     </p>
//                                 </li>
//                             </ul>
//                             <a href="#" class="btn btn_per btn-lg" tabindex="-1" role="button" aria-disabled="true">Liste de tous les articles  <span>&rarr;</span></a>

//                             <div class="border_communicate"></div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
