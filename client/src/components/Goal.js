import React from "react";

function GoalInfo({ goalState }) {

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
