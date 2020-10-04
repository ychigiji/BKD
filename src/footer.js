import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

// prints out today's date
var d = new Date();

class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="py-4 bg-dark text-white-50 text-center"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%"
          }}
        >
          <a className=" " href="/terms">
            Privacy Policy & Terms of Use
          </a>
          <br></br>
          {/* Font Awesome for the facebook, Twitter, Instangram Icons */}
          <a
            className="mr-4 logo-icon"
            href="https://www.facebook.com/brandkraftd/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="mr-4 logo-icon"
            href="https://www.instagram.com/brandkraftd/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a className="mr-4 logo-icon" href="https://wa.me/27640887410/">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <div>
            <small>Copyright &copy; Brandkraft Designs {d.getFullYear()}</small>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

// Yolanda Chigiji's Contact Information

/* <a
            className="footer-link"
            href="https://www.linkedin.com/in/yolanda-chigiji"
          >
            LinkedIn
          </a>
          <a className="footer-link" href="https://ychigiji.github.io/cv/">
            | Website
          </a>
          <a className="footer-link" href="https://github.com/ychigiji">
            | Github
          </a> */
