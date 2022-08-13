import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/ShowCharts.css";
const ShowCharts = ({ character }) =>
  character?.results?.map((char) => {
    return (
      <div key={char.id}>
        <p className="animate__animated animate__tada char-name">{char.name}</p>
        <img className="char-img" src={char.image} alt={char.name} />
        <Link to={"/char/" + char.id}>
          <button className="char-info-btn">show more!</button>
        </Link>
      </div>
    );
  });
export default ShowCharts;
