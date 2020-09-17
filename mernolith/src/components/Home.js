/*$$      /$$ /$$$$$$$$ /$$$$$$$  /$$   /$$           /$$ /$$   /$$     /$$      
| $$$    /$$$| $$_____/| $$__  $$| $$$ | $$          | $$|__/  | $$    | $$      
| $$$$  /$$$$| $$      | $$  \ $$| $$$$| $$  /$$$$$$ | $$ /$$ /$$$$$$  | $$$$$$$ 
| $$ $$/$$ $$| $$$$$   | $$$$$$$/| $$ $$ $$ /$$__  $$| $$| $$|_  $$_/  | $$__  $$
| $$  $$$| $$| $$__/   | $$__  $$| $$  $$$$| $$  \ $$| $$| $$  | $$    | $$  \ $$
| $$\  $ | $$| $$      | $$  \ $$| $$\  $$$| $$  | $$| $$| $$  | $$ /$$| $$  | $$
| $$ \/  | $$| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/| $$| $$  |  $$$$/| $$  | $$
|__/     |__/|________/|__/  |__/|__/  \__/ \______/ |__/|__/   \___/  |__/  |_*/

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

fetchDirectorList = () => {
  fetch(/* LINK to directors db*/)
    .then((response) => response.json())
    .then((alldirectors) => {
      console.log("========================================");
      console.log(alldirectors);
      console.log("========================================");
      alldirectors.results.forEach((director) => {
        let directorList =
          /* STATE - list of directors - should be empty at this point */
          directorList.push(director);
        /* SET STATE: list of directors = directorList */
      });
    });
  console.log(/* STATE: list of directors */);
};

function Home() {
  return (
    <div className="home__container">
      <Link to="/directors" style={{ textDecoration: "none" }}>
        <div className="link">directors</div>
      </Link>
      <Link to="/films" style={{ textDecoration: "none" }}>
        <div className="link">films</div>
      </Link>
    </div>
  );
}

export default Home;
