import React, { Component } from "react";
import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class labels extends Component {
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
          <li>{products[8].name}</li>
        </ul>
        <h1>{products[8].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[8].info}
              {"   "}
              <a href="/contact">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
            </p>
            <div className="row text-center text-lg-left">
              <div className="pro">
                <Product img={require("./../images/Stickers/Sticker1.png")} />
              </div>
              <div className="pro">
                <Product img={require("./../images/Stickers/Sticker2.png")} />
              </div>
              <div className="pro">
                <Product img={require("./../images/Stickers/Sticker6.jpg")} />
              </div>
              <div className="pro">
                <Product img={require("./../images/Stickers/Sticker7.jpg")} />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Stickers/Window sticker.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Stickers/Window sticker1.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Stickers/Window sticker2.jpg")}
                />
              </div>
              <div className="pro">
                <Product
                  img={require("./../images/Stickers/Window sticker3.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default labels;
