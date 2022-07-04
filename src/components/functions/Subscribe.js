import React, { useEffect, useState } from "react";

import emailjs from "emailjs-com";

import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebase-config";
import { v4 } from "uuid";

function Subscribe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);
  const { register, getValues } = useForm({});
  const [id] = useState(v4());
  const dataCollectionRef1 = collection(db, "users");
  //write Data
  async function writeData() {
    setLoading(true);

    await addDoc(dataCollectionRef1, {
      business: getValues("business"),
      name: getValues("name"),
      email: getValues("email"),
      userID: id,
    });
    await sendEmail();

    await setTimeout(function() {
      setLoading(false);
      window.location.reload(false);
    }, 100);
  }

  async function sendEmail() {
    const emailForm = {
      to_name: getValues("name"),
      to_email: getValues("email"),
      text: "Thank you for submitting your information.",
      text1: "We'll keep you informed about our new initiatives,",
      text2:
        "using which we might even be able to assist you in realising your goal.",
      sub_title: "🙏 Thank you for choosing us.",
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

  return (
    <>
      {/* Subscribe */}
      <div>
        <div className="containter">
          {" "}
          <div className="row mx-5 mt-5" style={{ height: "500px" }}>
            <div className="col-sm mt-5">
              <div className="mt-3 text-center">
                {" "}
                <span className="sectionHeader">SUBSCRIBE</span>
                <hr />
                <br />
                <h2
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Be the <span className="secondary">first</span> one...
                </h2>
                <p>Learn about our newest initiatives and concepts.</p>
              </div>
              <div
                className="row d-flex justify-content-center"
                style={{
                  height: "500px",
                }}
              >
                <div className="col-sm-6 mx-5 ">
                  <div className="row my-3">
                    <div className="col">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        {...register("name")}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <TextField
                        id="outlined-basic"
                        label="Occupation"
                        variant="outlined"
                        fullWidth
                        {...register("business")}
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col d-flex justify-content-center">
                      {loading ? (
                        <button className="jobbutton" disabled>
                          You information was saved ...
                        </button>
                      ) : (
                        <button className="jobbutton" onClick={writeData}>
                          Subscribe
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
