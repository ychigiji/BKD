import React, { Component } from "react";
import Card from "./ContactCard";
import contacts from "./TeamInfo";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <h1 className="">Meet Our Amazing Team!</h1>

        <div className="row justify-content-center">
          <div class="col">
            <Card
              name={contacts[0].name}
              img={contacts[0].imgURL}
              phone={contacts[0].phone}
              email={contacts[0].email}
              post={contacts[0].post}
            />
          </div>
          <div class="col">
            <Card
              name={contacts[1].name}
              img={contacts[1].imgURL}
              phone={contacts[1].phone}
              email={contacts[1].email}
              post={contacts[1].post}
            />
          </div>
          <div class="col">
            <Card
              name={contacts[2].name}
              img={contacts[2].imgURL}
              phone={contacts[2].phone}
              email={contacts[2].email}
              post={contacts[2].post}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
