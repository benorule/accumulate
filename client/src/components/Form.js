import React from "react";
import axios from "axios";
import { Button } from 'react-bulma-components';
import Card from 'react-bulma-components/lib/components/card';


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
            deposit: goalState.deposit,
            _id: goalState._id
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
        <div>
            <Card>
                <h1 class="title">Set your goal</h1>
                <h6 class="subtitle">Click the variable you're unsure about, enter the values for the other two, and click the button to calculate the value of the unknown variable.</h6>
                <div onChange={onChangeValue}>
                    <input class="radio" type="radio" id="savings" name="variable" value="savings" />
                    <label class="checkbox" htmlFor="savings">Savings (Goal)</label>
                    <br />
                    <input class="radio" type="radio" id="timeframe" name="variable" value="timeframe" />
                    <label class="checkbox" htmlFor="timeframe">Timeframe (In Months)</label>
                    <br />
                    <input class="radio" type="radio" id="deposit" name="variable" value="deposit" />
                    <label class="checkbox" htmlFor="deposit">Deposit (Monthly)</label>
                </div>
                <form>
                    {goalState.value !== "savings" ? <input class="input is-primary" placeholder="savings" onChange={handleInputChange} type="number" id="savings" name="savings" /> : <div></div>}
                    {goalState.value !== "timeframe" ? <input class="input is-primary" placeholder="timeframe" onChange={handleInputChange} type="number" id="timeframe" name="timeframe" /> : <div></div>}
                    {goalState.value !== "deposit" ? <input class="input is-primary" placeholder="deposit" onChange={handleInputChange} type="number" id="deposit" name="deposit" /> : <div></div>}
                </form> 
                </Card>
                <Card>             
                <Button color='success' onClick={calculate} className="btn btn-success mx-4">Calculate</Button>
                <Button color='primary' onClick={save} className="btn btn-success mx-4">Save</Button>
                </Card>
        </div>
    );
}


export default Form;
