import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import mainlogo from "./../static/img/logo2big.png";

// import { IconName } from "react-icons/bs";

const Nav = (props) => {
  const navigate = useNavigate();
  function home() {
    navigate("/home");
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
                   cursor: "pointer",
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
                   cursor: "pointer",
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
                   cursor: "pointer",
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
                   cursor: "pointer",
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
                   cursor: "pointer",
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
                   cursor: "pointer",
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
           <div
             className="row mx-3 mt-3 text-center"
             style={{ float: "right" }}
           >
             <div className="col ">
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
             <div className="col">
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

             <div className="col">
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
             <div className="col">
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
             <div className="col">
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
     </>
   );
};

export default Nav;
