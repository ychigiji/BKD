import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class Architecture extends Component {
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
          <li>{products[0].name}</li>
        </ul>
        <h1>{products[0].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[0].info}
              {"   "}
              <a href="https://docs.google.com/forms/d/1BzWlkOQIaEqMcQsK8wp0rNr35mN7fFaPM8klnc2oOLo/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div class="row text-center text-lg-left">
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Architecture/Arch1.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Architecture/Arch2.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Architecture/Arch3.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Architecture;
