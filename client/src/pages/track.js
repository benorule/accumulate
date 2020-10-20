import React, { useState, useEffect } from "react";
import GoalInfo from "../components/Goal";
import MonthBtns from "../components/MonthBtns";
import GoalContext from "../utils/GoalContext";
import Form from "../components/Form";
import "../App.css";
import axios from "axios";


function Track() {
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

    useEffect(() => {
        axios.get("/api/goal").then((res) => {
            setGoalState({ ...goalState, ...res.data[0] })
        });
    }, []);

    return (
        <GoalContext.Provider value={{ goalState, setGoalState, calculate }}>
            <GoalInfo />
            <MonthBtns changeMonth={changeMonth} save={save} goalState={goalState} update={update} />
        </GoalContext.Provider>
    );
}

export default Track;