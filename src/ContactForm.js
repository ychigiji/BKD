import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import firebase from "./firebase/Firebase";

var controls = [
  {
    name: "title",
    placeholder: "Title: *"
  },
  {
    name: "name",
    placeholder: "Name: *"
  },
  {
    name: "address",
    placeholder: "Company name & Address:"
  }
];

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  onTextChange = text => {
    this.setState({ email: text.target.value });
  };

  sendForm = () => {
    var email = this.state.email;
    var database = firebase.database();
    database.ref("users/uyu@6yyyt.com").set({
      email: email
    });
  };

  render() {
    return (
      <div>
        <div className="contact-form">
          <h5>
            We'd love to hear from you. Complete the form below for enquiries:
          </h5>
          <br></br>

          <Form>
            <Form.Row>
              {controls.map(tawanda => (
                <Col xs={tawanda.name == "address" ? 5 : 3}>
                  <Form.Control placeholder={tawanda.placeholder} />
                </Col>
              ))}
            </Form.Row>
            <br></br>
            <form>
              <input
                type="text"
                onChange={this.onTextChange}
                placeholder="Email Address: *"
              ></input>
            </form>

            {/* <Col xs={3}>
              <Form.Control />
            </Col> */}
            <Col xs={3}>
              <Form.Control placeholder="Contact Number:" />
            </Col>
            <Col xs={5}>
              <Form.Control placeholder="Products: *" />
            </Col>

            <br></br>
            <Form.Row>
              <Col xs={3}>
                <Form.Control placeholder="Size: *" />
              </Col>
              <Col xs={4}>
                <Form.Control placeholder="Color:" />
              </Col>
              <Col xs={4}>
                <Form.Control placeholder="Quantity: *" />
              </Col>
            </Form.Row>
            <br></br>
            <Form.Row>
              <Col xs={4}>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option value="0">Do you have a logo? *</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Control>
              </Col>
              <Col xs={4}>
                <Form.File id="custom-file" label="Upload a File:" custom />
              </Col>
              <Col>
                <button
                  onClick={() => this.sendForm()}
                  type="submit"
                  className="btn btn-danger"
                >
                  Submit Enquiry
                </button>
              </Col>
            </Form.Row>
          </Form>
          <br></br>
        </div>
      </div>
    );
  }
}
export default ContactForm;
