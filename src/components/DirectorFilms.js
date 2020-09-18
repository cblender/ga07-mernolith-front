import React, { useState, useEffect } from "react";
import axios from "axios";

function DirectorFilms({ match }) {
  const [films, setFilms] = useState("");

  useEffect(() => {
    async function fetchFilms() {
      const res = await axios.get(`/directors/${match.params.id}`);
      setFilms(res.data);
      console.log(res.data);
      return res;
    }
    fetchFilms();
  }, []);

  return (
    <>
      {films && (
        <>
          {films.map((film) => (
            <>
              {console.log(film)}
              <h1>{film.title}</h1>
            </>
          ))}
        </>
      )}
    </>
  );
}

export default DirectorFilms;
