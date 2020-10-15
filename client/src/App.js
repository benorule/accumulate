import React, { useState, useEffect } from "react";
import GoalInfo from "./components/Goal";
import MonthBtns from "./components/MonthBtns";
import Nav from "./components/Nav";
import * as API from "./utils/API";
import GoalContext from "./utils/GoalContext";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [GoalState, setGoalState] = useState({
    savings: 0,
    timeframe: 0,
    deposit: 0,
    month: true
  });

  function changeMonth(Month) {
    if (Month === "determined") {
      GoalState.savings -= 100;
      GoalState.timeframe -= 1;
      checkGoal();
    }
    else {
    }
    setGoalState({
      ...GoalState,
      Month
    });
  }

  function checkGoal() {
    if (GoalState.timeframe === 0) {
      alert("You have accomplished your goal!")
    }
    else {
      // setNewGoal();
    }
  }

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getGoal.then((res) => {
      setGoalState(res);
    });
  }, []);

  calculate = (event) => {
    event.preventDefault();
    if (this.state.value === "deposit") {
      // get user input for savings and time frame
      this.setState({ ...this.state, deposit: this.state.savings / this.state.timeframe });
    }
    else if (this.state.value === "timeframe") {
      // get user input for savings and deposit
      this.setState({ ...this.state, timeframe: this.state.savings / this.state.deposit });
    }
    else {
      // get user input for savings and deposit
      this.setState({ ...this.state, savings: this.state.timeframe * this.state.deposit });
    }
  }


  return (
    <div className="container">
      <GoalContext.Provider value={GoalState, setGoalState, calculate}>
        <Nav />
        <GoalInfo />
        <MonthBtns changeMonth={changeMonth} />
        <Form />
      </GoalContext.Provider>
    </div>
  );
}

export default App;
