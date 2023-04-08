/**
 * I'm trying to use the state of cardPage to determine whether or not to render the Card component.
 * @returns The App component is being returned.
 */
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
