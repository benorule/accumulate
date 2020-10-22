import React, { useContext } from "react";
import GoalContext from "../utils/GoalContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const { month } = useContext(GoalContext);

  return ( 
    <div className="navbar navbar-light bg-light mb-5">
          <NavLink to="/">Track</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/set">Set</NavLink>
      <span className="navbar-brand mb-0 h1">Welcome to accumulate!</span>
      <span className="navbar-brand mb-0 h1">Set your financial goals and track your progress towards them.</span>
    </div>
  );
}

export default Nav;