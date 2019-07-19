import React from "react";

export default function StarWarsCard({ name, height, mass }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h4>Height: {height}</h4>
      <h3>Mass: {mass}</h3>
    </div>
  );
}
