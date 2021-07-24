import React from 'react';

const Connexion = () => {

  React.useEffect(() => {
    const pw = document.getElementById("pw");
    const icon = document.getElementById("icon-view");

    icon.onclick = function() {
      if (pw.type === "text") {
        pw.type = "password";
        icon.classList.remove("bi-eye-fill");
        icon.classList.add("bi-eye-slash-fill");
      } else {
        pw.type = "text";
        icon.classList.remove("bi-eye-slash-fill");
        icon.classList.add("bi-eye-fill");
      }
    }
  });

  return (
    <section className="authentication-interface">
      <section className="connexion">
        <header className="connexion-header">
          <div className="connexion-logo">
            <img src="/static/logo_dark.png" alt="" />
          </div>
          <div className="connexion-logo-info">
            <span>UNIVERSITE DE YAOUNDE I</span>
            <span>Sapientia-Collativa-Cognitio</span>
            <span>Cameroun</span>
          </div>
        </header>
        <div className="connexion-sub-header">Système d'authentification</div>
        <section className="connexion-content">
          <main className="connexion-content-main">
            <section>
              <div className="lock">
                <i className="bi bi-lock-fill" style={{color: "lightgrey", fontSize: "2.4rem"}}></i>
              </div>

              <form className="connexion-form">
                <h3>Connexion</h3>

                <div>
                  <label htmlFor="email">Adresse Email <i className="bi bi-question-circle-fill" style={{color: "#6a4e77", marginLeft: 5}}></i> </label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="email">Mot de passe</label>
                  <input type="password" id="pw" />
                  <i id="icon-view" className="bi bi-eye-slash-fill view-password" style={{color: "grey"}}></i>
                </div>

                <div>
                  <button className="btn btn-connexion">Connexion</button>

                  <div className="keep-session">
                    <input type="checkbox" />
                    <span>Garder ma session active</span>
                  </div>
                </div>
              </form>
            </section>

            <section className="connexion-aside">
              <div>
                <h3>Nouvelle utilisateur</h3>
                <button className="btn btn-create-account">Me créer un compte</button>
              </div>
              <div>
                <h3>Dépannage</h3>

                <ul>
                  <li>j'ai oublié mon mot de passe</li>
                  <li>je désire modifier mon mot de passe</li>
                  <li>je ne me souviens pas de mon adresse email</li>
                  <li>besoin d'aide</li>
                  <li>mon portail</li>
                </ul>
              </div>
            </section>
          </main>
          <div className="connexion-footer">
            <span>Protéger vos données personnelles</span>
            <span>si vous utiliser un ordinateur public ou partagé, assurez vous de quitter le navigateur à la fin de votre session de travail</span>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Connexion;
