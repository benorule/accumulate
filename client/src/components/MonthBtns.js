import React from "react";

function MonthBtns({ changeMonth, save, goalState, update }) {
  return (
    <div className="card">
      <button onClick={() => changeMonth("lazy")} className="btn btn-danger mx-4">
        Did Not Deposit This Month
      </button>
      <button onClick={() => changeMonth("determined")} className="btn btn-success mx-4">
        Deposited This Month
      </button>
      { goalState._id ?
        (<button className="btn btn-primary mx-4" onClick={update}>Update</button>)
        :
        (<button className="btn btn-primary mx-4" onClick={save}>Save</button>)
    }
    </div>
  );
}

export default MonthBtns;
