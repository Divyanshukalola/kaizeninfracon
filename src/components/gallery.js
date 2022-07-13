import React, { useEffect, useState } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useWindowDimensions from "./useWindowDimensions";

import ReactLoading from "react-loading";

import readData from "./../components/functions/DB";

function Gallery() {
  const { height, width } = useWindowDimensions();
  const [gallery, setgallery] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(height + " " + width);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      await readData("gallery").then((e) => {
        setgallery(e);
      });
      await setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="Home">
      {/* navigation  */}
      {loading ? (
        <ReactLoading
          className="loading"
          type="bubbles"
          color="#ff5e10"
          height={400}
          width={100}
        />
      ) : (
        <>
          {" "}
          <Topnavigation gallery="true"></Topnavigation>
          <div>
            {/* hero  */}
            <br />
            <br />
            <br />
            <br />
            <div className="row mx-0 container mx-sm-5">
              <div className="col-sm">
                <p style={{ textTransform: "uppercase" }}>Gallery</p>

                <h1>
                  What we <span style={{ color: "#ff5e10" }}>make </span>
                  is your dream a reality
                  <span style={{ color: "#ff5e10" }}>.</span>
                </h1>
                <h6 style={{ lineHeight: "1.8" }}>
                  Look for your self. View our work through photos rather than
                  words to learn more.
                </h6>
                <br />
                <br />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col d-flex justify-content-center">
                {" "}
                <ImageList cols={width <= 600 ? 1 : 2} sx={{ width: 1200 }}>
                  {gallery.map((item) => (
                    <ImageListItem key={item.img} className="my-2 mx-3">
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.cap}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.cap}
                        subtitle={<span>Caption: {item.cap}</span>}
                        position="below"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>

            <br />
            <div className="mx-5 my-5">
              <Footer></Footer>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;
