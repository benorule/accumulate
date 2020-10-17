const express = require("express");
const router = express.Router();
const db = require("../models/goal");

router.post("/goal", (req, res) => {
    db.Goal.update({
        Savings: { goalState: savings },
        Timeframe: { goalState: timeframe },
        Deposit: { goalState: deposit }
    })
});

module.exports = router;