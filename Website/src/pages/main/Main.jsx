import React, { useState, useEffect } from "react";
import CardList from "../../components/cardlist/CardList";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./main.css";
import axios from "axios";

function Main({ submitCorrectInformation, setSubmitCorrectInformation }) {
  // this is the main card state with which we are setting cards according to other things
  const [cards, setCards] = useState([]);
  // when user search something this state changes
  const [search, setSearch] = useState("");
  // when user clicks on profile setting button this state activates
  const [profileActive, setProfileActive] = useState(false);
  // to toggle sidebar we have made this state
  const [activeToggle, setActiveToggle] = useState(false);
  // we have to set differnt api if filter button is clicked in sidebar
  // it means we are filtering data according the our need
  const [filteredData, setFilteredData] = useState(false);
  // we are taking branch value from the select tag of sidebar
  const [branchValue, setBranchValue] = useState("");
  // this state is made to make close the sidebar by button
  const [sidebarClose, setSidebarClose] = useState(false);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Here we are getting data from userAPI that Aashutosh have created in API.js and User.js
  const filteredUrl = "http://localhost:5000/getFilteredUser";
  const allUser = "http://localhost:5000/getAllUser";
  // useEffect(() => {
  //   axios
  //     .get(
  //       // "http://localhost:5000/getFilteredUser",
  //       // `${
  //       //   filteredData
  //       //     ? "http://localhost:5000/getFilteredUser/"
  //       //     : "http://localhost:5000/getAllUser/"
  //       // } `,
  //       `${
  //         filteredData
  //           ? filteredUrl.trim()
  //           : allUser
  //       } `,
  //       {
  //         params: filteredData
  //           ? {
  //               branchValue
  //             }
  //           : null,
  //         // params :{branchValue}
  //       }
  //     )
  //     .then((res) => {
  //       // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
  //       // axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {
  //       let cardsArray = res.data.data;
  //       let finalCards = [];
  //       if (filteredData) {
  //         // array_str = '[' + res.data.data + ']'
  //         // my_array = JSON.parse(array_str);
  //         // console.log(filteredData)
  //         // console.log(res.data.data)
  //         // console.log("Hello")
  //         // console.log(JSON.parse(res.data.data))
  //         // console.log(Object.keys(res.data.data))
  //         // setCards(Object.keys(res.data.data))
  //         // let finalFilteredCardArray = res.data.data;
  //         finalCards = cardsArray.filter(
  //           (cards) =>
  //             cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //             cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //             cards.email.toLowerCase().includes(search.toLowerCase())
  //         );
  //         setCards(finalCards);
  //       } else {
  //         // console.log(res.data.data)
  //         finalCards = cardsArray.filter(
  //           (cards) =>
  //             cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //             cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //             cards.email.toLowerCase().includes(search.toLowerCase())
  //         );
  //         setCards(finalCards);
  //       }
  //     });
  // }, [search, filteredData]);

  useEffect(() => {
    if (filteredData) {
      axios
        .get(
          "http://localhost:5000/getFilteredUser",
          // `${
          //   filteredData
          //     ? "http://localhost:5000/getFilteredUser/"
          //     : "http://localhost:5000/getAllUser/"
          // } `,
          // `${
          //   filteredData
          //     ? filteredUrl.trim()
          //     : allUser
          // } `,
          {
            params: filteredData
              ? {
                  branchValue,
                }
              : null,
            // params :{branchValue}
          }
        )
        .then((res) => {
          // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
          // axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {
          let cardsArray = res.data.data;
          let finalCards = [];
          if (filteredData) {
            // array_str = '[' + res.data.data + ']'
            // my_array = JSON.parse(array_str);
            // console.log(filteredData)
            // console.log(res.data.data)
            // console.log("Hello")
            // console.log(JSON.parse(res.data.data))
            // console.log(Object.keys(res.data.data))
            // setCards(Object.keys(res.data.data))
            // let finalFilteredCardArray = res.data.data;
            finalCards = cardsArray.filter(
              (cards) =>
                cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
                cards.branch.toLowerCase().includes(search.toLowerCase()) ||
                cards.email.toLowerCase().includes(search.toLowerCase())
            );
            setCards(finalCards);
          } else {
            // console.log(res.data.data)
            finalCards = cardsArray.filter(
              (cards) =>
                cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
                cards.branch.toLowerCase().includes(search.toLowerCase()) ||
                cards.email.toLowerCase().includes(search.toLowerCase())
            );
            setCards(finalCards);
          }
        });
    }
    else{
      axios
      .get(
        "http://localhost:5000/getAllUser",
        // `${
        //   filteredData
        //     ? "http://localhost:5000/getFilteredUser/"
        //     : "http://localhost:5000/getAllUser/"
        // } `,
        // `${
        //   filteredData
        //     ? filteredUrl.trim()
        //     : allUser
        // } `,
        {
          params: filteredData
            ? {
                branchValue,
              }
            : null,
          // params :{branchValue}
        }
      )
      .then((res) => {
        // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
        // axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {
        let cardsArray = res.data.data;
        let finalCards = [];
        if (filteredData) {
          // array_str = '[' + res.data.data + ']'
          // my_array = JSON.parse(array_str);
          // console.log(filteredData)
          // console.log(res.data.data)
          // console.log("Hello")
          // console.log(JSON.parse(res.data.data))
          // console.log(Object.keys(res.data.data))
          // setCards(Object.keys(res.data.data))
          // let finalFilteredCardArray = res.data.data;
          finalCards = cardsArray.filter(
            (cards) =>
              cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
              cards.branch.toLowerCase().includes(search.toLowerCase()) ||
              cards.email.toLowerCase().includes(search.toLowerCase())
          );
          setCards(finalCards);
        } else {
          // console.log(res.data.data)
          finalCards = cardsArray.filter(
            (cards) =>
              cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
              cards.branch.toLowerCase().includes(search.toLowerCase()) ||
              cards.email.toLowerCase().includes(search.toLowerCase())
          );
          setCards(finalCards);
        }
      });
    }
  }, [search, filteredData]);

  // if(filteredData){
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "http://localhost:5000/getFilteredUser",
  //         // `${
  //         //   filteredData
  //         //     ? "http://localhost:5000/getFilteredUser/"
  //         //     : "http://localhost:5000/getAllUser/"
  //         // } `,
  //         // `${
  //         //   filteredData
  //         //     ? filteredUrl.trim()
  //         //     : allUser
  //         // } `,
  //         {
  //           params: filteredData
  //             ? {
  //                 branchValue
  //               }
  //             : null,
  //           // params :{branchValue}
  //         }
  //       )
  //       .then((res) => {
  //         // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
  //         // axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {
  //         let cardsArray = res.data.data;
  //         let finalCards = [];
  //         if (filteredData) {
  //           // array_str = '[' + res.data.data + ']'
  //           // my_array = JSON.parse(array_str);
  //           // console.log(filteredData)
  //           // console.log(res.data.data)
  //           // console.log("Hello")
  //           // console.log(JSON.parse(res.data.data))
  //           // console.log(Object.keys(res.data.data))
  //           // setCards(Object.keys(res.data.data))
  //           // let finalFilteredCardArray = res.data.data;
  //           finalCards = cardsArray.filter(
  //             (cards) =>
  //               cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.email.toLowerCase().includes(search.toLowerCase())
  //           );
  //           setCards(finalCards);
  //         } else {
  //           // console.log(res.data.data)
  //           finalCards = cardsArray.filter(
  //             (cards) =>
  //               cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.email.toLowerCase().includes(search.toLowerCase())
  //           );
  //           setCards(finalCards);
  //         }
  //       });
  //   }, [search, filteredData]);
  // }
  // else{
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "http://localhost:5000/getAllUser",
  //         // `${
  //         //   filteredData
  //         //     ? "http://localhost:5000/getFilteredUser/"
  //         //     : "http://localhost:5000/getAllUser/"
  //         // } `,
  //         // `${
  //         //   filteredData
  //         //     ? filteredUrl.trim()
  //         //     : allUser
  //         // } `,
  //         {
  //           params: filteredData
  //             ? {
  //                 branchValue
  //               }
  //             : null,
  //           // params :{branchValue}
  //         }
  //       )
  //       .then((res) => {
  //         // axios.get("http://192.168.147.142:5000/getAllUser").then((res) => {
  //         // axios.get("https://35e2-2409-40c1-10-c0a-89cf-9e23-e561-6cdd.in.ngrok.io/getAllUser").then((res) => {
  //         let cardsArray = res.data.data;
  //         let finalCards = [];
  //         if (filteredData) {
  //           // array_str = '[' + res.data.data + ']'
  //           // my_array = JSON.parse(array_str);
  //           // console.log(filteredData)
  //           // console.log(res.data.data)
  //           // console.log("Hello")
  //           // console.log(JSON.parse(res.data.data))
  //           // console.log(Object.keys(res.data.data))
  //           // setCards(Object.keys(res.data.data))
  //           // let finalFilteredCardArray = res.data.data;
  //           finalCards = cardsArray.filter(
  //             (cards) =>
  //               cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.email.toLowerCase().includes(search.toLowerCase())
  //           );
  //           setCards(finalCards);
  //         } else {
  //           // console.log(res.data.data)
  //           finalCards = cardsArray.filter(
  //             (cards) =>
  //               cards.fullName.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.branch.toLowerCase().includes(search.toLowerCase()) ||
  //               cards.email.toLowerCase().includes(search.toLowerCase())
  //           );
  //           setCards(finalCards);
  //         }
  //       });
  //   }, [search, filteredData]);
  // }
  return (
    <>
      <div className="main">
        {/* Header
        1. submitCorrectInformation 👉 used for signout
        2. setSubmitCorrectInformation 👉 used for make change state of submitCorrectInformation
        3. handleChange 👉 we are passing the handlechnage function that will change the cards according to search value of search input tag
        4. profileActive 👉 used to open profile setting menu
        5. activeToggle 👉 used to toggle sidebar 
        6. setActiveToggle 👉 to change state of toggle sidebar
        7. sidebarClose 👉 when user close sidebar 

        */}
        <Header
          submitCorrectInformation={submitCorrectInformation}
          setSubmitCorrectInformation={setSubmitCorrectInformation}
          handleChange={handleChange}
          setProfileActive={setProfileActive}
          profileActive={profileActive}
          setActiveToggle={setActiveToggle}
          activeToggle={activeToggle}
        />

        {/* Sidebar
        1. setBranchValue 👉 whatever you select in branch select tag it will set that value 
        2. filteredData 👉 when user submit filters the state will change
        3. setFilteredData 👉 to change the state of filteredData
        4. setProfileActive 👉 to exit from profile setting
        5. activeToggle 👉 to apply css of changing sidebar right positioning
        6. sidebarClose 👉 to close sidebar
        7. setSidebarClose 👉 to change state of sidebar
        8. setActiveToggle 👉   
        */}
        <Sidebar
          setBranchValue={setBranchValue}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          profileActive={profileActive}
          setProfileActive={setProfileActive}
          activeToggle={activeToggle}
          sidebarClose={sidebarClose}
          setSidebarClose={setSidebarClose}
          setActiveToggle={setActiveToggle}
        />
        <CardList
          submitCorrectInformation={submitCorrectInformation}
          cards={cards}
          profileActive={profileActive}
          activeToggle={activeToggle}
          setProfileActive={setProfileActive}
          sidebarClose={sidebarClose}
        />
      </div>
    </>
  );
}

export default Main;
