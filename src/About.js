import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Brandkraft Designs (Pty Limited) </h1>

        <img
          className="about-image"
          src={require("./images/Products&Services/logo1.png")}
          alt="Second slide"
        ></img>
        <p className="about-text">
          <b>Brandkraft Designs</b> is a full graphic design and print agency
          that supplies custom-printed products to businesses, organizations,
          institutions as well as individuals. The company is a result of
          dedication and hard work carved out of a passionate character that
          aims to promote current businesses by increasing their visibility. You
          can count on Brandkraft Designs for that awareness with a lasting
          impression, be it for business or social at competitive rates. Our
          desire to deliver satisfactory tailor-made branding options is the
          fuel that drives our staff to perform to their best. Our expert
          creativity grows each time we take on a new project. We take pride in
          servicing especially the small to medium enterprise sector and
          individuals through the delivery of unique and customized branding
          options. We offer a mixed bag of printed products among which are:
          vehicle graphics, magnetic sheets, wooden and metal printed sheets,
          t-shirts, sports t-shirts, badges, pet tags, pet collars, exhibition
          tags, luggage tags, key rings, ceramic, polymer and travelling steel
          mugs, sports bottles, mousepads, coasters, trophy shields, tile
          murals, wedding ring jewel boxes, photo panels, wall & window signage,
          metal business card holders and coat racks. Specific for the girl
          child we do pocket mirrors, wallets, oven gloves and cushions.
          Specific for the school going age we have pencil boxes/bags,
          backpacks, storage chair and fridge magnets. Our other strength is
          technical drawings (architectural) on demand, whether new projects,
          redrawing from a sketch, redrawing from existing structure as well as
          just for 3D visuals.
        </p>
      </div>
    );
  }
}
export default About;
