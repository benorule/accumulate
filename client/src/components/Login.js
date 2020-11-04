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
            <form>
                <label class="label">Email</label>
                <input class="input is-primary" placeholder="email" onInput={enter} type="text" id="email" name="email" />
                <label class="label">Password</label>
                <input class="input is-primary" placeholder="password" onInput={enter} type="password" id="password" name="password" />
                <Button color="primary" onClick={login}>Submit</Button>
            </form>
        </div>
    );
}


export default Login;