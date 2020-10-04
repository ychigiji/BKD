import React, { Component } from "react";

import products from "./../ProductsInfo";
import Product from "./../ProductCard";
import Side from "./side-menu";

class mugs extends Component {
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
          <li>{products[3].name}</li>
        </ul>
        <h1>{products[3].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[3].info}
              {"   "}
              <a href="https://docs.google.com/forms/d/1FrmHoPWP1SL_azbcryM5HPzHV3m4HJPfQ9MynA9efN4/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div class="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Stainless steel - Travel Mug.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Stainless steel - Travel Mug1.png")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Stainless steel - Travel Mug2.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Mug1.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Mug2.jpg")}
                />
              </div>
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Mug.png")}
                />
              </div>

              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Mugs/Happy birthday mug.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default mugs;
