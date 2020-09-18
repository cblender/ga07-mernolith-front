import React, { useState, useEffect } from "react";
import "./DirectorFilmDisplay.css";
import axios from "./axios";

function DirectorFilmDisplay({ id }) {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      const res = await axios.get(`/films/${id}`);
      console.log(res);
      setFilm(res.data);
      return res;
    }
    fetchFilms();
  }, []);

  return (
    <>
      {film && (
        <div
          className="directorFilm"
          style={{ backgroundImage: `url(${film.poster})` }}
        ></div>
      )}
    </>
  );
}

export default DirectorFilmDisplay;
