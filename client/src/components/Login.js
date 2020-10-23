import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });

    const enter = event => {
        const { name, value } = event.target;

        // Updating the input's state
        setUserState({
            ...userState,
            [name]: value
        });
        console.log(userState);
    };

    const login = (event) => {
        event.preventDefault();
        console.log(userState);
        axios.post("/api/goal/login", userState)
        .then((res) => {
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