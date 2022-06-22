import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import Parser from "html-react-parser";

import { useForm } from "react-hook-form";


import { doc, collection, updateDoc } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "./../../firebase-config";

import { v4 } from "uuid";

import "draft-js/dist/Draft.css";
import Topnavigation from "./../nav";

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

function AdminProjEdit(props) {
  var items = false;
  if (props.project.timeline) {
    items = Object.keys(props.project.timeline).map(function(key, index) {
      return [key, props.project.timeline[key], index];
    });
    items.sort();
  }

  var itemsinfo = false;
  if (props.project.extra_info) {
    itemsinfo = Object.keys(props.project.extra_info).map(function(key, index) {
      return [key, props.project.extra_info[key], index];
    });
  }

  const [timeLine, settimeLine] = useState(items);
  const [ExtraInfo, setExtraInfo] = useState(itemsinfo);

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());

  const { register, getValues, setValue, unregister } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const dataCollectionRef1 = collection(db, "projects");

  async function UpdateDoc(urlLink) {
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

    const projDoc = doc(db, "projects", props.project.id);
    console.log(projDoc);
    const data = {
      title: getValues("project_title"),
      type: getValues("type"),
      location: getValues("location"),
      img: urlLink,
      timeline: timeref,
      contact: conref,
      details: getValues("details"),
      body: getValues("body"),
      extra_info: exinforef,
    };
    console.log(exinforef);
    console.log(data);
    // console.log(getValues("timeline"));

    await updateDoc(projDoc, data);
  }

  async function SelectUpload(e, index) {
    const selectedFile = e.target.files[0];
    const imageID = getValues(`extra_info.${index}.info${index}.id`);
    const imageRefProj = ref(storage, `proj/${id}/${imageID}`);
    console.log("File done");
    if (getValues(`extra_info.${index}.info${index}.img`)) {
      await uploadBytes(imageRefProj, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          var link = url;

          setValue(`extra_info.${index}.info${index}.img`, link);
          console.log(getValues());
        });
      });
    } else {
      await uploadBytes(imageRefProj, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          var link = url;

          register(`extra_info.${index}.info${index}.img`, { value: link });
          console.log(getValues());
        });
      });
    }

    console.log("File Uploaded");
    document.getElementById(`file${index}`).style.color = "green";
    return true;
  }

  //write Data
  async function writeDataProject() {
    setLoading(true);

    if (file == null) {
      await UpdateDoc(getValues("img"));
      console.log("Data Uploaded..");
    } else {
      const imageRef = ref(storage, `proj/${id}/${id}`);

      await uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          UpdateDoc(url);
        });
      });
    }

    console.log("Data Uploaded");
    // await navigate(`/admin`);
    window.location.reload();
  }

  // function deleteFile() {
  //   const projects = props.project;
  //   console.log("Project ID");
  //   console.log(projects);
  //   const desertRef = ref(
  //     storage,
  //     `proj/${projects.projid}/${projects.projid}`
  //   );
  //   // Delete the image
  //   deleteObject(desertRef);
  //   if (projects.extra_info != null) {
  //     Object.entries(projects.extra_info).map((info) => {
  //       console.log("Image ID");
  //       console.log(info[1].id);
  //       const desertRef = ref(storage, `proj/${projects.projid}/${info[1].id}`);
  //       // Delete the image
  //       deleteObject(desertRef);
  //       return null;
  //     });
  //   }

  //   deleteDoc(doc(dataCollectionRef1, projects.id))
  //     .then(() => {
  //       console.log("Files Deleted");

  //       alert("File Edited Successfully!!");
  //       navigate(`/admin`);
  //     })
  //     .catch((error) => {
  //       alert("File Not Deleted!!");
  //     });
  // }

  function addTimeLineStage() {
    if (timeLine) {
      settimeLine((oldArray) => [
        ...oldArray,
        [`stage${timeLine.length}`, {}, timeLine.length],
      ]);
    } else {
      settimeLine([[`stage0`, {}, 0]]);
    }

    console.log(timeLine);
  }
  function addExtrainfo() {
    if (ExtraInfo) {
      setExtraInfo((oldArray) => [
        ...oldArray,
        [`info${ExtraInfo.length}`, {}, ExtraInfo.length],
      ]);
    } else {
      setExtraInfo([[`info0`, {}, 0]]);
    }

    console.log(ExtraInfo);
  }

  function delTimeLineStage(position) {
    console.log(position);
    settimeLine(timeLine.filter((e) => e[2] !== position));
    console.log(timeLine.filter((e) => e[2] !== position));
  }
  function delExtrainfo(position) {
    console.log(position);
    setExtraInfo(ExtraInfo.filter((e) => e[2] !== position));
    console.log(ExtraInfo.filter((e) => e[2] !== position));
  }

  return (
    <>
      <Topnavigation proj="true"></Topnavigation> <br />
      {/* projects  */}
      <div className="row text-center">
        <div className="col">
          <h3>{props.project.title}</h3>
          <small>Project ID: {props.project.id}</small>
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
          <div className="row mx-5 justify-content-center">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Name ..."
                      defaultValue={props.project.title}
                      {...register("project_title")}
                      {...(loading ? "disabled" : null)}
                    />

                    <small id="emailHelp" class="form-text text-muted">
                      Name of the Project.
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Project Type</label>
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      {...register("type", {
                        valueAsNumber: true,
                      })}
                      defaultValue={props.project.type}
                      {...(loading ? "disabled" : null)}
                    >
                      <option value={1}>Commercial Buildings</option>
                      <option value={2}>Residential Buildings</option>
                      <option value={3}>Roads and Bridges</option>
                      <option value={4}>Hospital and Colleges</option>
                      <option value={5}>
                        Government Administrative Buildings
                      </option>
                      <option value={6}>Other Facilities</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      defaultValue={props.project.location}
                      {...register("location")}
                      {...(loading ? "disabled" : null)}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      Make sure you include the pincode and the name of the
                      state in your address.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <img
                      src={props.project.img}
                      {...register("img", {
                        value: props.project.img ? props.project.img : "",
                      })}
                      width="200px"
                      alt=""
                    />

                    <input
                      type="file"
                      className="form-control-file my-4"
                      onChange={(event) => {
                        setFile(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
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
                  rows="10"
                  placeholder="Write your description ..."
                  contenteditable="true"
                  {...register("body")}
                  defaultValue={props.project.body}
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
                  type="text"
                  className="form-control"
                  placeholder="Name ..."
                  defaultValue={props.project.contact.x.person1.name}
                  {...register("contact.0.person1.name")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project Manager Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email ..."
                  defaultValue={props.project.contact.x.person1.email}
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
                  type="text"
                  className="form-control"
                  placeholder="Phone Number ..."
                  defaultValue={props.project.contact.x.person1.phone}
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
                  type="text"
                  className="form-control"
                  defaultValue={props.project.details.project_cost}
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
                  placeholder="MM/DD/YYYY"
                  defaultValue={
                    props.project.details.project_start_date
                      ? new Date(
                          props.project.details.project_start_date.seconds *
                            1000
                        ).toLocaleDateString("en-us")
                      : ""
                  }
                  {...register("details.project_start_date", {
                    valueAsDate: true,
                  })}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project end date:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                  defaultValue={
                    props.project.details.project_end_date
                      ? new Date(
                          props.project.details.project_end_date.seconds * 1000
                        ).toLocaleDateString("en-us")
                      : ""
                  }
                  {...register("details.project_end_date", {
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
                  defaultValue={props.project.details.project_exe_period}
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
                  defaultValue={props.project.details.project_op_main}
                  {...register("details.project_op_main")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Clients:</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={props.project.details.project_client}
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
                  defaultValue={props.project.details.project_Concessionaire}
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
                  defaultValue={props.project.details.project_epc_con}
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
                  defaultValue={props.project.details.project_epc_sub_con}
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
                  defaultValue={props.project.details.project_Engineer}
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
                {timeLine ? (
                  <>
                    {" "}
                    {timeLine.map((obj, index) => {
                      return (
                        <>
                          <div
                            className="col-2 border mx-1 card"
                            id={`timeline${obj[2]}`}
                            key={`timeline${obj[2]}`}
                          >
                            <div className="form-group my-3">
                              <div className="row text-center">
                                <div className="col">
                                  <h5>Stage {index}</h5>
                                </div>
                              </div>

                              <label>Tag:</label>
                              <input
                                type="text"
                                className="form-control"
                                id={`timelinetag${obj[2]}`}
                                defaultValue={obj[1].tag}
                                {...register(
                                  `timeline.${index}.stage${index}.tag`
                                )}
                                {...(loading ? "disabled" : null)}
                              />
                              <label>Date:</label>

                              <input
                                type="text"
                                className="form-control"
                                placeholder="MM/DD/YYYY"
                                defaultValue={
                                  obj[1].date
                                    ? new Date(
                                        obj[1].date.seconds * 1000
                                      ).toLocaleDateString("en-us")
                                    : ""
                                }
                                {...register(
                                  `timeline.${index}.stage${index}.date`,
                                  {
                                    valueAsDate: true,
                                  }
                                )}
                                // onChange={(e) => {
                                //   console.log(e.target.value);
                                //   setState1(e.target.value);
                                // }}
                                {...(loading ? "disabled" : null)}
                              />
                              {timeLine.length - 1 === index ? (
                                <button
                                  className="removeButton my-3"
                                  onClick={() => {
                                    unregister(
                                      `timeline.${index}.stage${index}`
                                    );
                                    document.getElementById(
                                      `timeline${obj[2]}`
                                    ).hidden = true;
                                    delTimeLineStage(obj[2]);
                                  }}
                                >
                                  Remove
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center my-auto">
              <button
                className="jobbutton"
                style={{
                  top: "50%",
                  borderColor: "gray",
                }}
                onClick={() => {
                  addTimeLineStage();
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
                  {ExtraInfo ? (
                    <>
                      {" "}
                      {ExtraInfo.map((obj, index) => {
                        return (
                          <>
                            <div className="col-3 border mx-1 bg-white card ">
                              {" "}
                              <div className="form-group my-3">
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
                                  defaultValue={obj[1].tag}
                                  {...register(
                                    `extra_info.${index}.info${index}.tag`
                                  )}
                                  {...(loading ? "disabled" : null)}
                                />
                                <label>Data:</label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  placeholder="Write your description ..."
                                  contenteditable="true"
                                  defaultValue={obj[1].data}
                                  key={index}
                                  {...register(
                                    `extra_info.${index}.info${index}.data`
                                  )}
                                  {...(loading ? "disabled" : null)}
                                ></textarea>
                                {/* <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={obj[1].data}
                                  key={index}
                                  {...register(
                                    `extra_info.${index}.info${index}.data`
                                  )}
                                  {...(loading ? "disabled" : null)}
                                /> */}
                                <div className="form-group my-4">
                                  {obj[1].img ? (
                                    <img
                                      src={obj[1].img}
                                      {...register(
                                        `extra_info.${index}.info${index}.img`,
                                        {
                                          value: obj[1].img,
                                        }
                                      )}
                                      width="100px"
                                      alt=""
                                    />
                                  ) : null}
                                  <br />

                                  <input
                                    type="file"
                                    className="form-control-file my-3"
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
                                  <small>
                                    Wait for the text to turn green.
                                  </small>
                                  <br />
                                  <button
                                    className="removeButton my-3"
                                    onClick={() => {
                                      unregister(
                                        `extra_info.${index}.info${index}`
                                      );
                                      delExtrainfo(index);
                                    }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col text-center my-auto">
              <button
                className="jobbutton"
                style={{
                  top: "50%",
                  borderColor: "gray",
                }}
                onClick={() => {
                  addExtrainfo();
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
                  Update Project
                </button>
              )}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default AdminProjEdit;
