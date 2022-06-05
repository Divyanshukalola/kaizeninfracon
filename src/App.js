import "./index.css";

import React from "react";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommingSoon from "./components/commingsoon";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Career from "./components/career";
import Projects from "./components/projects";
import Admin from "./components/admin";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [news, setNews] = useState([]);
  const [projects, setprojects] = useState([]);
  const [article, setarticle] = useState([]);
  const [videos, setvideos] = useState([]);
  const dataCollectionRef1 = collection(db, "news");
  const dataCollectionRef2 = collection(db, "projects");
  const dataCollectionRef3 = collection(db, "article");
  const dataCollectionRef4 = collection(db, "video");

  // Similar to componentDidMount and componentDidUpdate:

  //write Data
  // const writeData = async () => {
  //   await addDoc(dataCollectionRef1, {
  //     name: "Hevea",
  //     email: "123@gmail.com",
  //     pass: "skdjncksdjc",
  //   });
  // };

  // read data from firebase
  useEffect(() => {
    // Update the document title using the browser API
    const getData = async () => {
      const New = await getDocs(dataCollectionRef1);
      const proj = await getDocs(dataCollectionRef2);
      const arti = await getDocs(dataCollectionRef3);
      const video = await getDocs(dataCollectionRef4);
      setNews(New.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setprojects(proj.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setarticle(arti.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setvideos(video.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommingSoon></CommingSoon>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route
            path="/news"
            element={<News new={news} arti={article} videos={videos}></News>}
          />
          <Route path="/proj" element={<Projects proj={projects}></Projects>} />
          <Route path="/career" element={<Career></Career>} />
          <Route
            path="/admin"
            element={
              <Admin
                new={news}
                arti={article}
                videos={videos}
                proj={projects}
              ></Admin>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
