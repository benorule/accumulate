const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    // user information such as username and password here
    // one goal per user, in same schema
    // email: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    savings: {
        type: Number,
    },
    timeframe: {
        type: String,
    },
    deposit: {
        type: String,
    }
});

User = mongoose.model("User", UserSchema);

module.exports = User;