import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bulma-components/lib/components/button';
// import { Form } from 'react-bulma-components/dist/react-bulma-components.min.css';
// const { Input, Field, Control, Label } = Form;


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
                <h1 class="title">Signup</h1>
                <h6 class="subtitle">Welcome to accumulate! Sign up to set a financial goal and then track your progress towards it.</h6>
                <form>
                    <label class="label">Email</label>
                    <input class="input is-primary" placeholder="email" onChange={handleInputChange} type="text" id="email" name="email" />
                    <label class="label">Password</label>
                    <input class="input is-primary" placeholder="password" onChange={handleInputChange} type="password" id="password" name="password" />
                    <Button color="primary" onClick={submit}>Submit</Button>
                </form>
            </div>
    );
}


export default Register;