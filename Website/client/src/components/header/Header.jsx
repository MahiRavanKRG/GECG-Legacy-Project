import React from "react";
import "./header.css";

function Header({ cardPage, setCardPage , setLoginForm }) {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>GLP-Community</h1>
        </div>
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
      </header>
    </>
  );
}

export default Header;
