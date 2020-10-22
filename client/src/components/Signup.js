import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;

        setUserState({
            ...userState,
            [name]: parseInt(value)
        });
    };
    const submit = () => {
        axios.post("/api/goal/save", {
            email: userState.savings,
            password: userState.timeframe,
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <form>
            {userState.value !== "email" ? <input onChange={handleInputChange} type="number" id="email" name="email" /> : <div></div>}
            {userState.value !== "password" ? <input onChange={handleInputChange} type="number" id="password" name="password" /> : <div></div>}
            <button className="btn btn-primary" onClick={submit}>Submit</button>
        </form>
    );
}


export default Signup;