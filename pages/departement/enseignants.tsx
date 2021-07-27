import React, {useState} from 'react';
import Layout from '../../components/Layout';
import Event from '../../components/event';
import { ArticleBarbillard } from '../../components/articles';
import Link from 'next/link';

function EnseignantCard({enseignant}) {
  const {name, description, image} = enseignant;

  return (
    <article className="enseignant-card">
      <div>
        <img src={image} alt="" />
        <span>{description}</span>
      </div>
      <div>
        <span>{name}</span>
        <button className="btn">Mon profil</button>
      </div>
    </article>
  )
}

function Enseignants() {
  const [navigation, setNavigation] = useState({
    td: true,
    doctorant: false,
    docteur: false,
    professeur: false,
    conference: false
  });
  const [currentLink, setCurrentLink] = useState("td");

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

  const [events, setEvents] = useState([
    {
      date: "12 mars 2021",
      content: "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense",
      title: "Séminaire sur la cybersecurite"
    }
  ]);

  const enseignants = [
    {
      id: 1,
      name: "Dilane",
      description: "Depuis l’an 2013, je suis a l’Université de Yaoundé 1 ! Ici on trouvera la description de l’enseigant.",
      image:"/static/home.png"
    },
    {
      id: 2,
      name: "John",
      description: "Depuis l’an 2013, je suis a l’Université de Yaoundé 1 ! Ici on trouvera la description de l’enseigant.",
      image:"/static/home.png"
    },
    {
      id: 3,
      name: "Romuald",
      description: "Depuis l’an 2013, je suis a l’Université de Yaoundé 1 ! Ici on trouvera la description de l’enseigant.",
      image:"/static/home.png"
    },
    {
      id: 4,
      name: "Jeremi",
      description: "Depuis l’an 2013, je suis a l’Université de Yaoundé 1 ! Ici on trouvera la description de l’enseigant.",
      image:"/static/home.png"
    },
    {
      id: 5,
      name: "Claude",
      description: "Depuis l’an 2013, je suis a l’Université de Yaoundé 1 ! Ici on trouvera la description de l’enseigant.",
      image:"/static/home.png"
    }
  ]

  const resetActiveLink = () => {
    let navs = {...navigation};

    navs.td = false;
    navs.doctorant = false;
    navs.docteur = false;
    navs.professeur = false;
    navs.conference = false;

    return navs;
  }

  const selectNewActiveLink = (tabName) => {
    let navs = resetActiveLink();

    switch (tabName) {
      case "td":
        navs.td = true;
        break;
      case "doctorant":
        navs.doctorant = true;
        break;
      case "docteur":
        navs.docteur = true;
        break;
      case "professeur":
        navs.professeur = true;
        break;
      case "conference":
        navs.conference = true;
        break;
      default:
        // nothing here
        break;
    }

    setNavigation(navs);
    setCurrentLink(tabName);
  }

  const displayTeachers = () => {
    let listTeachers = [];

    switch (currentLink) {
      case "td":
        for (let i=0; i<4; i++) {
          listTeachers.push(<EnseignantCard key={i} enseignant={enseignants[0]} />);
        }
        break;
      case "doctorant":
        for (let i=0; i<4; i++) {
          listTeachers.push(<EnseignantCard key={i} enseignant={enseignants[1]} />);
        }
        break;
      case "docteur":
        for (let i=0; i<4; i++) {
          listTeachers.push(<EnseignantCard key={i} enseignant={enseignants[2]} />);
        }
        break;
      case "professeur":
        for (let i=0; i<4; i++) {
          listTeachers.push(<EnseignantCard key={i} enseignant={enseignants[3]} />);
        }
        break;
      case "conference":
        for (let i=0; i<4; i++) {
          listTeachers.push(<EnseignantCard key={i} enseignant={enseignants[4]} />);
        }
        break;
      default:
        // nothing here
        break;
    }

    return listTeachers;
  }

  return (
    <Layout title="enseignants" nav={{ mainMenu: "departement", subMenu: "enseignant" }}>
      <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "-20px" }}>
        <div className="row d-flex flex-column">
          <div className="col enseignant-bar" id="barbillards"  style={{ color: "white", background: "#6A4E77B0" }}>
            <span>Département d'informatique</span>
            <span className="entete">Nos Enseignants</span>
          </div>

          <header className="enseignants-header">
            <nav>
              <a className={`${navigation.td && 'enseignant-active'}`} onClick={() => selectNewActiveLink("td") }>Charge de TD</a>
              <a className={`${navigation.doctorant && 'enseignant-active'}`} onClick={() => selectNewActiveLink("doctorant") }>Doctorant</a>
              <a className={`${navigation.docteur && 'enseignant-active'}`} onClick={() => selectNewActiveLink("docteur") }>Docteur</a>
              <a className={`${navigation.professeur && 'enseignant-active'}`} onClick={() => selectNewActiveLink("professeur") }>Professeur</a>
              <a className={`${navigation.conference && 'enseignant-active'}`} onClick={() => selectNewActiveLink("conference") }>M. de conference</a>
            </nav>
          </header>

          <section className="enseignants-list">
            {
              displayTeachers()
            }
          </section>

          <section className="enseignants-stats">
            <div>Un avis général sur nos enseigants</div>
            <div className="caracteristique">
              <div>
                <span>Disponibilité</span>
                <div className="progress">
                  <div style={{width: "50%"}}></div>
                </div>
              </div>
              <div>
                <span>Discipline</span>
                <div className="progress">
                  <div style={{width: "60%"}}></div>
                </div>
              </div>
              <div>
                <span>Ponctualité</span>
                <div className="progress">
                  <div style={{width: "57%"}}></div>
                </div>
              </div>
              <div>
                <span>Dynamisme</span>
                <div className="progress">
                  <div style={{width: "90%"}}></div>
                </div>
              </div>
              <div>
                <span>Eloquence</span>
                <div className="progress">
                  <div style={{width: "59%"}}></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 barbillard evenement-barbillard h-auto">
            <ArticleBarbillard barbillards={barbillards} />
          </div>

          <div className="col-md-6 mb-2" id="events">
            <div className="card w-100" style={{ height: "100%" }}>
              <div className="card-header events-header">
                <h5>Nos évènements</h5>
              </div>
              <div className="card-body events-body">

                <Event event={events[0]} />
                <Event event={events[0]} />
                <Event event={events[0]} />

              </div>

              <div className="card-footer events-footer">
                <Link href="/evenements"><a className="btn link_btn events-btn" tabIndex={-1} role="button" aria-disabled="true">Tous nos évènements  <span>&rarr;</span></a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Enseignants;
