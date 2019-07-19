import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarWarsGrid() {
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      const people = res.data;
      console.log(people);
    });
  }, []);
}
