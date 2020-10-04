import React, { Component } from "react";
import products from "./../ProductsInfo";
import Product from "./../ProductCard";
import Side from "./side-menu";

class face extends Component {
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
          <li>{products[13].name}</li>
        </ul>
        <h1>{products[13].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[13].info} {"   "}
              <a href="https://docs.google.com/forms/d/1aMl3awvVIAbsoicQ_XkSfFCBqu9Yv_iqq20ATZbADf8/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div class="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/FaceShields/IMG_2966.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/FaceShields/IMG_2965.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/FaceShields/IMG_2964.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default face;
