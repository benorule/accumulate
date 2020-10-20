const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport");

const goals = require("./routes/api/goals");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configure database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goal", { useNewUrlParser: true });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(goals);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} `))