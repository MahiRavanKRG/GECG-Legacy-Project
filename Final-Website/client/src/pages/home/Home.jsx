import React from "react";
import "./home.css";
import "./form.css";

function Home() {
  return (
    <>
      {/* This is the main home page container */}
      <main className="home">
        {/* Left side of the Home Page */}
        <aside className="home-left">
          {/* There are three types of content 
             1. Title
             2. Description
             3. Links
          */}

          <div className="home-left-container">
            <div className="home-left-container-title">
              <h1>GLP-Community</h1>
            </div>
            <div className="home-left-container-description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                veniam dolores eligendi vitae, hic eius dolor eaque excepturi!
                Et quas neque, dolore unde quod ad sunt, cum soluta eius nobis
                expedita. Pariatur, facere?
              </p>
            </div>
            <div className="home-left-container-links">
              <span className="flex-center">
                {/* Twitter Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path
                    fill="#03A9F4"
                    d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                  />
                </svg>
              </span>
              <span className="flex-center">
                {/* Instagram Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  data-name="Layer 1"
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <clipPath id="b">
                      <circle cx="64" cy="64" r="64" fill="none" />
                    </clipPath>
                    <clipPath id="c">
                      <path
                        fill="none"
                        d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"
                      />
                    </clipPath>
                    <clipPath id="e">
                      <circle cx="82" cy="209" r="5" fill="none" />
                    </clipPath>
                    <clipPath id="g">
                      <path
                        fill="none"
                        d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"
                      />
                    </clipPath>
                    <clipPath id="h">
                      <path
                        fill="none"
                        d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
                      />
                    </clipPath>
                    <clipPath id="i">
                      <circle cx="82" cy="-117" r="5" fill="none" />
                    </clipPath>
                    <radialGradient
                      id="a"
                      cx="27.5"
                      cy="121.5"
                      r="137.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffd676" />
                      <stop offset=".25" stopColor="#f2a454" />
                      <stop offset=".38" stopColor="#f05c3c" />
                      <stop offset=".7" stopColor="#c22f86" />
                      <stop offset=".96" stopColor="#6666ad" />
                      <stop offset=".99" stopColor="#5c6cb2" />
                    </radialGradient>
                    <radialGradient
                      id="d"
                      cx="27.5"
                      cy="-41.5"
                      r="148.5"
                      xlinkHref="#a"
                    />
                    <radialGradient
                      id="f"
                      cx="13.87"
                      cy="303.38"
                      r="185.63"
                      xlinkHref="#a"
                    />
                    <radialGradient
                      id="j"
                      cx="13.87"
                      cy="-22.62"
                      r="185.63"
                      xlinkHref="#a"
                    />
                  </defs>
                  <g clipPath="url(#b)">
                    <circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)" />
                  </g>
                  <g clipPath="url(#c)">
                    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)" />
                  </g>
                  <g clipPath="url(#e)">
                    <circle cx="13.87" cy="303.38" r="185.63" fill="url(#f)" />
                  </g>
                  <g clipPath="url(#g)">
                    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)" />
                  </g>
                  <g clipPath="url(#h)">
                    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)" />
                  </g>
                  <g clipPath="url(#i)">
                    <circle cx="13.87" cy="-22.62" r="185.63" fill="url(#j)" />
                  </g>
                  <circle cx="82" cy="46" r="5" fill="#fff" />
                  <path
                    fill="#fff"
                    d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
                  />
                  <rect
                    width="64"
                    height="64"
                    x="32"
                    y="32"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="8"
                    rx="12"
                    ry="12"
                  />
                </svg>
              </span>
              <span className="flex-center">
                {/* Linkdin Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="#1976D2">
                    <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z" />
                    <circle cx="1.75" cy="1.75" r="1.75" />
                  </g>
                </svg>
              </span>
              <span className="flex-center">
                {/* Facebook Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  />
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </aside>
        {/* Rigth side of the Home Page */}
        <aside className="home-right flex-center">
          <div className="form-container">
            {/* Login Form */}
            {/* <div className="face login-form flex-center">
              <div className="form-group">
                <h1>Login</h1>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-group-input"
                  placeholder=" "
                  required
                />
                <span id="email-label" className="form-group-span">
                  Email
                </span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-group-input"
                  placeholder=" "
                />
                <span id="password-label" className="form-group-span" required>
                  Password{" "}
                </span>
              </div>
              <div className="form-group">
                <button className="login-btn">Submit</button>
              </div>
            </div> */}

            {/* Signup Form */}
            <div className="face signup-form flex-center">
              <div className="form-group">
                <h1>Sign Up</h1>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  className="form-group-input"
                />
                <span className="form-group-span">Full Name</span>
              </div>

              <div className="even">
                <div className="form-group">
                  <select
                    name="branch"
                    id="branch"
                    className="form-group-select"
                    defaultValue="Branch"
                  >
                    <option value="" disabled selected>
                      Branch
                    </option>
                    <option value="IT">IT</option>
                    <option value="CE">CE</option>
                    <option value="EC">IT</option>
                    <option value="IC">IC</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="branch"
                    id="branch"
                    className="form-group-select"
                    defaultValue="Branch"
                  >
                    <option value="" disabled selected>
                      Ending Year
                    </option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="IC">2026</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="signup-email"
                  id="signup-email"
                  placeholder=" "
                  className="form-group-input"
                />
                <span className="form-group-span">Email</span>
              </div>

              <div className="even">
                <div className="form-group">
                  <input
                    type="password"
                    name="signup-password"
                    id="signup-password"
                    placeholder=" "
                    className="form-group-input"
                  />
                  <span className="form-group-span">Password</span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="signup-confirm-password"
                    id="signup-confirm-password"
                    placeholder=" "
                    className="form-group-input"
                  />
                  <span className="form-group-span">Confirm</span>
                </div>
              </div>
              <div className="form-group">
                <button className="signup-btn">Submit</button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default Home;
