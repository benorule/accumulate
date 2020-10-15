import React, { useContext } from "react";
import GoalContext from "../utils/GoalContext";

function GoalInfo() {
  const { savings, timeframe, deposit } = useContext(GoalContext);

  return (
    <div className="card">
      <div>
        Amount left to save: {savings}
      </div>
      <div>
        Timeframe: {timeframe} months
      </div>
      <div>
        Deposit: {deposit} per month
      </div>
    </div>
  );
}

export default GoalInfo;
