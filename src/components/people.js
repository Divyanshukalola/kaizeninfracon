import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";


function People() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // var items = false;
  }, []);

  return (
    <div className="Projects">
      {/* navigation  */}
      <Topnavigation team="true"></Topnavigation>
      <br />
      <br />
      <br />
      <br />
      <div className="row container mx-5">
        <div className="col">
          <p style={{ textTransform: "uppercase" }}>The team</p>

          <h1>
            Meet our team of <span style={{ color: "#ff5e10" }}>experts</span>
            <br /> that helps us achieve our goals
            <span style={{ color: "#ff5e10" }}>.</span>
          </h1>
          <h6 style={{ lineHeight: "1.8" }}>
            It requires a passionate team of individuals whose sole objective is
            to utilise their skills to <br /> the fullest in order to be the
            company our clients want us to be. Learn more about <br /> the
            Untitled employees who are paving the way.
          </h6>
          <br />
          <br />
        </div>
      </div>
      <div className="row justify-content-center containter mr-5 my-5">
        <div className="col-3 mx-3">
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FSanjay.png?alt=media&token=c016cc93-3833-413e-93a3-ce2253f404b4")',
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <br />
          <h5 style={{ fontWeight: "600", color: "grey" }}>
            Mr. Sanjay Savani
          </h5>
          <small style={{ color: "grey" }}>Project Coordinator (General)</small>
        </div>
        <div className="col-3 mx-3">
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fgirdhar.png?alt=media&token=25e33b71-bc53-408f-9b7d-88a0ce7c0c44")',
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <br />
          <h5 style={{ fontWeight: "600", color: "grey" }}>
            Mr. Girdhar Rangani
          </h5>
          <small style={{ color: "grey" }}>Project Coordinator (General)</small>
        </div>
        <div className="col-3 mx-3">
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fjeel.png?alt=media&token=04f14a14-d766-4b96-a2a0-aa006fd423bd")',
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <br />
          <h5 style={{ fontWeight: "600", color: "grey" }}>Mr. Jeel Savani </h5>
          <small style={{ color: "grey" }}>
            Civil Engineer (Technical & Planning)
          </small>
        </div>
      </div>
      <div className="row justify-content-center containter mr-5 my-5">
        <div className="col-3 mx-3">
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fnilesh.png?alt=media&token=3eaaae5a-5fd4-44d5-b82b-e1f90fd996f0")',
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <br />
          <h5 style={{ fontWeight: "600", color: "grey" }}>Mr. Nilesh Vyas </h5>
          <small style={{ color: "grey" }}>
            Sr. Manager Finance & Accounts
          </small>
        </div>
        <div className="col-3 mx-3">
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FsanjayR.png?alt=media&token=9d59ec5f-cfb4-4eab-8e75-0b745e842f77")',
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <br />
          <h5 style={{ fontWeight: "600", color: "grey" }}>
            Mr. Sanjay Radadiya
          </h5>
          <small style={{ color: "grey" }}>Manager ( Purchaser & Store)</small>
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

export default People;
