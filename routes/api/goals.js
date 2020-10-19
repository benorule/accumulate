const express = require("express");
const goal = require("../../models/goal.js");
const router = express.Router();
const Goal = require("../../models/goal.js");

router.post("/api/goal/save", (req, res) => {
    console.log(req.body);
    const goal = new Goal(req.body);
    goal.save((err, response) => {
        console.log(response);
        res.json(response);
    });
});

router.get("/api/goal", (req, res) => {
    Goal.find().then((response) => {
        res.json(response);
    });
});


// doesn't work, functions the same as save lol
router.put("/api/goal/update", (req, res) => {
    console.log(req.body);
    Goal.findByIdAndUpdate(req.body._id, req.body).then((err, response) => {
        res.json(response);
    });
})

module.exports = router;