import React, { useState } from "react";
import GoalInfo from "./components/Goal";
import MonthBtns from "./components/MonthBtns";
import Nav from "./components/Nav";
import GoalContext from "./utils/GoalContext";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [goalState, setGoalState] = useState({
    value: "deposit",
    savings: 0,
    timeframe: 0,
    deposit: 0,
    month: true
  });

  function changeMonth(Month) {
    if (Month === "determined") {
      goalState.savings -= 100;
      goalState.timeframe -= 1;
      checkGoal();
    }
    else {
    }
    setGoalState({
      ...goalState,
      Month
    });
  }

  function checkGoal() {
    if (goalState.timeframe === 0) {
      alert("You have accomplished your goal!")
    }
    else {
      // setNewGoal();
    }
  }

  const calculate = (event) => {
    event.preventDefault();
    if (goalState.value === "deposit") {
      // get user input for savings and time frame
      setGoalState({ ...goalState, deposit: goalState.savings / goalState.timeframe });
    }
    else if (goalState.value === "timeframe") {
      // get user input for savings and deposit
      setGoalState({ ...goalState, timeframe: goalState.savings / goalState.deposit });
    }
    else {
      // get user input for savings and deposit
      setGoalState({ ...goalState, savings: goalState.timeframe * goalState.deposit });
    }
  }

  return (
    <GoalContext.Provider value={{ goalState, setGoalState, calculate }}>
      <Nav />
      <GoalInfo />
      <MonthBtns changeMonth={changeMonth} />
      <Form />
    </GoalContext.Provider>
  );
}

export default App;
