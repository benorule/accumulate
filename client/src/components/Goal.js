import React from "react";
import Card from 'react-bulma-components/lib/components/card';

function GoalInfo({ goalState }) {

  return (
    <Card>
      <div>
        Amount left to save: {goalState.savings}
      </div>
      <div>
        Timeframe: {goalState.timeframe} months
      </div>
      <div>
        Deposit: {goalState.deposit} per month
      </div>
    </Card>
  );
}

export default GoalInfo;
