import React from "react";
import Form from "../components/Form";
import "../App.scss";


function Set({ goalState, setGoalState }) {
    return (
        <>
            <Form goalState={ goalState } setGoalState={ setGoalState }/>
        </>
    );
}

export default Set;