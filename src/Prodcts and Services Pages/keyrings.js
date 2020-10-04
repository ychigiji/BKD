import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class Key extends Component {
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
          <li>{products[7].name}</li>
        </ul>
        <h1>{products[7].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[7].info}
              {"   "}
              <a href="/contact">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Keyrings/Hardboard keyring.png")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Keyrings/Key ring.png")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Keyrings/Metal-Bottle-Opener-Key-Ring.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Key;
