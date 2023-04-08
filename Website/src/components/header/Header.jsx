import React from "react";
import "./header.css";

/* A function that returns a header component. */
function Header({ cardPage, setCardPage , setLoginForm }) {
  return (
    <>
/* This is the header of the page. */
      <header className="header">
        <div className="header-title">
          <h1>GLP-Community</h1>
        </div>
/* Checking if the cardPage is true or false. If it is true, it will display the sign out
        button. If it is false, it will display the login and create an account button. */
        {console.log(cardPage + "In header")}
        {cardPage ? (
          <div className="header-links">
            <button onClick={()=>{
              setCardPage(false)
            }}>
              Sign Out
            </button>
          </div>
        ) : (
  /* A div that contains two buttons. The first button is the login button and the second button
  is the create an account button. */
          <div className="header-links">
            <button
              onClick={() => {
                setLoginForm(true);
              }}
            >
              Login
            </button>
            <span>|</span>
            <button
              onClick={() => {
                setLoginForm(false);
              }}
            >
              Create an account?
            </button>
          </div>
        )}
/* Closing the header component. */
      </header>
    </>
  );
}

export default Header;
