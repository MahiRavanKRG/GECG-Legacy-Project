import { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Main from './pages/main/Main';

function App() {
  // When user enter correct credentails then "Main" page will be rendered instead of "Home"
  // So for that we have made state below
  const [submitCorrectInformation, setsubmitCorrectInformation] = useState(false);
  return (
    <div className="App">
      {submitCorrectInformation ? <Main /> : <Home />}
    </div>
  );
}

export default App;
