import React from "react";


import { useNavigate } from "react-router-dom";

import mainlogo from "./../static/img/logo2big.png";
import { BsList } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";

// import { IconName } from "react-icons/bs";

const Nav1 = (props) => {
  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const navigate = useNavigate();
  function home() {
    navigate("/");
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
  function people() {
    navigate("/people");
  }
  function gallery() {
    navigate("/gallery");
  }
  function contact() {
    navigate("/contactus");
  }

  return (
    <>
      {/* navigation  */}{" "}
      <div
        className="row sticky-top cover"
        style={{
          zIndex: "99999",
        }}
      >
        <div className="mainlogo col-5 my-3">
          {/* <img src="" alt="" /> */}
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
          <button
            style={{ borderColor: "transparent", background: "transparent" }}
            onClick={() => {
              ref1.current.style.display = "none";
              ref.current.style.display = "inline";
              ref2.current.style.display = "inline";
            }}
          >
            <BsList></BsList>
          </button>
        </div>
        <div className="nav1menuebutton1 col text-right mt-4 mx-4" ref={ref2}>
          <button
            style={{ borderColor: "transparent", background: "transparent" }}
            onClick={() => {
              ref1.current.style.display = "inline";
              ref.current.style.display = "none";
              ref2.current.style.display = "none";
            }}
          >
            <BsChevronDoubleUp></BsChevronDoubleUp>
          </button>
        </div>
        <div className="nav1menue col my-3 mx-5" ref={ref}>
          <div className="row mt-3 text-center ">
            <div className="col-sm  col-md  my-3 my-sm-0">
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

            <div className="col-sm col-md  my-3 my-sm-0">
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
            <div className="col-sm  col-md  my-3 my-sm-0">
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

            <div className="col-sm col-md  my-3 my-sm-0">
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
            <div className="col-sm col-md  my-3 my-sm-0">
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
                    props.proj
                      ? "hoverNavItem hoverNavItemActive"
                      : "hoverNavItem"
                  }
                >
                  Gallery
                </span>
              </button>
            </div>
            <div className="col-sm col-md  my-3 my-sm-0">
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
            <div className="col-sm col-md  my-3 my-sm-0">
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
            <div className="col-sm col-md  my-3 my-sm-0">
              <button
                style={{
                  border: "transparent",
                  color: "#1c3e44",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  className={
                    props.contact
                      ? "hoverNavItem hoverNavItemActive"
                      : "hoverNavItem"
                  }
                  onClick={contact}
                >
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav1;
