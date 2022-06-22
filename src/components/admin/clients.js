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

function AdminClients({ cli }) {
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [id] = useState(v4());
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "clients");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (file == null) {
      addDoc(dataCollectionRef1, {
        name: getValues("name"),
        project: getValues("project"),
        img: null,
        imageListID: id,
      });
    }
    const imageRef = ref(storage, `clients/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          name: getValues("name"),
          project: getValues("project"),
          img: url,
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
    const projects = cli;
    projects.map((obj) => {
      if (id === obj.id) {
        const desertRef = ref(storage, `clients/${obj.imageListID}`);
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
      return null;
    });
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
          <h3>My Clients</h3>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Client Name"
                  {...register("name")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project:</label>
                <input
                  className="form-control"
                  placeholder="Enter your name"
                  {...register("project")}
                  {...(loading ? "disabled" : null)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Name of project that client is associated with.
                </small>
              </div>
            </div>

            <div className="col">
              {" "}
              <div className="form-group">
                <label for="exampleFormControlFile1">Logo</label>
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
          <div className="row text-center">
            <div className="col">
              {loading ? (
                <button className="jobbutton" disabled>
                  Please wait we are uploading your data ...
                </button>
              ) : (
                <button className="jobbutton" onClick={writeDataNews}>
                  Add Client
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      {organiseData(cli, 2).map((obj) => {
        return (
          <div className="row">
            {obj.map((obj1) => {
              return (
                <div className="col">
                  <div className="row mx-5 my-5 border ">
                    <div className="col mx-3 my-3">
                      <h5>{obj1.name}</h5>
                      <h6>{obj1.project}</h6>

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

export default AdminClients;
