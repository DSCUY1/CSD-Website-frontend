import React, {Component} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ControlledCarousel from './toolsComponent/customCarousel';
import Footer from './footer';
import NavbarNavigation from './navbar';
import NavbarNavigationMobile from './navbarMobile';

class Layout extends Component {
  constructor() {
    super();

    this.state = {
      toggleMenuMobile: ""
    }
  }

  handleToggleMenuMobile = (className) => {
    this.setState({ toggleMenuMobile: className });
  }

  render() {
    return (
      <>
        <Head>
            <meta charset="UTF-8" />
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
              <div className="container-fluid d-flex justify-content-between header-section">
                <div className="header-section-logo">
                  <Image src="/static/logo_dark.png" height={45} width={45} alt="..." />
                  <p className="mt-2 ps-2">Université de Yaoundé I</p>
                </div>
                <div className="d-flex header-section-info">
                  <a className="color-violet fst-italic text-decoration-none">Visite le site de UY1</a>
                  <button className="btn text-light" type="button">connexion</button>
                </div>
              </div>

              <NavbarNavigation ToggleMenuMobile={this.handleToggleMenuMobile} />

              <ControlledCarousel />

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
