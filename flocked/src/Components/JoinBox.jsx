import React from "react";
import menu from "../Assets/Menu.svg";
import "./Join.css";
function JoinBox({ name }) {
  return (
    <div className="join-box">
      <div className="top-box">
        <img src={menu} alt="" />
        <h2 className="main-text">{name === "Discord" ? "Join" : name}</h2>
      </div>
      <div className="main-join">
        <h2>{name === "Discord" ? "Join Our Discord" : name}</h2>
      </div>
    </div>
  );
}

export default JoinBox;
