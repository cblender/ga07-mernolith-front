import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./SelectedDirectorFilm.css";

function SelectedDirectorFilm({ id }) {
  const [filmModal, setFilmModal] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`/films/${id}`);
      setFilmModal(res.data);
      return res;
    }
    fetchPosts();
  }, [id]);

  return (
    <div>
      {filmModal && (
        <div className="modal__container">
          <div
            className="modal__image"
            style={{ backgroundImage: `url(${filmModal.poster})` }}
          />
          {console.log(filmModal)}
          <div className="modal__right">
            <h3>{filmModal.title}</h3>
            <p>{filmModal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedDirectorFilm;
