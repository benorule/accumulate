const express = require("express");
const router = express.Router();

// load mathematical formulas
const validateRegisterInput = require("../../calculation/calculation.js");

// load goal model
const Goal = require("../../models/goal.js")

