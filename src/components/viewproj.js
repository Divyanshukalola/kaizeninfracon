import React from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
// import man from "./../static/img/man.png";
// import building from "./../static/img/buildings.png";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Slide from "@mui/material/Slide";
// import Fade from "@mui/material/Fade";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

function Projects() {
  return (
    <div className="Projects">
      {/* navigation  */}
      <Topnavigation proj="true"></Topnavigation>

      <div
        className="bg-light"
        style={{
          backgroundImage:
            'url("https://images.hdqwalls.com/wallpapers/golden-gate-bridge-san-francisco-night-ds.jpg")',
          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "70%",
        }}
      >
        <div className="row text-center">
          <div className="col">
            <h1 style={{ color: "white", marginTop: "15%", fontSize: "55px" }}>
              OUR PROJECTS
            </h1>
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

export default Projects;
