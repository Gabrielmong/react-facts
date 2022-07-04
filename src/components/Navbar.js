import React from "react";
import reactLogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav>
        <img src={reactLogo} alt="React Logo" className="react-logo"/>
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h4 className="nav-title">ReactCourse - Project 1</h4>
    </nav>
  );
}
