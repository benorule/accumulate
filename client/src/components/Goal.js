import React from "react";
import Card from 'react-bulma-components/lib/components/card';

function GoalInfo({ goalState }) {

  return (
    <Card>
      <h1 class="title">Track your goal</h1>
      <h6 class="subtitle">Use the buttons to record whether or not you saved the required amount each month and to save your changes to your goal.</h6>
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
