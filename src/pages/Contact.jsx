import React, { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const getData = (name) => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setError("User not found");
          setUser(null);
        } else {
          setUser(data);
          setError("");
        }
      });
  };

  useEffect(() => {
    getData("github");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      getData(username);
    }
  };

  return (
    <div className="container">
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="info-box">
          <div className="header-info">
            <img src={user.avatar_url} alt="avatar" />
            <div>
              <h3>{user.name || user.login}</h3>
              <p>@{user.login}</p>
              <span>
                Joined {user.created_at.slice(0, 10)}
              </span>
            </div>
          </div>

          <p className="bio">
            {user.bio || "This profile has no bio"}
          </p>

          <div className="stats">
            <div>
              <span>Repos</span>
              <h2>{user.public_repos}</h2>
            </div>
            <div>
              <span>Followers</span>
              <h2>{user.followers}</h2>
            </div>
            <div>
              <span>Following</span>
              <h2>{user.following}</h2>
            </div>
          </div>

          <div className="extra">
            <p> {user.company || "No Company"}</p>
            <p> {user.location || "No Location"}</p>
            <p> {user.blog || "No Website"}</p>
            <p> {user.twitter_username || "No X"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
