import "./index.css";

import React, { useState, useEffect } from "react";

import CommingSoon from "./components/commingsoon";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Kaizen Infrastuctures</h1>
        <h2>Comming soon ..</h2>
      </header> */}
      <Home></Home>

      {/* <CommingSoon></CommingSoon> */}
    </div>
  );
}

export default App;
