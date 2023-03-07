import React from "react";
import "./loginform.css";

function LoginForm({ setCardPage, setLoginForm, setFlip, flip }) {
  
  function checkDetails() {
    const loginEmail = document.getElementById("email");
    const loginPassword = document.getElementById("password");
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log("Before If")
    // console.log(regEx.test(loginEmail.value))
    // console.log(loginPassword.value)
    if (
      regEx.test(loginEmail.value) &&
      loginPassword.value.toLowerCase() === "admin"
    ) {
      // console.log("After If")
      setCardPage(true);
    } else {
      alert("Please enter the valid credentials");
      setCardPage(false);
    }
  }
  return (
    <>
      <section className={`${flip ? "login-form fliped" : "login-form"}`}>
        <div className="form-group" style={{ alignItems: "center" }}>
          <h2 className="login-form-title"> Login</h2>
        </div>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-group" style={{ alignItems: "center" }}>
          <button onClick={checkDetails}>Login</button>
          <button
            id="account"
            onClick={() => {
              setLoginForm(false);
              setFlip(true);
            }}
          >
            Don't have an account?
          </button>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
