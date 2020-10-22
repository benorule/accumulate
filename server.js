const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport.js");
const session = require("express-session");
const goals = require("./routes/api/goals");

// constants
const port = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goal", { useNewUrlParser: true });

// set up express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(goals);

app.listen(port, () => console.log(`Server running on port ${port} `))