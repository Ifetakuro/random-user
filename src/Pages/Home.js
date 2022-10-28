import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import People from "../images/people.png";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const timerID = setTimeout(() => {
      navigate("/users");
    }, 10000);
    return () => {
      clearTimeout(timerID);
    };
  }, []);
  return (
    <main className="container home">
      <div className="welcome">
        <h1>Welcome to Socialink</h1>
      </div>
      <div className="image-info">
        <div className="image">
          <img src={People} alt="People" />{" "}
        </div>
        <div>
          {" "}
          <i>Make connection easy...</i>
        </div>
      </div>
    </main>
  );
}
