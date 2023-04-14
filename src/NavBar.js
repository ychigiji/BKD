import React, { Component } from "react";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nav-pills navbar-expand-sm ">
          <a className="navbar-brand" href="/BKD/about">
            <img
              className="navbar-image"
              src={require("./images/Products&Services/logo1.png")}
              alt="logo"
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/BKD/">
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/BKD/about">
                  <b>About</b>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle products-dropdown"
                  href="/products"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <b>Products & Services</b>
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/BKD/products">
                    Gallery
                  </a>
                  <a className="dropdown-item" href="/BKD/products/architecture">
                    Architectural House Plans
                  </a>
                  <a className="dropdown-item" href="/BKD/products/banners">
                    Banners
                  </a>
                  <a className="dropdown-item" href="/BKD/products/businesscards">
                    Bussiness Cards
                  </a>
                  <a className="dropdown-item" href="/BKD/products/mugs">
                    Coffee Mugs
                  </a>
                  <a className="dropdown-item" href="/BKD/products/face">
                    Covid-19 Face Shield
                  </a>
                  <a className="dropdown-item" href="/BKD/products/printing">
                    Document printing and binding
                  </a>
                  <a className="dropdown-item" href="/BKD/products/frames">
                    Frame signboard systems
                  </a>

                  <a className="dropdown-item" href="/BKD/products/gazebos">
                    Gazebos
                  </a>

                  <a className="dropdown-item" href="/BKD/products/keyrings">
                    Keyrings
                  </a>

                  <a className="dropdown-item" href="/BKD/products/labels">
                    Labels and stickers
                  </a>

                  <a className="dropdown-item" href="/BKD/products/photo">
                    Photo panels
                  </a>

                  <a className="dropdown-item" href="/BKD/products/signs">
                    Signboards
                  </a>
                  <a className="dropdown-item" href="/BKD/products/shirts">
                    Tshirts and fabrics
                  </a>

                  <a className="dropdown-item" href="/BKD/products/vehicle">
                    Vehicle graphics and lettering
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/BKD/contact">
                  <b>Contact Us</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/BKD/team">
                  <b>Our Team</b>
                </a>
              </li>
            </ul>

            <a
              className="mr-4 nav-icon inline"
              href="https://wa.me/27640887410/"
            >
              <b>
                <FontAwesomeIcon icon={faWhatsapp} />
              </b>
              <p>
                <b>WhatsApp</b>
              </p>
            </a>
            <a className="mr-4 nav-icon" href="tel:+2711 568 7416">
              <FontAwesomeIcon icon={faPhone} />
              <p>
                <b>Call</b>
              </p>
            </a>
          </div>
        </nav>

        <div className="nav-strip">
          <div className="row">
            <div className="col">
              <form className="form my-2 my-lg-0 search-bar">
                <input
                  type="search"
                  className="form-control mr-sm-2"
                  placeholder="search "
                ></input>

                {/* <button type="button" className="btn btn-primary">
              Search
            </button> */}
              </form>
            </div>
            <div className="col">
              <a className="mr-4 search-icon" href="#/">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
