import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Reviews from "./reviews";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Get in touch with us.</h1>

        <table>
          <tr>
            <td>
              <div className="contact-page">
                <ContactForm />
              </div>
            </td>
            <div className="contact-table">
              <td>
                <h5>BrandKraft Designs</h5>
                <hr></hr>
                <tr>
                  <td>
                    <h6>Physical Adress:</h6>
                  </td>
                  <td>
                    <p>
                      Unit 199 Bridgetown, Agulhas rd, Bloubosrand, Fourways
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6>Tel.</h6>
                  </td>
                  <td>
                    <p>011 568 7416</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Email:</h6>
                  </td>
                  <td>
                    <p>godfrey@brandkraft.co.za</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Cell.</h6>
                  </td>
                  <td>
                    <p>+27 64 088 7410</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Hours of Operation:</h6>
                  </td>
                  <td>
                    <p>Monday - Thursday: 08:30 to 16:00</p>
                    <p>Friday: 08:30 to 13:00</p>
                  </td>
                </tr>
              </td>
            </div>
          </tr>
        </table>
        <Reviews />

        <Map />
      </div>
    );
  }
}
export default Contact;
