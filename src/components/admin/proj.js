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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AdminProj(props) {
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);

  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const [id, setId] = useState(null);
  const { register, getValues, setValue } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dataCollectionRef1 = collection(db, "news");

  //write Data
  async function writeDataNews() {
    setLoading(true);
    var mydate = new Date(getValues("date"));

    setId(v4());
    if (file == null) return;
    const imageRef = ref(storage, `proj/${id}`);
    file1.map((obj, index) => {
      const v4id = v4();
      const imageRefProj = ref(storage, `proj/${v4id}`);
      uploadBytes(imageRef, obj).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setValue(`extra_info.${index}.info${index}.img`, url);
        });
      });
    });

    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);

        addDoc(dataCollectionRef1, {
          title: getValues("title"),
          type: getValues("type"),
          location: getValues("location"),
          img: url,
          timeline: getValues("timeline"),
          contact: getValues("contact"),
          details: getValues("details"),
          extra_info: getValues("extra_info"),
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
    console.log(file1);
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
                  {...register("title")}
                  {...(loading ? null : "disabled")}
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
                  {...register("type")}
                  {...(loading ? null : "disabled")}
                >
                  <option value={"1"}>Commercial Buildings</option>
                  <option value={"2"}>Residential Buildings</option>
                  <option value={"3"}>Roads and Bridges</option>
                  <option value={"4"}>Hospital and Colleges</option>
                  <option value={"5"}>
                    Government Administrative Buildings
                  </option>
                  <option value={"6"}>Other Facilities</option>
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
                  {...register("location")}
                  {...(loading ? null : "disabled")}
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
                  {...register("body")}
                  {...(loading ? null : "disabled")}
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
                  {...register("contact.0.person1.name")}
                  {...(loading ? null : "disabled")}
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
                  {...register("contact.0.person1.email")}
                  {...(loading ? null : "disabled")}
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
                  {...register("contact.0.person1.phone")}
                  {...(loading ? null : "disabled")}
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
                  {...register("details.project_cost")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project start date:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_start_date")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Project Execution Period:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_exe_period")}
                  {...(loading ? null : "disabled")}
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
                  {...register("details.project_op_main")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Client:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_client")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Concessionaire:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_Concessionaire")}
                  {...(loading ? null : "disabled")}
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
                  {...register("details.project_epc_con")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>EPC Sub-Contractor:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_epc_sub_con")}
                  {...(loading ? null : "disabled")}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Engineer:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("details.project_Engineer")}
                  {...(loading ? null : "disabled")}
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
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  {" "}
                  <div className="form-group">
                    <label>Stage 0:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register(`timeline.0.stage0.tag`)}
                      {...(loading ? null : "disabled")}
                    />
                    <label>Date:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register(`timeline.0.stage0.date`)}
                      {...(loading ? null : "disabled")}
                    />
                  </div>
                </div>
                {[...Array(count)].map((obj, index) => {
                  return (
                    <>
                      {index > 0 ? (
                        <div className="col">
                          {" "}
                          <div className="form-group">
                            <label>Stage {index}:</label>
                            <input
                              type="text"
                              className="form-control"
                              {...register(
                                `timeline.${index}.stage${index}.tag`
                              )}
                              {...(loading ? null : "disabled")}
                            />
                            <label>Date:</label>
                            <input
                              type="text"
                              className="form-control"
                              {...register(
                                `timeline.${index}.stage${index}.date`
                              )}
                              {...(loading ? null : "disabled")}
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
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="col">
                    {" "}
                    <div className="form-group">
                      <label>Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`extra_info.0.info0.tag`)}
                        {...(loading ? null : "disabled")}
                      />
                      <label>Data:</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`extra_info.0.info0.data`)}
                        {...(loading ? null : "disabled")}
                      />
                      <div className="form-group">
                        <label for="exampleFormControlFile1">Image file</label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          {...register(`extra_info.0.info0.img`)}
                          onChange={(event) => {
                            setFile1(event.target.files[0]);
                          }}
                          {...(loading ? null : "disabled")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {[...Array(count1)].map((obj, index) => {
                  return (
                    <>
                      {index > 0 ? (
                        <div className="col">
                          {" "}
                          <div className="form-group">
                            <label>Title:</label>
                            <input
                              type="text"
                              className="form-control"
                              {...register(
                                `extra_info.${index}.info${index}.tag`
                              )}
                              {...(loading ? null : "disabled")}
                            />
                            <label>Data:</label>
                            <input
                              type="text"
                              className="form-control"
                              {...register(
                                `extra_info.${index}.info${index}.data`
                              )}
                              {...(loading ? null : "disabled")}
                            />
                            <div className="form-group">
                              <label for="exampleFormControlFile1">
                                Image file
                              </label>
                              <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                                onChange={(event) => {
                                  setFile1(event.target.files[index]);
                                }}
                                {...(loading ? null : "disabled")}
                              />
                            </div>
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
                <button className="jobbutton" onClick={showDF}>
                  Add Project
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
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
                      <h6>{obj1.body}</h6>
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
                        {obj1.details.proj_cost}
                      </h6>
                      <h6>
                        <b>Pr0ject Start Date: </b>
                        {new Date(
                          obj1.details.proj_start_date.seconds * 1000
                        ).toLocaleDateString()}
                      </h6>
                      <h6>
                        <b>Project execution period: </b>
                        {obj1.details.exe_period}
                      </h6>
                      <h6>
                        <b>Operation & Maintenance: </b>
                        {obj1.details.client}
                      </h6>

                      <h6>
                        <b>Client: </b>
                        {obj1.details.op_main}
                      </h6>
                      <h6>
                        <b>Concessionaire: </b>
                        {obj1.details.concessionaire}
                      </h6>
                      <h6>
                        <b>EPC Contractor : </b>
                        {obj1.details.EPC_con}
                      </h6>
                      <h6>
                        <b>EPC Sub Contractor : </b>
                        {obj1.details.EPC_subcon}
                      </h6>
                      <h6>
                        <b>Engineer: </b>
                        {obj1.details.engineer}
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
                      {Object.entries(obj1.contact).map((person) => {
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
                      <div className="row">
                        <div className="col">
                          <hr />
                        </div>
                        <div className="col text-center">Extra Information</div>
                        <div className="col">
                          <hr />
                        </div>
                      </div>
                      {Object.entries(obj1.extra_info).map((info) => {
                        return (
                          <>
                            {console.log(info)}
                            <h6>
                              <b>{info[1].tag} </b>
                            </h6>
                            <h6>
                              <b>Description: </b>
                              {info[1].data}
                            </h6>
                            <img src={info[1].img} alt="" height={"100px"} />
                          </>
                        );
                      })}

                      <br />
                      <button className="jobbutton mr-5">Edit</button>
                      <button className="jobbutton">Delete</button>
                    </div>
                    <div className="col-4 my-3 text-center">
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
  );
}

export default AdminProj;
