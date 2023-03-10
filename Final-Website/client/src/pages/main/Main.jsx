import React, { useState, useEffect } from "react";
import CardList from "../../components/cardlist/CardList";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./main.css";
import axios from "axios";

function Main({ setsubmitCorrectInformation }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [profileActive, setProfileActive] = useState(false);
  const [activeToggle, setActiveToggle] = useState(false);
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Here we are getting data from userAPI that Aashutosh have created in API.js and User.js
  useEffect(() => {
    // axios.get("http://localhost:5000/getAllUser").then((res) => {
    // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
      axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {

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
          setProfileActive={setProfileActive}
          profileActive={profileActive}
          setActiveToggle={setActiveToggle}
          activeToggle={activeToggle}
        />
        <Sidebar profileActive={profileActive} setProfileActive={setProfileActive} activeToggle={activeToggle} />
        <CardList cards={cards}  profileActive={profileActive} activeToggle={activeToggle}/>
      </div>
    </>
  );
}

export default Main;
