import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-4 text-center my-4">
          <p>Copyright © 2022 Kizen. All Rights Reserved</p>
          <br />
        </div>
        <div className="col-2 border-right">
          <div className="row">
            <div className="col text-right">
              <button className="footbutton">About </button>
              <br />
              <button className="footbutton">News </button> <br />
              <button className="footbutton">Over Events </button> <br />
              <button className="footbutton">Contact us </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h5>Rajkot, Gujarat</h5>
              <p>
                504 / 505, R K Prime, Near Nanamava Circle, <br /> 150 Feet Ring
                Road,RAJKOT-360005.
              </p>
            </div>
            <div className="col">
              {" "}
              <p>
                <b>Phone: </b>+91 281 2962748
              </p>
              <p>
                <b>Email: </b>
                kaizeninfracon18617@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col">
          Created By:{" "}
          <a
            style={{ color: "#ff5e10" }}
            href="https://www.linkedin.com/in/divyanshu-k-4b6a1311a/"
          >
            Divyanshu Kalola
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
