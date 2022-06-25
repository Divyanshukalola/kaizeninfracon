import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Topnavigation from "./../nav";
import Footer from "../footer";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../firebase-config";

function AdminLogin({ setState }) {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      setState(true);

      navigate("/admin");
      console.log("ran");
      console.log(currentUser);
    } else {
      setState(false);
      //   navigate("/login");
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function login() {
    console.log(email);
    console.log(pass);

    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {" "}
      <div
        className="login"
        style={{
          width: "101%",
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Flogin.webp?alt=media&token=50b2d603-968f-42e8-aa5f-af1941afaa91")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 120%",
        }}
      >
        <Topnavigation></Topnavigation>
        <br />
        <br />
        <div
          className="row justify-content-center"
          style={{
            height: "500px",
          }}
        >
          <div className="col-4" style={{}}>
            {" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={login}>
              Submit
            </button>
          </div>
        </div>
        {/* footer  */}
        <br />
        <div className="mx-5">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
