import React, { Component } from "react";
import CarouselPage from "./Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <div className="row">
            <div className="col">
              <CarouselPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
