import React from "react";
import Form from "../components/Form";
import "../App.css";


function Set({ goalState, setGoalState }) {

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

export default Set;