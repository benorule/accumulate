import React from "react";
import Login from "../components/Login";
import "../App.scss";


function SignIn({ goalState, setGoalState }) {
    return (
        <>
            <Login goalState={ goalState } setGoalState={ setGoalState }/>
        </>
    );
}

export default SignIn;