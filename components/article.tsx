import React from 'react'

function Article() {
  return (
    <div class="card w-100">
      <div class="card-body">
        <ul class="list-info">
          <h5 class="card-title">Babillard</h5>

          <li class="list-group-item event">
            <p class="card-text">
              <span>11 mars 2021</span><br/>
              <small class="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li class="list-group-item event">
            <p class="card-text">
              <span>11 mars 2021</span><br/>
              <small class="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
          <li class="list-group-item event">
            <p class="card-text">
              <span>11 mars 2021</span><br/>
              <small class="text-muted">Séminaire sur la cybersecurite</small><br/>
              <p>il sera organisé le 12 avril un séminaire sur la cybersecurite au Déddartement sur le thème : Cyber-attaque et Cyber-defense</p>
            </p>
          </li>
        </ul>
        <a href="#" class="btn btn_per btn-lg" tabindex="-1" role="button" aria-disabled="true">Liste de tous les articles  <span>&rarr;</span></a>
        <div class="border_communicate"></div>
      </div>
    </div>
  );
}

export default Article;
