import React from "react";
import GoalInfo from "../components/Goal";
import MonthBtns from "../components/MonthBtns";
import Nav from "../components/Nav";
import GoalContext from "../utils/GoalContext";
import Form from "../components/Form";
import "../App.css";
import goalState from "../App.js";
import setGoalState from "../App.js";
import calculate from "../App.js";
import changeMonth from "../App.js";
import save from "../App.js";
import update from "../App.js";

function Track() {
return (
    <GoalContext.Provider value={{ goalState, setGoalState, calculate }}>
      <GoalInfo />
      <MonthBtns changeMonth={changeMonth} save={save} goalState={goalState} update={update} />
      <Form />
    </GoalContext.Provider>
  );
}

export default Track;