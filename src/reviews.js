import React, { Component } from "react";
class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <h1>Testimonials</h1>
        <div class="row ">
          <div className="column">
            <p className="review-text">
              "Excellent service! Every order fulfilled at high standard and on
              time."
            </p>
            <span className="review-text" role="img" aria-label="star">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
            <h5 className="review-text">Zwelibanzi N</h5>
          </div>
          <div className="column">
            <p className="review-text">
              "What more could I ask for? Brandkraft designs is the best. You
              should try them sometime. Affordable and good quality prints!!"
            </p>
            <h6>
              <span className="review-text" role="img" aria-label="star">
                ⭐️⭐️⭐️⭐️⭐️
              </span>
            </h6>
            <h5 className="review-text">Nyasha C</h5>
          </div>
          <div className="column">
            <p className="review-text">
              "I was very impressed by the level of professionalism displayed by
              Godfrey. I will continue using his services as I am truly
              impressed by his service."
            </p>
            <span className="review-text" role="img" aria-label="star">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
            <h5 className="review-text">Tafadzwa C</h5>
          </div>
        </div>
        {"      "}
        <a href="https://search.google.com/local/writereview?placeid=ChIJc4YuB2F2lR4Rahn0W7LusK0">
          <button type="button" className="btn btn-danger btn-review1">
            Write a Review
          </button>
        </a>
        {"       "}
        <a href="https://search.google.com/local/reviews?placeid=ChIJc4YuB2F2lR4Rahn0W7LusK0">
          <button type="button" className="btn btn-danger btn-review2">
            Read More
          </button>
        </a>
      </div>
    );
  }
}
export default Reviews;
