import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
// import { useForm } from "react-hook-form";
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
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./../firebase-config";
// import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   deleteObject,
// } from "@firebase/storage";
// import { storage } from "./../firebase-config";

// import { v4 } from "uuid";

import AdminProj from "./admin/proj";
import AdminNews from "./admin/news";
import AdminArticle from "./admin/article";
import AdminVideos from "./admin/videos";

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

function Admin(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Services">
      {/* navigation  */}

      <Topnavigation news="true"></Topnavigation>
      <br />
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
            <Tab label="Projects" {...a11yProps(0)} />
            <Tab label="News" {...a11yProps(1)} />
            <Tab label="Articles" {...a11yProps(2)} />
            <Tab label="Videos" {...a11yProps(3)} />
            {/* <Tab label="Resume" {...a11yProps(4)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
          <AdminNews news={props.new} value={setValue}></AdminNews>
        </TabPanel>
        <TabPanel value={value} index={0}>
          <AdminProj proj={props.proj} value={setValue}></AdminProj>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AdminArticle arti={props.arti} value={setValue}></AdminArticle>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AdminVideos videos={props.videos}></AdminVideos>
        </TabPanel>
        {/* <TabPanel value={value} index={4}></TabPanel> */}
      </Box>

      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Admin;
