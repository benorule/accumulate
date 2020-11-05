import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bulma-components/lib/components/button';

function Login({ goalState, setGoalState }) {
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
                <h1 className="title">Sign in</h1>
                <h6 className="subtitle">Welcome back to accumulate! Sign in to view and update your progress toward your goal.</h6>
            <form>
                <label className="label">Email</label>
                <input className="input is-primary" placeholder="email" onInput={enter} type="text" id="email" name="email" />
                <label className="label">Password</label>
                <input className="input is-primary" placeholder="password" onInput={enter} type="password" id="password" name="password" />
                <Button color="primary" onClick={login}>Submit</Button>
            </form>
        </div>
    );
}


export default Login;