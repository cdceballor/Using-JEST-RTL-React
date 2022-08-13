import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/TemplateChar.css";
const TemplateChar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [char, setChar] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((res) => res.json())
      .then((resultChar) => setChar(resultChar));
  });
  return (
    <>
      {char == undefined && <h4>Loading</h4>}
      {char != undefined && (
        <div className="grid-char">
          <div className="left-char">
            <img className="img-char" src={char?.image} alt={char.name} />
          </div>
          <div className="right-char">
            <p className="name-char">Name: {char?.name} </p>
            <p className="state-char">State: {char?.status} </p>
            <p className="specie-char">Specie: {char?.species} </p>
          </div>
        </div>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default TemplateChar;
