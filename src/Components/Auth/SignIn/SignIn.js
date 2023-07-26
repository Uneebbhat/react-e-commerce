import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { auth } from "../../Firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Alert from "@mui/material/Alert";

export default function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("This user does not exist");
      } else {
        setErrorMessage("An error occurred during login.");
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
          <h2>Sign In</h2>
        </div>
        <div className="input-wrapper">
          <div className="email-wrapper">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
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
                setLoginPassword(e.target.value);
              }}
            />
          </div>
          <div className="button">
            <Button variant="contained" className="btn" onClick={login}>
              Sign in
            </Button>
          </div>
          <div className="small-text">
            <p>
              Already have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </div>
      </div>
    </>
  );
}
