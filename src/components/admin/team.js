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

function AdminTeam({ team, setValue }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "team");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (file == null) {
      addDoc(dataCollectionRef1, {
        fname: getValues("fname"),
        lname: getValues("lname"),
        description: getValues("body"),
        link: "null",

        teamID: id,
      });
    }
    const imageRef = ref(storage, `team/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          fname: getValues("fname"),
          lname: getValues("lname"),
          description: getValues("body"),
          link: url,

          teamID: id,
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
    const projects = team;
    projects.map((obj) => {
      if (id === obj.id) {
        const desertRef = ref(storage, `team/${obj.teamID}`);
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

  return (
    <>
      {" "}
      <br />
      {/* news  */}
      <div className="row text-center">
        <div className="col">
          <h3>My Team</h3>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name ..."
                  {...register("fname")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name ..."
                  {...register("lname")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="form-group">
                <label for="exampleFormControlFile1">Photo</label>
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
                <label>Description</label>

                <textarea
                  className="form-control"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  placeholder="Write member's position in the company ..."
                  {...register("body")}
                  {...(loading ? "disabled" : null)}
                ></textarea>
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
                  Add Member
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      {team ? (
        <>
          {organiseData(team, 2).map((obj) => {
            return (
              <div className="row">
                {obj.map((obj1) => {
                  return (
                    <div className="col">
                      <div className="row mx-5 my-5 border ">
                        <div className="col mx-3 my-3">
                          <h5>
                            {obj1.fname} {obj1.lname}
                          </h5>
                          <h6>{obj1.description}</h6>

                          <br />

                          <br />
                          <br />

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
                          <img src={obj1.link} alt="" height={"200px"} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
}

export default AdminTeam;
