import React from "react";


import { useNavigate } from "react-router-dom";

import mainlogo from "./../static/img/logo2big.png";

// import { IconName } from "react-icons/bs";

const Nav = (props) => {
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
  return (
    <div
      className="row sticky-top bg-white"
      style={{ zIndex: "9999", width: "101%" }}
    >
      <div className="col-6 my-3 ">
        <button
          style={{
            border: "transparent",
            color: "#1c3e44",
            background: "transparent",
          }}
          className="ml-5"
        >
          <img src={mainlogo} alt="mainlogo" height={"50px"} />
        </button>
      </div>
      <div className="col my-3 mx-5">
        <div className="row mt-3 text-right ">
          <div className="col  ">
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

          <div className="col ">
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
          <div className="col  ">
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

          <div className="col ">
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
          <div className="col ">
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
          <div className="col ">
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
          <div className="col ">
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
              >
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
