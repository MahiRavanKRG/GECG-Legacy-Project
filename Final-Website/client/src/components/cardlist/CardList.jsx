import React, { useState } from "react";
import "./cardlist.css";
import "../../assets/images/user-logo.png";
import Card from "./card/Card";

function CardList() {
  const [cardFlip, setCardFlip] = useState(false);
  return (
    <>
      <div className="cardlist">
        <div className="card-grid">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CardList;

const cards = [
  {
    id: 1,
    name: "Makwana Uttam Bharatbhai",
    email: "uttamakwana4503@gecg28.ac.in",
    domain: "Frontend Developer | Cyber Security",
    branch: "IT",
    batch: "2020-2024",
    imgUrl: "../../assets/images/user-logo.png",
    aboutUser:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolore vel, natus possimus rem similique fuga necessitatibus sint",
    githubLink: "https://github.com/uttamakwana",
    linkedinLink: "https://linkedin.com/in/uttammakwana",
  },
  {
    id: 2,
    name: "Bhadrka Divyesh Pannchabhai",
    email: "uttamakwana4503@gecg28.ac.in",
    domain: "Frontend Developer | Cyber Security",
    branch: "IT",
    batch: "2020-2024",
    imgUrl: "../../assets/images/user-logo.png",

    aboutUser:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolore vel, natus possimus rem similique fuga necessitatibus sint",
    githubLink: "https://github.com/uttamakwana",
    linkedinLink: "https://linkedin.com/in/uttammakwana",
  },
  {
    id: 3,
    name: "Verma Aashutosh Santosh",
    email: "uttamakwana4503@gecg28.ac.in",
    domain: "Frontend Developer | Cyber Security",
    branch: "IT",
    batch: "2020-2024",
    imgUrl: "../../assets/images/user-logo.png",

    aboutUser:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolore vel, natus possimus rem similique fuga necessitatibus sint",
    githubLink: "https://github.com/uttamakwana",
    linkedinLink: "https://linkedin.com/in/uttammakwana",
  },
  {
    id: 4,
    name: "Chaturvedi Aaditya Nileshbhai",
    email: "uttamakwana4503@gecg28.ac.in",
    domain: "Frontend Developer | Cyber Security",
    branch: "IT",
    batch: "2020-2024",
    imgUrl: "../../assets/images/user-logo.png",

    aboutUser:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolore vel, natus possimus rem similique fuga necessitatibus sint",
    githubLink: "https://github.com/uttamakwana",
    linkedinLink: "https://linkedin.com/in/uttammakwana",
  },
  {
    id: 5,
    name: "Ubhadiya Raj Kantibhai",
    email: "uttamakwana4503@gecg28.ac.in",
    domain: "Frontend Developer | Cyber Security",
    branch: "IT",
    batch: "2020-2024",
    imgUrl: "../../assets/images/user-logo.png",

    aboutUser:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolore vel, natus possimus rem similique fuga necessitatibus sint",
    githubLink: "https://github.com/uttamakwana",
    linkedinLink: "https://linkedin.com/in/uttammakwana",
  },
];