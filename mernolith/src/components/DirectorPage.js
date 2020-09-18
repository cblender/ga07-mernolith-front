import React, { useState, useEffect } from "react";
import "./DirectorPage.css";
import axios from "./axios";
import Director from "./Director";
import FilmThumb from "./FilmThumb";
import Film from "./Film";

function DirectorPage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`/films`);
      console.log(res);
      setFilms(res.data);
      return res;
    }
    fetchPosts();
  }, []);

  return (
    // For some reason I get an error on the close-paren right after the </div> when I try to add more than one div.
    <div className="films__container">
      {films && (
        <>
          {films.map((film) => (
            <Link to={`/films/${film.id}`}>
              <Film img={film.poster} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default DirectorPage;
