import React, { Component } from "react";
import Side from "./side-menu";
import products from "./../ProductsInfo";
import Product from "./../ProductCard";

class shirts extends Component {
  render() {
    return (
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products & Services</a>
          </li>
          <li>{products[11].name}</li>
        </ul>
        <h1>{products[11].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[11].info} {"   "}
              <a href="https://docs.google.com/forms/d/1ACOs-EWImlqdyqHyJFWZ1VoA4YLcmTS6pu4XEhbSieQ/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div class="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Tshirts/T2.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Tshirts/T3.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Tshirts/T4.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Tshirts/T5.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Tshirts/Tee1.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default shirts;
