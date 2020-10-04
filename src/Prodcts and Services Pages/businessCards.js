import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class bussiness extends Component {
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
          <li>{products[1].name}</li>
        </ul>
        <h1>{products[1].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[1].info}
              {"       "}
              <a href="https://docs.google.com/forms/d/1j9JmEGFQyFmRlU6PFPBINpQXnOR1nu6GNDb4gs-zlno/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Bcard.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/BusinessCards/IMG_2698.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/BusinessCards/IMG_2699.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/BusinessCards/IMG_2700.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default bussiness;
