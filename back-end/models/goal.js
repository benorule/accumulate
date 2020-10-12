const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
    Savings: {
        type: Number,
        required: true
    },
    Timeframe: {
        type: String,
        required: true
    },
    Deposit: {
        type: String,
        required: true
    }
});
module.exports = Goal = mongoose.model("goals", GoalSchema);