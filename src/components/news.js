import React, { useEffect } from "react";

import Footer from "./footer";
import TextTruncate from "react-text-truncate";
import { useNavigate } from "react-router-dom";

import Topnavigation from "./nav";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import Pagination from "@mui/material/Pagination";
import useWindowDimensions from "./useWindowDimensions";

// import readData from "./functions/DB";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NewsView from "./views/newsview";
// import ArticleView from "./views/articleview";

function News({ news, arti, videos, setPagination }) {
  const { height, width } = useWindowDimensions();
  console.log(height);
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [page1, setPage1] = React.useState(1);
  const handleChange1 = (event, value) => {
    setPage1(value);
  };
  const [page2, setPage2] = React.useState(1);
  const handleChange2 = (event, value) => {
    setPage2(value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setPagination(page);
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
    <div className="Services ">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>

      <div
        className="bg-white"
        style={{
          backgroundImage:
            'url("https://ak.picdn.net/shutterstock/videos/1055334359/thumb/1.jpg")',
          height: width <= 600 ? "300px" : "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "70%",
        }}
      >
        <div className="row mx-0 text-center" style={{ width: "100%" }}>
          <div className="col mt-5 mt-sm-0">
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

      <div className="bg-white ">
        <div className="mt-5 text-center">
          <span className="sectionHeader">MEDIA CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(news, 2).map((obj, index) => {
          return (
            <>
              {index === page - 1 ? (
                <div className="row mx-0 mx-sm-5 my-sm-5 my-3 justify-content-center">
                  {" "}
                  {obj.map((obj1) => {
                    return (
                      <>
                        <div className="col-sm-6 mx-4 mx-sm-0">
                          {" "}
                          <Card>
                            {obj1.img ? (
                              <CardMedia
                                component="img"
                                image={obj1.img}
                                height="150px"
                                alt="green iguana"
                              />
                            ) : null}

                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                              >
                                {obj1.title}
                              </Typography>
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
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
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
                                {" "}
                                Written By: {obj1.writenBy}
                              </Typography>
                              <br />
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
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
              ) : null}
            </>
          );
        })}
        {page >= 1 ? (
          <>
            {" "}
            <br />
            <div className="row mx-0 ">
              <div className="col d-flex justify-content-center">
                {" "}
                <Pagination
                  count={organiseData(news, 2).length}
                  page={page}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>

      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">ARTICLE CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(arti, 2).map((obj, index) => {
          return (
            <>
              {index === page1 - 1 ? (
                <div className="row mx-0 mx-sm-5 my-sm-5 my-3 justify-content-center">
                  {obj.map((obj1) => {
                    return (
                      <>
                        <div className="col-sm-6 mx-4 mx-sm-0">
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
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
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
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
                                {" "}
                                Written By: {obj1.writenBy}
                              </Typography>
                              <br />
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
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
              ) : null}
            </>
          );
        })}

        {page1 >= 1 ? (
          <>
            {" "}
            <br />
            <div className="row mx-0 ">
              <div className="col-sm d-flex justify-content-center">
                {" "}
                <Pagination
                  count={organiseData(arti, 2).length}
                  page={page1}
                  onChange={handleChange1}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">VIDEO CORNER</span>
          <hr />
          <br />
        </div>

        {organiseData(videos, 3).map((obj, index) => {
          return (
            <>
              {index === page2 - 1 ? (
                <div className="row mx-0 mx-sm-5 my-sm-5 my-3 justify-content-center ">
                  {obj.map((obj1) => {
                    return (
                      <>
                        <div className="col-sm text-center">
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
              ) : null}
            </>
          );
        })}

        {page2 >= 1 ? (
          <>
            <br />
            <div className="row mx-0 ">
              <div className="col d-flex justify-content-center">
                {" "}
                <Pagination
                  count={organiseData(videos, 3).length}
                  page={page2}
                  onChange={handleChange2}
                />
              </div>
            </div>
          </>
        ) : null}
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
