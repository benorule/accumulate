import React, { useState } from "react";
import axios from "axios";

function Login( { goalState, setGoalState } ) {
    const enter = event => {
        const { name, value } = event.target;

        // Updating the input's state
        setGoalState({
            ...goalState,
            [name]: value
        });
        console.log(goalState);
    };

    const login = (event) => {
        event.preventDefault();
        console.log(goalState);
        axios.post("/api/goal/login", goalState)
        .then((res) => {
            setGoalState({
                ...goalState,
                _id: res._id
            });
            console.log(res);
        });
    }

    return (
        <div className="card">
            <form>
                <input onInput={enter} type="text" id="email" name="email" />
                <input onInput={enter} type="password" id="password" name="password" />
                <button className="btn btn-primary" onClick={login}>Enter</button>
            </form>
        </div>
    );
}


export default Login;