import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;

        setUserState({
            ...userState,
            [name]: value
        });
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(userState);
        axios.post("/api/goal/register", userState)
        .then((res) => {
            console.log(res);
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