import React from "react";

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

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     rows: 2,
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     cols: 2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
// ];
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
function Projects() {
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
              <div className="row">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>COMMERCIAL BUILDING</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* residential  */}
              <div className="row">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>RESIDENTIAL BUILDING</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                      <div className="container text">
                        <h5 className="mt-2">Title</h5>
                        <small>This is the body.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* roads and bridges  */}
              <div className="row">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>ROADS AND BRIDGES</h1>
                  </div>
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col">
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* hospital and colleges */}
              <div className="row">
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
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* gov admin buildings */}
              <div className="row">
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
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              {/* other facilities  */}
              <div className="row">
                <div className="col">
                  <div className=" text-center my-3">
                    <h1 style={{ color: "lightgray" }}>OTHER FACILITIES</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <div className="row" style={{ height: "230px" }}>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://www.levelset.com/wp-content/uploads/2019/02/apartments.jpg"
                        alt=""
                        className="projectImg"
                      />
                    </div>
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
                        ANGUL-Const. of Multi Storied Residential Apartment
                        Scheme OSHB.
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
