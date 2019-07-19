import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function StarWarsCard({ name, height, mass, hairColor }) {
  return (
    <Card className="card-container">
      <Card.Content>
        <Card.Header>
          <h1 className="name">{name}</h1>
        </Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
        <Card.Description>
          {/* <p>Description:</p> */}
          <div className="description-container">
            Height: {height} <br />
            Mass: {mass} <br />
            Hair Color: {hairColor}
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <a>
          <Icon name="user" />
          10 Friends
        </a> */}
      </Card.Content>
    </Card>
  );
}
