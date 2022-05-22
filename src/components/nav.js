import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";

// import { IconName } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      {/* navigation  */}{" "}
      <div className="row mx-5 my-3 ">
        <div className="col-6">
          {" "}
          <div className="row">
            <div className="col">
              <a href="javascript:void(0)" style={{ color: "#09316f" }}>
                <BsFillTelephoneFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillTelephoneFill>{" "}
                +91 9687620711
              </a>
            </div>
            <div className="col">
              <a
                href="mailto:dkalola@hawk.iit.edu"
                style={{ color: "#09316f" }}
              >
                <BsFillEnvelopeFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillEnvelopeFill>
                dkalola@hawk.iit.edu
              </a>
            </div>
            <div className="col">
              <a href="javascript:void(0)" style={{ color: "#09316f" }}>
                {" "}
                <BsFillClockFill
                  className="mx-2"
                  style={{ fontSize: "14px" }}
                ></BsFillClockFill>
                SUN-MON 9:00 AM
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row" style={{ float: "right" }}>
            <div className="col-1">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                <BsFacebook style={{ fontSize: "14px" }}></BsFacebook>{" "}
              </a>
            </div>
            <div className="col-1">
              <a
                href="mailto:dkalola@hawk.iit.edu"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                <BsTwitter style={{ fontSize: "14px" }}></BsTwitter>
              </a>
            </div>
            <div className="col-1">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                <BsLinkedin style={{ fontSize: "14px" }}></BsLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row my-4 sticky-top bg-white">
        <div className="col my-4 mx-5">
          {/* <img src="" alt="" /> */}
          <a
            href="javascript:void(0)"
            style={{ color: "#09316f", fontWeight: "bold" }}
            className="mx-5"
          >
            <BsBuilding style={{ fontSize: "50px" }}></BsBuilding>
          </a>
        </div>
        <div className="col-7 ">
          <div className="row mx-3 mt-3 text-center" style={{ float: "right" }}>
            <div className="col ">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                Home
              </a>
            </div>
            <div className="col">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                About
              </a>
            </div>
            <div className="col">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                Services
              </a>
            </div>
            <div className="col">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                Project
              </a>
            </div>
            <div className="col">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                News
              </a>
            </div>
            <div className="col">
              <a
                href="javascript:void(0)"
                style={{ color: "#09316f", fontWeight: "bold" }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
