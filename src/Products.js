import React, { Component } from "react";
import Product from "./ProductCard";
import products from "./ProductsInfo";
import Side from "./Prodcts and Services Pages/side-menu";

class Products extends Component {
  render() {
    return (
      <div>
        <h1>We offer a wide range of services.</h1>
        <div class="row">
          <div class="col-2 side-menu">
            <Side />
          </div>
          <div className="products col">
            <div class="row text-center text-lg-left">
              <div>
                <Product
                  name={products[0].name}
                  img={products[0].imgURL}
                  href={products[0].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[1].name}
                  img={products[1].imgURL}
                  href={products[1].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[2].name}
                  img={products[2].imgURL}
                  href={products[2].pageURL}
                />
              </div>

              <div>
                <Product
                  name={products[3].name}
                  img={products[3].imgURL}
                  href={products[3].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[13].name}
                  img={products[13].imgURL}
                  href={products[13].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[4].name}
                  img={products[4].imgURL}
                  href={products[4].pageURL}
                />
              </div>

              <div>
                <Product
                  name={products[5].name}
                  img={products[5].imgURL}
                  href={products[5].pageURL}
                />
              </div>

              <div>
                <Product
                  name={products[6].name}
                  img={products[6].imgURL}
                  href={products[6].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[7].name}
                  img={products[7].imgURL}
                  href={products[7].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[8].name}
                  img={products[8].imgURL}
                  href={products[8].pageURL}
                />
              </div>

              <div>
                <Product
                  name={products[9].name}
                  img={products[9].imgURL}
                  href={products[9].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[10].name}
                  img={products[10].imgURL}
                  href={products[10].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[11].name}
                  img={products[11].imgURL}
                  href={products[11].pageURL}
                />
              </div>
              <div>
                <Product
                  name={products[12].name}
                  img={products[12].imgURL}
                  href={products[12].pageURL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
