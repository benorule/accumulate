import React, { useEffect, useState } from "react";
import Button from 'react-bulma-components/lib/components/button';
import Nav from "./components/Nav";
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Track from "./pages/track.js";
import Set from "./pages/set.js";
import Signup from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import axios from "axios";

function App({ userState, setUserState }) {
  const [goalState, setGoalState] = useState({
    value: "deposit",
    savings: 0,
    timeframe: 0,
    deposit: 0,
    month: true
  });

  useEffect(() => {
    axios.get("/api/goal").then((res) => {
      console.log(res.data[0]);
      setGoalState({ ...goalState, ...res.data[0] }); // savings: parseInt(res.data[0].savings)})
    });
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Button color='primary'>Press Me!</Button>
        <Route exact path="/"><Track goalState={goalState} setGoalState={setGoalState} /></Route>
        <Route exact path="/set"><Set goalState={goalState} setGoalState={setGoalState} /></Route>
        <Route exact path="/signup"><Signup userState={userState} setUserState={setUserState} /></Route>
        <Route exact path="/signin"><SignIn userState={userState} setUserState={setUserState} /></Route>
      </div>
    </Router>
  );
}

export default App;
