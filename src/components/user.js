import React from "react";

const User = ({ name, message, date }) => {
  return (
    <div className="user">
      <h1>{name}</h1>
      <p>{message}</p>
      <div>{date}</div>
    </div>
  );
};

export default User;
