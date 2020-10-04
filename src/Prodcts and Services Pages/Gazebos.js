import React, { Component } from "react";
import Side from "./side-menu";
import products from "./../ProductsInfo";
import Product from "./../ProductCard";

class Gazebos extends Component {
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
          <li>{products[6].name}</li>
        </ul>
        <h1>{products[6].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[6].info}
              {"   "}
              <a href="/contact">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="pro">
              <Product img={products[6].imgURL} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gazebos;
