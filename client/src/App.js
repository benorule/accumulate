import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Track from "./pages/track.js";
import Signup from "./pages/signup.js";

function App() {
  const [goalState, setGoalState] = useState({
    value: "deposit",
    savings: 0,
    timeframe: 0,
    deposit: 0,
    month: true
});

  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/"><Track goalState={ goalState } setGoalState={ setGoalState }/></Route>
        <Route exact path="/signup"><Signup goalState={ goalState } setGoalState={ setGoalState }/></Route>
      </div>
    </Router>
  );
}

export default App;
