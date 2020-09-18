/*$$      /$$ /$$$$$$$$ /$$$$$$$  /$$   /$$           /$$ /$$   /$$     /$$      
| $$$    /$$$| $$_____/| $$__  $$| $$$ | $$          | $$|__/  | $$    | $$      
| $$$$  /$$$$| $$      | $$  \ $$| $$$$| $$  /$$$$$$ | $$ /$$ /$$$$$$  | $$$$$$$ 
| $$ $$/$$ $$| $$$$$   | $$$$$$$/| $$ $$ $$ /$$__  $$| $$| $$|_  $$_/  | $$__  $$
| $$  $$$| $$| $$__/   | $$__  $$| $$  $$$$| $$  \ $$| $$| $$  | $$    | $$  \ $$
| $$\  $ | $$| $$      | $$  \ $$| $$\  $$$| $$  | $$| $$| $$  | $$ /$$| $$  | $$
| $$ \/  | $$| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/| $$| $$  |  $$$$/| $$  | $$
|__/     |__/|________/|__/  |__/|__/  \__/ \______/ |__/|__/   \___/  |__/  |_*/

import React, { useState, useEffect } from "react";
import "./DirectorThumb.css";
import axios from "./axios";
import Director from "./Director";

function DirectorThumb() {
  const [directors, setDirectors] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`/directors`);
      console.log(res);
      setDirectors(res.data);
      return res;
    }
    fetchPosts();
  }, []);

  return (
    <div className="directors__container">
      {directors && (
        <>
          {directors.map((director) => (
            <Link to={`/directors/${director.id}`}>
              <Director img={director.image} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default DirectorThumb;
