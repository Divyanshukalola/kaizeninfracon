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
import { doc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { storage } from "./../../firebase-config";

import { v4 } from "uuid";

function AdminNews({ news }) {
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [id] = useState(v4());
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "news");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (file == null) {
      addDoc(dataCollectionRef1, {
        title: getValues("title"),
        body: getValues("body"),
        img: null,
        date: getValues("date"),
        writenBy: getValues("writtenBy"),
        imageListID: id,
      });
    }
    const imageRef = ref(storage, `news/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          title: getValues("title"),
          body: getValues("body"),
          img: url,
          date: getValues("date"),
          writenBy: getValues("writtenBy"),
          imageListID: id,
        });
      });
    });

    await setTimeout(function() {
      setLoading(false);

      window.location.reload(false);
    }, 1000);
  }

  function deleteFile(id) {
    const projects = news;
    projects.map((obj) => {
      if (id == obj.id) {
        const desertRef = ref(storage, `news/${obj.imageListID}`);
        // Delete the image
        deleteObject(desertRef);

        deleteDoc(doc(dataCollectionRef1, obj.id))
          .then(() => {
            console.log("Files Deleted");

            alert("File Deleted Successfully!!");
            window.location.reload(false);
          })
          .catch((error) => {
            alert("File Not Deleted!!");
          });
      }
    }, []);
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
                  {...(loading ? "disabled" : null)}
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
                  {...(loading ? "disabled" : null)}
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
                  {...register("date", {
                    valueAsDate: true,
                  })}
                  {...(loading ? "disabled" : null)}
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
                  {...(loading ? "disabled" : null)}
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
                  {...(loading ? "disabled" : null)}
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
                      <button
                        className="jobbutton"
                        onClick={() => {
                          deleteFile(obj1.id);
                        }}
                      >
                        Delete
                      </button>
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
