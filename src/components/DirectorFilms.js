import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./DirectorFilms.css";
import DirectorFilmDisplay from "./DirectorFilmDisplay";

function DirectorFilms({ match }) {
  const [films, setFilms] = useState(null);

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
      {films && (
        <div className="film__container">
          {films.length > 0 && (
            <>
              {films.map((id) => (
                <>
                  <DirectorFilmDisplay id={id} />
                </>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default DirectorFilms;
