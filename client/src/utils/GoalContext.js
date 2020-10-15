import React from "react";

const GoalContext = React.createContext({
  savings: 0,
  timeframe: 0,
  deposit: 0,
  month: true,
});

export default GoalContext;
