import React, { useEffect } from "react";

import Footer from "./footer";
import { useNavigate } from "react-router-dom";

import Topnavigation from "./nav";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      {/* navigation  */}
      <Topnavigation about="true"></Topnavigation>
      <br />
      <br />
      <br />
      <br />
      <div className="row container mx-5">
        <div className="col">
          <p style={{ textTransform: "uppercase" }}>About us</p>

          <h1>
            Know about <span style={{ color: "#ff5e10" }}>our </span>
            company
            <span style={{ color: "#ff5e10" }}>.</span>
          </h1>
          <h6 style={{ lineHeight: "1.8" }}>
            Kaizen Infracon is a well known name with handy proposals in the
            field of Construction <br /> and Infrastructure Development
            Projects. Kaizen Infracon is known in its client base for <br /> its
            sincerity and dedication in the execution of projects withs good
            quality aspects. <br /> Kaizen Infracon was started in the year 2019
            as a Partnership Firm and headed by <br /> Mr. Hardik Rangani as a
            Managing Partner of Kaizen Infracon. Mr. Hardik Rangani is <br />{" "}
            having a qualification of Diploma in Civil Engineering and M.B.A. in
            Project Management.
          </h6>
          <br />
          <br />
        </div>
      </div>

      <div className="bg-white">
        <div className="mt-5 mx-5 text-center">
          {" "}
          <span className="sectionHeader">PROMOTERS AND PARTNERS</span>
          <hr />
        </div>

        <div className="row justify-content-center containter mr-5 my-5">
          <div className="col-3 text-center ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fhardik.png?alt=media&token=6cb96d94-54a3-4f3d-9f75-b561b7d65bba"
              style={{
                height: "210px",
                width: "210px",
                borderStyle: "solid",
                borderRadius: "50%",
                borderColor: "#ff5e10",
                borderWidth: "3px",
              }}
              alt="img"
            />

            <br />
            <br />
            <h5 style={{ fontWeight: "600", color: "grey" }}>
              Mr. Hardik Rangani
            </h5>
            <small style={{ color: "grey" }}>
              Managing Partner of Kaizen Infracon
            </small>
          </div>
          <div className="col-3 text-center ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FBhovan.png?alt=media&token=d2741d8d-9d62-40d8-9bed-a3d41e255b0d"
              style={{
                height: "210px",
                width: "210px",
                borderStyle: "solid",
                borderRadius: "50%",
                borderColor: "#ff5e10",
                borderWidth: "3px",
              }}
              alt="img"
            />

            <br />
            <br />
            <h5 style={{ fontWeight: "600", color: "grey" }}>
              Mr. Bhovan Rangani
            </h5>
            <small style={{ color: "grey" }}>
              Founder Partner of Kaizen Infracon
            </small>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <br />
        <div className="mt-4 mx-5 text-center">
          <span className="sectionHeader">EXPERTISE</span>
          <hr />
        </div>
        <div className="row" style={{ width: "101%" }}>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype1.jpeg?alt=media&token=2a0c783e-f16d-4046-9633-cc336077924f"
              alt="about"
              height={"300px"}
              className="my-4"
            />
          </div>
          <div className="col my-5 ">
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/1");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row " style={{ width: "101%" }}>
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/2");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype2.jpeg?alt=media&token=55c77853-5d41-45ce-a999-4804c15c7592"
              alt="about"
              height={"300px"}
              className="my-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="row " style={{ width: "101%" }}>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype3.webp?alt=media&token=587aeb75-070a-427f-bfc7-33f741f2c415"
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/3");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row " style={{ width: "101%" }}>
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/4");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype4.jpeg?alt=media&token=ecb512e7-774c-41da-95c3-60db258d1aa8"
              alt="about"
              height={"330px"}
              className="my-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="row " style={{ width: "101%" }}>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype5.jpeg?alt=media&token=262ab589-23a8-4834-bb4c-fa29ae7e28c7"
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/5");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row " style={{ width: "101%" }}>
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

              <button
                className="mx-5 jobbutton"
                onClick={() => {
                  navigate("/sectionProjectView/6");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col text-center my-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype6.jpeg?alt=media&token=a3b59769-a0c4-4b89-8951-31d61d032ef0"
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
