import React from "react";
import Login from "../components/Login";
import "../App.scss";


function SignIn({ userState, setUserState }) {
    return (
        <>
            <Login userState={ userState } setUserState={ setUserState }/>
        </>
    );
}

export default SignIn;