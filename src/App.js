import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/user";

const App = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {         
    getUser();  // eslint-disable-next-line
  }, [query]);  

  const getUser = async () => {
    const response = await fetch(`http://localhost:8001/user/${query}`);
    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(`finduser/?name=${search}`);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search User"
          value={search}
          onChange={updateSearch}
          required
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="users">
        {users.length > 1 ? (
          users.map((user) => (
            <User
              key={user._id}
              name={user.name}
              message={user.description}
              date={user.date}
            />
          ))
        ) : (
          <User
            key={users._id}
            name={users.name}
            message={users.description}
            date={users.date}
          />
        )}
      </div>
    </div>
  );
};

export default App;
