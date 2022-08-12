import React, { useEffect, useState } from "react";
import "../assets/styles/ListCharacters.css";
import GridModel from "../share/GridModel";
import ShowCharts from "./ShowCharts";
const ListCharacters = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((chars) => setCharacter(chars));
  }, []);
  return (
    <div>
      {character == [] ? (
        <h3>Empty</h3>
      ) : (
        <GridModel>
          <ShowCharts character={character} />
        </GridModel>
      )}
    </div>
  );
};

export default ListCharacters;
