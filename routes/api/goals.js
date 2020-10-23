const express = require("express");
const router = express.Router();
const User = require("../../models/user.js");
const passport = require("../../config/passport")

router.post("/api/goal/save", (req, res) => {
    console.log("/api/goal/save ->" + JSON.stringify(req.body));
    // const goal = new Goal(req.body);
    User.create(req.body, (err, goal) => {
        console.log("Line 10: " + goal);
        res.json(goal);
    });
});

router.post("/api/goal/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user);
    res.json(req.user);
  });


router.post("/api/goal/register", (req, res) => {
    // console.log("/api/goal/register ->" + JSON.stringify(req.body));
    // const goal = new Goal(req.body);
    User.create(req.body, (err, goal) => {
        // console.log("Line 10: " + goal);
        res.redirect(307, "/api/goal/login");
    })
});

router.get("/api/goal", (req, res) => {
    User.find().then((response) => {
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