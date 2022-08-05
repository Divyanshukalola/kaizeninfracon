import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";

import { ref, deleteObject } from "@firebase/storage";
import { storage } from "./../../firebase-config";
import readData from "./../functions/DB";

import { v4 } from "uuid";

function AdminKeyPerson() {
  const [team, setteam] = useState([]);
  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
    readData("keyperson").then((e) => {
      setteam(e);
    });
  }, []);
  const dataCollectionRef1 = collection(db, "keyperson");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    await addDoc(dataCollectionRef1, {
      name: getValues("name"),
      designation: getValues("desig"),
      graduation: getValues("grad"),
      experience: getValues("exp"),
      teamID: id,
    });

    await setTimeout(function() {
      setLoading(false);
      window.location.reload(false);
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
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name ..."
                  {...register("name")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation ..."
                  {...register("desig")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Graduation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Graduation ..."
                  {...register("grad")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Experience ..."
                  {...register("exp")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          <br />

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
      <div className="row">
        <div className="col">
          <div className="row mx-5 ">
            <div className="col mx-3 my-3">
              <div className="row">
                <div className="col-1" style={{ fontWeight: "bold" }}>
                  Index
                </div>
                <div className="col-3" style={{ fontWeight: "bold" }}>
                  Name
                </div>
                <div className="col" style={{ fontWeight: "bold" }}>
                  Designation
                </div>
                <div className="col" style={{ fontWeight: "bold" }}>
                  Graduation
                </div>
                <div className="col" style={{ fontWeight: "bold" }}>
                  Experience
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {team ? (
        <>
          {organiseData(team, 1).map((obj, index) => {
            return (
              <div className="row">
                {obj.map((obj1) => {
                  return (
                    <div className="col">
                      <div className="row mx-5 my-1 border ">
                        <div className="col mx-3 my-3">
                          <div className="row">
                            <div className="col-1">{index + 1}</div>
                            <div className="col-3">
                              <h6>{obj1.name}</h6>
                            </div>
                            <div className="col">
                              <h6>{obj1.designation}</h6>
                            </div>
                            <div className="col">
                              <h6>{obj1.graduation}</h6>
                            </div>
                            <div className="col">
                              <h6>{obj1.experience}</h6>
                            </div>
                            <div className="col">
                              <button
                                className="jobbutton"
                                onClick={() => {
                                  deleteFile(obj1.id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
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

export default AdminKeyPerson;
