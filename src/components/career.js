import React from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
// import man from "./../static/img/man.png";
// import building from "./../static/img/buildings.png";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Slide from "@mui/material/Slide";
// import Fade from "@mui/material/Fade";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

import sample from "./../static/img/sample_video.mp4";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function Career() {
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation career="true"></Topnavigation>

      <div
        className="bg-light"
        style={{
          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "70%",
        }}
      >
        <div className="row text-center">
          <div className="col">
            <h1
              style={{
                marginTop: "12%",
                fontSize: "55px",
                textTransform: "capitalize",
              }}
            >
              If you are passionate about{" "}
              <span className="secondary">inspiring</span> the human experience
              through <span className="secondary">innovative design</span>…
            </h1>
            <br />
            <p style={{ fontWeight: "bold" }}>
              if you thrive in a collaborative culture with an entrepreneurial
              spirit, then you’ll be in the best of company.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="row mx-5 mt-5">
          <div className="col-6 mx-5 mt-5">
            <h5 style={{ fontWeight: "bold" }}>Opportunities</h5>
            <p>
              Many individuals visit Kizen and decide to stay. That is something
              we admire in our personnel. We also like what it says about us;
              Kizen is a fantastic place to work. Continuous opportunities to
              contribute to major projects for outstanding customers; a dynamic,
              high-performance work environment that fosters creativity,
              cooperation, and fun; and a culture that encourages teamwork and
              smart risk-taking are all part of the Kizen experience.
            </p>
            <button className="jobbutton">Search job opportunities</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-white">
        <div className="row mx-5 mt-5">
          <div className="col-5 mx-5 mt-5">
            <h5 style={{ fontWeight: "bold" }}>Culture</h5>
            <p>
              Kizen's dynamic culture revolves around excellence. Our continuous
              focus on iteration, creativity, and an immersive approach is
              fueled by our Culture of Excellence. It's a mindset that pervades
              our business, impacting how we run projects, how our teams
              interact with clients, and how we build strategic alliances. Our
              zeal for attempting new things, our openness to challenge the
              status quo, and our intrinsic desire to solve problems all
              contribute to our Culture of Excellence. <br />
              <br /> We've built an environment where design thinking is
              encouraged and acknowledged because we believe that excellent
              design is good business. A tireless curiosity and a collaborative
              attitude are also in our DNA, driving us to always discover new
              methods to satisfy our clients.
            </p>
            <button className="jobbutton">View Our Work</button>
          </div>
          <div className="col mx-3 mt-5">
            <img
              src="https://media.istockphoto.com/photos/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-picture-id1057484742?k=20&m=1057484742&s=612x612&w=0&h=iVCLJv8q6ktWFOyfzwaqRiQIa4iXfPG75dY37ivpz30="
              alt="img"
              height={"400px"}
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="row mx-5 mt-5">
          <div className="col-7 mt-5">
            {" "}
            <img
              src="https://st.depositphotos.com/1037987/2504/i/600/depositphotos_25046043-stock-photo-team-working-at-desks-in.jpg"
              alt="img"
              height={"500px"}
            />
          </div>
          <div className="col mt-5">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/30/18/33/worker-6586718__340.jpg"
              alt="img"
              height={"300px"}
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="row mx-5 mt-5">
          <div className="col-5 my-5">
            <h1>
              Kizen is always on the lookout for outstanding talent to join our
              fast-paced, ever-expanding team.
            </h1>
          </div>
          <div className="col mx-5 mt-5">
            <br />
            <h5>
              Kizen can help you discover your gift by allowing you to explore
              your options.
            </h5>
            <br />
            <button className="jobbutton">Search job opportunities</button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="row mx-5 mt-5">
          <div className="col mt-5">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/30/18/33/worker-6586718__340.jpg"
              alt="img"
              height={"400px"}
            />
          </div>
          <div className="col-6 mt-5">
            {" "}
            <img
              src="https://st.depositphotos.com/1037987/2504/i/600/depositphotos_25046043-stock-photo-team-working-at-desks-in.jpg"
              alt="img"
              height={"420px"}
            />
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

export default Career;
