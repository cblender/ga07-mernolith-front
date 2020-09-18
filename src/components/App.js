import React from "react";
import "./App.css";
import Header from "./Header.js";
import DirectorPage from "./DirectorPage";
import { Route, HashRouter } from "react-router-dom";
import FilmThumb from "./FilmThumb";
import DirectorFilms from "./DirectorFilms";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={({ match }) => <DirectorPage match={match} />}
          />
          <Route
            exact
            path="/directors"
            render={({ match }) => <DirectorPage match={match} />}
          />
          <Route
            exact
            path="/films"
            render={({ match }) => <FilmThumb match={match} />}
          />
          <Route
            exact
            path="/directors/:id"
            render={({ match }) => <DirectorFilms match={match} />}
          />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
