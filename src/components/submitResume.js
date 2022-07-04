import React, { useEffect, useState } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
import emailjs from "emailjs-com";

import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import { addDoc, collection } from "firebase/firestore";
import { db } from "./../firebase-config";
import { storage } from "./../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";

function ResumeSubmit() {
  const [uFile, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [id] = useState(v4());

  const { register, getValues } = useForm({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function sendEmail() {
    const emailForm = {
      to_name: getValues("fname"),
      to_email: getValues("email"),
      app_id: id,
    };

    await emailjs
      .send(
        "service_y5xz1jh",
        "template_ygk24sf",
        emailForm,
        "aqzKs0f24gmAZAWOH"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  }

  async function sendEmailAdmin(url) {
    const emailForm = {
      sub_title: `Application - ${getValues("fname")} ${getValues("lname")}`,
      to_name: "Admin",
      to_email: "admin@kaizeninfracon.in",
      app_id: `Application ID: ${id}`,
      app_name: `Applicant's Name: ${getValues("fname")} ${getValues("lname")}`,
      app_addr: `Applicant's Address: ${getValues("addr")}`,
      app_phone: `Applicant's Phone Number: ${getValues("phone")}`,
      app_email: `Applicant's Email: ${getValues("email")}`,
      app_citizen: `Applicant Nationality: ${getValues("citizen")}`,
      app_placeob: `Applicant Place of Birth: ${getValues("placeob")}`,
      app_link: `Resume Link: ${url}`,
      app_message: `Message from ${getValues("fname")} ${getValues(
        "lname"
      )}: ${getValues("message")}`,
    };

    await emailjs
      .send(
        "service_y5xz1jh",
        "template_r2o35bl",
        emailForm,
        "aqzKs0f24gmAZAWOH"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  }

  const dataCollectionRef1 = collection(db, "applications");
  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (
      uFile == null ||
      getValues("fname") === "" ||
      getValues("lname") === "" ||
      getValues("addr") === "" ||
      getValues("phone") === "" ||
      getValues("email") === "" ||
      getValues("citizen") === "" ||
      getValues("placeob") === ""
    ) {
      setLoading(false);
      alert(
        "Ensure that every field is filled out. Knowing everything is necessary for a deeper understanding of you."
      );
      return;
    }
    const imageRef = ref(
      storage,
      `applications/${getValues("fname")}-${getValues("lname")}-${id}`
    );
    await uploadBytes(imageRef, uFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          fname: getValues("fname"),
          lname: getValues("lname"),
          uFile: url,
          addr: getValues("addr"),
          phone: getValues("phone"),
          email: getValues("email"),
          citizen: getValues("citizen"),
          placeob: getValues("placeob"),
          message: getValues("message"),
          appID: id,
        });
        sendEmailAdmin(url);
      });
    });

    await sendEmail();

    await setTimeout(function() {
      setLoading(false);

      window.location.reload(false);
    }, 1000);
  }

  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation career="true"></Topnavigation>
      <br />
      <br />
      <br />
      <br />
      <div className="row container mx-sm-5 mx-2" style={{ width: "97%" }}>
        <div className="col">
          <p style={{ textTransform: "uppercase" }}>Start Your Future here</p>

          <h1>
            Submit your <span style={{ color: "#ff5e10" }}>resume</span>
            <br /> and start a new path
            <span style={{ color: "#ff5e10" }}>.</span>
          </h1>
          <h6 style={{ lineHeight: "1.8" }}>
            We are searching for a driven and aspirational worker that will not
            only assist us in serving our customers but also become a member of
            our family. Send us your CV so we can look at your desire and
            enthusiasm.
          </h6>
          <br />
        </div>
      </div>
      <hr />
      <div className="row mx-3 ">
        <div className="col text-center">
          <p style={{ textTransform: "uppercase" }}>Tell us who your are.</p>
        </div>
      </div>
      <div className="row mx-3 my-3 d-flex justify-content-center">
        <div className="col-sm-4 my-3 my-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            {...register("fname")}
          />
        </div>
        <div className="col-sm-4 mt-3 mt-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            {...register("lname")}
          />
        </div>
      </div>
      <div className="row mx-3 my-3 d-flex justify-content-center">
        <div className="col-sm-8 mt-3 mt-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Present Address"
            variant="outlined"
            fullWidth
            {...register("addr")}
          />
        </div>
      </div>
      <div className="row mx-3 my-3 d-flex justify-content-center">
        <div className="col-sm-4 my-3 my-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            fullWidth
            {...register("phone")}
          />
        </div>
        <div className="col-sm-4 mt-3 mt-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email")}
          />
        </div>
      </div>
      <div className="row mx-3 my-3 d-flex justify-content-center">
        <div className="col-sm-4 my-3 my-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Citizenship"
            variant="outlined"
            fullWidth
            {...register("citizen")}
          />
        </div>
        <div className="col-sm-4 my-3 my-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Place of Birth"
            variant="outlined"
            fullWidth
            {...register("placeob")}
          />
        </div>
      </div>
      <div className="row mx-3 my-3 d-flex justify-content-center">
        <div className="col-sm-8 mt-sm-3 mt-sm-0">
          {" "}
          <TextField
            id="outlined-basic"
            label="Personal Message to HR"
            variant="outlined"
            fullWidth
            {...register("message")}
          />
        </div>
      </div>
      <div className="row mx-3 ">
        <div className="col text-center">
          <p style={{ textTransform: "uppercase" }}>Upload your CV here.</p>
        </div>
      </div>
      <div className="row mx-3 my-3">
        <div className="col text-center">
          <input
            type="file"
            id="upload"
            hidden
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
          <label
            for="upload"
            className={uFile !== null ? "btn btn-success" : "btn btn-secondary"}
          >
            {uFile !== null ? uFile.name : "Choose your resume"}
          </label>
        </div>
      </div>
      <hr />
      <div className="row mx-3 my-3">
        <div className="col text-center">
          {loading ? (
            <button className="jobbutton" type="button" disabled>
              Uploading your application...
            </button>
          ) : (
            <button className="jobbutton" type="button" onClick={writeDataNews}>
              Submit your application
            </button>
          )}
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

export default ResumeSubmit;
