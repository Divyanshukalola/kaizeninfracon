import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



import mainlogo from "./../static/img/logo2big.png";

// import { IconName } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      {/* navigation  */}{" "}
      <div className="row mx-5 my-3 ">
        <div className="col-7">
          {" "}
          <div className="row">
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                <BsFillTelephoneFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillTelephoneFill>{" "}
                +91 9687620711
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                <BsFillEnvelopeFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillEnvelopeFill>
                dkalola@hawk.iit.edu
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                {" "}
                <BsFillClockFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillClockFill>
                SUN-MON 9:00 AM
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row" style={{ float: "right" }}>
            <div className="col-1">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                <BsFacebook style={{ fontSize: "14px" }}></BsFacebook>{" "}
              </button>
            </div>
            <div className="col-1">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                <BsTwitter style={{ fontSize: "14px" }}></BsTwitter>
              </button>
            </div>
            <div className="col-1">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                <BsLinkedin style={{ fontSize: "14px" }}></BsLinkedin>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginBottom: "0px" }} />
      <div className="row sticky-top bg-white">
        <div className="col my-3 mx-5">
          {/* <img src="" alt="" /> */}
          <button
            style={{
              border: "transparent",
              color: "#1c3e44",
              background: "transparent",
            }}
            className="mx-5"
          >
            <img src={mainlogo} alt="mainlogo" height={"50px"} />
          </button>
        </div>
        <div className="col-7 my-3 mx-5">
          <div className="row mx-3 mt-3 text-center" style={{ float: "right" }}>
            <div className="col ">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                Home
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                About
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                Services
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                Project
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                News
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
