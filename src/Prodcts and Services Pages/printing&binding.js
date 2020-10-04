import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class printing extends Component {
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
          <li>{products[4].name}</li>
        </ul>
        <h1>{products[4].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[4].info}
              {"   "}
              <a href="https://docs.google.com/forms/d/1z6JlFOLF2ljKYjv43e54N6_q7DE8fhIpHdxz8_IxOaQ/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-center">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Printing and binding/Bind1.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Printing and binding/bind2.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default printing;
