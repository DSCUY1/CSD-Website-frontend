import React, {Component} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {AlertMessage} from './toolsComponent/customCarousels';
import Footer from './footer';
import NavbarNavigation from './navbar';
import NavbarNavigationMobile from './navbarMobile';
import $ from 'jquery';

class Layout extends Component {
  public props;
  public state;

  constructor(props) {
    super(props);

    this.state = {
      toggleMenuMobile: "",
      heightPosition: 0,

      navigation: {
        accueil: {
          active: "",
          sousMenu: {
            barbillard: "",
            evenement: ""
          }
        },
        departement: {
          active: "",
          sousMenu: {
            presentation: "",
            conditionAdmission: "",
            coordonnee: "",
            poles: "",
            enseignant: "",
            options: ""
          }
        },
        information: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        },
        formation: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        },
        espaceEtudiant: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        },
        ancienEtudiant: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        },
        nosPartenaires: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        },
        blog: {
          active: "",
          sousMenu: {
            sousMenu: ""
          }
        }
      }
    }


  }

  componentDidMount() {
    let navigation = localStorage.getItem("navigation");
    let obj;

    console.log(navigation);

    if (navigation) {
      obj = JSON.parse(navigation);
      console.log(obj);
    } else {
      const nav = { mainMenu: "accueil", subMenu: "barbillard" };
      const json = JSON.stringify(nav);

      localStorage.setItem("navigation", json);
      obj = nav;
    }

    const setValue = (value = 0) => {
      this.setState({ heightPosition: value })
    }

    $(() => {
      let stickyElt = document.getElementById("navbar");
      let headerElt = document.getElementById("header-section");
      let stickyElt2 = document.getElementById("alerts-important");

      window.onscroll = () => {
        if (window.scrollY >= (stickyElt.offsetHeight + headerElt.offsetHeight - 30)) {
          stickyElt.classList.add("sticky-decoration");
        } else if (window.scrollY < (stickyElt.offsetHeight + headerElt.offsetHeight - 30)) {
          stickyElt.classList.remove("sticky-decoration");
        }

        if (window.scrollY >= (stickyElt.offsetHeight + headerElt.offsetHeight + stickyElt2.offsetHeight - 30)) {
          stickyElt2.classList.add("center-elt");
          setValue(window.innerHeight-50);
        } else if (window.scrollY < (stickyElt.offsetHeight + headerElt.offsetHeight + stickyElt2.offsetHeight - 30)) {
          stickyElt2.classList.remove("center-elt");

          if (window.innerWidth > 993)
            setValue(70);
          else
            setValue(0);
        }
      };

      window.onresize = () => {
        if (window.scrollY >= (stickyElt.offsetHeight + headerElt.offsetHeight + stickyElt2.offsetHeight - 30)) {
          setValue(window.innerHeight-50);
        } else if (window.scrollY < (stickyElt.offsetHeight + headerElt.offsetHeight + stickyElt2.offsetHeight - 30)) {
          if (window.innerWidth > 993)
            setValue(70);
          else
            setValue(0);
        }
      }
    });

    this.handleNavigation(obj);
  }

  handleToggleMenuMobile = (className) => {
    this.setState({ toggleMenuMobile: className });
  }

  handleNavigation = (objectNavigiation) => {
    const { MainMenu, subMenu } = objectNavigiation;
    let navigation = { ...this.state.navigation };

    navigation.accueil.active = "";
    navigation.accueil.sousMenu.barbillard = "";
    navigation.accueil.sousMenu.evenement = "";
    navigation.departement.active = "";
    navigation.departement.sousMenu.presentation = "";
    navigation.departement.sousMenu.conditionAdmission = "";
    navigation.departement.sousMenu.coordonnee = "";
    navigation.departement.sousMenu.poles = "";
    navigation.departement.sousMenu.enseignant = "";
    navigation.departement.sousMenu.options = "";
    navigation.information.active = "";
    navigation.information.sousMenu.sousMenu = "";
    navigation.formation.active = "";
    navigation.formation.sousMenu.sousMenu = "";
    navigation.espaceEtudiant.active = "";
    navigation.espaceEtudiant.sousMenu.sousMenu = "";
    navigation.ancienEtudiant.active = "";
    navigation.ancienEtudiant.sousMenu.sousMenu = "";
    navigation.nosPartenaires.active = "";
    navigation.nosPartenaires.sousMenu.sousMenu = "";
    navigation.blog.active = "";
    navigation.blog.sousMenu.sousMenu = "";

    switch (MainMenu) {
      case "accueil":
        navigation.accueil.active = "active";

        switch (subMenu) {
          case "barbillard":
            navigation.accueil.sousMenu.barbillard = "active-sublist";
            break;
          case "evenement":
            navigation.accueil.sousMenu.evenement = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      case "departement":
        navigation.departement.active = "active";

        switch (subMenu) {
          case "presentation":
            navigation.departement.sousMenu.presentation = "active-sublist";
            break;
          case "conditionAdmission":
            navigation.departement.sousMenu.conditionAdmission = "active-sublist";
            break;
          case "coordonnee":
            navigation.departement.sousMenu.coordonnee = "active-sublist";
            break;
          case "poles":
            navigation.departement.sousMenu.poles = "active-sublist";
            break;
          case "enseignant":
            navigation.departement.sousMenu.enseignant = "active-sublist";
            break;
          case "options":
            navigation.departement.sousMenu.options = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;

      case "information":
        navigation.information.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.information.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;

      case "formation":
        navigation.formation.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.formation.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      case "espaceEtudiant":
        navigation.espaceEtudiant.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.espaceEtudiant.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      case "ancienEtudiant":
        navigation.ancienEtudiant.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.ancienEtudiant.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      case "nosPartenaires":
        navigation.nosPartenaires.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.nosPartenaires.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      case "blog":
        navigation.blog.active = "active";

        switch (subMenu) {
          case "sousMenu":
            navigation.blog.sousMenu.sousMenu = "active-sublist";
            break;
          default: // nothign here
            break;
        }

        break;
      default: // nothign here
        break;
    }

    const json = JSON.stringify(objectNavigiation);

    localStorage.setItem("navigation", json);
    this.setState({ navigation });
  }

  render() {
    return (
      <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <title>{this.props.title}</title>
        </Head>

        <div className="container-fluid">
          <div className="row">
            <div className={`menu-navbar ${this.state.toggleMenuMobile}`}>
              <span className="close-mobile-menu" onClick={() => this.handleToggleMenuMobile("")}>&times;</span>

              <NavbarNavigationMobile
                navigation={this.state.navigation}
                onNavigate={this.handleNavigation}
              />
            </div>
            <div className="col-sm">
              <div className="d-flex justify-content-between header-section" id="header-section">
                <div className="header-section-logo">
                  <img src="/static/logo_dark.png" alt="..." />
                  <p className="mt-2 ps-2">Université de Yaoundé I</p>
                </div>
                <div className="d-flex header-section-info">
                  <a className="color-violet fst-italic text-decoration-none">Visite le site de UY1</a>
                  <button className="btn text-light" type="button">connexion</button>
                </div>
              </div>

              <NavbarNavigation ToggleMenuMobile={this.handleToggleMenuMobile} />

              <div id="alerts-important" style={{ top: `${this.state.heightPosition}px` }}>
                <AlertMessage />
              </div>

              <div className="mainSection">
                {this.props.children}
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Layout;
