import React, { useEffect, useState } from "react";

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
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { storage } from "./../../firebase-config";

import { v4 } from "uuid";

function AdminNews({ news, setValue }) {
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);

  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const [id, setId] = useState(null);
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "news");

  //write Data
  async function writeDataNews() {
    setLoading(true);
    var mydate = new Date(getValues("date"));
    setId(v4());
    if (file == null) {
      addDoc(dataCollectionRef1, {
        title: getValues("title"),
        body: getValues("body"),
        img: url,
        date: mydate,
        writenBy: getValues("writtenBy"),
        imageListID: id,
      });
    }
    const imageRef = ref(storage, `news/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);

        addDoc(dataCollectionRef1, {
          title: getValues("title"),
          body: getValues("body"),
          img: url,
          date: mydate,
          writenBy: getValues("writtenBy"),
          imageListID: id,
        });
      });
    });

    await setTimeout(
      function() {
        setLoading(false);

        window.location.reload(false);
      }.bind(this),
      1000
    );
  }

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

  //   function deleteFile(type, id) {}

  function dateConvert(date) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(date);
    return t;
  }

  function showDF() {
    const df = getValues();
    alert(JSON.stringify(df));
  }
  return (
    <>
      {" "}
      <br />
      {/* news  */}
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
                <label>Title</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="News Headline"
                  {...register("title")}
                  {...(loading ? null : "disabled")}
                />
                <small id="emailHelp" class="form-text text-muted">
                  News Headline.
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Written By:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your name"
                  {...register("writtenBy")}
                  {...(loading ? null : "disabled")}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Name of the writer
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter date"
                  {...register("date")}
                  {...(loading ? null : "disabled")}
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
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>News</label>

                <textarea
                  className="form-control"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  placeholder="Write your news ..."
                  {...register("body")}
                  {...(loading ? null : "disabled")}
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
              {loading ? (
                <button className="jobbutton" disabled>
                  Please wait we are uploading your data ...
                </button>
              ) : (
                <button className="jobbutton" onClick={writeDataNews}>
                  Add News
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      {organiseData(news, 2).map((obj) => {
        return (
          <div className="row">
            {obj.map((obj1) => {
              return (
                <div className="col">
                  <div className="row mx-5 my-5 border ">
                    <div className="col mx-3 my-3">
                      <h5>{obj1.title}</h5>
                      <h6>{obj1.body}</h6>
                      <h6>
                        Date:{" "}
                        {new Date(
                          obj1.date.seconds * 1000
                        ).toLocaleDateString()}
                      </h6>
                      <br />
                      <button className="jobbutton mr-5">Edit</button>
                      <button className="jobbutton">Delete</button>
                    </div>
                    <div className="col my-3 text-center">
                      <img src={obj1.img} alt="" width={"200px"} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default AdminNews;
