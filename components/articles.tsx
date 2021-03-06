import React, {useState} from 'react';
import { BarbillardModal } from './toolsComponent/customModal';
import Link from 'next/link';

export function ArticleBarbillard({ barbillards }) {
  const [show, setShow] = useState(false);
  const [idBar, setIdBar] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setIdBar(id);
    setShow(true);
  }

  return (
    <>
      <div className="card card-barbillard" style={{ height: "100%" }}>
        <div className="card-body">
          <ul className="list-info">
            <h5 className="card-title">Babillard</h5>

            {
              barbillards.map(bar => (
                <li className="list-group-item event" onClick={() => handleShow(bar.id)} key={bar.id}>
                  <p className="card-text">
                    <span>{ bar.date }</span><br/>
                    <small className="text-muted">{ bar.title }</small><br/>
                    <p>{ bar.content }</p>
                  </p>
                </li>
              ))
            }
          </ul>
          <Link href="/barbillard"><a className="btn btn_bar btn-lg" tabIndex={-1} role="button" aria-disabled="true">Liste de tous les articles  <span>&rarr;</span></a></Link>
          <div className="border_communicate"></div>
        </div>
      </div>

      <BarbillardModal
        show={show}
        setClose={handleClose}
        barbillard={barbillards[idBar-1]}
      />
    </>
  );
}

export function ArticleImportant() {
  return (
    <div className="article-important col-sm-6 col-md-4 col-xs-12 col-lg-4 mt-3 ">
      <div className="card w-100 max-height shadow-sm me-3 article">
        <img src="/static/home.png" className="card-img-top img-card-size" alt="..." />
        <div className="card-body font-small article-body">
          <p className="card-title pb-3 color-violet fs-15">Comment Shikamaru Nara arrive à gagner les combats sans être fort physiquement?</p>
          <small className="text-muted"><i>Mars 2021</i></small>
          <p className="card-text pt-2 text-muted fs-12">Masashi Kishimoto a révélé qu’il aimait beaucoup Shikamaru en raison de sa nature facile à vivre en dépit de son génie, et contrastée à contrario de la personnalité intelligente mais agressive de Sasuke Uchiwa...</p>

          <a className="btn btn-link text-decoration-none">Lire</a>
        </div>
      </div>
    </div>
  );
}

export function BarbillardItem() {
  const [viewmore, setViewmore] = useState(false);

  let content = "il sera organisé le 12 avril un séminaire sur la cybersecurite au Déppartement sur le thème : Cyber-attaque et Cyber-defense. Nous vous prions de venir participer a cet evenement, nous vous presenterons tout ce qui aura un rapport avec la cyber securite";
  return (
    <div className="col barbillard-item">
      <div className="card w-100 border-0">
        <div className="card-body">
          <div className="barbillard-item--content">
            <div className="barbillard-element">
              <div className="barbillard-element--date">11 mars 2021</div>
              <div className="barbillard-element--title">Seminaire sur la securite informatique</div>
              <div className="barbillard-element--content text-muted">
                {
                  content.length < 100 ? content : (
                    !viewmore ? content.substr(0, 100) + "..." : content
                  )
                }
              </div>
              {
                content.length > 100 ? (
                  !viewmore && (
                    <div className="barbillard-element--viewmore" onClick={() => setViewmore(!viewmore)}>
                      &gt; voir plus
                    </div>
                  )
                ): null
              }
            </div>
          </div>
          <div className="barbillard-item--image">
            <img src="/static/home.png" alt="" style={{ width: "100%", height: "150px" }} />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export function EvenementItem({ children }) {
  const [viewmore, setViewmore] = useState(false);

  return (
    <div className="row">
      <div className="col d-flex">
        <div className="card evenement-item">
          <div className="card-body">
            <div className="evenement-item--image">
              <img src="/static/home.png" className="img-card-top" style={{ height: "200px", width: "100%" }} alt="image" />
              <div className="evenement-item--date">
                <span>29</span>
                <span>AVRIL</span>
              </div>
            </div>
            <div className="evenement-item--content">
              <div className="card-title">
                <div className="evenement-item--title">
                  Demystifier le Machine Learning
                </div>
                <div className="evenement-item--content-message text-muted">
                  { children.length < 100 ? children : (
                      !viewmore ? children.substr(0, 100) + "..." : children
                    )
                  }
                </div>
                {
                  (children.length > 100) ? (
                    !viewmore && <span className="evenement-item--viewmore mt-1" onClick={() => setViewmore(!viewmore)}>&gt; voir plus</span>
                  ) : null
                }
              </div>
            </div>
            <div className="evenement-item--footer">
              <div className="evenement-item--author">
                Par: Dr Laurent Broto
              </div>
              <div className="evenement-item--location">
                <span>Departement d'informatique</span>
                <span>29/04/2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
