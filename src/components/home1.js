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

import Subscribe from "./functions/Subscribe";
import Topnavigation from "./nav";
import useWindowDimensions from "./useWindowDimensions";

import ReactLoading from "react-loading";

import readData from "./../components/functions/DB";

function Home1() {
  const clients = [
    {
      name: "Iron Triangle PVT LTD.",
      logo:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/clients%2FITTIC.png?alt=media&token=621a722e-db7b-49e8-9879-953a377ce645",
    },
    {
      name: "Kaizen Integrated Solutions PVT LTD.",
      logo:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/clients%2FKIS.png?alt=media&token=2b48f7f7-ee51-47a7-9541-e35d4231b659",
    },
    {
      name: "Odisha State Housing Board",
      logo:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/clients%2FOSHB.png?alt=media&token=40319794-b0fb-4ce5-b0e2-8569f97a6108",
    },
    {
      name: "Works Department Government of Odisha",
      logo:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/clients%2FWDGOO.png?alt=media&token=99c12169-a1b9-442a-8722-90a8119627d6",
    },
  ];
  const { height, width } = useWindowDimensions();
  console.log(height);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const navigate = useNavigate();
  const [clistate, setclistate] = useState(0);

  const [coverImage, setcoverImage] = useState([]);
  const [gallery, setgallery] = useState([]);
  const [projects, setprojects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async () => {
      await readData("projects").then((e) => {
        setprojects(e);
        // console.log(e);
      });

      await readData("coverImage").then((e) => {
        setcoverImage(e);
      });
      await readData("gallery").then((e) => {
        setgallery(e);
      });
      await setLoading(false);
    };
    getData();
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
      {loading ? (
        <ReactLoading
          className="loading"
          type="bubbles"
          color="#ff5e10"
          height={400}
          width={100}
        />
      ) : (
        <div>
          <Topnavigation home="true"></Topnavigation>
          <SlideSHow
            time={5000}
            data={coverImage ? coverImage : gallery}
          ></SlideSHow>
          <br />
          {/* section 1 */}
          <div className=" bg-white">
            <div className="containter">
              {" "}
              <div className="row mx-5 mt-5">
                <div className="col text-center">
                  <div className="mt-3">
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
                      Seeing our labour uplifts the human spirit and enriches
                      the human experience.
                    </p>
                    <br />
                    <div className="row my-4">
                      <div className="col-sm-6 ">
                        <Card
                          sx={{
                            borderColor: "transparent",
                            width: "100%",
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
                              style={{
                                textTransform: "uppercase",
                              }}
                              className="mt-4"
                            >
                              Supporting Wellness Through Human-Centered Design
                            </h5>
                            <small>
                              We take inspiration from the society that we live
                              in and work to make it more efficient.
                            </small>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="col-sm-6 ">
                        <Card
                          sx={{
                            borderColor: "transparent",
                            width: "100%",
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
                              style={{
                                textTransform: "uppercase",
                              }}
                              className="mt-4"
                            >
                              Reliable and trustworthy team.
                            </h5>
                            <small>
                              We take inspiration from the society we live in
                              and work to make it more efficient.
                            </small>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-sm-6">
                        <Card
                          sx={{
                            borderColor: "transparent",
                            width: "100%",
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
                              style={{
                                textTransform: "uppercase",
                              }}
                              className="mt-4"
                            >
                              Never compromise on quality for economics
                              benefits.
                            </h5>
                            <small>
                              We feel that delivering long-term services is more
                              sustainable.
                            </small>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="col-sm-6">
                        <Card
                          sx={{
                            borderColor: "transparent",
                            width: "100%",
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
                              style={{
                                textTransform: "uppercase",
                              }}
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
                        {organiseData(projects, 2).map((obj, index) => {
                          let today = new Date().toLocaleDateString("en-us");
                          // var t = new Date(1970, 0, 1);

                          // let seconds = t.setSeconds(today);
                          var date = new Date(today);
                          var seconds2 = date.getTime() / 1000;
                          return (
                            <>
                              {index === page - 1 ? (
                                <div className="row mx-sm-5 my-5">
                                  {" "}
                                  {obj.map((obj1) => {
                                    return (
                                      <>
                                        {seconds2 <
                                        obj1.details.project_end_date
                                          .seconds ? (
                                          <div className="col-sm-6 my-3">
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
                                              <CardActions className="d-flex justify-content-center">
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
                                  count={organiseData(projects, 2).length}
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
              <div className="row mx-5 mt-5" style={{ height: "auto" }}>
                <div className="col mt-5">
                  <div className="mt-3 text-center">
                    {" "}
                    <span className="sectionHeader">OUR CLIENTS</span>
                    <hr />
                  </div>

                  <div className="row">
                    <div className="col-sm text-center clientText">
                      <div
                        className="container client_info"
                        style={{
                          marginTop: "15%",
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
                                {clients[0].name}
                              </h1>
                              <small>{clients[0].desp}</small>
                            </div>
                          ) : clistate === 2 ? (
                            <div className="clititle">
                              <h1
                                style={{
                                  fontSize: "55px",
                                }}
                              >
                                {clients[1].name}
                              </h1>
                              <small>{clients[1].desp}</small>
                            </div>
                          ) : clistate === 3 ? (
                            <div className="clititle">
                              <h1
                                style={{
                                  fontSize: "55px",
                                }}
                              >
                                {clients[2].name}
                              </h1>
                              <small>{clients[2].desp}</small>
                            </div>
                          ) : clistate === 4 ? (
                            <div className="clititle">
                              <h1
                                style={{
                                  fontSize: "55px",
                                }}
                              >
                                {clients[3].name}
                              </h1>
                              <small>{clients[3].desp}</small>
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
                    <div className="col-sm">
                      <div className="row mt-sm-5 my-5 text-center">
                        <div className="col mt-4 mt-sm-0">
                          <img
                            src={clients[0].logo}
                            alt="img"
                            className="hoverClients"
                            onMouseEnter={() => {
                              setclistate(1);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                          {width <= 600 ? (
                            clistate === 1 ? (
                              <p className="mt-3">{clients[0].name}</p>
                            ) : null
                          ) : null}
                        </div>
                        <div className="col mt-4 mt-sm-0">
                          {" "}
                          <img
                            src={clients[1].logo}
                            alt="img"
                            className="hoverClients"
                            onMouseEnter={() => {
                              setclistate(2);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                          {width <= 600 ? (
                            clistate === 2 ? (
                              <p className="mt-3">{clients[1].name}</p>
                            ) : null
                          ) : null}
                        </div>
                      </div>

                      <div className="row mt-sm-5 my-5 text-center">
                        <div className="col my-4 mt-sm-0">
                          <img
                            src={clients[2].logo}
                            alt="img"
                            className="hoverClients"
                            onMouseEnter={() => {
                              setclistate(3);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                          {width <= 600 ? (
                            clistate === 3 ? (
                              <p className="mt-3">{clients[2].name}</p>
                            ) : null
                          ) : null}
                        </div>
                        <div className="col my-4 mt-sm-0">
                          <img
                            src={clients[3].logo}
                            alt="img"
                            className="hoverClients"
                            onMouseEnter={() => {
                              setclistate(4);
                            }}
                            onMouseLeave={() => {
                              setclistate(0);
                            }}
                          />
                          {width <= 600 ? (
                            clistate === 4 ? (
                              <p className="mt-3">{clients[3].name}</p>
                            ) : null
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Subscribe></Subscribe>
          <br />
          <div className="mx-5 my-5">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home1;
