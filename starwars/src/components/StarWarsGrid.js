import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`https://henry-mock-swapi.herokuapp.com/api`).then(res => {
      const people = res.data.results;
      console.log(people);
      setPeople(people);
    });
  }, []);

  return (
    <div>
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
  );
}
