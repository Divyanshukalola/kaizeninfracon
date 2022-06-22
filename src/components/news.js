import React, { useEffect } from "react";

import Footer from "./footer";
import TextTruncate from "react-text-truncate";
import { useNavigate } from "react-router-dom";

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

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import NewsView from "./views/newsview";
// import Button from "@mui/material/Button";

function News(props) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props.news);
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

  // function dateConvert(date) {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(date);
  //   return t;
  // }
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>
      <div></div>

      <div
        className="bg-light"
        style={{
          backgroundImage:
            'url("https://ak.picdn.net/shutterstock/videos/1055334359/thumb/1.jpg")',
          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "70%",
        }}
      >
        <div className="row text-center">
          <div className="col">
            <h1
              style={{
                color: "white",
                marginTop: "15%",
                fontSize: "55px",
              }}
            >
              OUR NEWS
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">MEDIA CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(props.new, 3).map((obj) => {
          return (
            <>
              <div className="row mx-5 my-5 justify-content-center">
                {" "}
                {obj.map((obj1) => {
                  return (
                    <>
                      <div className="col">
                        {" "}
                        <Card>
                          <CardMedia
                            component="img"
                            height="250"
                            image={obj1.img}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              {obj1.title}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                              <div
                                style={{
                                  whiteSpace: "pre-wrap",
                                  overflowWrap: "break-word",
                                }}
                              >
                                {" "}
                                <pre>
                                  <TextTruncate
                                    line={1}
                                    element="span"
                                    truncateText="…"
                                    text={obj1.body}
                                  />
                                </pre>
                              </div>
                            </Typography>
                            <br />
                            <Typography variant="body3" color="text.secondary">
                              {" "}
                              Written By: {obj1.writenBy}
                            </Typography>
                            <br />
                            <Typography variant="body3" color="text.secondary">
                              {" "}
                              Date:{" "}
                              {new Date(
                                obj1.date.seconds * 1000
                              ).toLocaleDateString()}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <button
                              className="mx-2 mb-3 jobbutton"
                              onClick={() => {
                                navigate(`/news/${obj1.id}`);
                              }}
                            >
                              Learn More
                            </button>
                          </CardActions>
                        </Card>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>

      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">ARTICLE CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(props.arti, 3).map((obj) => {
          return (
            <>
              <div className="row mx-5 my-5 justify-content-center">
                {obj.map((obj1) => {
                  return (
                    <>
                      <div className="col">
                        {" "}
                        <Card>
                          <CardMedia
                            component="img"
                            height="300"
                            image={obj1.img}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              {obj1.title}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                              <div
                                className="artibody"
                                style={{
                                  whiteSpace: "pre-wrap",
                                  overflowWrap: "break-word",
                                }}
                              >
                                {" "}
                                <pre>
                                  <TextTruncate
                                    line={1}
                                    element="span"
                                    truncateText="…"
                                    text={obj1.body}
                                  />
                                </pre>
                              </div>
                            </Typography>
                            <br />
                            <Typography variant="body3" color="text.secondary">
                              {" "}
                              Written By: {obj1.writenBy}
                            </Typography>
                            <br />
                            <Typography variant="body3" color="text.secondary">
                              {" "}
                              Date:{" "}
                              {new Date(
                                obj1.date.seconds * 1000
                              ).toLocaleDateString()}
                            </Typography>
                          </CardContent>

                          <CardActions>
                            <button
                              className="mx-2 my-3 jobbutton"
                              onClick={() => {
                                navigate(`/news/${obj1.id}`);
                              }}
                            >
                              Learn More
                            </button>
                          </CardActions>
                        </Card>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">VIDEO CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(props.videos, 3).map((obj) => {
          return (
            <>
              <div className="row mx-5 my-5 justify-content-center">
                {obj.map((obj1) => {
                  return (
                    <>
                      <div className="col text-center">
                        <video
                          src={obj1.link}
                          controls
                          height={"200px"}
                          style={{ float: "center" }}
                        ></video>
                        <br />
                        <small> {obj1.description}</small>
                        <br />
                        <small>
                          {" "}
                          Date:{" "}
                          {new Date(
                            obj1.date.seconds * 1000
                          ).toLocaleDateString()}
                        </small>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>

      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default News;
