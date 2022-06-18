import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import Parser from "html-react-parser";

import { useForm } from "react-hook-form";

import { doc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
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

import "draft-js/dist/Draft.css";

// import { BsCheck2All } from "react-icons/bs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

function AdminProj(props) {


  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());

  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "projects");

  async function SelectUpload(e, index) {
    const selectedFile = e.target.files[0];
    const imageID = getValues(`extra_info.${index}.info${index}.id`);
    const imageRefProj = ref(storage, `proj/${id}/${imageID}`);
    console.log("File done");
    await uploadBytes(imageRefProj, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        var link = url;

        register(`extra_info.${index}.info${index}.img`, { value: link });
        console.log(getValues());
      });
    });
    console.log("File Uploaded");
    return true;
  }

  // upload data
  async function uploadData(urlLink) {
    console.log(getValues());
    var timeref;
    var exinforef;
    var conref;
    if (getValues("timeline") != null) {
      timeref = Object.assign({}, ...getValues("timeline").map((x) => x));
    } else {
      timeref = null;
    }

    if (getValues("extra_info") != null) {
      exinforef = Object.assign({}, ...getValues("extra_info").map((x) => x));
    } else {
      exinforef = null;
    }

    if (getValues("contact") != null) {
      conref = Object.assign(
        {},
        ...getValues("contact").map((x) => ({
          x,
        }))
      );
    } else {
      conref = null;
    }

    await addDoc(dataCollectionRef1, {
      title: getValues("project_title"),
      type: getValues("type"),
      location: getValues("location"),
      img: urlLink,
      timeline: timeref,
      contact: conref,
      details: getValues("details"),
      body: getValues("body"),
      extra_info: exinforef,
      projid: id,
    });
  }

  //write Data
  async function writeDataProject() {
    setLoading(true);
    console.log(getValues("timeline") != null);

    if (file == null) {
      await uploadData(null);
      console.log("Data Uploaded..");
    } else {
      const imageRef = ref(storage, `proj/${id}/${id}`);

      await uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          uploadData(url);
        });
      });
    }

    console.log("Data Uploaded");
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
    const projects = props.proj;
    console.log("Project ID");
    console.log(projects);
    projects.map((obj) => {
      console.log("Obj ID");
      console.log(obj.projid);
      if (id === obj.id) {
        const desertRef = ref(storage, `proj/${obj.projid}/${obj.projid}`);
        // Delete the image
        deleteObject(desertRef);
        if (obj.extra_info != null) {
          Object.entries(obj.extra_info).map((info) => {
            console.log("Image ID");
            console.log(info[1].id);
            const desertRef = ref(storage, `proj/${obj.projid}/${info[1].id}`);
            // Delete the image
            deleteObject(desertRef);
          }, []);
        }

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
      {/* projects  */}
      <div className="row text-center">
        <div className="col">
          <h3>Projects</h3>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <hr />
        </div>
        <div className="col-2 text-center">
          <h6>PROJECT BRIEF</h6>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row ">
        <div className="col">
          {/* PROJECT BRIEF  */}
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Project Name ..."
                  // value={"Test"}
                  {...register("project_title")}
                  {...(loading ? "disabled" : null)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Name of the Project.
                </small>
              </div>
            </div>
            <div className="col">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Project Type</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  {...register("type", {
                    valueAsNumber: true,
                  })}
                  {...(loading ? "disabled" : null)}
                >
                  <option value={1}>Commercial Buildings</option>
                  <option value={2}>Residential Buildings</option>
                  <option value={3}>Roads and Bridges</option>
                  <option value={4}>Hospital and Colleges</option>
                  <option value={5}>Government Administrative Buildings</option>
                  <option value={6}>Other Facilities</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Address"
                  // value={"Test"}
                  {...register("location")}
                  {...(loading ? "disabled" : null)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Make sure you include the pincode and the name of the state in
                  your address.
                </small>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="form-group">
                <label>Image file</label>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Brief</label>

                <textarea
                  className="form-control"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  placeholder="Write your description ..."
                  contenteditable="true"
                  {...register("body")}
                ></textarea>

                <small id="emailHelp" class="form-text text-muted">
                  Write your news here.
                </small>
              </div>
            </div>
          </div>
          {/* PROJECT MANAGER INFO  */}
          <div className="row my-5">
            <div className="col">
              <hr />
            </div>
            <div className="col-3 text-center">
              <h6>PROJECT MANAGER INFO</h6>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Project Manager Name:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Name ..."
                  // value={"Test"}
                  {...register("contact.0.person1.name")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project Manager Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ..."
                  // value={"Test@gmail.com"}
                  {...register("contact.0.person1.email")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project Manager phone:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Phone Number ..."
                  // value={"Test"}
                  {...register("contact.0.person1.phone")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          {/* PROJECT DETAILS  */}
          <div className="row my-5">
            <div className="col">
              <hr />
            </div>
            <div className="col-2 text-center">
              <h6>PROJECT DETAILS</h6>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Project Costs:</label>
                <input
                  type="email"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_cost")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project start date:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"12/12/12"}
                  {...register("details.project_start_date", {
                    valueAsDate: true,
                  })}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project Execution Period:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_exe_period")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Operation & Maintenance:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_op_main")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Client:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_client")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Concessionaire:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_Concessionaire")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>EPC Contractor:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_epc_con")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>EPC Sub-Contractor:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_epc_sub_con")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Engineer:</label>
                <input
                  type="text"
                  className="form-control"
                  // value={"Test"}
                  {...register("details.project_Engineer")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          {/* PROJECT TIMELINE  */}
          <div className="row my-5">
            <div className="col">
              <hr />
            </div>
            <div className="col-2 text-center">
              <h6>PROJECT TIMELINE</h6>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="row">
                {[...Array(count)].map((obj, index) => {
                  return (
                    <>
                      {index >= 0 ? (
                        <div className="col">
                          {" "}
                          <div className="form-group">
                            <label>Stage {index}:</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={"Test"}
                              {...register(
                                `timeline.${index}.stage${index}.tag`
                              )}
                              {...(loading ? "disabled" : null)}
                            />
                            <label>Date:</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={"12/12/12"}
                              {...register(
                                `timeline.${index}.stage${index}.date`,
                                {
                                  valueAsDate: true,
                                }
                              )}
                              {...(loading ? "disabled" : null)}
                            />
                          </div>
                        </div>
                      ) : null}{" "}
                    </>
                  );
                })}
              </div>
            </div>

            <div className="col text-center my-auto">
              <button
                className="jobbutton"
                style={{
                  top: "50%",
                  borderColor: "gray",
                }}
                onClick={() => {
                  setCount(count + 1);
                  console.log(count);
                }}
              >
                Add Stage
              </button>
            </div>
          </div>
          {/* EXTRA PROJECT INFO */}
          <div className="row my-5">
            <div className="col">
              <hr />
            </div>
            <div className="col-2 text-center">
              <h6>EXTRA INFO</h6>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <div className="row mx-5">
            <div className="col">
              <div className="row">
                <>
                  {[...Array(count1)].map((obj, index) => {
                    return (
                      <>
                        {index >= 0 ? (
                          <div className="col">
                            {" "}
                            <div className="form-group">
                              <label
                                {...register(
                                  `extra_info.${index}.info${index}.id`,
                                  {
                                    value: v4(),
                                  }
                                )}
                              >
                                Title:
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                // value={"Test"}
                                {...register(
                                  `extra_info.${index}.info${index}.tag`
                                )}
                                {...(loading ? "disabled" : null)}
                              />
                              <label>Data:</label>
                              <input
                                type="text"
                                className="form-control"
                                // value={"Test"}
                                key={index}
                                {...register(
                                  `extra_info.${index}.info${index}.data`
                                )}
                                {...(loading ? "disabled" : null)}
                              />
                              <div className="form-group">
                                <label>Image file</label>
                                <input
                                  type="file"
                                  className="form-control-file"
                                  id={`file${index}`}
                                  key={index}
                                  onChange={(event) => {
                                    SelectUpload(event, index);
                                    document.getElementById(
                                      `file${index}`
                                    ).disabled = true;
                                  }}
                                  {...(loading ? "disabled" : null)}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}{" "}
                      </>
                    );
                  })}
                </>
              </div>
            </div>

            <div className="col text-center my-auto">
              <button
                className="jobbutton"
                style={{
                  top: "50%",
                  borderColor: "gray",
                }}
                onClick={() => {
                  setCount1(count1 + 1);
                }}
              >
                Add Info
              </button>
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
                <button className="jobbutton" onClick={writeDataProject}>
                  Add Project
                </button>
              )}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <>
        {organiseData(props.proj, 1).map((obj) => {
          return (
            <div className="row">
              {obj.map((obj1) => {
                return (
                  <div className="col">
                    <div className="row mx-5 my-5 border ">
                      <div className="col mx-3 my-3">
                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                          <div className="col text-center">Project Brief</div>
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <h5>{obj1.title}</h5>
                        <h6>
                          <pre>{obj1.body}</pre>
                        </h6>
                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                          <div className="col text-center">Project Details</div>
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <h6>
                          <b>Type: </b>
                          {obj1.type === 1
                            ? "Commercial Building"
                            : obj1.type === 2
                            ? "Residential"
                            : obj1.type === 3
                            ? "Roads and Bridges"
                            : obj1.type === 4
                            ? "Hospital and Colleged"
                            : obj1.type === 5
                            ? "Government Administrative Buildings"
                            : obj1.type === 6
                            ? "Other Facilities"
                            : "Project Cannot be grouped."}
                        </h6>
                        <h6>
                          <b>Project Cost: </b>
                          {obj1.details.project_cost}
                        </h6>
                        <h6>
                          <b>Project Start Date: </b>
                          {new Date(
                            obj1.details.project_start_date.seconds * 1000
                          ).toLocaleDateString()}
                        </h6>
                        <h6>
                          <b>Project execution period: </b>
                          {obj1.details.project_exe_period}
                        </h6>
                        <h6>
                          <b>Operation & Maintenance: </b>
                          {obj1.details.project_client}
                        </h6>

                        <h6>
                          <b>Client: </b>
                          {obj1.details.project_op_main}
                        </h6>
                        <h6>
                          <b>Concessionaire: </b>
                          {obj1.details.project_Concessionaire}
                        </h6>
                        <h6>
                          <b>EPC Contractor : </b>
                          {obj1.details.project_epc_con}
                        </h6>
                        <h6>
                          <b>EPC Sub Contractor : </b>
                          {obj1.details.project_epc_sub_con}
                        </h6>
                        <h6>
                          <b>Engineer: </b>
                          {obj1.details.project_Engineer}
                        </h6>
                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                          <div className="col text-center">Contact Details</div>
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        {obj1.contact != null ? (
                          <>
                            {Object.entries(obj1.contact.x).map((person) => {
                              return (
                                <>
                                  <h6>
                                    <b>Name: </b>
                                    {person[1].name}
                                  </h6>
                                  <h6>
                                    <b>Email: </b>
                                    {person[1].email}
                                  </h6>
                                  <h6>
                                    <b>Phone: </b>
                                    {person[1].phone}
                                  </h6>
                                </>
                              );
                            })}
                          </>
                        ) : null}

                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                          <div className="col text-center">Time Line</div>
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          {obj1.timeline != null ? (
                            <>
                              {" "}
                              {Object.entries(obj1.timeline).map((time) => {
                                return (
                                  <div className="col">
                                    <h6>{console.log(time[1])}</h6>
                                    <h6>{time[1].tag}</h6>
                                    <h6>
                                      Date:{" "}
                                      {new Date(
                                        time[1].date.seconds * 1000
                                      ).toLocaleDateString()}
                                    </h6>
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </div>

                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                          <div className="col text-center">
                            Extra Information
                          </div>
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          {obj1.extra_info != null ? (
                            <>
                              {" "}
                              {Object.entries(obj1.extra_info).map((info) => {
                                return (
                                  <div className="col">
                                    <h6>{info[1].tag}</h6>
                                    <h6>{info[1].data}</h6>
                                    <img
                                      src={info[1].img}
                                      alt=""
                                      width={"300px"}
                                    />
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </div>

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
                      <div className="col-4 my-3 text-center">
                        <>{console.log(obj1.img)}</>
                        <img src={obj1.img} alt="" width={"300px"} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    </>
  );
}

export default AdminProj;
