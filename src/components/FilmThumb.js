/*$$      /$$ /$$$$$$$$ /$$$$$$$  /$$   /$$           /$$ /$$   /$$     /$$      
| $$$    /$$$| $$_____/| $$__  $$| $$$ | $$          | $$|__/  | $$    | $$      
| $$$$  /$$$$| $$      | $$  \ $$| $$$$| $$  /$$$$$$ | $$ /$$ /$$$$$$  | $$$$$$$ 
| $$ $$/$$ $$| $$$$$   | $$$$$$$/| $$ $$ $$ /$$__  $$| $$| $$|_  $$_/  | $$__  $$
| $$  $$$| $$| $$__/   | $$__  $$| $$  $$$$| $$  \ $$| $$| $$  | $$    | $$  \ $$
| $$\  $ | $$| $$      | $$  \ $$| $$\  $$$| $$  | $$| $$| $$  | $$ /$$| $$  | $$
| $$ \/  | $$| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/| $$| $$  |  $$$$/| $$  | $$
|__/     |__/|________/|__/  |__/|__/  \__/ \______/ |__/|__/   \___/  |__/  |_*/

import React, { useState, useEffect } from "react";
import "./FilmThumb.css";
import "./UNIVERSAL.css";
import axios from "./axios";
import Film from "./Film";

function FilmThumb() {
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
    <div className="universal film__container">
      {films && (
        <>
          {films.map((film) => (
            <>
              <Film img={film.poster} />
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default FilmThumb;
