import React from "react";
import Register from "../components/Register";
import "../App.scss";


function Signup({ userState, setUserState }) {
    return (
        <>
            <Register userState={ userState } setUserState={ setUserState }/>
        </>
    );
}

export default Signup;