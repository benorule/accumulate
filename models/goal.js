const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
    // user information such as username and password here
    // one goal per user, in same schema
    savings: {
        type: Number,
        required: true
    },
    timeframe: {
        type: String,
        required: true
    },
    deposit: {
        type: String,
        required: true
    }
});
module.exports = Goal = mongoose.model("Goal", GoalSchema);