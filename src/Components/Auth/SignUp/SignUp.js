import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SignUp.css";
import { auth } from "../../Firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function SignUp() {
  const [registerEmail, setReisterEmail] = useState("");
  const [registerPassowrd, setReisterPassowrd] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassowrd
      );
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already in use");
      } else {
        setErrorMessage("An error occurred during registration.");
      }
    }
  };

  <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"></Box>;

  return (
    <>
      <div className="from">
        <div className="signup-heading">
          <h2>Sign Up</h2>
        </div>
        <div className="input-wrapper">
          <div className="email-wrapper">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="email"
              onChange={(e) => {
                setReisterEmail(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="password-wrapper">
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className="password"
              onChange={(e) => {
                setReisterPassowrd(e.target.value);
              }}
            />
          </div>
          <div className="button">
            <Button variant="contained" className="btn" onClick={register}>
              Register
            </Button>
          </div>
          <div className="small-text">
            <p>
              Don't have an account? <Link to="/signin">Sign in here</Link>
            </p>
          </div>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </div>
      </div>
    </>
  );
}
