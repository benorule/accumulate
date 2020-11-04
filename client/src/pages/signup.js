import React from "react";
import Register from "../components/Register";
import "../App.scss";


function Signup({ goalState, setGoalState }) {
    return (
        <>
            <Register goalState={ goalState } setGoalState={ setGoalState }/>
        </>
    );
}

export default Signup;