import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./SelectedDirectorFilm.css";
import { IconButton } from "@material-ui/core";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

function SelectedDirectorFilm({
  id,
  match,
  films,
  setUpdateFilms,
  updateFilms,
}) {
  const [filmModal, setFilmModal] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`/films/${id}`);
      setFilmModal(res.data);
      return res;
    }
    fetchPosts();
  }, [id, updateFilms]);

  const deleteFilm = async (e) => {
    e.preventDefault();
    let res = await axios.delete(`/films/${filmModal._id}`);
    setFilmModal(false);
    deleteDirectorFilm();
    return res;
  };
  const hi = () => {
    console.log("Ds");
  };

  const deleteDirectorFilm = () => {
    let newFilms = [];
    for (let i = 0; i < films.length; i++) {
      if (films[i] != filmModal._id) {
        newFilms.push(films[i]);
      }
    }
    let res = axios.put(`/directors/${match.params.id}`, {
      films: newFilms,
    });

    let x = updateFilms + 1;
    setUpdateFilms(x);

    window.history.back();

    return res;
  };

  return (
    <div>
      {filmModal && (
        <div className="modal__container">
          <div
            className="modal__image"
            style={{ backgroundImage: `url(${filmModal.poster})` }}
          />
          {console.log(filmModal)}
          <div className="modal__words">
            <h3>{filmModal.title}</h3>
            <p>{filmModal.description}</p>
          </div>
          <div className="modal__buttons">
            <IconButton onClick={hi}>
              <CreateRoundedIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton onClick={deleteFilm}>
              <DeleteRoundedIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedDirectorFilm;
