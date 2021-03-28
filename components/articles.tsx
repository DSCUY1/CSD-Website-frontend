import React from 'react'

export function ArticleBarbillard() {
  return (
    <div className="card w-100">
      <div className="card-body">
        <ul className="list-info">
          <h5 className="card-title">Babillard</h5>

          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li className="list-group-item event">
            <p className="card-text">
              <span>11 mars 2021</span><br/>
              <small className="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
        </ul>
        <a href="#" className="btn btn_per btn-lg" tabIndex={-1} role="button" aria-disabled="true">Liste de tous les articles  <span>&rarr;</span></a>
        <div className="border_communicate"></div>
      </div>
    </div>
  );
}

export function ArticleImportant() {
  return (
    <div class="col-sm-6 col-md-4 col-xs-12 col-lg-4 mt-3 ">
      <div class="card w-100 max-height shadow-sm me-3 article">
        <img src="/static/home.png" class="card-img-top img-card-size" alt="..." />
        <div class="card-body font-small article-body">
          <p class="card-title pb-3 color-violet">Comment Shikamaru Nara arrive à gagner les combats sans être fort physiquement?</p>
          <small class="text-muted">Mars 2021</small>
          <p class="card-text pt-2 text-muted">Masashi Kishimoto a révélé qu’il aimait beaucoup Shikamaru en raison de sa nature facile à vivre en dépit de son génie, et contrastée à contrario de la personnalité intelligente mais agressive de Sasuke Uchiwa. L’auteur a fait
            remarquer qu’il épouserait Shikamaru s’il était une fille, notant que Shikamaru serait susceptible de réussir dans la vie. Lors de la conception de Shikamaru dans la seconde partie, Kishimoto a voulu donner une apparence unique
            à son personnage, malgré le gilet que portent tous les ninjas confirmés.</p>

          <a class="btn color-dark-pink fst-italic">Lire</a>
        </div>
      </div>
    </div>
  );
}
