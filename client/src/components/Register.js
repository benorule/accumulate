import React, { useState } from "react";
import axios from "axios";

function Register({ goalState, setGoalState }) {
    const handleInputChange = event => {
        const { name, value } = event.target;

        setGoalState({
            ...goalState,
            [name]: value
        });
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(goalState);
        axios.post("/api/goal/register", goalState)
        .then((res) => {
            console.log(res);
            setGoalState({
                ...goalState,
                _id: res._id
            });
        });
    }

    return (
        <div className="card">
            <form>
                <input onChange={handleInputChange} type="text" id="email" name="email" />
                <input onChange={handleInputChange} type="password" id="password" name="password" />
                <button className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
        </div>
    );
}


export default Register;