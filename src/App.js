import "./index.css";

import React from "react";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CommingSoon from "./components/commingsoon";
// import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Career from "./components/career";
import Projects from "./components/projects";
import Admin from "./components/admin";
import NewsView from "./components/views/newsview";
import ArticleView from "./components/views/articleview";
import ProjectView from "./components/views/projectview";
import AdminProjEdit from "./components/admin/projedit";
import Timeline from "./components/timeline";

import Home1 from "./components/home1";
import ReactLoading from "react-loading";
import People from "./components/people";
import AdminLogin from "./components/admin/login";
import SectionProjectView from "./components/views/sectionProjectView";
import Gallery from "./components/gallery";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../src/firebase-config";
import Error404 from "./components/Error/404";
import ContactUs from "./components/contactUs";
import ResumeSubmit from "./components/submitResume";

import readData from "./components/functions/DB";

function App() {
  const [news, setNews] = useState([]);
  const [projects, setprojects] = useState([]);
  const [article, setarticle] = useState([]);
  const [videos, setvideos] = useState([]);
  const [coverImage, setcoverImage] = useState([]);
  const [gallery, setgallery] = useState([]);

  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);

  const types = [1, 2, 3, 4, 5, 6];

  // const [clients, setclients] = useState([]);

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      setState(true);
      setUser(currentUser);
    } else {
      setState(false);
      //   navigate("/login");
    }
  });
  // read data from firebase
  useEffect(() => {
    const getData = async () => {
      readData("news").then((e) => {
        setNews(e);
      });
      readData("projects").then((e) => {
        setprojects(e);
      });
      readData("article").then((e) => {
        setarticle(e);
      });
      readData("video").then((e) => {
        setvideos(e);
      });
      readData("coverImage").then((e) => {
        setcoverImage(e);
      });
      readData("gallery").then((e) => {
        setgallery(e);
      });
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ReactLoading
          className="loading"
          type="bubbles"
          color="#ff5e10"
          height={400}
          width={100}
        />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404></Error404>} status={404} />
            {/* <Route path="/" element={<CommingSoon></CommingSoon>} /> */}
            <Route path="/timeline" element={<Timeline></Timeline>} />
            <Route
              path="/submit-resume"
              element={<ResumeSubmit></ResumeSubmit>}
            />
            <Route
              path="/"
              element={
                <Home1
                  proj={projects}
                  coverImage={coverImage}
                  images={gallery}
                ></Home1>
              }
            />
            <Route path="/people" element={<People></People>} />

            <Route path="/about" element={<About></About>} />
            <Route path="/contactus" element={<ContactUs></ContactUs>} />
            <Route
              path="/login"
              element={<AdminLogin setState={setState}></AdminLogin>}
            />
            <Route
              path="/gallery"
              element={<Gallery gallery={gallery}></Gallery>}
            />
            <Route
              path="/news"
              element={<News news={news} arti={article} videos={videos}></News>}
            />
            <Route
              path="/proj"
              element={<Projects proj={projects}></Projects>}
            />
            <Route path="/career" element={<Career></Career>} />

            {types.map((obj) => {
              return (
                <Route
                  path={`/sectionProjectView/${obj}`}
                  element={
                    <SectionProjectView
                      type={obj}
                      project={projects}
                    ></SectionProjectView>
                  }
                />
              );
            })}

            <Route
              path="/admin"
              element={<AdminLogin setState={setState}></AdminLogin>}
            />
            <Route
              path={`/admin-${user.uid}`}
              element={
                state ? (
                  <Admin
                    new={news}
                    arti={article}
                    videos={videos}
                    proj={projects}
                    state={state}
                    images={gallery}
                    cover={coverImage}

                    // cli={clients}
                  ></Admin>
                ) : (
                  <AdminLogin setState={setState}></AdminLogin>
                )
              }
            />
            {news.map((obj) => {
              return (
                <Route
                  path={`/news/${obj.id}`}
                  element={<NewsView news={obj}></NewsView>}
                />
              );
            })}
            {article.map((obj) => {
              return (
                <Route
                  path={`/news/${obj.id}`}
                  element={<ArticleView article={obj}></ArticleView>}
                />
              );
            })}
            {projects.map((obj) => {
              return (
                <Route
                  path={`/projects/${obj.id}`}
                  element={<ProjectView project={obj}></ProjectView>}
                />
              );
            })}
            {projects.map((obj) => {
              return (
                <Route
                  path={`/projectedit/${obj.id}`}
                  element={<AdminProjEdit project={obj}></AdminProjEdit>}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
