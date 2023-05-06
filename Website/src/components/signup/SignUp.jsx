/**
 * It returns a section with a form and some form elements
 * This is the signup component
 * @returns A React component.
 */
import React from 'react'


function SignUp() {
  return (
    <>
      <section className="signup-form">
        <h2 className="login-form-title">Sign Up</h2>
/** Creating a form group with a label and an input field. to enter name */
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>
/* Creating a form group with a label and an input field. to enter Email */
        <div className="form-group">
          <label htmlFor="email-signup">Email</label>
          <input type="email" name="email-signup" id="email-signup" />
        </div>
/* Creating a dropdown list of branches. */
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch">
            <option value="IT">IT</option>
            <option value="CE">CE</option>
            <option value="BM">BM</option>
            <option value="IC">IC</option>
            <option value="EC">EC</option>
            <option value="Civil">Civil</option>
            <option value="R&A">R&A</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>
/* Creating a dropdown list of years. */
        <div className="form-group">
          <label htmlFor="passing-year">Passing Year</label>
          <select name="passing-year" id="passing-year">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        /* Creating a form group with a label and an input field. to enter password. */
        <div className="form-group">
          <label htmlFor="password">
            Create Password
          </label>
          <input type="password" name="password-signup" id="password-signup" />
        </div>
        /* Creating a form group with a label and an input field. to confirm password. */
        <div className="form-group">
          <label htmlFor="password">
            Confirm Password
          </label>
          <input type="password" name="confirm-password-signup" id="confirm-password-signup" />
        </div>
        /* Creating a textarea to write something about user. */
        <div className="form-group">
          <label htmlFor="about">
            Write Something About You
          </label>
          <textarea name="about" id="about" cols="30" rows="10"></textarea>
        </div>
        /* Creating a button with the text "Sign Up" this will submit data */
        <div className="form-group">
        <button>Sign Up</button>
        </div>
      </section>
    </>
  )
}

/* Exporting the SignUp component. */
export default SignUp