import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function StarWarsCard({ name, height, mass, hairColor }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
        <Card.Description>
          <p>Information:</p>
          Height: {height}
          Mass: {mass}
          Hair Color: {hairColor}
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
