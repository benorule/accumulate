import React, { Component } from "react";
import GoalContext from "../utils/GoalContext";


// make functional component and put calculate into app.js
// keep onchangevalue and form inside
class Form extends Component {
    state = {
        value: "deposit",
        savings: 0,
        timeframe: 0,
        deposit: 0
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            ...this.state,
            [name]: parseInt(value)
        });
    };

    calculate = (event) => {
        event.preventDefault();
        if (this.state.value === "deposit") {
            // get user input for savings and time frame
            this.setState({ ...this.state, deposit: this.state.savings / this.state.timeframe });
        }
        else if (this.state.value === "timeframe") {
            // get user input for savings and deposit
            this.setState({ ...this.state, timeframe: this.state.savings / this.state.deposit });
        }
        else {
            // get user input for savings and deposit
            this.setState({ ...this.state, savings: this.state.timeframe * this.state.deposit });
        }
    }

    onChangeValue = (event) => {
        console.log(event.target.value);
        this.setState({ ...this.state, value: event.target.value });
    }

    render() {
        return (
            <GoalContext.Consumer>
                <div onChange={this.onChangeValue}>
                    <input type="radio" id="savings" name="unknown" value="savings" />
                    <label for="savings">Savings (Goal)</label>
                    <br />
                    <input type="radio" id="timeframe" name="unknown" value="timeframe" />
                    <label for="timeframe">Timeframe (In Months)</label>
                    <br />
                    <input type="radio" id="deposit" name="unknown" value="deposit" />
                    <label for="deposit">Deposit (Monthly)</label>
                </div>
                <form>
                    {this.state.value !== "savings" ? <input onChange={this.handleInputChange} type="number" id="savings" name="savings" /> : <div></div>}
                    {this.state.value !== "timeframe" ? <input onChange={this.handleInputChange} type="number" id="timeframe" name="timeframe" /> : <div></div>}
                    {this.state.value !== "deposit" ? <input onChange={this.handleInputChange} type="number" id="deposit" name="deposit" /> : <div></div>}
                    <button className="btn btn-primary" onClick={this.calculate}>Submit</button>
                </form>
            </GoalContext.Consumer>
        );
    }
}

export default Form;
