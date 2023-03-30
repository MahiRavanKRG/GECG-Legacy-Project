import React from "react";
import "./loginform.css";

/**
 * It's a function that takes a prop called setCardPage, and returns a section with a form that has a
 * button that calls a function called checkDetails.
 * checkDetails checks if the email and password are correct, and if they are, it sets the cardPage
 * @param {function} setCardPage A function that sets the cardPage
 * @returns the login form
 * @example <LoginForm setCardPage={setCardPage} /> <= remove this if you don't need this
 * @see https://reactjs.org/docs/components-and-props.html <= add youtube use vedio for this component
 */
function LoginForm({ setCardPage }) {
  function checkDetails() {
    const loginEmail = document.getElementById("email");
    const loginPassword = document.getElementById("password");
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log("Before If")
    // console.log(regEx.test(loginEmail.value))
    // console.log(loginPassword.value)
    if (regEx.test(loginEmail.value) && loginPassword.value.toLowerCase() === "admin") {
      // console.log("After If")
      setCardPage(true);
    } else {
      setCardPage(false);
    }
  }
  return (
    <>
      <section className="login-form">
        <h2 className="login-form-title">Login</h2>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-group">
          <button onClick={checkDetails}>Login</button>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
