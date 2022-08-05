import React, { useEffect } from "react";

import Footer from "../footer";

import Topnavigation from "../nav";
import { useNavigate } from "react-router-dom";

function SectionProjectView({ project, type }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation proj="true"></Topnavigation>
      <br />
      <br />
      <div
        className="bg-light"
        style={{
          backgroundImage: `url(${
            type === 1
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype1.jpeg?alt=media&token=2a0c783e-f16d-4046-9633-cc336077924f"
              : type === 2
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype2.jpeg?alt=media&token=55c77853-5d41-45ce-a999-4804c15c7592"
              : type === 3
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype3.webp?alt=media&token=587aeb75-070a-427f-bfc7-33f741f2c415"
              : type === 4
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype4.jpeg?alt=media&token=ecb512e7-774c-41da-95c3-60db258d1aa8"
              : type === 5
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype5.jpeg?alt=media&token=262ab589-23a8-4834-bb4c-fa29ae7e28c7"
              : type === 6
              ? "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype6.jpeg?alt=media&token=a3b59769-a0c4-4b89-8951-31d61d032ef0"
              : null
          })`,
          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "80%",
        }}
      ></div>
      <br />
      <div className="row text-center" style={{ width: "101%" }}>
        <div className="col">
          <h1
            style={{
              color: "grey",

              fontSize: "55px",
            }}
          >
            {type === 1
              ? "Commercial Buildings"
              : type === 2
              ? "Residential Buildings"
              : type === 3
              ? "Roads and Bridges"
              : type === 4
              ? "Hospital Buildings - Colleges"
              : type === 5
              ? "Government Administrative Buildings"
              : type === 6
              ? "Other Infrastructure Facilities"
              : null}
          </h1>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="row  d-flex justify-content-center">
            {project
              .filter((e) => e.type === type)
              .map((obj1) => {
                return (
                  <>
                    <div
                      className="col-5 projectRow mx-3 d-flex justify-content-center"
                      onClick={() => {
                        navigate(`/projects/${obj1.id}`);
                      }}
                      style={{ height: "50vh" }}
                    >
                      <img src={obj1.img} alt="" className="projectImg" />
                      <div
                        className="container text"
                        style={{ height: "30vh" }}
                      >
                        <h5 className="mt-2">{obj1.title}</h5>
                        <small>{obj1.body}</small>
                        <br />
                        <button
                          className="mx-2 my-3 jobbutton"
                          onClick={() => {
                            navigate(`/projects/${obj1.id}`);
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default SectionProjectView;
