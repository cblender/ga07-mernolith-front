import React, { useState, useEffect } from "react";
import "./AddDirectorFilm.css";
import axios from "./axios";
import { Button } from "@material-ui/core";

function AddDirectorFilm({ setAddFilm, match }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [films, setFilms] = useState("");

  useEffect(() => {
    async function fetchFilms() {
      const res = await axios.get(`/directors/${match.params.id}`);
      console.log(res);
      setFilms(res.data.films);
      return res;
    }
    window.scrollTo(0, 0);
    fetchFilms();
  }, []);

  const addFilm = async (e, callback) => {
    e.preventDefault();
    let res = await axios.post(`/films/`, {
      title: "yo",
      description: description,
      poster: poster,
    });
    setTitle("");
    setDescription("");
    setPoster("");
    callback(res.data._id);
    return res;
  };

  const addFilmToDirector = (id) => {
    films.push(id);
    let res = axios.put(`/directors/${match.params.id}`, {
      films: films,
    });
    setAddFilm(false);
    window.history.back();
    return res;
  };
  return (
    <div className="form__container">
      <textarea
        value={title}
        placeholder="Film Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Film Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        value={poster}
        placeholder="Poster Image url"
        onChange={(e) => setPoster(e.target.value)}
      />
      <div className="editSubreddit__button">
        <div>
          <Button
            style={{ color: "white" }}
            onClick={(e) => addFilm(e, addFilmToDirector)}
            type="submit"
          >
            Add Film
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddDirectorFilm;
