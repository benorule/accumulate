import React from "react";
import axios from "axios";

// make functional component and put calculate into app.js
// keep onchangevalue and form inside
function Form({ goalState, setGoalState }) {
    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        setGoalState({
            ...goalState,
            [name]: parseInt(value)
        });
    };

    const onChangeValue = (event) => {
        console.log(event.target.value);
        setGoalState({ ...goalState, value: event.target.value });
    }

    const save = (event) => {
        event.preventDefault();
        axios.post("/api/goal/save", {
            savings: goalState.savings,
            timeframe: goalState.timeframe,
            deposit: goalState.deposit
        }).then((res) => {
            console.log(res);
        });
    }

    const calculate = (event) => {
        event.preventDefault();
        if (goalState.value === "deposit") {
          // get user input for savings and time frame
          setGoalState({ ...goalState, deposit: goalState.savings / goalState.timeframe });
        }
        else if (goalState.value === "timeframe") {
          // get user input for savings and deposit
          setGoalState({ ...goalState, timeframe: goalState.savings / goalState.deposit });
        }
        else {
          // get user input for savings and deposit
          setGoalState({ ...goalState, savings: goalState.timeframe * goalState.deposit });
        }
      }

    return (
        <div className="card">
            <div onChange={onChangeValue}>
                <input type="radio" id="savings" name="variable" value="savings" />
                <label htmlFor="savings">Savings (Goal)</label>
                <br />
                <input type="radio" id="timeframe" name="variable" value="timeframe" />
                <label htmlFor="timeframe">Timeframe (In Months)</label>
                <br />
                <input type="radio" id="deposit" name="variable" value="deposit" />
                <label htmlFor="deposit">Deposit (Monthly)</label>
            </div>
            <form>
                {goalState.value !== "savings" ? <input onChange={handleInputChange} type="number" id="savings" name="savings" /> : <div></div>}
                {goalState.value !== "timeframe" ? <input onChange={handleInputChange} type="number" id="timeframe" name="timeframe" /> : <div></div>}
                {goalState.value !== "deposit" ? <input onChange={handleInputChange} type="number" id="deposit" name="deposit" /> : <div></div>}
                <button className="btn btn-primary" onClick={calculate}>Calculate</button>
                <button className="btn btn-primary mx-4" onClick={save}>Save</button>
            </form>
        </div>
    );
}


export default Form;
