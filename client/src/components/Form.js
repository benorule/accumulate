import React, { useContext } from "react";
import GoalContext from "../utils/GoalContext";


// make functional component and put calculate into app.js
// keep onchangevalue and form inside
function Form() {
    const { goalState, setGoalState, calculate } = useContext(GoalContext);

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

    return (
        <div className="card">
            <div onChange={onChangeValue}>
                <input type="radio" id="savings" name="variable" value="savings" />
                <label for="savings">Savings (Goal)</label>
                <br />
                <input type="radio" id="timeframe" name="variable" value="timeframe" />
                <label for="timeframe">Timeframe (In Months)</label>
                <br />
                <input type="radio" id="deposit" name="variable" value="deposit" />
                <label for="deposit">Deposit (Monthly)</label>
            </div>
            <form>
                {goalState.value !== "savings" ? <input onChange={handleInputChange} type="number" id="savings" name="savings" /> : <div></div>}
                {goalState.value !== "timeframe" ? <input onChange={handleInputChange} type="number" id="timeframe" name="timeframe" /> : <div></div>}
                {goalState.value !== "deposit" ? <input onChange={handleInputChange} type="number" id="deposit" name="deposit" /> : <div></div>}
                <button className="btn btn-primary" onClick={calculate}>Calculate</button>
            </form>
        </div>
    );
}


export default Form;
