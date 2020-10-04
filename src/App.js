import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./ContactUPage";
import Products from "./Products";
import NavBar from "./NavBar";
import Team from "./OurTeam";
import Footer from "./footer";
import Keyrings from "./Prodcts and Services Pages/keyrings";
import BusinessCards from "./Prodcts and Services Pages/businessCards";
import Architecture from "./Prodcts and Services Pages/Architecture";
import Printing from "./Prodcts and Services Pages/printing&binding";
import Photo from "./Prodcts and Services Pages/photo";
import Shirt from "./Prodcts and Services Pages/shirts";
import Labels from "./Prodcts and Services Pages/Labels";
import Gazebos from "./Prodcts and Services Pages/Gazebos";
import Sign from "./Prodcts and Services Pages/signboards";
import Frames from "./Prodcts and Services Pages/Frames";
import Banners from "./Prodcts and Services Pages/Banners";
import Vehicle from "./Prodcts and Services Pages/Vehicle";
import Mugs from "./Prodcts and Services Pages/mugs";
import Terms from "./Terms&Conditions";
import Face from "./Prodcts and Services Pages/Covid-19 FaceShield";

// import firebase from "./Firebase";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class App extends Component {
  render() {
    return (
      <div className="footer-padding">
        <Router>
          <div>
            <NavBar />

            {/* Navbar  Links */}
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" component={Products} exact />
            <Route path="/team" component={Team} />

            {/* Products and Services URLS */}
            <Route path="/products/shirts" component={Shirt} />
            <Route path="/products/keyrings" component={Keyrings} />
            <Route path="/products/businesscards" component={BusinessCards} />
            <Route path="/products/architecture" component={Architecture} />
            <Route path="/products/printing" component={Printing} />
            <Route path="/products/photo" component={Photo} />
            <Route path="/products/labels" component={Labels} />
            <Route path="/products/gazebos" component={Gazebos} />
            <Route path="/products/signs" component={Sign} />
            <Route path="/products/frames" component={Frames} />
            <Route path="/products/banners" component={Banners} />
            <Route path="/products/vehicle" component={Vehicle} />
            <Route path="/products/mugs" component={Mugs} />
            <Route path="/products/face" component={Face} />

            {/* Terms and conditions URLS */}
            <Route path="/terms" component={Terms} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
