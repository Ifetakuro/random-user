import React from "react";
import notFound from "../images/404.svg";

export default function NotFound() {
  return (
    <div className="not-found container">
      <h1>Not Found</h1>
      <img src={notFound} alt="not found" />
    </div>
  );
}
