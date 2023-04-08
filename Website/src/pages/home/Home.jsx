import React, { useState } from "react";
import Header from "../../components/header/Header";
import LoginForm from "../../components/login/LoginForm";
import SignUp from "../../components/signup/SignUp";
import "./home.css";
import Card from "../card/Card";

/* A function component.
** I will need some help to document this */
function Home({ cardPage, setCardPage }) {
  const [isLoginForm, setLoginForm] = useState(true);
  return (
    <>
      <Header
        cardPage={cardPage}
        setLoginForm={setLoginForm}
        setCardPage={setCardPage}
      />
      {cardPage ? (
        <Card />
      ) : (
        <section className="form-container">
          {isLoginForm ? <LoginForm setCardPage={setCardPage} /> : <SignUp />}
        </section>
      )}
    </>
  );
}

export default Home;
