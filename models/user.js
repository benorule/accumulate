const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// Create Schema
const UserSchema = new Schema({
    // user information such as username and password here
    // one goal per user, in same schema
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
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

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password

UserSchema.pre("save", function (next) {
    console.log(this)
    this.password = bcrypt.hashSync(
        this.password,
        bcrypt.genSaltSync(10),
        null
    );
    next();
});

User = mongoose.model("User", UserSchema);

module.exports = User;