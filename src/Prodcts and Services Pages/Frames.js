import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class FrameSignBoards extends Component {
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
          <li>{products[5].name}</li>
        </ul>
        <h1>{products[5].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[5].info}
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
                  img={require("./../images/Products&Services/Pavement Snap frame-4leg.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Wall mounted Snap frame.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Outdoor water based pavement frame.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FrameSignBoards;
