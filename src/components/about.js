import React, { useEffect, useState } from "react";

import Footer from "./footer";
import { useNavigate } from "react-router-dom";

import Topnavigation from "./nav";
import readData from "./functions/DB";

import Charts from "./functions/charts";
function About() {
                   const ref = React.useRef();
                   const navigate = useNavigate();
                   const currentYear = new Date().getFullYear();
                   const [financial, setfinancial] = useState([]);

                   useEffect(() => {
                     window.scrollTo(0, 0);
                     readData("financial").then((e) => {
                       setfinancial(e[0].financial);
                     });
                     ref.current.style.display = "none";
                   }, []);

                   return (
                     <div className="about">
                       {/* navigation  */}
                       <Topnavigation about="true"></Topnavigation>
                       <br />
                       <br />
                       <br />
                       <br />
                       <div className="row mx-0 container">
                         <div className="col-sm mx-4">
                           <p style={{ textTransform: "uppercase" }}>
                             About us
                           </p>

                           <h1>
                             Know about{" "}
                             <span style={{ color: "#ff5e10" }}>our </span>
                             company
                             <span style={{ color: "#ff5e10" }}>.</span>
                           </h1>
                           <h6 className="aboutus">
                             Kaizen Infracon is a well known name with handy
                             proposals in the field of Construction and
                             Infrastructure Development Projects. Kaizen
                             Infracon is known in its client base for its
                             sincerity and dedication in the execution of
                             projects withs good quality aspects. Kaizen
                             Infracon was started in the year 2019 as a
                             Partnership Firm and headed by Mr. Hardik Rangani
                             as a Managing Partner of Kaizen Infracon. Mr.
                             Hardik Rangani is having a qualification of Diploma
                             in Civil Engineering and M.B.A. in Project
                             Management.
                           </h6>
                           <br />
                           <br />
                         </div>
                       </div>

                       <div className="bg-white">
                         <div className="mt-5 mx-5 text-center">
                           {" "}
                           <span className="sectionHeader">
                             PROMOTERS AND PARTNERS
                           </span>
                           <hr />
                         </div>

                         <div className="row mx-0 justify-content-center containter  my-sm-5">
                           <div className="col-sm-3 my-3 text-center mr-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fhardik.png?alt=media&token=6cb96d94-54a3-4f3d-9f75-b561b7d65bba"
                               alt="img"
                               className="promoters"
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
                           <div className="col-sm-3 my-3 mb-5 mb-sm-0 text-center ">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FBhovan.png?alt=media&token=d2741d8d-9d62-40d8-9bed-a3d41e255b0d"
                               className="promoters"
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
                         <div className="row mx-0" style={{ width: "100%" }}>
                           <div className="col-sm text-center my-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype1.jpeg?alt=media&token=2a0c783e-f16d-4046-9633-cc336077924f"
                               alt="about"
                               className="aboutusphoto my-sm-4"
                             />
                           </div>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">
                                 Commercial Buildings
                               </h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 Business operations depend heavily on
                                 commercial buildings, both for those who own
                                 them and for those who rent them. Retailers,
                                 eateries, offices, manufacturing, and other
                                 business kinds could all be housed in a
                                 commercial structure. It's critical to
                                 comprehend what is involved if you intend to
                                 buy and manage commercial buildings or start a
                                 firm with a physical location.
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
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">
                                 Residential Buildings
                               </h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 Residential construction projects provide
                                 temporary or permanent housing for people,
                                 supplies, or equipment. The size of a
                                 residential building is determined by how many
                                 people live there. The projects often involve
                                 plumbing and electrical installation in
                                 bathrooms, kitchens, and other areas of the
                                 structures. Residential buildings are designed
                                 by engineers and architects, and after that, a
                                 builder completes all construction work and
                                 employs subcontractors as necessary for
                                 specialist work like electrical installation.
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
                           <div className="col-sm text-center my-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype2.jpeg?alt=media&token=55c77853-5d41-45ce-a999-4804c15c7592"
                               alt="about"
                               className="aboutusphoto my-4"
                             />
                           </div>
                         </div>
                       </div>
                       <div className="bg-light">
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm text-center my-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype3.webp?alt=media&token=587aeb75-070a-427f-bfc7-33f741f2c415"
                               alt="about"
                               className="aboutusphoto my-4"
                             />
                           </div>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">
                                 Civil infrastructure
                               </h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 Massive construction projects including dams,
                                 railroads, undersea tunnels, motorways, and
                                 bridges are typically considered civil
                                 infrastructure works. Governments or
                                 significant financial institutions typically
                                 sponsor these initiatives. To manage elements
                                 of nature, such as water or weather, or to give
                                 structural integrity and support for other
                                 projects, such tunnels under mountains or
                                 underground train lines, they require
                                 particular planning to accommodate extensive
                                 use by car traffic and other transit systems.
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
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">Institutional</h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 Massive structures like stadiums, hospitals,
                                 schools, and skyscrapers that house or offer
                                 services on a large scale are referred to as
                                 institutional construction projects. To
                                 maintain the security of those within during
                                 periods of high occupancy, high traffic, or
                                 high inventory, they need particular planning
                                 and design. These projects are typically funded
                                 by businesses or governments.
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
                           <div className="col-sm text-center my-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype4.jpeg?alt=media&token=ecb512e7-774c-41da-95c3-60db258d1aa8"
                               alt="about"
                               className="aboutusphoto my-sm-4"
                             />
                           </div>
                         </div>
                       </div>
                       <div className="bg-light">
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm text-center my-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype5.jpeg?alt=media&token=262ab589-23a8-4834-bb4c-fa29ae7e28c7"
                               alt="about"
                               className="aboutusphoto my-4"
                             />
                           </div>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">
                                 Government Administrative Buildings
                               </h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 For public building projects intended to
                                 benefit the general public, the owner may be a
                                 state, local, federal, or government entity.
                                 Even if another agency assists in funding the
                                 project, the controlling agency is still
                                 regarded as the owner. These tasks might take
                                 years to accomplish and range from
                                 straightforward construction to more
                                 complicated undertakings. Buildings like
                                 courthouses, public hospitals, public schools,
                                 military installations, and government offices
                                 can be considered public projects, as can
                                 infrastructure work like creating roads and
                                 flood control systems.
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
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">
                                 Other Infrastructure Facilities
                               </h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 These projects are tailored specifically suit
                                 the needs of the owner. We want to give our
                                 consumers the very best.
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
                           <div className="col-sm text-center my-sm-5">
                             <img
                               src="https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Ftype6.jpeg?alt=media&token=a3b59769-a0c4-4b89-8951-31d61d032ef0"
                               alt="about"
                               className="aboutusphoto my-4"
                             />
                           </div>
                         </div>
                       </div>

                       <div className="bg-light">
                         <div className="row mx-0 " style={{ width: "100%" }}>
                           <div className="col-sm my-5 ">
                             <div>
                               <h1 className="mx-5 tags">Our Financials</h1>
                               <p
                                 style={{
                                   color: "grey",
                                 }}
                                 className="mx-5 my-5"
                               >
                                 Our financial highlights take the last three
                                 years' worth of development into account.
                               </p>
                               <div ref={ref}>
                                 <div
                                   className="row mx-lg-5"
                                   style={{ fontWeight: "bold" }}
                                 >
                                   <div className="col-2 border text-center">
                                     <p className="fonts"> Sr.No.</p>
                                   </div>
                                   <div className="col-3 border text-center">
                                     <p className="fonts">Particulars</p>
                                   </div>
                                   <div className="col-7">
                                     <div className="row">
                                       <div className="col border text-center">
                                         <p className="fonts">
                                           Audited (Rs. In Lakh)
                                         </p>
                                       </div>
                                     </div>
                                     <div className="row">
                                       <div className="col border text-center">
                                         <p className="fonts">
                                           {currentYear - 3} - {currentYear - 2}
                                         </p>
                                       </div>
                                       <div className="col border text-center">
                                         <p className="fonts">
                                           {currentYear - 2} - {currentYear - 1}
                                         </p>
                                       </div>
                                       <div className="col border text-center">
                                         <p className="fonts">
                                           {currentYear - 1} - {currentYear}
                                         </p>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                                 {financial.map((obj, index) => {
                                   return (
                                     <>
                                       {" "}
                                       <div className="row mx-lg-5">
                                         <div className="col-2 border text-center">
                                           <h6 className="my-3 fonts">
                                             {index}
                                           </h6>
                                         </div>
                                         <div className="col-3 border text-center">
                                           <h6 className="my-3 fonts">
                                             {Object.keys(obj)}
                                           </h6>
                                         </div>
                                         <div className="col-7">
                                           <div className="row">
                                             <div className="col-4 border text-center">
                                               <h6 className="my-3 fonts">
                                                 {parseFloat(
                                                   Object.values(obj)[0][0]
                                                 )}
                                               </h6>
                                             </div>
                                             <div className="col-4 border text-center">
                                               <h6 className="my-3 fonts">
                                                 {parseFloat(
                                                   Object.values(obj)[0][1]
                                                 )}
                                               </h6>
                                             </div>
                                             <div className="col-4 border text-center">
                                               <h6 className="my-3 fonts">
                                                 {parseFloat(
                                                   Object.values(obj)[0][2]
                                                 )}
                                               </h6>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </>
                                   );
                                 })}

                                 <div className="chart container justify-content-md-center">
                                   {" "}
                                   {financial !== [] ? (
                                     <Charts financial={financial}></Charts>
                                   ) : null}
                                 </div>
                               </div>

                               <button
                                 className="mx-5 my-5 jobbutton"
                                 onClick={() => {
                                   if (ref.current.style.display !== "inline") {
                                     ref.current.style.display = "inline";
                                   }
                                 }}
                               >
                                 Learn More
                               </button>
                             </div>
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
