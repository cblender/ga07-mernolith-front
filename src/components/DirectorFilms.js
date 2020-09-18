import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./DirectorFilms.css";
import DirectorFilmDisplay from "./DirectorFilmDisplay";
import SelectedDirectorFilm from "./SelectedDirectorFilm";

function DirectorFilms({ match }) {
  const [films, setFilms] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      const res = await axios.get(`/directors/${match.params.id}`);
      console.log(res);
      setFilms(res.data.films);
      return res;
    }
    fetchFilms();
  }, []);

  return (
    <>
      {selectedFilm && (
        <div className="AddDirectorFilmContainer">
          <SelectedDirectorFilm id={selectedFilm} />
        </div>
      )}
      <>
        {films && (
          <div className="film__container">
            {films.length > 0 && (
              <>
                {films.map((id) => (
                  <button onClick={() => setSelectedFilm(id)}>
                    <DirectorFilmDisplay id={id} />
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </>
    </>
  );
}

export default DirectorFilms;
