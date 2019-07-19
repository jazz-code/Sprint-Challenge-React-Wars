import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {
  const [people, setPeople] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(() => {
    axios
      .get(`https://henry-mock-swapi.herokuapp.com/api?page=${num}`)
      .then(res => {
        const people = res.data.results;
        console.log(people);
        setPeople(people);
      });
  }, [num]);

  return (
    <>
      <Button onClick={() => setNum(num + 1)}>Next Page</Button>
      <Button onClick={() => setNum(num - 1)}>Previous Page</Button>

      <div className="starwars-container">
        {people.map(starWars => {
          return (
            <StarWarsCard
              key={starWars}
              name={starWars.name}
              height={starWars.height}
              mass={starWars.mass}
              hairColor={starWars.hair_color}
            />
          );
        })}
      </div>
    </>
  );
}
