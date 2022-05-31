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

function News() {
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>

      <div
        className="bg-light"
        style={{
          backgroundImage:
            'url("https://ak.picdn.net/shutterstock/videos/1055334359/thumb/1.jpg")',
          height: "500px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          opacity: "70%",
        }}
      >
        <div className="row text-center">
          <div className="col">
            <h1 style={{ color: "white", marginTop: "15%", fontSize: "55px" }}>
              OUR NEWS
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">MEDIA CORNER</span>
          <hr />
          <br />
        </div>
        <div className="row mx-5 my-5">
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={
                  "https://images.examples.com/wp-content/uploads/2018/03/Purehell.crop_671x504_03.preview.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample News 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={
                  "https://images.examples.com/wp-content/uploads/2018/03/Purehell.crop_671x504_03.preview.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample News 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={
                  "https://images.examples.com/wp-content/uploads/2018/03/Purehell.crop_671x504_03.preview.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample News 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">ARTICLE CORNER</span>
          <hr />
          <br />
        </div>
        <div className="row mx-5 my-5">
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="340"
                image={
                  "https://images.template.net/wp-content/uploads/2016/10/Creative-Magazine-Cover-Page-Template.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample Article 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="340"
                image={
                  "https://images.template.net/wp-content/uploads/2016/10/Creative-Magazine-Cover-Page-Template.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample Article 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card>
              <CardMedia
                component="img"
                height="340"
                image={
                  "https://images.template.net/wp-content/uploads/2016/10/Creative-Magazine-Cover-Page-Template.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sample Article 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <button className="mx-2 my-3 jobbutton">Learn More</button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mt-5 text-center">
          {" "}
          <span className="sectionHeader">INTERVIEW CORNER</span>
          <hr />
          <br />
        </div>
        <div className="row mx-5 my-5">
          <div className="col text-center">
            <video src={sample} controls height={"200px"}></video>
            <br />
            <small>
              {" "}
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </small>
          </div>
          <div className="col text-center">
            <video src={sample} controls height={"200px"}></video>
            <br />
            <small>
              {" "}
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </small>
          </div>
          <div className="col text-center">
            {" "}
            <video src={sample} controls height={"200px"}></video>
            <br />
            <small>
              {" "}
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </small>
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

export default News;
