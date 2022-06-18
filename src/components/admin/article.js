import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { storage } from "./../../firebase-config";

import { v4 } from "uuid";

function AdminArticle({ arti, setValue }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "article");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (file == null) {
      addDoc(dataCollectionRef1, {
        title: getValues("title"),
        body: getValues("body"),
        img: "null",
        date: getValues("date"),
        writenBy: getValues("author"),
        imageListID: id,
      });
    }
    const imageRef = ref(storage, `article/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          title: getValues("title"),
          body: getValues("body"),
          img: url,
          date: getValues("date"),
          writenBy: getValues("author"),
          imageListID: id,
        });
      });
    });

    await setTimeout(function() {
      setLoading(false);
      window.location.reload(false);
      setValue(2);
    }, 1000);
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

  function deleteFile(id) {
    const projects = arti;
    projects.map((obj) => {
      if (id === obj.id) {
        const desertRef = ref(storage, `article/${obj.imageListID}`);
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

  return (
    <>
      {" "}
      <br />
      {/* news  */}
      <div className="row text-center">
        <div className="col">
          <h3>Article</h3>
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
                  Article Title.
                </small>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Name of Author</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="News Headline"
                  {...register("author")}
                  {...(loading ? "disabled" : null)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Article Written By.
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
                <label for="exampleFormControlFile1">File</label>
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
                <label>Article</label>

                <textarea
                  className="form-control"
                  id="w3review"
                  name="w3review"
                  rows="8"
                  placeholder="Write your article ..."
                  {...register("body")}
                  {...(loading ? "disabled" : null)}
                ></textarea>
                <small id="emailHelp" class="form-text text-muted">
                  Write your article here.
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
                  Add Article
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      {organiseData(arti, 2).map((obj) => {
        return (
          <div className="row">
            {obj.map((obj1) => {
              return (
                <div className="col">
                  <div className="row mx-5 my-5 border ">
                    <div className="col mx-3 my-3">
                      <h5>{obj1.title}</h5>
                      <h6>{obj1.body}</h6>
                      <small>
                        <b>Date: </b>
                        {new Date(
                          obj1.date.seconds * 1000
                        ).toLocaleDateString()}
                      </small>
                      <br />
                      <small>
                        <b>Author:</b> {obj1.writenBy}
                      </small>
                      <br />
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

export default AdminArticle;
