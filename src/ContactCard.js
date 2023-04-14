import React from "react";

const ContactCard = (props) => {
  return (
    <div >
      <div >
        <img className="circle-img" src={props.img} alt="Contact Img" />
        <h2 className="info">{props.name}</h2>
        <h5 className="info">{props.post}</h5>
        <p className="info">{props.email}</p>
        <p className="info">{props.phone}</p>
      </div>
    </div>
  );
}
export default ContactCard;
