import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>anything i want</code>.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/ayla.glv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          I love weed
        </a>
        <div className="App-text">very little disco</div>
      </header>
    </div>
  );
}

export default App;
