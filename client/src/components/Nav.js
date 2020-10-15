import React, { useContext } from "react";
import GoalContext from "../utils/GoalContext";

function Nav() {
  const { month } = useContext(GoalContext);

  return ( 
    <div className="navbar navbar-light bg-light mb-5">
      { month !== "lazy" ? (<span className="navbar-brand" role="img" aria-label="monocle face">🧐</span>) :
        (
          <span className="navbar-brand" role="img" aria-label="sleeping face">😴</span>
        )}
      <span className="navbar-brand mb-0 h1">Welcome to accumulate!</span>
      <span className="navbar-brand mb-0 h1">Set your financial goals and track your progress towards them.</span>
    </div>
  );
}

export default Nav;