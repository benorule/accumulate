import React, { useState } from "react";
import axios from "axios";

function Login({ userState, setUserState }) {
    const handleInputChange = event => {
        const { name, value } = event.target;

        // Updating the input's state
        setUserState({
            ...userState,
            [name]: value
        });
    };

    return (
        <div className="card">
            <form>
                <input onChange={handleInputChange} type="text" id="email" name="email" />
                <input onChange={handleInputChange} type="password" id="password" name="password" />
                <button className="btn btn-primary">Enter</button>
            </form>
        </div>
    );
}


export default Login;