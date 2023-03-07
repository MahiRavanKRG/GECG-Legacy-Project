import React, { useState } from "react";
import Header from "../../components/header/Header";
import LoginForm from "../../components/login/LoginForm";
import SignUp from "../../components/signup/SignUp";
import "./home.css";
import Card from "../../components/card/Card";

function Home({ cardPage, setCardPage }) {
  const [isLoginForm, setLoginForm] = useState(true);
  const [flip, setFlip] = useState(false);
  return (
    <>
      <div className="home">
        <div className={`${cardPage ? "left-view close" : "left-view"}`}>
          <Header
            cardPage={cardPage}
            setLoginForm={setLoginForm}
            setCardPage={setCardPage}
          />
        </div>
        <div className={`${cardPage ? "right-view close" : "right-view"}`}>
          {cardPage ? (
            <Card />
          ) : (
            <section className="form-container">
              {isLoginForm ? (
                <LoginForm setCardPage={setCardPage} setLoginForm={setLoginForm} flip={flip} setFlip={setFlip}/>
              ) : (
                <SignUp flip={flip}/>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
