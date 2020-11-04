import React from "react";
import Button from 'react-bulma-components/lib/components/button';
import Card from 'react-bulma-components/lib/components/card';


function MonthBtns({ changeMonth, save, goalState, update }) {
  return (
    <Card>
      <Button color='success' onClick={() => changeMonth("determined")} className="btn btn-success mx-4">
        Did Deposit This Month
      </Button>
      <Button color='danger' onClick={() => changeMonth("lazy")} className="btn btn-danger mx-4">
        Did Not Deposit This Month
      </Button>
      <Button color='primary' onClick={update}>Update</Button>
    </Card>
  );
}

export default MonthBtns;
