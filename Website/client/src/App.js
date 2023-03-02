import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { useState } from "react";
import Card from "./pages/card/Card";

function App() {
  const [cardPage, setCardPage] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cardPage={cardPage} setCardPage={setCardPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
