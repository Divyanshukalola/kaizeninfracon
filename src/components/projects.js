import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";

// img
import sample_proj from "./../static/img/proposed/proj2.png";

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
function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Projects">
      {/* navigation  */}
      <Topnavigation proj="true"></Topnavigation>

      <div className="bg-light projects">
        <div className="row text-center">
          <div className="col">
            <h1 style={{ color: "white", marginTop: "15%", fontSize: "55px" }}>
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
                aria-label="basic tabs example"
                textColor="#ff5e10"
                indicatorColor="secondary"
                centered
              >
                <Tab label="All Projects" {...a11yProps(0)} />
                <Tab label="Current Projects" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* all projects  */}
              <div className="mt-4 mx-5 text-center">
                {" "}
                <span className="sectionHeader">ALL PROJECTS</span>
                <hr />
                <br />
              </div>
              {/* commercial  */}
              <div className="row followMeBar">
                <div className="col ">
                  <div className=" text-center my-3 ">
                    <h1 style={{ color: "lightgray" }}>COMMERCIAL BUILDING</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  {organiseData(props.proj, 2).map((obj) => {
                    return (
                      <div className="row projectRow ">
                        {obj.map((obj1) => {
                          return (
                            <>
                              {obj1.type === 1 ? (
                                <div className="col">
                                  <img
                                    src={obj1.img}
                                    alt=""
                                    className="projectImg"
                                  />
                                  <div className="container text">
                                    <h5 className="mt-2">{obj1.title}</h5>
                                    <small>{obj1.body}</small>
                                    <br />
                                    <button className="mx-2 my-3 jobbutton">
                                      Learn More
                                    </button>
                                  </div>
                                </div>
                              ) : null}
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
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
              <div className="row">
                <div className="col">
                  <>
                    {organiseData(props.proj, 2).map((obj) => {
                      return (
                        <div className="row projectRow ">
                          {obj.map((obj1) => {
                            return (
                              <>
                                {obj1.type === 2 ? (
                                  <div className="col">
                                    <img
                                      src={obj1.img}
                                      alt=""
                                      className="projectImg"
                                    />
                                    <div className="container text">
                                      <h5 className="mt-2">{obj1.title}</h5>
                                      <small>{obj1.body}</small>
                                      <br />
                                      <button className="mx-2 my-3 jobbutton">
                                        Learn More
                                      </button>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
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
              <div className="row">
                <div className="col">
                  <>
                    {organiseData(props.proj, 2).map((obj) => {
                      return (
                        <div className="row projectRow ">
                          {obj.map((obj1) => {
                            return (
                              <>
                                {obj1.type === 3 ? (
                                  <div className="col">
                                    <img
                                      src={obj1.img}
                                      alt=""
                                      className="projectImg"
                                    />
                                    <div className="container text">
                                      <h5 className="mt-2">{obj1.title}</h5>
                                      <small>{obj1.body}</small>
                                      <br />
                                      <button className="mx-2 my-3 jobbutton">
                                        Learn More
                                      </button>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
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
              <div className="row">
                <div className="col">
                  <>
                    {organiseData(props.proj, 2).map((obj) => {
                      return (
                        <div className="row projectRow ">
                          {obj.map((obj1) => {
                            return (
                              <>
                                {obj1.type === 4 ? (
                                  <div className="col">
                                    <img
                                      src={obj1.img}
                                      alt=""
                                      className="projectImg"
                                    />
                                    <div className="container text">
                                      <h5 className="mt-2">{obj1.title}</h5>
                                      <small>{obj1.body}</small>
                                      <br />
                                      <button className="mx-2 my-3 jobbutton">
                                        Learn More
                                      </button>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
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
              <div className="row">
                <div className="col">
                  <>
                    {organiseData(props.proj, 2).map((obj) => {
                      return (
                        <>
                          <div className="row projectRow ">
                            {obj.map((obj1) => {
                              return (
                                <>
                                  {obj1.type === 5 ? (
                                    <div className="col">
                                      <img
                                        src={obj1.img}
                                        alt=""
                                        className="projectImg"
                                      />
                                      <div className="container text">
                                        <h5 className="mt-2">{obj1.title}</h5>
                                        <small>{obj1.body}</small>
                                        <br />
                                        <button className="mx-2 my-3 jobbutton">
                                          Learn More
                                        </button>
                                      </div>
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </>
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
              <div className="row">
                <div className="col">
                  <>
                    {organiseData(props.proj, 2).map((obj) => {
                      return (
                        <>
                          <div className="row projectRow ">
                            {obj.map((obj1) => {
                              return (
                                <>
                                  {obj1.type === 6 ? (
                                    <div className="col">
                                      <img
                                        src={obj1.img}
                                        alt=""
                                        className="projectImg"
                                      />
                                      <div className="container text">
                                        <h5 className="mt-2">{obj1.title}</h5>
                                        <small>{obj1.body}</small>
                                        <br />
                                        <button className="mx-2 my-3 jobbutton">
                                          Learn More
                                        </button>
                                      </div>
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </>
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
              <div className="row mx-5 my-5">
                <div className="col-6">
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={sample_proj}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        BALASORE-Const of Hospital Bldg for NGMC (650 Bedded)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button className="mx-2 my-3 jobbutton">
                        Learn More
                      </button>
                    </CardActions>
                  </Card>
                </div>
              </div>
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
