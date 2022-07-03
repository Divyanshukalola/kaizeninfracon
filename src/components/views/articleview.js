import React, { useEffect } from "react";

import Footer from "../footer";

import Topnavigation from "../nav";
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

// import Button from "@mui/material/Button";

function ArticleView({ article }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props.article);
  // function organiseData(array, size) {
  //   var perChunk = size; // items per chunk

  //   var inputArray = array;

  //   var result = inputArray.reduce((resultArray, item, index) => {
  //     const chunkIndex = Math.floor(index / perChunk);

  //     if (!resultArray[chunkIndex]) {
  //       resultArray[chunkIndex] = []; // start a new chunk
  //     }

  //     resultArray[chunkIndex].push(item);

  //     return resultArray;
  //   }, []);

  //   return result;
  // }

  // function dateConvert(date) {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(date);
  //   return t;
  // }
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>
      <br />
      <br />
      <div className="container pt-5">
        {" "}
        <div className="row">
          <div className="col">
            <div className="row justify-content-center">
              <div className="col">
                <img
                  src={article.img}
                  alt=""
                  style={{ width: "inherit" }}
                  className="newsImg"
                />
              </div>
            </div>

            <br />
            <br />
            <br />
            <h1>{article.title}</h1>
            <h6>
              <pre>{article.body}</pre>
            </h6>
            <hr />
            <small>
              <b>Date: </b>
              {new Date(article.date.seconds * 1000).toLocaleDateString()}
            </small>
            <br />
            <small>
              <b>Written By: </b>
              {article.writenBy}
            </small>
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

export default ArticleView;
