import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
import { useForm } from "react-hook-form";
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

// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../firebase-config";
// import Button from "@mui/material/Button";

function Admin(props) {
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "news");
  //write Data
  const writeData = async () => {
    console.log("Writing Initiated");
    var mydate = new Date(getValues("date"));
    await addDoc(dataCollectionRef1, {
      title: getValues("title"),
      body: getValues("body"),
      img: "",
      date: mydate,
      writenBy: getValues("writtenBy"),
    });
    console.log("Writing Concluded");
  };
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

  function dateConvert(date) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(date);
    return t;
  }
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>
      <br />
      <div className="row text-center">
        <div className="col">
          <h3>News</h3>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  ariaDescribedby="emailHelp"
                  placeholder="News Headline"
                  {...register("title")}
                />
                <small id="emailHelp" class="form-text text-muted">
                  News Headline.
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="exampleInputEmail1">Written By:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  ariaDescribedby="emailHelp"
                  placeholder="Enter your name"
                  {...register("writtenBy")}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Name of the writer
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="exampleInputEmail1">Date:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  ariaDescribedby="emailHelp"
                  placeholder="Enter date"
                  {...register("date")}
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="form-group">
                <label for="exampleFormControlFile1">Image file</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label for="exampleInputEmail1">News</label>

                <textarea
                  className="form-control"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  placeholder="Write your news ..."
                  {...register("body")}
                ></textarea>
                <small id="emailHelp" class="form-text text-muted">
                  Write your news here.
                </small>
              </div>
            </div>
          </div>
          <br />
          <div className="row text-center">
            <div className="col">
              <button className="jobbutton" onClick={writeData}>
                Add News
              </button>
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {" "}
          <div className="row mx-5 my-5 border ">
            <div className="col mx-3 my-3">
              <h5>Title</h5>
              <h6>Body</h6>
              <h6>Date: non</h6>
              <br />
              <button className="jobbutton mr-5">Edit</button>
              <button className="jobbutton">Delete</button>
            </div>
            <div className="col my-3 text-center">
              <img
                src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
                width={"200px"}
              />
            </div>
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

export default Admin;
