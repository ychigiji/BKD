import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";

import "./styles.css";
import "./App.css";

import Home from './Home'
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


import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class App extends Component {
  render() {
    return (
       <div className="footer-padding">
      <NavBar />
      <Routes>
        
    
   
    {/* <div> */}
     
      {/* Navbar  Links */}
      <Route path="/"  element={<Home/>} />
      <Route path="/BDK/about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="products" element={<Products/>} exact />
      <Route path="team" element={<Team/>} />

      {/* Products and Services URLS */}
      <Route path="/products/shirts" element={<Shirt/>} />
      <Route path="/products/keyrings" element={<Keyrings/>} />
      <Route path="/products/businesscards" element={<BusinessCards/>} />
      <Route path="/products/architecture" element={<Architecture/>} />
      <Route path="/products/printing" element={<Printing/>} />
      <Route path="/products/photo" element={<Photo/>} />
      <Route path="/products/labels" element={<Labels/>} />
      <Route path="/products/gazebos" element={<Gazebos/>} />
      <Route path="/products/signs" element={<Sign/>} />
      <Route path="/products/frames" element={<Frames/>} />
      <Route path="/products/banners" element={<Banners/>} />
      <Route path="/products/vehicle" element={<Vehicle/>} />
      <Route path="/products/mugs" element={<Mugs/>} />
      <Route path="/products/face" element={<Face/>} />

      {/* Terms and conditions URLS */}
      <Route path="/terms" element={<Terms/>} />

    {/* </div> */}
  
  
  

      </Routes>
      <Footer />
      </div>
      
    );
  }
}
export default App;
