import React, { Component } from "react";
import Side from "./side-menu";
import products from "./../ProductsInfo";
import Product from "./../ProductCard";

class SignBoards extends Component {
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
          <li>{products[11].name}</li>
        </ul>
        <h1>{products[10].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[10].info} {"   "}
              <a href="https://docs.google.com/forms/d/14hv1pJf_3wsfk_gnz84k_GdPvbFSUHTILg9m7lyUEMo/edit">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-left">
              <div class="pro">
                <Product
                  img={require("./../images/Products&Services/Signage&stickers/Sticker1.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Signage&stickers/Sticker2.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Products&Services/Signage&stickers/Sticker3.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignBoards;
