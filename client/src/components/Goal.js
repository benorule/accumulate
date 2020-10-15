import React, { useContext, useEffect } from "react";
import GoalContext from "../utils/GoalContext";

function GoalInfo() {
  const { goalState } = useContext(GoalContext);

  useEffect(() => {console.log(goalState)});

  return (
    <div className="card">
      <div>
        Amount left to save: {goalState.savings}
      </div>
      <div>
        Timeframe: {goalState.timeframe} months
      </div>
      <div>
        Deposit: {goalState.deposit} per month
      </div>
    </div>
  );
}

export default GoalInfo;
