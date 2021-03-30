import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ImportantImage } from '../components/toolsComponent/customCarousels';
import { ArticleBarbillard, ArticleImportant } from '../components/articles';
import UsefullLink from '../components/usefullLink';
import Event from '../components/event';

export default function Home() {
  const [events, setEvents] = useState([
    {
      date: "12 mars 2021",
      content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
      title: "Séminaire sur la cybersecurite"
    }
  ]);

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
    <Layout title="home">
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
              <div className="card border-0 col-md-7 pl-0">

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
                    <a href="#" className="btn hover">Conditions d'admission</a>
                    <a href="#" className="btn nohover">Nous Contacter</a>
                  </div>
                </div>


              </div>

              <div className="col-md col-sm-12 d-flex p-0 image-interface">
                <ImportantImage />
              </div>
            </div>

          </div>
        </div>

        <div className="row info-universite">
          <div className="col-md-6 programmes d-flex">
            <div className="card" style={{ height: "100%" }}>
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

          <div className="col-md-6 barbillard h-auto">
            <ArticleBarbillard barbillards={barbillards} />
          </div>

        </div>

        <div className="row events-links d-flex">
          <div className="col-md-6 events">
            <div className="card" style={{ height: "100%" }}>
              <div className="card-header events-header">
                <h5>Nos évènements</h5>
              </div>
              <div className="card-body events-body">

                <Event event={events[0]} />
                <Event event={events[0]} />
                <Event event={events[0]} />

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

        <div className="row articles">
        <div className="col">
          <div className="row">
            <div className="articles-header f-15">
              <h2>Liste des articles</h2>
            </div>
          </div>
          <div className="row">
            <ArticleImportant />
            <ArticleImportant />
            <ArticleImportant />
          </div>

          <div className="row ps-5">
            <div className="col-md-4 pt-3">
                <h3 className="white_black m-0 p-0">Nous Contacter</h3>
                <div className="pt-2">
                    <form className="needs-validation" novalidate>
                        <div className="mb-1">
                            <label for="exampleFormControlInput1" className=" fs-13 form-label text-muted fst-italic contact-label">Nom</label>
                            <input required type="email" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="" />
                        </div>

                        <div className="mb-1">
                            <label for="exampleFormControlInput1" className=" fs-13 form-label text-muted fst-italic contact-label">Adresse mail</label>
                            <input required type="email" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="" />
                        </div>

                        <div className="mb-1">
                            <label for="exampleFormControlTextarea1" class=" fs-13 form-label text-muted fst-italic contact-label">Message</label>
                            <div className="content_send position-relative">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="4" required></textarea>
                                <button className="btn_send" type="submit">envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-md pt-3 pe-5">
                <h3 className="white_black">Localisation</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5629.657017099462!2d11.498124624891753!3d3.8597529818540495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfa2c4cefca1%3A0x32ba16566cca02a0!2sDepartement%20D&#39;informatique%20et%20De%20Mathematiques!5e0!3m2!1sfr!2scm!4v1617029395613!5m2!1sfr!2scm" width="100%" height="303px" style={{ border:0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        </div>


        </div>
    </div>






    </Layout>
  )
}
