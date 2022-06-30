import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="row ">
        <div className="col-sm-4 text-center my-4">
          <p>Copyright © 2022 Kizen. All Rights Reserved</p>
          Created By:{" "}
          <a
            style={{ color: "#ff5e10" }}
            href="https://www.linkedin.com/in/divyanshu-k-4b6a1311a/"
          >
            Divyanshu Kalola
          </a>
        </div>
        <div className="col-sm-2 border-right my-3 my-sm-0">
          <div className="row">
            <div className="col-sm text-sm-right text-center">
              <button
                className="footbutton mt-1"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About{" "}
              </button>
              <br />
              <button
                className="footbutton mt-1"
                onClick={() => {
                  navigate("/news");
                }}
              >
                News{" "}
              </button>{" "}
              <br />
              <button
                className="footbutton mt-1"
                onClick={() => {
                  navigate("/news");
                }}
              >
                Over Events{" "}
              </button>{" "}
              <br />
              <button className="footbutton mt-1">Contact us </button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="row mt-2 text-sm-left text-center">
            <div className="col-sm">
              <h5>Rajkot, Gujarat</h5>
              <p>
                504 / 505, R K Prime, Near Nanamava Circle, <br /> 150 Feet Ring
                Road,RAJKOT-360005.
              </p>
            </div>
            <div className="col-sm">
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
    </>
  );
};

export default Footer;
