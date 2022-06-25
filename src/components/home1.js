import React, { useEffect, useState } from "react";

import Footer from "./footer";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

import Pagination from "@mui/material/Pagination";

import SlideSHow from "./slideshow";

function Home1({ proj, coverImage }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const navigate = useNavigate();
  const [clistate, setclistate] = useState(0);

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
      {/* navigation  */}

      <div>
        {/* hero  */}

        <SlideSHow time={5000} data={coverImage}></SlideSHow>
        <br />
        {/* section 1 */}
        <div className=" bg-white">
          <div className="containter">
            {" "}
            <div className="row mx-5 mt-5">
              <div className="col text-center">
                <div className="mt-3">
                  {" "}
                  <span className="sectionHeader">WHAT WE DO</span>
                  <hr />
                  <br />
                  <h2
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Our <span className="secondary">biggest</span> prize is…
                  </h2>
                  <p>
                    Seeing our labour uplifts the human spirit and enriches the
                    human experience.
                  </p>
                  <br />
                  <div className="row">
                    <div className="col">
                      <Card
                        sx={{
                          height: "450px",
                        }}
                        variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fimg1.webp?alt=media&token=fdee39d2-06fb-435f-b8d0-784e4c8a9704"
                          alt="green iguana"
                        />
                        <CardContent>
                          <h5
                            style={{ textTransform: "uppercase" }}
                            className="mt-4"
                          >
                            Supporting Wellness Through Human-Centered Design
                          </h5>
                          <small>
                            We take inspiration from the society that we live in
                            and work to make it more efficient.
                          </small>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="col">
                      <Card
                        sx={{
                          height: "450px",
                        }}
                        variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fimg4.webp?alt=media&token=a8a8aaf6-7721-49d8-8d8b-dee9e01a7f54"
                          alt="green iguana"
                        />
                        <CardContent>
                          <h5
                            style={{ textTransform: "uppercase" }}
                            className="mt-4"
                          >
                            A TEAM YOU CAN TRUST
                          </h5>
                          <small>
                            We take inspiration from the society we live in and
                            work to make it more efficient.
                          </small>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col">
                      <Card
                        sx={{
                          height: "450px",
                        }}
                        variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fimg2.jpeg?alt=media&token=9d2308bd-827e-4742-b0e6-4f059e7afbfa"
                          alt="green iguana"
                        />
                        <CardContent>
                          <h5
                            style={{ textTransform: "uppercase" }}
                            className="mt-4"
                          >
                            Never compromise on quality for economics benefits.
                          </h5>
                          <small>
                            We feel that delivering long-term services is more
                            sustainable.
                          </small>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="col">
                      <Card
                        sx={{
                          height: "450px",
                        }}
                        variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fimg3.jpeg?alt=media&token=6c76c847-4251-4cae-8f33-a5b09e75969d"
                          alt="green iguana"
                        />
                        <CardContent>
                          <h5
                            style={{ textTransform: "uppercase" }}
                            className="mt-4"
                          >
                            In society, we work to create new opportunities.
                          </h5>
                          <small>
                            Extending the Horizons of Training Excellence.
                          </small>
                        </CardContent>
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
        {/* section 1 */}
        <div className=" bg-white ">
          <div className="containter">
            {" "}
            <div className="row mx-5 mt-5">
              <div className="col text-center">
                <div className="mt-3">
                  {" "}
                  <span className="sectionHeader">WHAT'S GOING ON</span>
                  <hr />
                  <br />
                  <h2
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    We are
                    <span className="secondary"> proud</span> of…
                  </h2>
                  <p>What we make.</p>
                  <div className="row">
                    <div className="col">
                      {" "}
                      {organiseData(proj, 2).map((obj, index) => {
                        let today = new Date().toLocaleDateString("en-us");
                        // var t = new Date(1970, 0, 1);

                        // let seconds = t.setSeconds(today);
                        var date = new Date(today);
                        var seconds2 = date.getTime() / 1000;
                        return (
                          <>
                            {index === page - 1 ? (
                              <div className="row mx-5 my-5">
                                {" "}
                                {obj.map((obj1) => {
                                  return (
                                    <>
                                      {seconds2 <
                                      obj1.details.project_end_date.seconds ? (
                                        <div className="col-6">
                                          <Card variant="outlined">
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
                            ) : null}
                          </>
                        );
                      })}
                      {page >= 1 ? (
                        <>
                          {" "}
                          <br />
                          <div className="row ">
                            <div className="col d-flex justify-content-center">
                              {" "}
                              <Pagination
                                count={organiseData(proj, 2).length}
                                page={page}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>{" "}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className=" bg-light">
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
                            <h1
                              style={{
                                fontSize: "55px",
                              }}
                            >
                              Google
                            </h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 2 ? (
                          <div className="clititle">
                            <h1
                              style={{
                                fontSize: "55px",
                              }}
                            >
                              Twitter
                            </h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 3 ? (
                          <div className="clititle">
                            <h1
                              style={{
                                fontSize: "55px",
                              }}
                            >
                              Instagram
                            </h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : clistate === 4 ? (
                          <div className="clititle">
                            <h1
                              style={{
                                fontSize: "55px",
                              }}
                            >
                              Facebook
                            </h1>
                            <small>
                              This is the worlds one of the biggest giants.
                            </small>
                          </div>
                        ) : (
                          <div>
                            <h1
                              style={{
                                fontSize: "55px",
                              }}
                            >
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
                      </div>
                      <div className="col">
                        {" "}
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
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mt-5 text-center">
                      <div className="col ">
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
                      </div>
                      <div className="col">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="mx-5 my-5">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Home1;
