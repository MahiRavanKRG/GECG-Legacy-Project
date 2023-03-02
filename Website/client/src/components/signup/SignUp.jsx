import React from 'react'

function SignUp() {
  return (
    <>
      <section className="signup-form">
        <h2 className="login-form-title">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email-signup">Email</label>
          <input type="email" name="email-signup" id="email-signup" />
        </div>
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
        <div className="form-group">
          <label htmlFor="passing-year">Passing Year</label>
          <select name="passing-year" id="passing-year">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Create Password
          </label>
          <input type="password" name="password-signup" id="password-signup" />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Confirm Password
          </label>
          <input type="password" name="confirm-password-signup" id="confirm-password-signup" />
        </div>
        <div className="form-group">
          <label htmlFor="about">
            Write Something About You
          </label>
          <textarea name="about" id="about" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
        <button>Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default SignUp