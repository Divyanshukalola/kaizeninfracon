import React, { useEffect, useState } from "react";


import Footer from "./footer";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import { addDoc, collection } from "firebase/firestore";
import { db } from "./../firebase-config";
import { v4 } from "uuid";
import Topnavigation from "./nav";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function ContactUs() {
  const [value, setValue] = React.useState(2);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);
  const { register, getValues } = useForm({});
  const [id] = useState(v4());
  const dataCollectionRef1 = collection(db, "contactUs");
  //write Data
  async function writeData() {
    setLoading(true);

    await addDoc(dataCollectionRef1, {
      fname: getValues("fname"),
      lname: getValues("lname"),
      email: getValues("email"),
      phone: getValues("phone"),
      business: getValues("business"),
      message: getValues("message"),
      rating: value,
      userID: id,
    });

    await setTimeout(function() {
      setLoading(false);
      window.location.reload(false);
    }, 100);
  }

  return (
    <>
      <Topnavigation contact={true}></Topnavigation>
      {/* Subscribe */}
      <div>
        <div className="containter mt-5">
          <div className="row mx-5 mt-sm-5">
            <div className="col-sm mt-5">
              <div className="mt-3 text-center">
                {" "}
                <span className="sectionHeader">CONTACT US</span>
                <hr />
                <br />
                <h2
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Let us <span className="secondary">know</span> what you are
                  thinking...
                </h2>
                <p>Help us know you better.</p>
              </div>
              <div
                className="row d-flex justify-content-center"
                style={{
                  height: "500px",
                }}
              >
                <div className="col-sm-6 mx-5 ">
                  <div className="row my-3">
                    <div className="col-sm mt-3 mt-sm-0">
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        {...register("fname")}
                      />
                    </div>
                    <div className="col-sm mt-3 mt-sm-0">
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        {...register("lname")}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-sm mt-3 mt-sm-0">
                      <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        {...register("phone")}
                      />
                    </div>
                    <div className="col-sm mt-3 mt-sm-0">
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

                  <div className="row my-3">
                    <div className="col">
                      <TextField
                        id="outlined-basic"
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        {...register("message")}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <Typography component="legend">
                        Rate your experience with Kaizen.
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      {loading ? (
                        <button className="jobbutton" disabled>
                          We are saving your thought ...
                        </button>
                      ) : (
                        <button className="jobbutton" onClick={writeData}>
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer  */}
        <br />
        <br />
        <div className="row mx-5 my-5 ">
          <div className="col mt-5">
            <Footer></Footer>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
