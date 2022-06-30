import React from "react";


import { useNavigate } from "react-router-dom";

import mainlogo from "./../static/img/logo2big.png";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase-config";
import { BsList } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";

import useWindowDimensions from "./useWindowDimensions";

// import { IconName } from "react-icons/bs";

const Nav = (props) => {
  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  function people() {
    navigate("/people");
  }
  function about() {
    navigate("/about");
  }
  function news() {
    navigate("/news");
  }
  function proj() {
    navigate("/proj");
  }
  function career() {
    navigate("/career");
  }
  function gallery() {
    navigate("/gallery");
  }
  function contact() {
    navigate("/contactus");
  }

  async function logout() {
    await signOut(auth);
    navigate("/login");
  }
  return (
    <div className="row sticky-top bg-white" style={{ zIndex: "9999" }}>
      <div
        className={
          props.logout ? "mainlogo col-4 my-3 " : "mainlogo col-5 my-3 "
        }
      >
        <button
          style={{
            border: "transparent",
            color: "#1c3e44",
            background: "transparent",
          }}
          className="mx-sm-5 mx-3"
        >
          <img src={mainlogo} alt="mainlogo" height={"50px"} />
        </button>
      </div>
      <div className="nav1menuebutton col text-right mt-4 mx-4" ref={ref1}>
        <a
          onClick={() => {
            ref1.current.style.display = "none";
            ref.current.style.display = "inline";
            ref2.current.style.display = "inline";
          }}
        >
          <BsList></BsList>
        </a>
      </div>
      <div className="nav1menuebutton1 col text-right mt-4 mx-4" ref={ref2}>
        <a
          onClick={() => {
            ref1.current.style.display = "inline";
            ref.current.style.display = "none";
            ref2.current.style.display = "none";
          }}
        >
          <BsChevronDoubleUp></BsChevronDoubleUp>
        </a>
      </div>
      <div className="nav1menue col my-3 mx-5" ref={ref}>
        <div className="row mt-3 text-center">
          <div className="col-sm col-md  my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={home}
            >
              <span
                className={
                  props.home
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Home
              </span>
            </button>
          </div>

          <div className="col-sm col-md my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={about}
            >
              <span
                className={
                  props.about
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                About
              </span>
            </button>
          </div>
          <div className="col-sm col-md my-3 my-sm-0 ">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={people}
            >
              <span
                className={
                  props.team
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Team
              </span>
            </button>
          </div>

          <div className="col-sm col-md my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={proj}
            >
              <span
                className={
                  props.proj
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Project
              </span>
            </button>
          </div>
          <div className="col-sm col-md my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={gallery}
            >
              <span
                className={
                  props.gallery
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Gallery
              </span>
            </button>
          </div>
          <div className="col-sm col-md my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={news}
            >
              <span
                className={
                  props.news
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                News
              </span>
            </button>
          </div>
          <div className="col-sm col-md my-3 my-sm-0">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={career}
            >
              <span
                className={
                  props.career
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Career
              </span>
            </button>
          </div>
          <div className="col-sm col-md my-3 my-sm-0 ">
            <button
              style={{
                border: "transparent",
                color: "#1c3e44",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={contact}
            >
              <span
                className={
                  props.contact
                    ? "hoverNavItem hoverNavItemActive"
                    : "hoverNavItem"
                }
              >
                Contact
              </span>
            </button>
          </div>
          {props.logout ? (
            <div className="col">
              <button className="btn btn-outline-danger" onClick={logout}>
                <span>Logout</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
