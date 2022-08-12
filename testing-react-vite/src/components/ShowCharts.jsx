import React, { useState } from "react";
import "../assets/styles/ShowCharts.css";
const ShowCharts = ({ character }) =>
  character?.results?.map((char) => {
    const [charById, setCharById] = useState();

    const handleChangeById = (id) => {};

    return (
      <div key={char.id}>
        <p className="animate__animated animate__tada char-name">{char.name}</p>
        <img className="char-img" src={char.image} alt={char.name} />
        <button
          onClick={() => handleChangeById(char.id)}
          className="char-info-btn"
        >
          show more!
        </button>
      </div>
    );
  });
export default ShowCharts;
