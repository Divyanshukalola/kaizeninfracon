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

import Timeline from "../timeline";

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

  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation proj="true"></Topnavigation>
      <br />
      <br />
      <div
        className="container pt-5 projectitle"
        style={{ position: "relative" }}
      >
        {" "}
        <div className="row">
          <div className="col">
            <h1>{project.title}</h1>
            <br />
            <h6>
              <pre>{project.body}</pre>
            </h6>
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <hr />
          </div>
          <div className="col-3 text-center sectionTitle">Details</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 my-4">
            <div className="row">
              <div className="col">
                <img src={project.img} alt="" className="newsImg" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-4">
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
              <div className="col-3 text-center sectionTitle">Time Line</div>
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Timeline items={items}></Timeline>
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
              <div className="col-4 text-center sectionTitle">
                Extra Information
              </div>
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
                {itemsinfo.map((obj, index) => {
                  return (
                    <>
                      {index % 2 !== 0 ? (
                        <div className="row bg-light">
                          <div className="col-sm my-5 mx-3">
                            <div className="row">
                              <div className="col">
                                {" "}
                                <img
                                  src={obj[1].img}
                                  alt=""
                                  className="extrainfoimg"
                                />
                              </div>
                            </div>

                            <pre style={{ fontSize: "15px" }} className="my-3">
                              {obj[1].data}
                            </pre>
                            <br />
                          </div>
                          <div className="col-sm-3 my-5 mx-3 text-center">
                            <h1
                              style={{
                                color: "lightgray",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                              }}
                            >
                              {obj[1].tag}
                              <span style={{ color: "#ff5e10" }}>.</span>
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <div className="row bg-white">
                          <div className="col-sm-3 my-5 mx-3 text-center">
                            <h1
                              style={{
                                color: "lightgray",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                              }}
                            >
                              {obj[1].tag}
                              <span style={{ color: "#ff5e10" }}>.</span>
                            </h1>
                          </div>
                          <div className="col-sm my-5 mx-3">
                            <div className="row">
                              <div className="col">
                                {" "}
                                <img
                                  src={obj[1].img}
                                  alt=""
                                  className="extrainfoimg"
                                />
                              </div>
                            </div>

                            <pre style={{ fontSize: "15px" }} className="my-3">
                              {obj[1].data}
                            </pre>
                            <br />
                          </div>
                        </div>
                      )}
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
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
