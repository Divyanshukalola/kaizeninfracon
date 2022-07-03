import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
import man from "./../static/img/man.png";
import building from "./../static/img/buildings.png";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

function Home({ proj }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function organiseData(array, size) {
    var perChunk = size; // items per chunk

    var inputArray = array;

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  }

  return (
    <div className="Home">
      <div>
        {/* navigation  */}
        <Topnavigation home="true"></Topnavigation>
        {/* hero  */}
        <div className=" bg-light">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
            style={{
              backgroundImage:
                'url("https://wallpaperaccess.com/full/309097.jpg")',
            }}
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
                          <span>PURPOSE</span>
                          <h1>We design with a heartfelt intention</h1>
                          <p>
                            Our mission is straightforward. Every day, we look
                            forward to the pleasure and honour of collaborating
                            with our clients to make a difference.{" "}
                          </p>
                          {/* <ColorButton
                            variant="contained"
                            style={{ backgoundColor: "black" }}
                          >
                            Learn More
                          </ColorButton> */}
                          <button className="jobbutton">Learn More</button>
                        </div>
                      </Slide>
                    </div>
                    <div className="col mt-4 text-center">
                      <Fade in={true} timeout={500}>
                        <img src={man} alt="worker" height={"630px"} />
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
                        <img src={building} alt="worker" height={"630px"} />
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
                          style={{
                            marginTop: "30%",
                            marginLeft: "10%",
                          }}
                          className="carousel-caption"
                        >
                          {" "}
                          <span>WE MAKE</span>
                          <h1>Longterm Relations</h1>
                          <p>
                            Kizen & Company has always prioritised the
                            development of long-term connections.{" "}
                          </p>
                          {/* <ColorButton
                            variant="contained"
                            style={{ backgoundColor: "black" }}
                          >
                            Learn More
                          </ColorButton> */}
                          <button className="jobbutton">Learn More</button>
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
                    <div className="col" style={{ height: "650px" }}>
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
                            right: "20%",
                            bottom: "30%",
                            left: "auto",
                          }}
                          className="carousel-caption text-center"
                        >
                          {" "}
                          <span>EXPERTISE</span>
                          <h1>Our broad skills and teamwork guarantee...</h1>
                          <p>
                            Excellence in design and delivery, novel solutions,
                            and unparalleled time and cost reductions{" "}
                          </p>
                          {/* <ColorButton
                            variant="contained"
                            style={{ backgoundColor: "black" }}
                          >
                            Contact Us
                          </ColorButton> */}
                          <button className="jobbutton">Contact us</button>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* section 1 */}
        <div className=" bg-white">
          <div>
            {" "}
            <div className="row mx-5 mt-5">
              <div className="col text-center" style={{ height: "620px" }}>
                <div className="mt-3">
                  {" "}
                  <span className="sectionHeader">WHAT WE DO</span>
                  <hr />
                  <br />
                  <h2 style={{ fontWeight: "bold" }}>
                    Our <span className="secondary">biggest</span> prize is…
                  </h2>
                  <p>
                    Seeing our labour uplifts the human spirit and enriches the
                    human experience.
                  </p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/photos/architect-worker-holding-yellow-helmet-a-for-workers-security-control-picture-id915560420?k=20&m=915560420&s=612x612&w=0&h=Mta0ooP5Rsdvz3A_Gxc41X3mhK6fIacLmfT-0UYNk2o="
                            alt="green iguana"
                          />
                          <CardContent>
                            <h5>
                              Supporting Wellness Through Human-Centered Design
                            </h5>
                            <small>
                              We take inspiration from the society that we live
                              in and work to make it more efficient.
                            </small>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                    <div className="col">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://marvel-b1-cdn.bc0a.com/f00000000067090/constructionequipment.com/sites/ce/files/JCB3CXbackhoe_0.jpg"
                            alt="green iguana"
                          />
                          <CardContent>
                            <h5>
                              Supporting Wellness Through Human-Centered Design
                            </h5>
                            <small>
                              We take inspiration from the society we live in
                              and work to make it more efficient.
                            </small>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                    <div className="col">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://winwick.com.au/wp-content/uploads/2021/07/building-worksite-safety-tips-winwick.jpeg"
                            alt="green iguana"
                          />
                          <CardContent>
                            <h5>
                              Never compromise on quality for economics
                              benefits.
                            </h5>
                            <small>
                              We feel that delivering long-term services is more
                              sustainable.
                            </small>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                    <div className="col">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="data:image/jpeg;base64,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"
                            alt="green iguana"
                          />
                          <CardContent>
                            <h5>
                              In society, <br /> we work to create new
                              opportunities. <br />
                            </h5>
                            <small>
                              Extending the Horizons of Training Excellence.
                            </small>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div>
                    {" "}
                    {/* <ColorButton
                      variant="contained"
                      style={{ backgoundColor: "black", zIndex: "0" }}
                    >
                      Contact Us
                    </ColorButton> */}
                    <button className="jobbutton">Contact us</button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* section 1 */}
        <div className=" bg-white">
          <div className="containter">
            {" "}
            <div className="row mx-5 mt-5">
              <div className="col text-center">
                <div className="mt-3">
                  {" "}
                  <span className="sectionHeader">WHAT'S GOING ON</span>
                  <hr />
                  <br />
                  <h2 style={{ fontWeight: "bold" }}>
                    We are
                    <span className="secondary"> proud</span> of…
                  </h2>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col">
                      {" "}
                      {organiseData(proj, 2).map((obj) => {
                        let today = new Date().toLocaleDateString("en-us");
                        // var t = new Date(1970, 0, 1);

                        // let seconds = t.setSeconds(today);
                        var date = new Date(today);
                        var seconds2 = date.getTime() / 1000;
                        return (
                          <>
                            <div className="row mx-5 my-5">
                              {" "}
                              {obj.map((obj1) => {
                                return (
                                  <>
                                    {seconds2 <
                                    obj1.details.project_end_date.seconds ? (
                                      <div className="col-6">
                                        <Card>
                                          <CardMedia
                                            component="img"
                                            height="340"
                                            image={obj1.img}
                                            alt="green iguana"
                                          />
                                          <CardContent>
                                            <Typography
                                              gutterBottom
                                              variant="h5"
                                              component="div"
                                            >
                                              {obj1.title}
                                            </Typography>
                                          </CardContent>
                                          <CardActions>
                                            <button
                                              className="mx-2 my-3 jobbutton"
                                              onClick={() => {
                                                navigate(
                                                  `/projects/${obj1.id}`
                                                );
                                              }}
                                            >
                                              Learn More
                                            </button>
                                          </CardActions>
                                        </Card>
                                      </div>
                                    ) : null}
                                  </>
                                );
                              })}
                            </div>
                          </>
                        );
                      })}
                    </div>{" "}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Clients */}
        {/* <div className=" bg-light">
          <div className="containter">
            {" "}
            <div className="row mx-5 mt-5" style={{ height: "730px" }}>
              <div className="col mt-5">
                <div className="mt-3 text-center">
                  {" "}
                  <span className="sectionHeader">OUR CLIENTS</span>
                  <hr />
                </div>

                <div className="row">
                  <div className="col text-center">
                    <div
                      className="container client_info"
                      style={{
                        marginTop: "30%",
                        marginLeft: "10%",
                        color: "lightgray",
                      }}
                    >
                      <>
                        {clistate === 1 ? (
                          <div className="clititle">
                            <h1 style={{ fontSize: "55px" }}>Google</h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 2 ? (
                          <div className="clititle">
                            <h1 style={{ fontSize: "55px" }}>Twitter</h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 3 ? (
                          <div className="clititle">
                            <h1 style={{ fontSize: "55px" }}>Instagram</h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 4 ? (
                          <div className="clititle">
                            <h1 style={{ fontSize: "55px" }}>Facebook</h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : (
                          <div>
                            <h1 style={{ fontSize: "55px" }}>
                              We Proudly Serve
                            </h1>
                          </div>
                        )}
                      </>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mt-5 text-center">
                      <div className="col">
                        <Fade in={true} timeout={500}>
                          <img
                            src={
                              "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            }
                            alt="img"
                            className="hoverClients"
                            height="140px"
                            onMouseEnter={() => {
                              setclistate(1);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                        </Fade>
                      </div>
                      <div className="col">
                        {" "}
                        <Fade in={true} timeout={600}>
                          <img
                            src={
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                            }
                            alt="img"
                            className="hoverClients"
                            height="140px"
                            onMouseEnter={() => {
                              setclistate(2);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                        </Fade>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mt-5 text-center">
                      <div className="col ">
                        <Fade in={true} timeout={700}>
                          <img
                            src={
                              "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                            }
                            alt="img"
                            className="hoverClients"
                            height="140px"
                            onMouseEnter={() => {
                              setclistate(3);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                        </Fade>
                      </div>
                      <div className="col">
                        <Fade in={true} timeout={800}>
                          <img
                            src={
                              "https://barod.cymru/wp-content/uploads/2020/07/facebook-icon-transparent-background-3.png"
                            }
                            alt="img"
                            className="hoverClients"
                            height="140px"
                            onMouseEnter={() => {
                              setclistate(4);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <br />
        <div className="mx-5 my-5">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
