import React, { useState } from "react";
import useInput from "../Hooks/InputHook";
import "./login.css";

const SignIn = () => {
  const username = useInput("");
  const password = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    username.value = "";
    password.value = "";
  };

  return (
    <div id="signInForm">
      <h1>Login</h1>
      <div className="loginLabel">
        <p>
          Welcome back, Login to access <b>MyAnime App</b>
          <div className="forgotPassword">
            Did you <a href="#">forget your password ?</a>
          </div>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          {...username}
          type="text"
          className="formInput"
          placeholder="Username"
        />
        <input
          {...password}
          type="password"
          className="formInput"
          placeholder="Password"
        />
        <button className="formButton">Login</button>
        <div className="footerLink">
          Don't have an account ? <a href="#">Register here</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
