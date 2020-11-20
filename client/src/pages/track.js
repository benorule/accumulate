import React from "react";
import GoalInfo from "../components/Goal";
import MonthBtns from "../components/MonthBtns";
import "../App.scss";
import axios from "axios";

function Track({ goalState, setGoalState }) {
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

    // Update savings, timeframe and deposit values
    const update = () => {
        axios.put("/api/goal/update", {
            savings: goalState.savings,
            timeframe: goalState.timeframe,
            deposit: goalState.deposit,
            _id: goalState._id
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <>
            <GoalInfo goalState={goalState} />
            <MonthBtns changeMonth={changeMonth} goalState={goalState} update={update} />
        </>
    );
}

export default Track;