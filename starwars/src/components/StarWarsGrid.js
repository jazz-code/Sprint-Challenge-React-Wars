import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      const people = res.data.results;
      console.log(people);
      setPeople(people);
    });
  }, []);

  return (
    <div>
      Test
      {people.map(peopleArray => {
        return <StarWarsCard key={peopleArray} starWars={peopleArray.name} />;
      })}
    </div>
  );
}
