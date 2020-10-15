import React from "react";

function MonthBtns({ changeMonth }) {
  return (
    <div>
      <button onClick={() => changeMonth("lazy")} className="btn btn-danger mx-4">
        Did Not Deposit This Month
      </button>
      <button onClick={() => changeMonth("determined")} className="btn btn-success mx-4">
        Deposited This Month
      </button>
    </div>
  );
}

export default MonthBtns;
