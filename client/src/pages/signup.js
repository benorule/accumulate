import React from "react";
import Register from "../components/Register";
import "../App.css";


function Signup({ userState, setUserState }) {
    return (
        <>
            <Register userState={ userState } setUserState={ setUserState }/>
        </>
    );
}

export default Signup;