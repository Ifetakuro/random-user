import React from "react";
import { Link } from "react-router-dom";
import "../css/usersbox.css";

export default function UsersBox({ data }) {
  const { picture, username, name, gender, dob, location, id } = data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={picture.medium} alt={username} />
      </div>
      <hr />
      <div className="card-info">
        <p>
          <span>Name:</span> {name.title} {name.first} {name.last}
        </p>
        <p>
          <span>Sex:</span> {gender}
        </p>
        <p>
          <span>Age:</span> {dob.age}
        </p>
        <p>
          <span>Location:</span> {location.country}
        </p>
        <Link to={`/users/${id.value}`}>Full Profile</Link>
      </div>
    </div>
  );
}
