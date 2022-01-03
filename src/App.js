import React from "react";
import axios from "axios";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from react</h1>
        <Weather city="Barcelona" />
      </header>
    </div>
  );
}

export default App;
