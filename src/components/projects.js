import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
import { useNavigate } from "react-router-dom";

// img

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
function Projects({ proj }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // var items = false;
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Projects">
      {/* navigation  */}
      <Topnavigation proj="true"></Topnavigation>

      <div
        className="bg-light"
        style={{
          background:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fprojects.jpeg?alt=media&token=6c75e8c5-cdc2-4933-87b2-388bbf3c3828"),no-repeat',

          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row text-center">
          <div className="col">
            <h1
              style={{
                color: "white",
                marginTop: "15%",
                fontSize: "55px",
              }}
            >
              OUR PROJECTS
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {" "}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="#ff5e10"
                indicatorColor="secondary"
                centered
              >
                <Tab label="All Projects" {...a11yProps(0)} />
                <Tab label="Current Projects" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* commercial  */}
              <div className="row followMeBar">
                <div className="col ">
                  <div className=" text-center my-3 ">
                    <h1 style={{ color: "lightgray" }}>COMMERCIAL BUILDING</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 1)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* residential  */}
              <div className="row followMeBar">
                <div className="col">
                  <div className=" text-center my-3 ">
                    <h1 style={{ color: "lightgray" }}>RESIDENTIAL BUILDING</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 2)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>

              <br />
              <hr />
              {/* roads and bridges  */}
              <div className="row followMeBar">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>ROADS AND BRIDGES</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 3)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* hospital and colleges */}
              <div className="row followMeBar">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>
                      HOSPITAL AND COLLEGES
                    </h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 4)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* gov admin buildings */}
              <div className="row followMeBar">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>
                      GOVERNMENT ADMINISTRATIVE BUILDING
                    </h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 5)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* other facilities  */}
              <div className="row followMeBar">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>OTHER FACILITIES</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col">
                  <div className="row  d-flex justify-content-center">
                    {proj
                      .filter((e) => e.type === 6)
                      .map((obj1) => {
                        return (
                          <>
                            <div
                              className="col-6 projectRow d-flex justify-content-center"
                              onClick={() => {
                                navigate(`/projects/${obj1.id}`);
                              }}
                            >
                              <img
                                src={obj1.img}
                                alt=""
                                className="projectImg"
                              />
                              <div className="container text">
                                <h5 className="mt-2">{obj1.title}</h5>
                                <small>{obj1.body}</small>
                                <br />
                                <button
                                  className="mx-2 my-3 jobbutton"
                                  onClick={() => {
                                    navigate(`/projects/${obj1.id}`);
                                  }}
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* current projects  */}
              <div className="mt-4 mx-5 text-center">
                {" "}
                <span className="sectionHeader">CURRENT PROJECTS</span>
                <hr />
              </div>
              {organiseData(proj, 2).map((obj) => {
                let today = new Date().toLocaleDateString("en-us");
                // var t = new Date(1970, 0, 1);

                // let seconds = t.setSeconds(today);
                var date = new Date(today);
                var seconds2 = date.getTime() / 1000;
                return (
                  <>
                    <div className="row mx-5 my-5">
                      {" "}
                      {obj.map((obj1) => {
                        return (
                          <>
                            {seconds2 <
                            obj1.details.project_end_date.seconds ? (
                              <div className="col-6">
                                <Card>
                                  <CardMedia
                                    component="img"
                                    height="340"
                                    image={obj1.img}
                                    alt="green iguana"
                                  />
                                  <CardContent>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="div"
                                    >
                                      {obj1.title}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {obj1.body}
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    <button
                                      className="mx-2 my-3 jobbutton"
                                      onClick={() => {
                                        navigate(`/projects/${obj1.id}`);
                                      }}
                                    >
                                      Learn More
                                    </button>
                                  </CardActions>
                                </Card>
                              </div>
                            ) : null}
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </TabPanel>
          </Box>
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

export default Projects;
