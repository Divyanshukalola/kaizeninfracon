import React from "react";

import Topnavigation from "./nav";
import man from "./../static/img/man.png";
import building from "./../static/img/buildings.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";

function Home() {
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#ff5e10",
    "&:hover": {
      backgroundColor: "#09316f",
    },
  }));
  return (
    <div className="Home">
      {/* navigation  */}
      <Topnavigation></Topnavigation>

      {/* hero  */}
      <div className=" bg-light">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="containter  ">
                {" "}
                <div className="row mx-5">
                  <div className="col">
                    <Slide
                      direction="right"
                      in={true}
                      mountOnEnter
                      unmountOnExit
                      timeout={500}
                    >
                      <div
                        style={{
                          marginTop: "30%",
                          marginLeft: "10%",
                          textDecoration: "none",
                        }}
                        className="carousel-caption"
                      >
                        {" "}
                        <span>WE MAKE</span>
                        <h1>Create Your Dream</h1>
                        <p>We make your dream a reality. </p>
                        <ColorButton
                          variant="contained"
                          style={{ backgoundColor: "black" }}
                        >
                          Learn More
                        </ColorButton>
                      </div>
                    </Slide>
                  </div>
                  <div className="col mt-4 text-center">
                    <Fade in={true} timeout={500}>
                      <img src={man} alt="worker" height={"600px"} />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="containter">
                {" "}
                <div className="row mx-5">
                  <div className="col mt-4 text-center">
                    <Fade in={true} timeout={500}>
                      <img src={building} alt="worker" height={"600px"} />
                    </Fade>
                  </div>
                  <div className="col">
                    <Slide
                      direction="right"
                      in={true}
                      mountOnEnter
                      unmountOnExit
                      timeout={500}
                    >
                      <div
                        style={{ marginTop: "30%", marginLeft: "10%" }}
                        className="carousel-caption"
                      >
                        {" "}
                        <span>WE DESIGN</span>
                        <h1>Professional and Modern Designs</h1>
                        <p>We make your concept a reality. </p>
                        <ColorButton
                          variant="contained"
                          style={{ backgoundColor: "black" }}
                        >
                          Learn More
                        </ColorButton>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="containter">
                {" "}
                <div className="row">
                  <div className="col" style={{ height: "620px" }}>
                    <Slide
                      direction="right"
                      in={true}
                      mountOnEnter
                      unmountOnExit
                      timeout={500}
                    >
                      <div
                        style={{
                          marginTop: "30%",
                          marginLeft: "10%",
                          right: "25%",
                          bottom: "30%",
                          left: "auto",
                        }}
                        className="carousel-caption text-center"
                      >
                        {" "}
                        <span>WE SELECT</span>
                        <h1>Our Buildings uses the best materials.</h1>
                        <p>We make your dream strong and reliable. </p>
                        <ColorButton
                          variant="contained"
                          style={{ backgoundColor: "black" }}
                        >
                          Contact Us
                        </ColorButton>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            data-slide="prev"
            style={{ color: "black" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="false"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* section 1 */}
      <div className=" bg-white">
        <div className="containter">
          {" "}
          <div className="row mx-5 mt-5">
            <div className="col text-center" style={{ height: "620px" }}>
              <Slide
                direction="right"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={300}
              >
                <div className="mt-5">
                  {" "}
                  <span>WHAT WE DO</span>
                  <hr />
                  <h2 style={{ fontWeight: "bold" }}>
                    We build strong brands and grow businesses through branded{" "}
                    <br />
                    services,{" "}
                    <span className="secondary">digital storytelling</span> .
                  </h2>
                  <p>We make your dream a reality. </p>
                  <ColorButton
                    variant="contained"
                    style={{ backgoundColor: "black" }}
                  >
                    Contained
                  </ColorButton>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
