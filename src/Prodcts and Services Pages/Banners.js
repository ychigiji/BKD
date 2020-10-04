import React, { Component } from "react";
// import Product from "./../ProductCard";
import products from "./../ProductsInfo";
import Side from "./side-menu";

class Banners extends Component {
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
          <li>{products[2].name}</li>
        </ul>
        <h1>{products[2].name}</h1>

        <div class="row">
          <div class="col-2 ">
            <Side />
          </div>
          <div className="col products-sections">
            <p>
              {products[2].info}
              {"   "}
              <a href="https://docs.google.com/forms/d/1Emw7h8crDge6_3qp9-qo6Jd8gkw0W21OD6cszYTYcm8/edit?usp=sharing">
                <button type="button" className="btn btn-danger btn-learn">
                  Please Enquire
                </button>
              </a>
              <form
                action="mailto:ychigiji@smith.edu"
                method="post"
                enctype="text/plain"
              >
                Name:<br></br>
                <input type="text" name="name"></input>
                <br></br>
                E-mail:<br></br>
                <input type="text" name="mail"></input>
                <br></br>
                Comment:<br></br>
                <input type="text" name="comment" size="50"></input>
                <br></br>
                <br></br>
                <input type="submit" value="Send"></input>
                <input type="reset" value="Reset"></input>
              </form>
            </p>
            <div className="row text-center text-lg-left">
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/X-banner.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="banner-card-body">
                  <h5 class="banner-card-title">X-banner</h5>
                  <p class="card-text">
                    Comes in 2 sizes, 600x1600mm and 800x1800mm with an X-shaped
                    support frame.
                  </p>
                </div>
              </div>
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/Flag Banners.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="banner-card-body">
                  <h5 class="banner-card-title">
                    Arc flag, Sharkfin & Telescopic banners
                  </h5>
                  <p class="card-text">
                    Come in 3 sizes: 2000mm, 3000 and 4000.
                  </p>
                </div>
              </div>
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/Wall banner.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="banner-card-body">
                  <h5 class="banner-card-title">The mighty wall banner</h5>
                  <p class="card-text">
                    The mighty wall banner: this premium quality banner comes in
                    3 unit sizes: 3000x3000mm, 3000x4000 and 3000x6000mm
                  </p>
                </div>
              </div>
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/Roll up banner.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="banner-card-body">
                  <h5 class="banner-card-title">Roll up/ Pull up banner</h5>
                  <p class="card-text">
                    Comes as standard and executive. Sizes Pull up banner can be
                    single: 850x2000mm, 1200x2000 and 1500x2000 or double sided
                    850x2000mm.
                  </p>
                </div>
              </div>
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/Hanging poster.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="banner-card-body">
                  <h5 class="banner-card-title">Hanging poster</h5>
                  <p class="card-text">
                    It has a 2 way display system and come in the following
                    sizes: 2000x600mm, 2000x850, 2000x1000, 2000x1600, 2000x2000
                    and 2000x2400.
                  </p>
                </div>
              </div>
              <div class="banner-card">
                <img
                  src={require("./../images/Products&Services/framebanner.jpg")}
                  class="card-image"
                  alt="..."
                ></img>
                <div class="card-body">
                  <h5 class="banner-card-title">
                    The double-sided A-frame banner{" "}
                  </h5>
                  <p class="card-text">
                    It is quite durable and comes in the following sizes:
                    1000x2000mm and 1000x3000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banners;
