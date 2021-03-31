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
      heightPosition: ""
    }
  }

  componentDidMount() {
    const setValue = (value = "") => {
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

  }

  handleToggleMenuMobile = (className) => {
    this.setState({ toggleMenuMobile: className });
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

              <NavbarNavigationMobile />
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
