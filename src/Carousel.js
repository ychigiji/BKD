import React, { Component } from "react";

class CarouselPage extends Component {
  render() {
    return (
      <section className="height-100vh ">
        <div
          id="carouselExampleInterval"
          className="carousel slide center-aligned"
          data-ride="carousel"
          data-interval="3000"
        >
          <div className="carousel-inner">
            <div class="carousel-item active">
              <a href="/products/banners">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/framebanner.jpg")}
                  alt="Frame Banner"
                />
              </a>
              <div>
                <h1 class="centered">Frame Banners</h1>
                <a href="/products/banners">
                  <button type="button" className="btn btn-danger btn-center">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/banners">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/Wall banner.jpg")}
                  alt="Wall Banner"
                ></img>
              </a>
              <div>
                <h1 className="centered">Wall Banners</h1>
                <a href="/products/banners">
                  <button type="button" className="btn btn-danger btn-center">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/shirts">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/Tshirts/T3.jpg")}
                  alt="Shirt"
                ></img>
              </a>
              <div>
                <h1 className="centered">Shirts</h1>
                <a href="/products/shirts">
                  <button type="button" className="btn btn-danger btn-center">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/gazebos">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/Gazebo.jpg")}
                  alt="Gazebos"
                ></img>
              </a>
              <div>
                <h1 class="centered">Gazebos</h1>
                <a href="/products/gazebos">
                  <button type="button" className="btn btn-danger btn-center">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/frames">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/Pavement Snap frame-4leg.jpg")}
                  alt="Pavement Snap frame-4leg"
                ></img>
              </a>
              <div>
                <h1 class="centered">Pavement Snap frames</h1>
                <a href="/products/frames">
                  <button type="button" className="btn btn-danger btn-center">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/signs">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/Signage&stickers/Sticker1.jpg")}
                  alt="Sign Boards"
                ></img>
              </a>
              <div>
                <h1 class="centered">Sign Boards</h1>
                <a href="/products/signs">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg btn-center"
                  >
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a href="/products/frame">
                <img
                  className="carousel-image"
                  src={require("./images/Products&Services/FaceShields/IMG_2966.jpg")}
                  alt="Covid-19 Face Shields"
                ></img>
              </a>
              <div>
                <h1 class="centered">Covid-19 Face Shields</h1>
                <a href="/products/face">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg btn-center"
                  >
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CarouselPage;
