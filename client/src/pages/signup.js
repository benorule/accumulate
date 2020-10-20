import React, { useState, useEffect } from "react";
import GoalInfo from "../components/Goal";
import MonthBtns from "../components/MonthBtns";
import GoalContext from "../utils/GoalContext";
import Form from "../components/Form";
import "../App.css";
import axios from "axios";


function Signup({ goalState, setGoalState }) {

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
        <>
            <Form goalState={ goalState } setGoalState={ setGoalState } calculate={ calculate }/>
        </>
    );
}

export default Signup;