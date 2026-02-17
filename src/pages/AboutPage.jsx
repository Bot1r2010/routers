import React, { useState, useEffect } from "react";
import "./aboutpage.css";

const AboutPage = () => {
  const [kino, setKino] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=ip man&apikey=c65fcde9")
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setKino(data.Search);
        }
      });
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!name) return;

    fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setKino(data.Search);
        } else {
          setKino([]);
        }
      });
  };

  return (
    <div className="about">
      <h1 className="title"> Movies </h1>

      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Поиск..."
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Искать</button>
      </form>

      <div className="movies">
        {kino.length > 0 ? (
          kino.map((item) => (
            <div className="card" key={item.imdbID}>
              <img src={item.Poster} alt={item.Title} />
              <h3>{item.Title}</h3>
              <p>{item.Year}</p>
              <span>{item.Type}</span>
            </div>
          ))
        ) : (
          <p className="loading">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
