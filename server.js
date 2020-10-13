const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const goals = require("./routes/api/goals");

const app = express();

// body-parser middleware to handle HTTP POST requests 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// configure database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

// routes
app.use("/api/users", users);
app.use("/api/goals", goals);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} `))