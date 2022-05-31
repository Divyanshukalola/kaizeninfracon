import "./index.css";

import React from "react";

// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommingSoon from "./components/commingsoon";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Career from "./components/career";
import Projects from "./components/projects";

// import Firebase from "firebase";
// import config from "./config";

// Firebase.initializeApp(config.firebase);

function App() {
  // const [state, setState] = useState([]);
  // const writeUserData = () => {
  //   Firebase.database().ref("/").set(state);
  //   console.log("DATA SAVED");
  // };

  // const getUserData = () => {
  //   let ref = Firebase.database().ref("/");
  //   ref.on("value", (snapshot) => {
  //     const state1 = snapshot.val();
  //     setState(state1);
  //   });
  //   console.log("DATA RETRIEVED");
  // };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommingSoon></CommingSoon>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/news" element={<News></News>} />
          <Route path="/proj" element={<Projects></Projects>} />
          <Route path="/career" element={<Career></Career>} />
        </Routes>
      </BrowserRouter>

      {/* <CommingSoon></CommingSoon> */}
    </div>
  );
}

export default App;
