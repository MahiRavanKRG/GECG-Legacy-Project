import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
function App() {
  // When user enter correct credentails then "Main" page will be rendered instead of "Home"
  // So we have made state submitCorrectInformatin
  // By default it is false as we are redering the "Home" page first
  const [submitCorrectInformation, setSubmitCorrectInformation] =
    useState(false);
  // To make flip the log page card and make visible signup page when user enter on "Don't have an account?"
  const [flip, setFlip] = useState(false);
  return (
    <div className="App">
      {/* Here awe are passing the props to change the states that we have made in App.js component */}
      {submitCorrectInformation ? (
        <Main
          setSubmitCorrectInformation={setSubmitCorrectInformation}
          submitCorrectInformation={submitCorrectInformation}
        />
      ) : (
        <Home
          submitCorrectInformation={submitCorrectInformation}
          setSubmitCorrectInformation={setSubmitCorrectInformation}
          flip={flip}
          setFlip={setFlip}
        />
      )}
    </div>
  );
}

export default App;
