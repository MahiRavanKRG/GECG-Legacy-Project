import React, { useState, useEffect } from "react";
import CardList from "../../components/cardlist/CardList";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./main.css";
import axios from "axios";

function Main({ setsubmitCorrectInformation }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Here we are getting data from userAPI that Aashutosh have created in API.js and User.js
  useEffect(() => {
    axios.get("http://localhost:5000/getAllUser").then((res) => {
      let cardsArray = res.data.data;
      let finalCards = [];
      finalCards = cardsArray.filter((cards) =>
      cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
      cards.branch.toLowerCase().includes(search.toLowerCase()) ||
      cards.email.toLowerCase().includes(search.toLowerCase())
      );
      setCards(finalCards);
    });
  }, [search]);
  return (
    <>
      <div className="main">
        <Header
          setsubmitCorrectInformation={setsubmitCorrectInformation}
          handleChange={handleChange}
        />
        <Sidebar />
        <CardList cards={cards} setCards={setCards} />
      </div>
    </>
  );
}

export default Main;
