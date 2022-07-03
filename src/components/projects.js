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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextTruncate from "react-text-truncate";

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
function Projects2({ proj }) {
  const projCat = [
    "COMMERCIAL BUILDING",
    "RESIDENTIAL BUILDING",
    "ROADS AND BRIDGES",
    "HOSPITAL AND COLLEGES",
    "GOVERNMENT ADMINISTRATIVE BUILDING",
    "OTHER FACILITIES",
  ];
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#ff5e10",
      },
    },
  });
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

      <div className="bg-light projectBackground">
        <table
          style={{ height: "inherit", width: "inherit" }}
          className="border"
        >
          <tbody>
            <tr>
              <td
                class="align-middle text-center"
                style={{
                  color: "white",
                  fontSize: "55px",
                }}
              >
                OUR PROJECTS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mx-0 " style={{ width: "100%" }}>
        <div className="col-sm">
          {" "}
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  theme={theme}
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
                {projCat.map((cat, index) => {
                  return (
                    <>
                      {" "}
                      <div>
                        {/* commercial  */}
                        <div className="row mx-0 followMeBar">
                          <div className="col-sm ">
                            <div className=" text-center my-3 ">
                              <h1 style={{ color: "lightgray" }}>{cat}</h1>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col">
                            <div className="row d-sm-flex justify-content-center">
                              {proj
                                .filter((e) => e.type === index + 1)
                                .map((obj1) => {
                                  return (
                                    <div
                                      className="col-sm-5 position-relative rounded  my-3 mx-3"
                                      style={{ height: "400px" }}
                                      onClick={() => {
                                        navigate(`/projects/${obj1.id}`);
                                      }}
                                    >
                                      <div className="row">
                                        <div className="col">
                                          <img
                                            src={obj1.img}
                                            alt=""
                                            style={{
                                              height: "inherit",
                                              width: "inherit",
                                            }}
                                            className="projectImg"
                                          />
                                          <div
                                            className="text mt-3"
                                            style={{
                                              width: "inherit",
                                            }}
                                          >
                                            <h5 className="mt-2">
                                              {obj1.title}
                                            </h5>

                                            <br />
                                            <button
                                              className="mx-2 my-3 jobbutton"
                                              onClick={() => {
                                                navigate(
                                                  `/projects/${obj1.id}`
                                                );
                                              }}
                                            >
                                              Learn More
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </div>
                    </>
                  );
                })}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* current projects  */}
                <div className="mt-sm-4 mx-sm-5 text-center">
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
                      <div className="row mx-0 mx-sm-5 my-sm-5">
                        {" "}
                        {obj.map((obj1) => {
                          return (
                            <>
                              {seconds2 <
                              obj1.details.project_end_date.seconds ? (
                                <div className="col-sm-6 mt-5">
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
                                        <TextTruncate
                                          line={2}
                                          element="span"
                                          truncateText="…"
                                          text=<TextTruncate
                                            line={1}
                                            element="span"
                                            truncateText="…"
                                            text={obj1.body}
                                          />
                                        />
                                      </Typography>
                                    </CardContent>
                                    <CardActions className="d-flex justify-content-center">
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
          </ThemeProvider>
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

export default Projects2;
