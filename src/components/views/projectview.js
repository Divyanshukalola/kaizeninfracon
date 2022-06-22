import React, { useEffect } from "react";

import Footer from "../footer";

import Topnavigation from "../nav";
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

// import Button from "@mui/material/Button";

// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
// import { useState } from "react";

// import { BsFillCircleFill } from "react-icons/bs";
// import { BsFillClockFill } from "react-icons/bs";
// import { BsFillCheckCircleFill } from "react-icons/bs";
function ProjectView({ project }) {
  var items = false;
  if (project.timeline) {
    items = Object.keys(project.timeline).map(function(key, index) {
      return [key, project.timeline[key], index];
    });
    items.sort();
  }

  var itemsinfo = false;
  if (project.extra_info) {
    itemsinfo = Object.keys(project.extra_info).map(function(key, index) {
      return [key, project.extra_info[key], index];
    });
  }
  console.log(itemsinfo);

  useEffect(() => {
    console.log("Timeline");

    window.scrollTo(0, 0);
  }, []);
  // console.log(props.project);
  // function organiseData(array, size) {
  //   var perChunk = size; // items per chunk

  //   var inputArray = array;

  //   var result = inputArray.reduce((resultArray, item, index) => {
  //     const chunkIndex = Math.floor(index / perChunk);

  //     if (!resultArray[chunkIndex]) {
  //       resultArray[chunkIndex] = []; // start a new chunk
  //     }

  //     resultArray[chunkIndex].push(item);

  //     return resultArray;
  //   }, []);

  //   return result;
  // }

  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation project="true"></Topnavigation>
      <br />
      <br />
      <div className="container">
        {" "}
        <div className="row">
          <div className="col">
            <h1>{project.title}</h1>
            <br />
            <h6>
              <pre>{project.body}</pre>
            </h6>
            <div className="row my-4">
              <div className="col">
                <hr />
              </div>
              <div className="col-2 text-center">Details</div>
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
                {" "}
                <div className="row justify-content-center">
                  <img src={project.img} alt="" className="newsImg" />
                </div>
              </div>
              <div className="col">
                <h6>
                  <pre>
                    <b>Project Cost: </b>
                    {project.details.project_cost}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Start Date: </b>
                    {new Date(
                      project.details.project_start_date.seconds * 1000
                    ).toLocaleDateString()}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Execution Period: </b>
                    {project.details.project_exe_period}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Operation & Maintenance: </b>
                    {project.details.project_op_main}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Cost: </b>
                    {project.details.project_cost}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Client: </b>
                    {project.details.project_client}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Concessionaire: </b>
                    {project.details.project_Concessionaire}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project EPC Contractor: </b>
                    {project.details.project_epc_con}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project EPC Sub-Contractor: </b>
                    {project.details.project_epc_sub_con}
                  </pre>
                  <hr />
                  <pre>
                    <b>Project Engineer: </b>
                    {project.details.project_Engineer}
                  </pre>
                </h6>{" "}
              </div>
            </div>

            {project.timeline ? (
              <>
                <div className="row my-4">
                  <div className="col">
                    <hr />
                  </div>
                  <div className="col-2 text-center">Time Line</div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    {/* <Timeline
                      minEvents={Object.entries(project.timeline).length}
                    >
                      {items.map((obj, index) => {
                        return (
                          <>
                            <TimelineEvent
                              color={
                                index === 0
                                  ? "#D0D3D4"
                                  : index === items.length - 1
                                  ? "#9c2919"
                                  : "#87a2c7"
                              }
                              icon={
                                index === 0
                                  ? BsFillCircleFill
                                  : index === items.length - 1
                                  ? BsFillCheckCircleFill
                                  : BsFillClockFill
                              }
                              title={obj[1].tag}
                              subtitle={new Date(
                                obj[1].date.seconds * 1000
                              ).toLocaleDateString()}
                            />
                          </>
                        );
                      })}
                    </Timeline> */}
                  </div>
                </div>
              </>
            ) : null}

            <br />

            {project.extra_info ? (
              <>
                <div className="row my-4">
                  <div className="col">
                    <hr />
                  </div>
                  <div className="col-3 text-center">Extra Information</div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {itemsinfo.map((obj, index) => {
                      return (
                        <>
                          {index % 2 === 0 ? (
                            <div className="row bg-light">
                              <div className="col my-5 mx-3">
                                <pre
                                  style={{
                                    fontSize: "15px",
                                  }}
                                >
                                  {obj[1].data}
                                </pre>
                                <br />
                                <img src={obj[1].img} alt="" width={"700px"} />
                              </div>
                              <div className="col-3 my-5 mx-3 text-right">
                                <h1
                                  style={{
                                    color: "lightgray",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {obj[1].tag}
                                  <span
                                    style={{
                                      color: "#ff5e10",
                                    }}
                                  >
                                    .
                                  </span>
                                </h1>
                              </div>
                            </div>
                          ) : (
                            <div className="row bg-white">
                              <div className="col-3 my-5 mx-3">
                                <h1
                                  style={{
                                    color: "lightgray",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {obj[1].tag}
                                  <span
                                    style={{
                                      color: "#ff5e10",
                                    }}
                                  >
                                    .
                                  </span>
                                </h1>
                              </div>
                              <div className="col my-5 mx-3">
                                <pre
                                  style={{
                                    fontSize: "15px",
                                  }}
                                >
                                  {obj[1].data}
                                </pre>
                                <br />
                                <img src={obj[1].img} alt="" width={"700px"} />
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : null}
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

export default ProjectView;
