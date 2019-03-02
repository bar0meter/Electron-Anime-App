import React, { useState } from "react";
import useInput from "../Hooks/InputHook";
import "./login.css";

const SignUp = () => {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  return (
    <div id="signUpForm">
      <h1>Register</h1>
      <div className="registerLabel">
        <p>
          Welcome User, Register to access <b>MyAnime App</b>
        </p>
      </div>
      <form action="">
        <input
          type="text"
          {...username}
          className="formInput"
          placeholder="Username"
        />
        <input
          type="email"
          {...email}
          className="formInput"
          placeholder="Email"
        />
        <input
          type="password"
          {...password}
          className="formInput"
          placeholder="Password"
        />
        <input
          type="password"
          {...confirmPassword}
          className="formInput"
          placeholder="Confirm Password"
        />
        <button className="formButton">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
