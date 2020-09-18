/*$$      /$$ /$$$$$$$$ /$$$$$$$  /$$   /$$           /$$ /$$   /$$     /$$      
| $$$    /$$$| $$_____/| $$__  $$| $$$ | $$          | $$|__/  | $$    | $$      
| $$$$  /$$$$| $$      | $$  \ $$| $$$$| $$  /$$$$$$ | $$ /$$ /$$$$$$  | $$$$$$$ 
| $$ $$/$$ $$| $$$$$   | $$$$$$$/| $$ $$ $$ /$$__  $$| $$| $$|_  $$_/  | $$__  $$
| $$  $$$| $$| $$__/   | $$__  $$| $$  $$$$| $$  \ $$| $$| $$  | $$    | $$  \ $$
| $$\  $ | $$| $$      | $$  \ $$| $$\  $$$| $$  | $$| $$| $$  | $$ /$$| $$  | $$
| $$ \/  | $$| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/| $$| $$  |  $$$$/| $$  | $$
|__/     |__/|________/|__/  |__/|__/  \__/ \______/ |__/|__/   \___/  |__/  |_*/

import React from "react";
import "./App.css";
import Header from "./Header.js";
import DirectorThumb from "./DirectorThumb";
import { Route } from "react-router-dom";
import FilmThumb from "./FilmThumb";
import Home from "./Home";
import DirectorPage from "./DirectorPage";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/directors"
          render={({ match }) => <DirectorThumb match={match} />}
        />
        <Route
          exact
          path="/films"
          render={({ match }) => <FilmThumb match={match} />}
        />
        <Route
          exact
          path={"/directors/:id"}
          // NOTE!!! Define "someDirectorID" correctly - the react router should render a DirectorPage with an id parameter matching the "someDirectorID" variable.
          render={({ match }) => <DirectorPage match={match} />}
        />
      </main>
    </div>
  );
}

export default App;
