import React from "react";
import StarWarsGrid from "./components/StarWarsGrid";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsGrid />
    </div>
  );
};

export default App;
