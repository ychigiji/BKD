import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class photopanels extends Component {
  render() {
    return (
      <div>
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products & Services</a>
          </li>
          <li>{products[9].name}</li>
        </ul>
        <h1>{products[9].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[9].info}
              {"   "}
              <a href="/contact">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-left">
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/PhotoPanels/Coat rack.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/PhotoPanels/Framed tile.png")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/PhotoPanels/Stone.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/PhotoPanels/Wood.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default photopanels;
