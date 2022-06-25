import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AdminProj from "./admin/proj";
import AdminNews from "./admin/news";
import AdminArticle from "./admin/article";
import AdminVideos from "./admin/videos";
// import AdminClients from "./admin/clients";
import AdminGallery from "./admin/gallery";
import AdminCover from "./admin/cover";

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

      <Topnavigation logout={true}></Topnavigation>
      <br />

      <hr />
      <ThemeProvider theme={theme}>
        {" "}
        {props.state ? (
          <>
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

                  <Tab label="Gallery" {...a11yProps(4)} />
                  <Tab label="Cover Images" {...a11yProps(5)} />
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

              <TabPanel value={value} index={4}>
                <AdminGallery images={props.images}></AdminGallery>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <AdminCover cover={props.cover}></AdminCover>
              </TabPanel>
            </Box>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col text-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fnotauth.png?alt=media&token=75ab26d5-7091-4a36-97a6-9827e8dc1021"
                  alt=""
                />
                <p>
                  Please go to the <a href="/">home</a> page.
                </p>
              </div>
            </div>
          </>
        )}
      </ThemeProvider>

      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Admin;
