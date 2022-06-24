import React, { useEffect } from "react";

import Footer from "./footer";
import director1 from "./../static/img/hardik.png";
import director2 from "./../static/img/bhovan.png";
import Topnavigation from "./nav";
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

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      {/* navigation  */}
      <Topnavigation about="true"></Topnavigation>

      <div
        className="bg-light"
        style={{
          background:
            'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Faboutus.webp?alt=media&token=dcb021c7-20bd-43f7-aa2c-b586ff0ed303"),no-repeat',

          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row mx-5">
          <div className="col-6 mt-5">
            <div style={{ borderStyle: "solid", borderColor: "#1c3e44" }}>
              {" "}
              <h1 className=" mt-5 mx-5" style={{ fontSize: "55px" }}>
                OUR COMPANY
              </h1>
              <p className="mx-5 mb-5">
                {" "}
                Kaizen Infracon is a well known name with handy proposals in the
                field of Construction and Infrastructure Development Projects.
                Kaizen Infracon is known in its client base for its sincerity
                and dedication in the execution of projects withs good quality
                aspects. Kaizen Infracon was started in the year 2019 as a
                Partnership Firm and headed by Mr. Hardik Rangani as a Managing
                Partner of Kaizen Infracon. Mr. Hardik Rangani is having a
                qualification of Diploma in Civil Engineering and M.B.A. in
                Project Management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mt-5 mx-5 text-center">
          {" "}
          <span className="sectionHeader">PROMOTERS AND PARTNERS</span>
          <hr />
        </div>
        <div className="row">
          <div className="col ">
            <div className="row mx-5 my-5">
              <div className="col-5">
                {" "}
                <img src={director1} alt="" height={"200px"} width={"170px"} />
              </div>
              <div className="col">
                <h4>Mr. Hardik Rangani </h4>
                <small>
                  <li>Managing Partner of Kaizen Infracon</li>
                  <li>
                    Diploma in Civil Engineer and Master in Business
                    Administration
                  </li>
                  <li>Experience of 7 to 8 Year in Construction Activities</li>
                  <li>Promoter of Iron Triangle Limited</li>
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mx-5 my-5">
              <div className="col-5">
                {" "}
                <img src={director2} alt="" height={"200px"} width={"190px"} />
              </div>
              <div className="col">
                <h4>Mr. Bhovan Rangani </h4>
                <small>
                  <li>Founder Partner of Kaizen Infracon</li>
                  <li>Graduation in B.A.</li>
                  <li>Experience of 35 Year in Construction Activities</li>
                  <li>
                    Whole Time Director and Founder Promoter of Iron Triangle
                    Limited
                  </li>
                </small>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="bg-light">
        <br />
        <div className="mt-4 mx-5 text-center">
          {" "}
          <span className="sectionHeader">EXPERTISE</span>
          <hr />
        </div>
        <div className="row ">
          <div className="col text-center my-5">
            <img
              src="https://www.navedzubairi.com/wp-content/uploads/2018/10/corporate-building-760x400.jpg"
              alt="about"
              height={"300px"}
              className="my-4"
            />
          </div>
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Commercial Buildings
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row ">
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Residential Buildings
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I="
              alt="about"
              height={"300px"}
              className="my-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="row ">
          <div className="col text-center my-5">
            <img
              src="https://cdn.wallpapersafari.com/31/16/U0HoD2.jpg"
              alt="about"
              height={"300px"}
              className="my-4"
            />
          </div>
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Roads and Bridges
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row ">
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Hospital Buildings - Colleges
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://media.istockphoto.com/photos/building-with-large-h-sign-for-hospital-picture-id1130389312?b=1&k=20&m=1130389312&s=170667a&w=0&h=l4_sJR50L_2MNBgd0bUmVgVhTi2fZLRZh8S48wScAfo="
              alt="about"
              height={"330px"}
              className="my-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="row ">
          <div className="col text-center my-5">
            <img
              src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/02/A3239-10-Impressive-Government-buildings-Image-28.jpg"
              alt="about"
              height={"360px"}
              className="my-4"
            />
          </div>
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Government Administrative Buildings
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row ">
          <div className="col my-5  mx-5">
            <div>
              <h1
                style={{
                  color: "grey",
                  fontSize: "55px",
                }}
                className="mx-5"
              >
                Other Infrastructure Facilities
              </h1>
              <p
                style={{
                  color: "grey",
                }}
                className="mx-5 my-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="mx-5 jobbutton">Learn More</button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1"
              alt="about"
              height={"330px"}
              className="my-4"
            />
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

export default About;
