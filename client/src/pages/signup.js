import React from "react";
import Signup from "../components/Signup";
import "../App.css";


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
            <Signup userState={ userState } setUserState={ setUserState }/>
        </>
    );
}

export default Signup;